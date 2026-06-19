'use client';

import { useState } from 'react';
import { Container, SimpleGrid, Paper, Tabs, Stack, Flex, Group, Title, Text, Box } from '@mantine/core';

type ScreenType = 'cost' | 'apis' | 'ecosystem';

export default function Pitch() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('cost');

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="runs">
      <Container size="xl">
        <div className="section-header">
          <span className="sec-eye">
            Capability Matrix
          </span>
          <Title order={2}>
            Direct comparison &amp; capabilities showcase
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
            DataVec replaces virtualized serverless runtime layers with compiled execution. Explore our billing, API standard compliance, and supported frameworks below.
          </Text>
        </div>

        <Tabs
          value={activeScreen}
          onChange={(val) => setActiveScreen(val as ScreenType)}
          variant="unstyled"
          className="responsive-app-tabs pitch-tabs"
        >
          {/* Sidebar Tab List */}
          <Tabs.List
            className="app-tabs-list pitch-list"
          >
            {[
              { val: 'cost', icon: '📊', label: 'Billing Comparison' },
              { val: 'apis', icon: '🛡️', label: 'Web Worker API Spec' },
              { val: 'ecosystem', icon: '🔗', label: 'Ecosystem Plugins' }
            ].map((tab) => (
              <Tabs.Tab
                key={tab.val}
                value={tab.val}
                className="app-tab-item"
                style={{
                  background: activeScreen === tab.val ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                  border: '1px solid',
                  borderColor: activeScreen === tab.val ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                  borderRadius: 'var(--r-md)',
                  color: activeScreen === tab.val ? 'var(--accent-mint)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '12px 16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'var(--transition)',
                  textAlign: 'left'
                }}
              >
                <span style={{ fontSize: '14px' }}>{tab.icon}</span>
                {tab.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* Screen Content Panels */}
          <div className="app-tabs-panels-wrap pitch-panels">
            {/* Screen 1: Cost Comparative Metrics */}
            <Tabs.Panel value="cost">
              <Stack gap="xl">
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700 }}>
                    Billing &amp; Cost Comparative Metrics
                  </Title>
                  <Text size="xs" c="dimmed" mt={4}>
                    Comparing flat monthly subscriptions vs utility-metered edge networks.
                  </Text>
                </div>

                {/* Desktop view: Combined spec matrix table */}
                <Box visibleFrom="md">
                  <Paper
                    p="xl"
                    style={{
                      borderRadius: 'var(--r-md)',
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-strong)',
                      overflow: 'hidden'
                    }}
                  >
                    <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
                      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
                        <thead>
                          <tr style={{ borderBottom: '1px solid var(--border-strong)' }}>
                            <th style={{ padding: '12px 16px', fontSize: '11px', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Metric / Spec</th>
                            <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: 'var(--accent-mint)', fontFamily: 'var(--font-mono)' }}>DataVec compiled C</th>
                            <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'var(--font-mono)' }}>Cloudflare Workers</th>
                            <th style={{ padding: '12px 16px', fontSize: '12px', fontWeight: 700, color: 'white', fontFamily: 'var(--font-mono)' }}>Vercel Edge</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            { metric: 'Pricing Model', dv: 'Flat monthly rate', cf: 'Metered requests', ve: 'Metered CPU + Seats', dvColor: 'var(--accent-mint)', cfColor: '#f87171', veColor: '#f87171' },
                            { metric: 'Starter Price', dv: '$19.00 / mo', cf: '$5.00 / mo', ve: '$20.00 / user / mo', dvColor: 'var(--accent-mint)', cfColor: 'white', veColor: 'white' },
                            { metric: 'Bandwidth Fees', dv: 'Included ($0)', cf: 'Free', ve: '$0.15 / GB metered', dvColor: 'var(--accent-mint)', cfColor: 'var(--accent-mint)', veColor: '#f87171' },
                            { metric: 'Cold Starts', dv: '0.00ms latency', cf: '~5.00ms (V8 GC)', ve: '50ms - 200ms delay', dvColor: 'var(--accent-mint)', cfColor: '#f87171', veColor: '#f87171' }
                          ].map((row, idx) => (
                            <tr
                              key={idx}
                              style={{
                                borderBottom: idx === 3 ? 'none' : '1px solid var(--border)',
                                background: 'transparent',
                              }}
                            >
                              <td style={{ padding: '16px', fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>{row.metric}</td>
                              <td style={{ padding: '16px', fontSize: '13px', fontWeight: 700, color: row.dvColor, background: 'rgba(16, 185, 129, 0.02)' }}>{row.dv}</td>
                              <td style={{ padding: '16px', fontSize: '13px', fontWeight: 600, color: row.cfColor }}>{row.cf}</td>
                              <td style={{ padding: '16px', fontSize: '13px', fontWeight: 600, color: row.veColor }}>{row.ve}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Paper>
                </Box>

                {/* Mobile/Tablet view: Individual cards stacked */}
                <Box hiddenFrom="md">
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                    {/* DataVec */}
                    <Paper
                      p="xl"
                      style={{
                        borderRadius: 'var(--r-md)',
                        background: 'rgba(99, 102, 241, 0.02)',
                        border: '1px solid var(--border-active)'
                      }}
                    >
                      <Text size="sm" fw={700} c="var(--accent-mint)" mb="md" style={{ fontFamily: 'var(--font-mono)' }}>
                        DataVec compiled C
                      </Text>
                      <Stack gap="sm">
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Model</Text><Text size="xs" fw={700} c="var(--accent-mint)">Flat monthly rate</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Starter bill</Text><Text size="xs" fw={700} c="var(--accent-mint)">$19.00 / mo</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Bandwidth fees</Text><Text size="xs" fw={700} c="var(--accent-mint)">Included ($0)</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Cold starts</Text><Text size="xs" fw={700} c="var(--accent-mint)">0.00ms latency</Text></Flex>
                      </Stack>
                    </Paper>

                    {/* Cloudflare */}
                    <Paper
                      p="xl"
                      style={{
                        borderRadius: 'var(--r-md)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      <Text size="sm" fw={700} c="white" mb="md" style={{ fontFamily: 'var(--font-mono)' }}>
                        Cloudflare Workers
                      </Text>
                      <Stack gap="sm">
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Model</Text><Text size="xs" fw={700} c="#f87171">Metered requests</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Starter bill</Text><Text size="xs" fw={700}>$5.00 / mo</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Bandwidth fees</Text><Text size="xs" fw={700} c="var(--accent-mint)">Free</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Cold starts</Text><Text size="xs" fw={700} c="#f87171">~5.00ms (V8 GC)</Text></Flex>
                      </Stack>
                    </Paper>

                    {/* Vercel */}
                    <Paper
                      p="xl"
                      style={{
                        borderRadius: 'var(--r-md)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)'
                      }}
                    >
                      <Text size="sm" fw={700} c="white" mb="md" style={{ fontFamily: 'var(--font-mono)' }}>
                        Vercel Edge
                      </Text>
                      <Stack gap="sm">
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Model</Text><Text size="xs" fw={700} c="#f87171">Metered CPU + Seats</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Starter bill</Text><Text size="xs" fw={700}>$20.00 / user / mo</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Bandwidth fees</Text><Text size="xs" fw={700} c="#f87171">$0.15 / GB metered</Text></Flex>
                        <Flex justify="space-between"><Text size="xs" c="dimmed">Cold starts</Text><Text size="xs" fw={700} c="#f87171">50ms - 200ms delay</Text></Flex>
                      </Stack>
                    </Paper>
                  </SimpleGrid>
                </Box>
              </Stack>
            </Tabs.Panel>

            {/* Screen 2: Web Workers API Footprint */}
            <Tabs.Panel value="apis">
              <Stack gap="xl">
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700 }}>
                    Web Workers Standard API Compliance
                  </Title>
                  <Text size="xs" c="dimmed" mt={4}>
                    Standard specifications and native edge bindings supported by DataVec.
                  </Text>
                </div>

                <Paper
                  p="xl"
                  style={{
                    borderLeft: '3px solid var(--accent-mint)',
                    background: 'var(--surface)',
                    borderTop: '1px solid var(--border)',
                    borderRight: '1px solid var(--border)',
                    borderBottom: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)'
                  }}
                >
                  <Text size="sm" fw={700} c="var(--accent-mint)" mb="lg" style={{ fontFamily: 'var(--font-mono)' }}>
                    ✓ Compliant Edge Standard APIs
                  </Text>

                  <Stack gap="md">
                    {[
                      { title: 'Standard fetch & WebSocket Streams', desc: 'Direct compilation of WinterTC `Request`/`Response` structures and high-throughput real-time WebSocket socket connections.' },
                      { title: 'Postgres Wire Format & Unveil Spaces', desc: 'Standard wire-format database client support, completely isolated inside custom unveil process spaces for network security.' },
                      { title: 'Droplet & S3 Object Store Deploys', desc: 'Deploy compiled runtimes directly to leased Digital Ocean droplets using our custom R2-based S3 object storage web worker.' },
                      { title: 'Custom & Automatic Domain Registration', desc: 'Register new domains or bind existing ones dynamically, serving a default configured site with automated SSL certification.' }
                    ].map((item, i) => (
                      <Flex key={i} gap="md" align="flex-start">
                        <span style={{ color: 'var(--accent-mint)', fontWeight: 'bold' }}>✓</span>
                        <Stack gap={2}>
                          <Text size="sm" fw={700}>{item.title}</Text>
                          <Text size="xs" c="dimmed" style={{ lineHeight: 1.4 }}>{item.desc}</Text>
                        </Stack>
                      </Flex>
                    ))}
                  </Stack>
                </Paper>
              </Stack>
            </Tabs.Panel>

            {/* Screen 3: Ecosystem Integrations */}
            <Tabs.Panel value="ecosystem">
              <Stack gap="xl">
                <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '16px' }}>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700 }}>
                    Ecosystem &amp; Supported Packages
                  </Title>
                  <Text size="xs" c="dimmed" mt={4}>
                    JavaScript frameworks and libraries that run seamlessly on our compiled runtime.
                  </Text>
                </div>

                <Paper
                  p="xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)',
                    textAlign: 'center'
                  }}
                >
                  <Text size="xs" fw={700} c="dimmed" mb="xl" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Compatible Web Worker Frameworks &amp; SDKs
                  </Text>

                  <Flex wrap="wrap" gap="sm" justify="center">
                    {['Next.js (Static)', 'itty-router', 'Elysia API', 'WebSockets', 'PostgreSQL', 'S3 Object Store', 'Remix (Edge)', 'tRPC', 'Zod validator', 'jose (JWT)', 'Upstash Redis', 'OpenAI SDK', 'Anthropic SDK', 'Stripe SDK'].map((tag, i) => {
                      const isFeatured = i < 3;
                      return (
                        <span
                          key={tag}
                          className={`fw-tag ${isFeatured ? 'featured' : ''}`}
                          style={{
                            padding: '6px 14px',
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 600,
                            fontFamily: 'var(--font-mono)',
                            background: isFeatured ? 'rgba(99, 102, 241, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                            border: '1px solid',
                            borderColor: isFeatured ? 'var(--border-active)' : 'var(--border-strong)',
                            color: isFeatured ? 'var(--text)' : 'var(--text-muted)'
                          }}
                        >
                          {tag}
                        </span>
                      );
                    })}
                  </Flex>
                </Paper>
              </Stack>
            </Tabs.Panel>
          </div>
        </Tabs>
      </Container>
    </section>
  );
}
