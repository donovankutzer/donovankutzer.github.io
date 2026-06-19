'use client';

import { useState, useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { Select, Container, SimpleGrid, Paper, Stack, Flex, Group, Title, Text, Button } from '@mantine/core';

// Register only the required Chart.js elements for a lightweight bundle
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

const NAMES = {
  vercel: 'Vercel Edge Functions',
  aws: 'AWS Lambda',
  cloudflare: 'Cloudflare Workers',
  azure: 'Azure Functions',
  gcp: 'Google Cloud Run'
};

const COLORS = {
  vercel: '#a78bfa',
  aws: '#f87171',
  cloudflare: '#fbbf24',
  azure: '#3b82f6',
  gcp: '#06b6d4'
};

// Helper metrics functions
const getDuration = (intensity: string) => {
  return intensity === 'light' ? 0.15 : intensity === 'medium' ? 0.6 : 2.5; // in seconds
};

const getMemory = (intensity: string) => {
  return intensity === 'light' ? 0.25 : intensity === 'medium' ? 0.5 : 1.0; // in GB
};

/**
 * Estimate monthly bill for a given provider
 */
function estimateBill(provider: string, reqM: number, intensity: string, bandwidthGB: number) {
  const d = getDuration(intensity);
  const m = getMemory(intensity);
  const totalRequests = reqM * 1e6;

  if (provider === 'vercel') {
    const invoices = Math.max(0, reqM - 10) * 0.60;
    const cpu = ((totalRequests * d * 0.4) / 3600) * 0.128;
    const memory = ((totalRequests * d * m) / 3600) * 0.0106;
    const bandwidth = Math.max(0, bandwidthGB - 1000) * 0.15;
    return Math.max(20, invoices + cpu + memory + bandwidth);
  }

  if (provider === 'aws') {
    const invoices = Math.max(0, reqM - 1) * 0.20;
    const compute = Math.max(0, totalRequests * d * m - 400000) * 0.0000166667;
    const apigw = reqM * 3.50;
    const bandwidth = Math.max(0, bandwidthGB - 100) * 0.09;
    const logs = (totalRequests * 5000 / 1e9) * 0.50;
    return Math.max(5, invoices + compute + apigw + bandwidth + logs);
  }

  if (provider === 'cloudflare') {
    const requestsOverage = Math.max(0, reqM - 10) * 0.30;
    const cpuOverage = Math.max(0, totalRequests * d * 1000 - 30e6) * 0.02 / 1e6;
    return Math.max(5, 5 + requestsOverage + cpuOverage);
  }

  if (provider === 'azure') {
    const executions = Math.max(0, reqM - 1) * 0.20;
    const compute = Math.max(0, totalRequests * d * m - 400000) * 0.000016;
    const bandwidth = Math.max(0, bandwidthGB - 100) * 0.087;
    return Math.max(5, executions + compute + bandwidth);
  }

  if (provider === 'gcp') {
    const cpu = Math.max(0, totalRequests * d - 180000) * 0.000024;
    const memory = Math.max(0, totalRequests * d * m - 360000) * 0.0000025;
    const requests = Math.max(0, reqM - 2) * 0.40;
    const bandwidth = Math.max(0, bandwidthGB - 1) * 0.12;
    return Math.max(5, cpu + memory + requests + bandwidth);
  }

  return 0;
}

const formatCurrency = (amount: number) => '$' + Math.round(amount).toLocaleString();

export default function Calculator() {
  const [provider, setProvider] = useState('cloudflare');
  const [reqM, setReqM] = useState(750);
  const [intensity, setIntensity] = useState('medium');
  const [bandwidthGB, setBandwidthGB] = useState(15000);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const selectedProviderBill = estimateBill(provider, reqM, intensity, bandwidthGB);
  const cheapestBill = Math.min(...['vercel', 'aws', 'cloudflare', 'azure', 'gcp'].map(p => estimateBill(p, reqM, intensity, bandwidthGB)));
  const flatRate = Math.max(cheapestBill * 0.775, 2500);
  const savings = selectedProviderBill - flatRate;

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current;
    const providerShortName = NAMES[provider].split(' ')[0];
    const labels = [providerShortName, 'DataVec'];
    const data = [Math.round(selectedProviderBill), Math.round(flatRate)];
    const bgColors = [COLORS[provider], '#00f5a0'];

    if (chartInstanceRef.current) {
      chartInstanceRef.current.data.labels = labels;
      chartInstanceRef.current.data.datasets[0].data = data;
      chartInstanceRef.current.data.datasets[0].backgroundColor = bgColors;
      chartInstanceRef.current.update();
    } else {
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: bgColors,
            borderRadius: 4,
            borderSkipped: false,
            barPercentage: 0.55
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#0f1115',
              titleColor: '#f3f4f6',
              bodyColor: '#a78bfa',
              borderColor: 'rgba(255, 255, 255, 0.08)',
              borderWidth: 1,
              titleFont: { family: 'var(--font-mono)', size: 11 },
              bodyFont: { family: 'var(--font-mono)', size: 12, weight: 'bold' },
              callbacks: {
                label: (context) => ' ' + formatCurrency(context.parsed.y) + '/mo'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                font: { family: 'var(--font-mono)', size: 12, weight: 600 },
                color: '#8a8f98',
                maxRotation: 0
              },
              grid: { display: false },
              border: { display: false }
            },
            y: {
              ticks: {
                font: { family: 'var(--font-mono)', size: 11 },
                color: '#4b5563',
                callback: (value) => {
                  const num = typeof value === 'number' ? value : parseFloat(value);
                  return num >= 1000 ? '$' + Math.round(num / 1000) + 'K' : '$' + num;
                }
              },
              grid: { color: 'rgba(255, 255, 255, 0.04)' },
              border: { display: false }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [provider, reqM, intensity, bandwidthGB, selectedProviderBill, flatRate]);

  const selectStyles = {
    root: { display: 'flex', flexDirection: 'column' as const, gap: '8px' },
    label: {
      fontFamily: 'var(--font-mono)',
      fontSize: '11px',
      fontWeight: 700,
      color: 'var(--text-muted)',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.08em'
    },
    input: {
      background: 'var(--surface)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-md)',
      color: 'var(--text)',
      fontFamily: 'var(--font-sans)',
      fontSize: '14.5px',
      height: '46px',
      padding: '12px',
      outline: 'none',
      transition: 'var(--transition)'
    },
    dropdown: {
      background: '#202738',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--r-md)'
    },
    option: {
      fontFamily: 'var(--font-sans)',
      fontSize: '14px',
      color: 'var(--text-muted)',
      padding: '10px 12px',
      transition: 'var(--transition)'
    }
  };

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="calc">
      <Container size="xl">
        <div className="section-header">
          <span className="sec-eye">
            Cost Optimization
          </span>
          <Title order={2}>
            Estimate your enterprise hosting <em className="em2" style={{ color: 'var(--accent-mint)', fontStyle: 'normal' }}>savings margins</em>
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
            Configure your monthly application footprint metrics below. See a transparent comparative estimate detailing the savings compiled native infrastructure yields over utility-metered serverless clouds.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          {/* Controls Box */}
          <Paper
            p="xl"
            style={{
              background: 'var(--bg-grid)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <Select
              label="Current Edge Provider"
              value={provider}
              onChange={(val) => setProvider(val || 'cloudflare')}
              data={[
                { value: 'cloudflare', label: 'Cloudflare Workers' },
                { value: 'vercel', label: 'Vercel Edge Functions' },
                { value: 'aws', label: 'AWS Lambda' },
                { value: 'azure', label: 'Azure Functions' },
                { value: 'gcp', label: 'Google Cloud Run' }
              ]}
              styles={selectStyles}
              allowDeselect={false}
            />

            <Select
              label="Est. Monthly Requests"
              value={String(reqM)}
              onChange={(val) => setReqM(parseFloat(val || '750'))}
              data={[
                { value: '750', label: '500 Million – 1 Billion' },
                { value: '2500', label: '1 Billion – 5 Billion' },
                { value: '7500', label: '5 Billion+' }
              ]}
              styles={selectStyles}
              allowDeselect={false}
            />

            <Select
              label="Average Compute Footprint"
              value={intensity}
              onChange={(val) => setIntensity(val || 'medium')}
              data={[
                { value: 'light', label: 'Light: simple APIs, routing, auth' },
                { value: 'medium', label: 'Medium: REST gateways, active routing' },
                { value: 'heavy', label: 'Heavy: generative streams, AI nodes' }
              ]}
              styles={selectStyles}
              allowDeselect={false}
            />

            <Select
              label="Monthly Network Egress"
              value={String(bandwidthGB)}
              onChange={(val) => setBandwidthGB(parseFloat(val || '15000'))}
              data={[
                { value: '15000', label: '10 – 25 TB Bandwidth' },
                { value: '37500', label: '25 – 50 TB Bandwidth' },
                { value: '75000', label: '50 TB+ Bandwidth' }
              ]}
              styles={selectStyles}
              allowDeselect={false}
            />
          </Paper>

          {/* Results Summary & Interactive Graph */}
          <Paper
            p="xl"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            <SimpleGrid cols={2} spacing="md">
              <Paper
                p="md"
                style={{
                  background: 'rgba(255,255,255,0.01)',
                  border: '1px solid var(--border-strong)',
                  borderRadius: 'var(--r-md)'
                }}
              >
                <Text size="xxs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  {NAMES[provider].split(' ')[0]} Bill
                </Text>
                <Text size="xl" fw={800} mt={4} c="white">
                  {formatCurrency(selectedProviderBill)}
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--text-muted)' }}>/mo</span>
                </Text>
                <Text size="xxs" c="dimmed" mt={4}>Metered utility pricing</Text>
              </Paper>

              <Paper
                p="md"
                style={{
                  background: 'rgba(16, 185, 129, 0.03)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: 'var(--r-md)'
                }}
              >
                <Text size="xxs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>
                  DataVec Flat Rate
                </Text>
                <Text size="xl" fw={800} mt={4} c="var(--accent-mint)">
                  {formatCurrency(flatRate)}
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(0, 245, 160, 0.7)' }}>/mo</span>
                </Text>
                <Text
                  size="xxs"
                  c={savings > 0 ? 'var(--accent-mint)' : 'var(--text-dim)'}
                  fw={savings > 0 ? 600 : 400}
                  mt={4}
                >
                  {savings > 0
                    ? `Saves ${formatCurrency(savings)}/month`
                    : 'Guaranteed flat rate'
                  }
                </Text>
              </Paper>
            </SimpleGrid>

            {/* Savings Bar Chart */}
            <div style={{ height: '220px', position: 'relative', width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '16px' }}>
              <canvas ref={canvasRef} id="chart"></canvas>
            </div>

            <Text size="xxs" c="dimmed" style={{ fontFamily: 'var(--font-mono)', lineHeight: 1.45 }}>
              Calculations utilize verified May 2026 published vendor rates. AWS Lambda includes API Gateway overhead. Cloudflare features zero egress. DataVec enterprise baseline floor starts at $2,500/mo.
            </Text>

            <Group gap="sm">
              <Button
                component="a"
                href="mailto:hello@datavec.com?subject=DataVec Enterprise pricing savings quote"
                size="md"
                style={{
                  background: 'var(--accent)',
                  color: 'white',
                  fontWeight: 600,
                  flex: 1
                }}
              >
                Get a custom quote
              </Button>
              <Button
                component="a"
                href="#pricing"
                variant="outline"
                size="md"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'white',
                  fontWeight: 600,
                  background: 'rgba(255,255,255,0.01)',
                  flex: 1
                }}
              >
                View standard plans
              </Button>
            </Group>

            <Text size="xxs" c="dimmed" style={{ textAlign: 'center' }}>
              Serving under 500M operations/month? Our standard <a href="#pricing" style={{ color: 'var(--accent-mint)', fontWeight: 600 }}>Business Plan at $149/mo</a> has you fully covered with zero utility metering.
            </Text>
          </Paper>
        </SimpleGrid>
      </Container>
    </section>
  );
}
