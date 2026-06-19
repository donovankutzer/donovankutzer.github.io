'use client';

import { useState } from 'react';
import { Container, SimpleGrid, Paper, Tabs, Stack, Flex, Group, Title, Text, Button } from '@mantine/core';

export default function Pricing() {
  const [activeTier, setActiveTier] = useState<'pro' | 'business' | 'enterprise'>('pro');

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="pricing">
      <Container size="lg">
        <div className="section-header">
          <span className="sec-eye">
            Configurator Console
          </span>
          <Title order={2}>
            Tactile compute tiers configurator
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
            Click standard plans or select the Enterprise option to simulate custom compute requirements and check specifications.
          </Text>
        </div>

        {/* Founding Member Notice */}
        <Paper
          p="md"
          mb="xl"
          style={{
            background: 'rgba(16, 185, 129, 0.03)',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: 'var(--r-md)',
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <span style={{ fontSize: '20px' }}>🔒</span>
          <div>
            <Text size="sm" fw={700} c="white">
              Founding Developer Tiers. First 50 signups lock this subscription rate forever.
            </Text>
            <Text size="xs" c="dimmed" mt={2}>
              Your locked rate will never increase as long as your service remains active.
            </Text>
          </div>
        </Paper>

        <Tabs
          value={activeTier}
          onChange={(val) => setActiveTier(val as 'pro' | 'business' | 'enterprise')}
          variant="unstyled"
          className="responsive-app-tabs pricing-tabs"
        >
          {/* Spec Selectors on Left */}
          <Tabs.List
            className="app-tabs-list pricing-list"
          >
            <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '8px', letterSpacing: '0.05em' }}>
              Select Core Subscription Plan
            </Text>

            <Stack gap="sm">
              {[
                { val: 'pro', icon: '🚀', label: '[Starter Pro Plan — $19/mo]' },
                { val: 'business', icon: '🔥', label: '[Team Business — $149/mo]' },
                { val: 'enterprise', icon: '💎', label: '[Enterprise Custom Plan]' }
              ].map((tier) => (
                <Tabs.Tab
                  key={tier.val}
                  value={tier.val}
                  className="app-tab-item"
                  style={{
                    background: activeTier === tier.val ? 'rgba(16, 185, 129, 0.06)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeTier === tier.val ? 'rgba(16, 185, 129, 0.25)' : 'transparent',
                    borderRadius: 'var(--r-md)',
                    color: activeTier === tier.val ? 'var(--accent-mint)' : 'var(--text-muted)',
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
                  <span>{tier.icon}</span>
                  {tier.label}
                </Tabs.Tab>
              ))}
            </Stack>
          </Tabs.List>

          {/* Spec Telemetry details on Right */}
          <div className="app-tabs-panels-wrap pricing-panels" style={{ display: 'flex', flexDirection: 'column' }}>
            {/* Pro Panel */}
            <Tabs.Panel value="pro">
              <Stack gap="xl">
                <div>
                  <Flex align="baseline" gap="xs">
                    <Text style={{ fontSize: '36px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>$19</Text>
                    <Text size="sm" c="dimmed" fw={600} style={{ fontFamily: 'var(--font-mono)' }}>/month</Text>
                  </Flex>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700, mt: 8 }}>
                    Developer Pro Tier
                  </Title>
                  <Text size="sm" c="dimmed" mt={4}>
                    Ideal for individual engineers serving high-traffic production workloads.
                  </Text>
                </div>

                <ul className="price-features" style={{ margin: 0, paddingLeft: '20px', listStyleType: 'square', color: 'var(--text-muted)' }}>
                  {['1 active edge project compile boundary', 'Custom domain integration + automated HTTPS', 'Up to 50 Million requests / month included', 'Up to 1 TB network egress bandwidth', 'Full HTTP/1.1 & HTTP/2 transport protocols', 'Email support with engineering queue'].map((feat, i) => (
                    <li key={i} style={{ marginBottom: '8px', fontSize: '13.5px' }}>{feat}</li>
                  ))}
                </ul>

                <Button
                  component="a"
                  href="mailto:hello@datavec.com?subject=DataVec - Pro Plan Subscription"
                  size="md"
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center'
                  }}
                >
                  Configure system now
                </Button>

                {/* System Specs Telemetry Grid */}
                <SimpleGrid cols={3} spacing={{ base: 'xs', sm: 'md' }} mt="xl" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                  {[
                    { label: 'CPU Nodes', val: 'Static', active: true },
                    { label: 'Cold Latency', val: '0.00ms', active: false },
                    { label: 'GC Pauses', val: 'None', active: true }
                  ].map((card, i) => (
                    <Paper
                      key={i}
                      p="xs"
                      style={{
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: card.active ? 'rgba(16, 185, 129, 0.2)' : 'var(--border-strong)',
                        borderRadius: 'var(--r-sm)',
                        textAlign: 'center'
                      }}
                    >
                      <Text size="xxs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{card.label}</Text>
                      <Text size="sm" fw={700} mt={4} c={card.active ? 'var(--accent-mint)' : 'white'}>{card.val}</Text>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            {/* Business Panel */}
            <Tabs.Panel value="business">
              <Stack gap="xl">
                <div>
                  <Flex align="baseline" gap="xs">
                    <Text style={{ fontSize: '36px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>$149</Text>
                    <Text size="sm" c="dimmed" fw={600} style={{ fontFamily: 'var(--font-mono)' }}>/month</Text>
                  </Flex>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700, mt: 8 }}>
                    Team Business Tier
                  </Title>
                  <Text size="sm" c="dimmed" mt={4}>
                    Perfect for scaling operations and squads needing dedicated project scopes.
                  </Text>
                </div>

                <ul className="price-features" style={{ margin: 0, paddingLeft: '20px', listStyleType: 'square', color: 'var(--text-muted)' }}>
                  {['Up to 5 active edge project compile boundaries', 'Unlimited custom domains + automated HTTPS', 'Up to 500 Million requests / month included', 'Up to 10 TB network egress bandwidth', 'Priority support tickets + 99.9% uptime SLA', 'Advanced analytics telemetry metrics & logs'].map((feat, i) => (
                    <li key={i} style={{ marginBottom: '8px', fontSize: '13.5px' }}>{feat}</li>
                  ))}
                </ul>

                <Button
                  component="a"
                  href="mailto:hello@datavec.com?subject=DataVec - Business Plan Subscription"
                  size="md"
                  style={{
                    background: 'var(--accent)',
                    border: '1px solid var(--border-strong)',
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center'
                  }}
                >
                  Configure system now
                </Button>

                {/* System Specs Telemetry Grid */}
                <SimpleGrid cols={3} spacing={{ base: 'xs', sm: 'md' }} mt="xl" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                  {[
                    { label: 'CPU Nodes', val: 'Dynamic', active: true },
                    { label: 'Cold Latency', val: '0.00ms', active: false },
                    { label: 'GC Pauses', val: 'None', active: true }
                  ].map((card, i) => (
                    <Paper
                      key={i}
                      p="xs"
                      style={{
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: card.active ? 'rgba(16, 185, 129, 0.2)' : 'var(--border-strong)',
                        borderRadius: 'var(--r-sm)',
                        textAlign: 'center'
                      }}
                    >
                      <Text size="xxs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{card.label}</Text>
                      <Text size="sm" fw={700} mt={4} c={card.active ? 'var(--accent-mint)' : 'white'}>{card.val}</Text>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>

            {/* Enterprise Panel */}
            <Tabs.Panel value="enterprise">
              <Stack gap="xl">
                <div>
                  <Flex align="baseline" gap="xs">
                    <Text style={{ fontSize: '36px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}>Custom</Text>
                    <Text size="xs" c="dimmed" fw={600} style={{ fontFamily: 'var(--font-mono)' }}> (starts at $2,500/mo)</Text>
                  </Flex>
                  <Title order={3} style={{ fontSize: '20px', fontWeight: 700, mt: 8 }}>
                    Enterprise Custom Tier
                  </Title>
                  <Text size="sm" c="dimmed" mt={4}>
                    Dedicated hardware isolation, custom memory page scaling, and prioritized network routes for maximum enterprise compliance.
                  </Text>
                </div>

                <ul className="price-features" style={{ margin: 0, paddingLeft: '20px', listStyleType: 'square', color: 'var(--text-muted)' }}>
                  {['Custom memory limits & dedicated virtual heaps', 'Dedicated edge compiler lanes for custom binaries', 'Multi-tenant & private single-tenant network routing', 'Premium SLA with 24/7/365 dedicated developer support', 'Custom POSIX scheduling priorities', 'Dedicated enterprise solutions architect'].map((feat, i) => (
                    <li key={i} style={{ marginBottom: '8px', fontSize: '13.5px' }}>{feat}</li>
                  ))}
                </ul>

                <Stack gap="sm">
                  <Button
                    component="a"
                    href="#calc"
                    size="md"
                    style={{
                      background: 'var(--accent)',
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center'
                    }}
                  >
                    Estimate enterprise savings below
                  </Button>
                  <Button
                    component="a"
                    href="mailto:hello@datavec.com?subject=DataVec Enterprise Custom Plan inquiry"
                    variant="outline"
                    size="md"
                    style={{
                      borderColor: 'var(--border-strong)',
                      color: 'white',
                      fontWeight: 600,
                      textAlign: 'center',
                      background: 'rgba(255,255,255,0.01)'
                    }}
                  >
                    Request custom enterprise quote
                  </Button>
                </Stack>

                {/* System Specs Telemetry Grid */}
                <SimpleGrid cols={3} spacing={{ base: 'xs', sm: 'md' }} mt="xl" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
                  {[
                    { label: 'CPU Nodes', val: 'Dedicated', active: true },
                    { label: 'Cold Latency', val: '0.00ms', active: false },
                    { label: 'GC Pauses', val: 'None', active: true }
                  ].map((card, i) => (
                    <Paper
                      key={i}
                      p="xs"
                      style={{
                        background: 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: card.active ? 'rgba(16, 185, 129, 0.2)' : 'var(--border-strong)',
                        borderRadius: 'var(--r-sm)',
                        textAlign: 'center'
                      }}
                    >
                      <Text size="xxs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>{card.label}</Text>
                      <Text size="sm" fw={700} mt={4} c={card.active ? 'var(--accent-mint)' : 'white'}>{card.val}</Text>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Tabs.Panel>
          </div>
        </Tabs>
      </Container>
    </section>
  );
}
