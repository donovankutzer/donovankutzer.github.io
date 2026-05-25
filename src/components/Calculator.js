'use client';

import { useState, useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

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
  vercel: '#BA7517',
  aws: '#E24B4A',
  cloudflare: '#f77f00',
  azure: '#185FA5',
  gcp: '#534AB7'
};

// Helper metrics functions
const getDuration = (intensity) => {
  return intensity === 'light' ? 0.15 : intensity === 'medium' ? 0.6 : 2.5; // in seconds
};

const getMemory = (intensity) => {
  return intensity === 'light' ? 0.25 : intensity === 'medium' ? 0.5 : 1.0; // in GB
};

/**
 * Estimate monthly bill for a given provider
 */
function estimateBill(provider, reqM, intensity, bandwidthGB) {
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

// Format currency helper
const formatCurrency = (amount) => '$' + Math.round(amount).toLocaleString();

export default function Calculator() {
  const [provider, setProvider] = useState('cloudflare');
  const [reqM, setReqM] = useState(750);
  const [intensity, setIntensity] = useState('medium');
  const [bandwidthGB, setBandwidthGB] = useState(15000);

  const canvasRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Perform bill estimations
  const providers = ['vercel', 'aws', 'cloudflare', 'azure', 'gcp'];
  const bills = providers.map(p => estimateBill(p, reqM, intensity, bandwidthGB));
  const cheapestBill = Math.min(...bills);
  
  // Flat rate is 22.5% below the cheapest provider, floor of $2,500
  const flatRate = Math.max(cheapestBill * 0.775, 2500);
  
  const selectedProviderBill = estimateBill(provider, reqM, intensity, bandwidthGB);
  const savings = selectedProviderBill - flatRate;

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current;
    const labels = [NAMES[provider].split(' ')[0], 'DataVec'];
    const data = [Math.round(selectedProviderBill), Math.round(flatRate)];
    const bgColors = [COLORS[provider], '#00e090'];

    if (chartInstanceRef.current) {
      // Update existing chart
      chartInstanceRef.current.data.labels = labels;
      chartInstanceRef.current.data.datasets[0].data = data;
      chartInstanceRef.current.data.datasets[0].backgroundColor = bgColors;
      chartInstanceRef.current.update();
    } else {
      // Create new chart instance
      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [{
            data,
            backgroundColor: bgColors,
            borderRadius: 6,
            borderSkipped: false
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              callbacks: {
                label: (context) => ' ' + formatCurrency(context.parsed.y) + '/mo'
              }
            }
          },
          scales: {
            x: {
              ticks: {
                font: { size: 13, weight: '500' },
                color: '#d8eaf8',
                maxRotation: 0
              },
              grid: { display: false },
              border: { display: false }
            },
            y: {
              ticks: {
                font: { size: 11 },
                color: '#6a8fae',
                callback: (value) => value >= 1000 ? '$' + Math.round(value / 1000) + 'K' : '$' + value
              },
              grid: { color: 'rgba(23, 32, 53, 0.4)' },
              border: { display: false }
            }
          }
        }
      });
    }

    // Cleanup on destroy
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [provider, reqM, intensity, bandwidthGB, selectedProviderBill, flatRate]);

  return (
    <section className="calc z" id="calc">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Enterprise pricing calculator</span>
          <h2>Calculate your enterprise savings compared<br /><em>to traditional providers</em></h2>
          <p className="sec-sub">Select your current cloud provider and configure your estimated resource footprint to see a
            direct cost comparison against our flat-rate alternatives. If your monthly usage falls below 500 million
            requests, our standard Business tier offers complete coverage without any complex utility calculations.</p>
        </div>
        <div className="calc-wrap">
          <div className="calc-controls">
            <div className="cf">
              <label htmlFor="provider">Compare against</label>
              <select 
                id="provider" 
                value={provider} 
                onChange={(e) => setProvider(e.target.value)}
              >
                <option value="cloudflare">Cloudflare Workers</option>
                <option value="vercel">Vercel Edge Functions</option>
                <option value="aws">AWS Lambda</option>
                <option value="azure">Azure Functions</option>
                <option value="gcp">Google Cloud Run</option>
              </select>
            </div>
            <div className="cf">
              <label htmlFor="req">Monthly requests</label>
              <select 
                id="req" 
                value={reqM} 
                onChange={(e) => setReqM(parseFloat(e.target.value))}
              >
                <option value="750">500M – 1 billion</option>
                <option value="2500">1B – 5 billion</option>
                <option value="7500">5B+</option>
              </select>
            </div>
            <div className="cf">
              <label htmlFor="compute">Compute intensity</label>
              <select 
                id="compute" 
                value={intensity} 
                onChange={(e) => setIntensity(e.target.value)}
              >
                <option value="light">Light: auth, DB reads, simple APIs</option>
                <option value="medium">Medium: REST APIs, transforms</option>
                <option value="heavy">Heavy: AI inference, image and video</option>
              </select>
            </div>
            <div className="cf">
              <label htmlFor="bw">Monthly bandwidth</label>
              <select 
                id="bw" 
                value={bandwidthGB} 
                onChange={(e) => setBandwidthGB(parseFloat(e.target.value))}
              >
                <option value="15000">10 – 25 TB</option>
                <option value="37500">25 – 50 TB</option>
                <option value="75000">50 TB+</option>
              </select>
            </div>
          </div>
          <div className="calc-results">
            <div className="calc-summary-grid">
              <div className="calc-card">
                <div className="calc-card-label" id="compLabel">
                  {NAMES[provider]} Est. Bill
                </div>
                <div className="calc-card-value" id="compBill">
                  {formatCurrency(selectedProviderBill)}/mo
                </div>
                <div className="calc-card-note">per month</div>
              </div>
              <div className="calc-card-accent">
                <div className="calc-card-label">DataVec Flat Rate</div>
                <div className="calc-card-value" id="flatRate">
                  {formatCurrency(flatRate)}/mo
                </div>
                <div className="calc-card-note" id="savingsLine" style={{ 
                  color: savings > 0 ? 'var(--accent2)' : 'var(--text2)' 
                }}>
                  {savings > 0 
                    ? `You save ${formatCurrency(savings)}/mo vs ${NAMES[provider].split(' ')[0]}` 
                    : 'DataVec provides stable enterprise flat rate billing'
                  }
                </div>
              </div>
            </div>
            <div className="chart-wrap">
              <canvas ref={canvasRef} id="chart"></canvas>
            </div>
            <p className="calc-note">Estimates use verified May 2026 published pricing. AWS includes API Gateway and
              CloudWatch charges. Cloudflare has no egress fees. DataVec flat rate minimum $2,500/mo.</p>
            <div className="calc-actions">
              <a href="mailto:hello@datavec.com?subject=DataVec Enterprise pricing inquiry" className="btn-primary">Get a
                precise quote</a>
              <a href="#pricing" className="btn-ghost">View standard plans</a>
            </div>
            <p className="calc-fine">Running under 500M requests/month? The <a href="#pricing">Business plan at $149/mo</a>
              covers you with zero metering.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
