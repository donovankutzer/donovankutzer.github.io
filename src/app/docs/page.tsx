'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Flex, Stack, Paper, SimpleGrid, Group, Code, TextInput, Grid } from '@mantine/core';
import Navbar from '@/components/Navbar';

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.title = "DataVec — Documentation";
  }, []);

  const docSections = [
    {
      category: "Getting Started",
      items: [
        { title: "Introduction", desc: "Learn the core philosophy and compiled architecture of the DataVec edge network." },
        { title: "Quick Start Guide", desc: "Deploy your first native C Web Worker in under 3 minutes." },
        { title: "Domain Registration", desc: "Register a new domain or bind your existing one to set up a default site." }
      ]
    },
    {
      category: "Core Features",
      items: [
        { title: "WebSocket Servers", desc: "Handle real-time, bi-directional messaging streams compiled directly to native code." },
        { title: "PostgreSQL Connections", desc: "Query PostgreSQL databases securely via the native wire protocol isolated within process-level unveil spaces." },
        { title: "Custom S3 Object Stores", desc: "Deploy R2-compatible S3 object stores as Web Workers built using DataVec services." }
      ]
    },
    {
      category: "CLI & Deployment",
      items: [
        { title: "Droplet Leases & Setup", desc: "Configure and lease dedicated Digital Ocean droplets for custom isolated deployments." },
        { title: "datavec compile", desc: "All compiler flags, JS-to-C optimizations, and target droplet architectures." },
        { title: "datavec deploy", desc: "Pushing build artifacts to droplets or global edge locations with zero-downtime." }
      ]
    }
  ];

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, padding: '112px 0 100px' }}>
        <Container size="xl">
          <Grid gap={40}>
            
            {/* Sidebar (Left Column) */}
            <Grid.Col span={{ base: 12, md: 3.5 }}>
              <Stack gap="lg" style={{ borderRight: '1px solid var(--border)', paddingRight: '20px' }}>
              <TextInput
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                styles={{
                  input: {
                    background: 'rgba(0,0,0,0.2)',
                    borderColor: 'var(--border-strong)',
                    color: 'white',
                    fontFamily: 'var(--font-sans)',
                  }
                }}
              />
              
              {docSections.map((sec, sIdx) => (
                <Stack key={sIdx} gap="xs">
                  <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {sec.category}
                  </Text>
                  {sec.items.map((item, iIdx) => (
                    <Text
                      key={iIdx}
                      size="sm"
                      c="var(--text-dim)"
                      style={{ cursor: 'pointer', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-dim)'}
                    >
                      {item.title}
                    </Text>
                  ))}
                </Stack>
              ))}
            </Stack>
          </Grid.Col>

            {/* Main Content (Right Column) */}
            <Grid.Col span={{ base: 12, md: 8.5 }}>
              <Stack gap="xl">
                {/* Header */}
                <Stack gap={4}>
                  <span className="sec-eye" style={{ color: 'var(--cyan)' }}>Developer Guides</span>
                  <Title order={1} style={{ fontSize: '36px', fontWeight: 800, color: 'white' }}>
                    Documentation
                  </Title>
                  <Text size="md" c="dimmed" style={{ lineHeight: 1.6 }}>
                    Learn how to build, compile, and host native edge workers using DataVec. Integrate WebSocket streaming, secure Postgres databases in unveil spaces, and custom S3 object storage workers deployed onto dedicated Digital Ocean droplets.
                  </Text>
                </Stack>

                {/* Code Quickstart Banner */}
                <Paper
                  p="xl"
                  style={{
                    background: 'var(--surface)',
                    border: '1px solid var(--border-strong)',
                    borderRadius: 'var(--r-md)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <Stack gap="md">
                    <Title order={3} style={{ color: 'white', fontSize: '18px', fontWeight: 700 }}>
                      Deploy in 3 steps
                    </Title>
                    <Text size="sm" c="dimmed">
                      Install the CLI toolchain, compile your JS/TS Web Worker file to native machine code, and deploy to our global flat-rate edge network.
                    </Text>
                    <Stack gap="xs" mt="xs">
                      <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>
                        1. INSTALL TOOLCHAIN
                      </Text>
                      <Code block style={{ background: 'rgba(0,0,0,0.35)', color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                        $ npm install -g datavec-cli
                      </Code>
                      
                      <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>
                        2. COMPILE NATIVELY
                      </Text>
                      <Code block style={{ background: 'rgba(0,0,0,0.35)', color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                        $ datavec compile src/worker.ts --optimize
                      </Code>

                      <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>
                        3. SHIP TO EDGE
                      </Text>
                      <Code block style={{ background: 'rgba(0,0,0,0.35)', color: '#a78bfa', fontFamily: 'var(--font-mono)' }}>
                        $ datavec deploy --project nextjs-api
                      </Code>
                    </Stack>
                  </Stack>
                </Paper>

                {/* Guide Category Grids */}
                <Stack gap="lg">
                  <Title order={3} style={{ color: 'white', fontSize: '20px', fontWeight: 800 }}>
                    Featured Guides
                  </Title>
                  <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                    {docSections.flatMap(sec => sec.items).slice(0, 6).map((item, idx) => (
                      <Paper
                        key={idx}
                        p="lg"
                        style={{
                          background: 'rgba(255, 255, 255, 0.01)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--r-md)',
                          cursor: 'pointer',
                          transition: 'var(--transition)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = 'var(--accent)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = 'var(--border)';
                          e.currentTarget.style.transform = 'none';
                        }}
                      >
                        <Title order={4} style={{ color: 'white', fontSize: '15px', marginBottom: '6px' }}>
                          {item.title}
                        </Title>
                        <Text size="xs" c="dimmed" style={{ lineHeight: 1.5 }}>
                          {item.desc}
                        </Text>
                      </Paper>
                    ))}
                  </SimpleGrid>
                </Stack>
              </Stack>
            </Grid.Col>

          </Grid>
        </Container>
      </div>
    </>
  );
}
