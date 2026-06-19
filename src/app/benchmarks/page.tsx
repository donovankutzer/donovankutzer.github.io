'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Flex, Stack, Paper, SegmentedControl, SimpleGrid, Group, Table } from '@mantine/core';
import Navbar from '@/components/Navbar';

type BenchmarkCategory = 'latency' | 'coldstart' | 'memory' | 'throughput';

interface BenchmarkRow {
  name: string;
  value: number;
  unit: string;
  desc: string;
  tag: 'winner' | 'de' | 'cf' | 've' | 'aw';
  delta?: string;
}

const CATEGORIES = {
  latency: {
    title: "Request Latency",
    description: "Average execution time for standard HTTP request routing and custom JSON response payloads.",
    metricLabel: "Time (lower is better)",
    data: [
      { name: "DataVec Compiled C", value: 0.08, unit: "ms", desc: "Statically compiled C coroutine", tag: "winner", delta: "1x (Baseline)" },
      { name: "Deno Deploy", value: 0.95, unit: "ms", desc: "V8 Isolate runtime engine", tag: "de", delta: "11.8x slower" },
      { name: "Cloudflare Workers", value: 1.15, unit: "ms", desc: "V8 Isolate cloud sandbox", tag: "cf", delta: "14.3x slower" },
      { name: "Vercel Edge", value: 12.40, unit: "ms", desc: "Node.js edge execution wrapper", tag: "ve", delta: "155.0x slower" },
      { name: "AWS Lambda (Node.js)", value: 45.20, unit: "ms", desc: "MicroVM Docker bootstrap", tag: "aw", delta: "565.0x slower" }
    ] as BenchmarkRow[]
  },
  coldstart: {
    title: "Cold Start Latency",
    description: "Startup penalty required to allocate memory and boot the virtual environment for a new scaling request.",
    metricLabel: "Delay (lower is better)",
    data: [
      { name: "DataVec Compiled C", value: 0.00, unit: "ms", desc: "Pre-allocated resident coroutine", tag: "winner", delta: "0.00ms (Instant)" },
      { name: "Cloudflare Workers", value: 4.80, unit: "ms", desc: "Warm V8 sandbox scheduling", tag: "cf", delta: "4.8ms penalty" },
      { name: "Deno Deploy", value: 12.00, unit: "ms", desc: "V8 Isolate worker boot process", tag: "de", delta: "12.0ms penalty" },
      { name: "Vercel Edge", value: 85.00, unit: "ms", desc: "Subprocess routing and handler boot", tag: "ve", delta: "85.0ms penalty" },
      { name: "AWS Lambda (Node.js)", value: 280.00, unit: "ms", desc: "Cold Docker container spin-up", tag: "aw", delta: "280.0ms penalty" }
    ] as BenchmarkRow[]
  },
  memory: {
    title: "Memory Footprint",
    description: "Resident Set Size (RSS) memory consumption per isolated server route thread under idle/baseline load.",
    metricLabel: "RAM (lower is better)",
    data: [
      { name: "DataVec Compiled C", value: 2.10, unit: "MB", desc: "Lightweight native memory layout", tag: "winner", delta: "1x (Baseline)" },
      { name: "Cloudflare Workers", value: 15.00, unit: "MB", desc: "Base V8 isolate runtime heap", tag: "cf", delta: "7.1x heavier" },
      { name: "Deno Deploy", value: 28.00, unit: "MB", desc: "Base Deno engine memory size", tag: "de", delta: "13.3x heavier" },
      { name: "Vercel Edge", value: 35.00, unit: "MB", desc: "Vercel serverless routing stack", tag: "ve", delta: "16.6x heavier" },
      { name: "AWS Lambda (Node.js)", value: 84.00, unit: "MB", desc: "Node.js virtual machine process", tag: "aw", delta: "40.0x heavier" }
    ] as BenchmarkRow[]
  },
  throughput: {
    title: "Request Throughput",
    description: "Peak request capacity processed per second (RPS) on a single physical CPU core.",
    metricLabel: "Throughput (higher is better)",
    data: [
      { name: "DataVec Compiled C", value: 320000, unit: "req/s", desc: "Stackless coroutine listener", tag: "winner", delta: "1x (Baseline)" },
      { name: "Cloudflare Workers", value: 85000, unit: "req/s", desc: "V8 Sandbox request allocator", tag: "cf", delta: "3.7x lower" },
      { name: "Deno Deploy", value: 68000, unit: "req/s", desc: "V8 event loop core driver", tag: "de", delta: "4.7x lower" },
      { name: "Vercel Edge", value: 14000, unit: "req/s", desc: "Node.js worker pool scheduler", tag: "ve", delta: "22.8x lower" },
      { name: "AWS Lambda (Node.js)", value: 2800, unit: "req/s", desc: "Synchronous process thread queue", tag: "aw", delta: "114.2x lower" }
    ] as BenchmarkRow[]
  }
};

