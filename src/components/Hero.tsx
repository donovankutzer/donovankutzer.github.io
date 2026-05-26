'use client';

import { useState } from 'react';
import { Container, Grid, SimpleGrid, Title, Text, Button, Group, Stack, Paper, SegmentedControl, Flex } from '@mantine/core';

type WorkloadType = 'routing' | 'crypto' | 'sse';

const BENCHMARKS = {
  routing: {
    title: "Next.js Static Routing",
    sub: "Processes a complex nested endpoint router with custom JSON payload returns.",
    data: [
      { name: "DataVec compiled C", val: "0.08ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "0.95ms", pct: 12, tag: "de" },
      { name: "Cloudflare Workers", val: "1.15ms", pct: 8, tag: "cf" },
      { name: "Vercel Edge", val: "12.40ms", pct: 2, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "45.20ms", pct: 0.5, tag: "aw" }
    ],
    winner: "Compiling JavaScript AST to C stateful coroutines yields direct machine execution speed."
  },
  crypto: {
    title: "JWT Token Verification",
    sub: "Decodes, parses, and cryptographically signs high-volume OAuth signatures.",
    data: [
      { name: "DataVec compiled C", val: "0.12ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "1.48ms", pct: 11, tag: "de" },
      { name: "Cloudflare Workers", val: "1.84ms", pct: 8, tag: "cf" },
      { name: "Vercel Edge", val: "18.20ms", pct: 1.5, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "62.10ms", pct: 0.5, tag: "aw" }
    ],
    winner: "Native C crypto APIs execute inside isolated micro-heaps with zero lock overhead."
  },
  sse: {
    title: "SSE AI Streaming Payload",
    sub: "Maintains concurrent chunked transfer streams optimized for generative outputs.",
    data: [
      { name: "DataVec compiled C", val: "4.80ms", pct: 100, tag: "dv" },
      { name: "Deno Deploy", val: "24.20ms", pct: 20, tag: "de" },
      { name: "Cloudflare Workers", val: "28.50ms", pct: 17, tag: "cf" },
      { name: "Vercel Edge", val: "128.40ms", pct: 4, tag: "ve" },
      { name: "AWS Lambda (Node.js)", val: "340.50ms", pct: 1.4, tag: "aw" }
    ],
    winner: "Stackless coroutines coordinate I/O stream buffers without memory GC pauses."
  }
};

export default function Hero() {
  const [activeWorkload, setActiveWorkload] = useState<WorkloadType>('routing');
  const current = BENCHMARKS[activeWorkload];

  return (
    <section style={{ padding: '80px 0 100px', position: 'relative', zIndex: 1 }}>
      <Container size="xl">
        <Grid gap={60} align="center">
          {/* Left copy */}
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Stack gap="xl">
            <div className="eyebrow" style={{ alignSelf: 'flex-start' }}>
              <span className="eyebrow-badge">DataVec</span>
              <span className="eyebrow-sep"></span>
              <span className="eyebrow-text">Compiled Runtime · M:N Scheduling · Flat Rate</span>
            </div>
            
            <Stack gap="md">
              <Title 
                order={1} 
                style={{ 
                  fontSize: '44px', 
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: '-0.02em'
                }}
              >
                <span className="c1" style={{ color: 'var(--text)' }}>JavaScript that runs like </span>
                <span className="c2" style={{ color: 'var(--accent-mint)' }}>C</span>
              </Title>
              
              <Text size="lg" c="dimmed" style={{ lineHeight: 1.6 }}>
                A high-performance server alternative for teams currently on Cloudflare Workers, Vercel Edge, or Deno. No garbage collector, zero cold starts, and one transparent flat monthly rate.
              </Text>
            </Stack>

            <Paper 
              p="md" 
              style={{ 
                background: 'rgba(99, 102, 241, 0.04)', 
                borderColor: 'var(--border)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start'
              }}
            >
              <svg 
                viewBox="0 0 24 24" 
                aria-hidden="true" 
                style={{ width: '20px', height: '20px', stroke: 'var(--accent)', strokeWidth: 2, fill: 'none', flexShrink: 0, marginTop: '2px' }}
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <Text size="sm" c="dimmed">
                Drop-in compatible with standard Web Workers, Next.js, and static site APIs. Built on native coroutine scheduling for massive vertical scaling.
              </Text>
            </Paper>

            <Group gap="md">
              <Button 
                component="a" 
                href="#pricing" 
                size="lg" 
                style={{ 
                  background: 'var(--accent)', 
                  color: 'white',
                  fontWeight: 600,
                  padding: '0 28px',
                  borderRadius: 'var(--r-md)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                Start for $19/month
              </Button>
              <Button 
                component="a" 
                href="#calc" 
                variant="outline" 
                size="lg"
                style={{ 
                  borderColor: 'var(--border-strong)',
                  color: 'var(--text)',
                  fontWeight: 600,
                  padding: '0 28px',
                  borderRadius: 'var(--r-md)',
                  background: 'rgba(255,255,255,0.01)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0
                }}
              >
                Compare server savings
              </Button>
            </Group>

            <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--font-mono)' }}>
              We never charge for requests or metered CPU time. Flat rates locked forever.
            </Text>
          </Stack>
        </Grid.Col>
          
          {/* Right interactive benchmarks */}
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="lg" w="100%">
            <Paper 
              p="xl" 
              style={{ 
                background: 'var(--surface)', 
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-lg)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              {/* Benchmark Header */}
              <Flex 
                direction="column" 
                gap="md"
                style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px', marginBottom: '16px' }}
              >
                <Stack gap={4}>
                  <Title order={3} style={{ fontSize: '17px', fontWeight: 800 }}>
                    {current.title}
                  </Title>
                  <Text size="xs" c="dimmed">
                    {current.sub}
                  </Text>
                </Stack>
                
                <SegmentedControl
                  value={activeWorkload}
                  onChange={(val) => setActiveWorkload(val as WorkloadType)}
                  data={[
                    { label: 'Static Routing', value: 'routing' },
                    { label: 'JWT Verification', value: 'crypto' },
                    { label: 'SSE AI Streaming', value: 'sse' }
                  ]}
                  fullWidth
                  styles={{
                    root: { background: 'rgba(0, 0, 0, 0.25)', border: '1px solid var(--border-strong)', padding: '4px', borderRadius: 'var(--r-md)' },
                    indicator: { background: 'var(--accent)' },
                    control: { color: 'var(--text-muted)' },
                    label: {
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)',
                      padding: '8px 10px',
                      whiteSpace: 'nowrap'
                    }
                  }}
                />
              </Flex>

              {/* Benchmark Graph */}
              <Stack gap="md" py="xs">
                {current.data.map((row) => {
                  const isWinner = row.tag === 'dv';
                  return (
                    <SimpleGrid 
                      key={row.name} 
                      cols={3} 
                      spacing="md" 
                      style={{ 
                        gridTemplateColumns: '150px 1fr 60px', 
                        alignItems: 'center',
                        background: isWinner ? 'rgba(16, 185, 129, 0.03)' : 'transparent',
                        padding: isWinner ? '6px 8px' : '0 8px',
                        borderRadius: 'var(--r-sm)',
                        border: isWinner ? '1px dashed rgba(16, 185, 129, 0.2)' : '1px solid transparent'
                      }}
                    >
                      <Group gap="xs" style={{ whiteSpace: 'nowrap' }}>
                        <span className={`benchmark-dot-tag ${row.tag}`} />
                        <Text size="xs" fw={isWinner ? 700 : 500} c={isWinner ? 'white' : 'dimmed'}>
                          {row.name}
                        </Text>
                      </Group>
                      
                      <div className="benchmark-bar-container" style={{ height: '16px', background: 'rgba(255,255,255,0.02)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div
                          className={`benchmark-bar ${row.tag}`}
                          style={{ 
                            width: `${row.pct}%`, 
                            height: '100%', 
                            background: isWinner ? 'var(--accent-mint)' : 'var(--border-strong)',
                            borderRadius: '4px',
                            transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                          }}
                        />
                      </div>
                      
                      <Text size="xs" fw={700} c={isWinner ? 'var(--accent-mint)' : 'dimmed'} ta="right" style={{ fontFamily: 'var(--font-mono)' }}>
                        {row.val}
                      </Text>
                    </SimpleGrid>
                  );
                })}
              </Stack>

              {/* Benchmark Footer */}
              <Paper 
                p="xs" 
                mt="md"
                style={{ 
                  background: 'rgba(255,255,255,0.02)', 
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-sm)'
                }}
              >
                <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                  {current.winner}
                </Text>
              </Paper>
            </Paper>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  </section>
  );
}