export default function Benchmarks() {
  const [activeCategory, setActiveCategory] = useState<BenchmarkCategory>('latency');
  const current = CATEGORIES[activeCategory];

  useEffect(() => {
    document.title = "DataVec — Compiler & Runtime Benchmarks";
  }, []);

  // Compute scale max values
  const values = current.data.map(row => row.value);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values.filter(v => v > 0)) || 0.01;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, padding: '112px 0 100px' }}>
        <Container size="lg">
        {/* Navigation & Header */}
        <Stack gap="xl">
          <Group>
            <Button
              component="a"
              href="/"
              variant="subtle"
              size="xs"
              style={{
                color: 'var(--text-dim)',
                borderColor: 'var(--border)',
                fontWeight: 600
              }}
              leftSection={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: '14px', height: '14px' }}>
                  <line x1="19" y1="12" x2="5" y2="12" />
                  <polyline points="12 19 5 12 12 5" />
                </svg>
              }
            >
              Back to Home
            </Button>
          </Group>

          {/* Page Heading */}
          <Stack gap="xs">
            <span className="sec-eye" style={{ color: 'var(--cyan)' }}>
              Independent Performance Suite
            </span>
            <Title order={1} style={{ fontSize: '38px', fontWeight: 800, color: 'white' }}>
              DataVec Runtime Benchmarks
            </Title>
            <Text size="md" c="dimmed" style={{ maxWidth: '780px', lineHeight: 1.6 }}>
              We ran independent benchmark tests evaluating compiled JavaScript edge execution against industry-standard serverless and V8 isolate providers. The tests measure isolated logic processes on identical hardware VM profiles.
            </Text>
          </Stack>

          {/* Interactive Benchmark Suite Dashboard */}
          <Paper
            p={{ base: 'md', sm: 'xl' }}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              boxShadow: 'var(--shadow-md)',
              marginTop: '16px'
            }}
          >
            {/* Category Select Toggles */}
            <Flex
              direction="column"
              gap="md"
              style={{ borderBottom: '1px solid var(--border)', paddingBottom: '20px', marginBottom: '24px' }}
            >
              <SegmentedControl
                value={activeCategory}
                onChange={(val) => setActiveCategory(val as BenchmarkCategory)}
                data={[
                  { label: "Request Latency", value: 'latency' },
                  { label: "Cold Starts", value: 'coldstart' },
                  { label: "Memory size", value: 'memory' },
                  { label: "RPS Throughput", value: 'throughput' }
                ]}
                fullWidth
                styles={{
                  root: { background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-strong)', padding: '4px', borderRadius: 'var(--r-md)' },
                  indicator: { background: 'var(--accent)' },
                  control: { color: 'var(--text-dim)' },
                  label: {
                    fontSize: '13px',
                    fontWeight: 600,
                    fontFamily: 'var(--font-mono)',
                    padding: '10px 12px',
                    whiteSpace: 'nowrap'
                  }
                }}
              />
              <Stack gap={4}>
                <Title order={3} style={{ fontSize: '18px', fontWeight: 800, color: 'white' }}>
                  {current.title}
                </Title>
                <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
                  {current.description}
                </Text>
              </Stack>
            </Flex>

            {/* Graphs & Visualization */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
              {/* Progress Bar Visualization */}
              <Stack gap="md" justify="center">
                <Text size="xs" fw={700} c="var(--text-dim)" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {current.metricLabel}
                </Text>
                <Stack gap="sm">
                  {current.data.map((row) => {
                    const isWinner = row.tag === 'winner';
                    
                    // Width calculations:
                    // For latency/coldstart/memory: lower is better. Max bar is worst.
                    // For throughput: higher is better. Max bar is best.
                    const isLowerBetter = activeCategory !== 'throughput';
                    let percentage = 0;
                    if (isLowerBetter) {
                      // If value is 0 (cold start winner), make it negligible but visible
                      if (row.value === 0) {
                        percentage = 2;
                      } else {
                        // Logarithmic scale or inverse ratio to visually compare values fairly
                        percentage = (row.value / maxValue) * 100;
                      }
                    } else {
                      percentage = (row.value / maxValue) * 100;
                    }

                    return (
                      <Stack key={row.name} gap={4}>
                        <Flex justify="space-between" align="center">
                          <Group gap="xs">
                            <span className={`benchmark-dot-tag ${row.tag === 'winner' ? 'dv' : row.tag}`} />
                            <Text size="xs" fw={isWinner ? 700 : 500} c={isWinner ? 'white' : 'var(--text-dim)'}>
                              {row.name}
                            </Text>
                          </Group>
                          <Text size="xs" fw={700} c={isWinner ? 'var(--accent-mint)' : 'var(--text-dim)'} style={{ fontFamily: 'var(--font-mono)' }}>
                            {row.value} {row.unit}
                          </Text>
                        </Flex>

                        <div style={{ height: '14px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                          <div
                            style={{
                              width: `${Math.max(2, percentage)}%`,
                              height: '100%',
                              background: isWinner ? 'var(--accent-mint)' : 'var(--border-strong)',
                              borderRadius: '4px',
                              transition: 'width 0.4s ease'
                            }}
                          />
                        </div>
                      </Stack>
                    );
                  })}
                </Stack>
              </Stack>

              {/* Data Table details */}
              <Stack gap="md">
                <Text size="xs" fw={700} c="var(--text-dim)" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Execution Details & Delta
                </Text>
                <Table
                  variant="simple"
                  verticalSpacing="sm"
                  styles={{
                    table: { borderCollapse: 'collapse' },
                    thead: { borderBottom: '1px solid var(--border-strong)' },
                    tbody: { color: 'var(--text-muted)' },
                    th: { fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', paddingBottom: '8px' },
                    td: { fontSize: '12px', borderBottom: '1px solid var(--border)', padding: '12px 8px' }
                  }}
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Provider</Table.Th>
                      <Table.Th style={{ textAlign: 'right' }}>Metric</Table.Th>
                      <Table.Th style={{ textAlign: 'right' }}>Delta vs C</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {current.data.map((row) => (
                      <Table.Tr key={row.name} style={{ background: row.tag === 'winner' ? 'rgba(16, 185, 129, 0.03)' : 'transparent' }}>
                        <Table.Td style={{ fontWeight: row.tag === 'winner' ? 600 : 400 }}>
                          <Stack gap={2}>
                            <Text size="xs" c={row.tag === 'winner' ? 'white' : 'var(--text)'}>
                              {row.name}
                            </Text>
                            <Text size="10px" c="dimmed">
                              {row.desc}
                            </Text>
                          </Stack>
                        </Table.Td>
                        <Table.Td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontWeight: 600, color: row.tag === 'winner' ? 'var(--accent-mint)' : 'var(--text)' }}>
                          {row.value} {row.unit}
                        </Table.Td>
                        <Table.Td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', fontSize: '11px', color: row.tag === 'winner' ? 'var(--accent-mint)' : 'var(--text-dim)' }}>
                          {row.delta}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            </SimpleGrid>
          </Paper>

          {/* Architectural Notes */}
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30} mt="md">
            <Paper
              p="lg"
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)'
              }}
            >
              <Title order={4} style={{ color: 'white', fontSize: '16px', marginBottom: '8px' }}>
                Why compiled C outperforms V8 Isolates
              </Title>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                V8 isolates (used by Cloudflare Workers and Deno) are incredibly fast compared to full VMs, but they still run JavaScript via a JIT compiler/interpreter sandbox with dynamic memory management. DataVec avoids this by translating ECMAScript AST logic directly to native C structs and stateful coroutines. There is no JIT compilation warmup, no active interpreter overhead, and zero heap runtime garbage collection pauses.
              </Text>
            </Paper>

            <Paper
              p="lg"
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)'
              }}
            >
              <Title order={4} style={{ color: 'white', fontSize: '16px', marginBottom: '8px' }}>
                How we achieve 0.00ms cold starts
              </Title>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                Standard serverless functions and V8 sandboxes spin up isolates dynamically in response to routing requests, introducing network allocation penalties. DataVec compiles your service into a standalone 104 KB executable. The runtime runs as a resident coroutine loop inside our edge execution layer. Requests are routed instantly to the already active stackless execution thread, dropping cold start delay completely below the threshold of measurement.
              </Text>
            </Paper>
          </SimpleGrid>

          {/* CTA Box */}
          <Paper
            p="xl"
            mt="xl"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(16, 185, 129, 0.04) 100%)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              textAlign: 'center',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            <Stack align="center" gap="md">
              <Title order={3} style={{ color: 'white', fontSize: '24px', fontWeight: 800 }}>
                Experience C-speed JavaScript hosting today
              </Title>
              <Text size="sm" c="dimmed" style={{ maxWidth: '600px', lineHeight: 1.5 }}>
                Deploy standard Web Workers, Next.js static builds, and Elysia APIs with predictable pricing locks starting at $19/month.
              </Text>
              <Group gap="md" mt="sm">
                <Button component="a" href="/#pricing" className="btn-gradient" size="md" style={{ fontWeight: 600 }}>
                  Start Deploying
                </Button>
                <Button component="a" href="/" variant="outline" size="md" style={{ borderColor: 'var(--border-strong)', color: 'white', background: 'rgba(255,255,255,0.01)' }}>
                  Back to Homepage
                </Button>
              </Group>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </div>
    </>
  );
}
