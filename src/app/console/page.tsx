'use client';

import { useEffect } from 'react';
import { Container, Title, Text, Button, Flex, Stack, Paper, SimpleGrid, Group, Badge } from '@mantine/core';
import Navbar from '@/components/Navbar';

export default function Console() {
  useEffect(() => {
    document.title = "DataVec — Developer Console (Beta)";
  }, []);

  const projects = [
    { name: "postgres-sync-worker", status: "Active", size: "118 KB", reqs: "52.4M", health: "100%", unveil: "PG isolated", conns: "148,209 WS", hosting: "Droplet #49" },
    { name: "r2-s3-worker-droplet", status: "Active", size: "142 KB", reqs: "18.1M", health: "99.9%", unveil: "Worker native", conns: "S3 API REST", hosting: "Droplet #50" },
    { name: "live-websocket-streamer", status: "Active", size: "86 KB", reqs: "102.5M", health: "100%", unveil: "Worker native", conns: "452,109 WS", hosting: "Droplet #51" }
  ];

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, padding: '112px 0 100px' }}>
        <Container size="xl">
          <Stack gap="xl">
            {/* Console Header */}
            <Flex align="center" justify="space-between" wrap="wrap" gap="md">
              <Stack gap={4}>
                <Group gap="xs">
                  <span className="sec-eye" style={{ color: 'var(--cyan)', marginBottom: 0 }}>Management Console</span>
                  <Badge variant="filled" color="indigo" size="xs" style={{ textTransform: 'uppercase' }}>WIP Beta</Badge>
                </Group>
                <Title order={1} style={{ fontSize: '36px', fontWeight: 800, color: 'white' }}>
                  Developer Dashboard
                </Title>
              </Stack>
              
              <Button
                component="a"
                href="/docs"
                variant="outline"
                size="sm"
                style={{
                  borderColor: 'var(--border-strong)',
                  color: 'white',
                  background: 'rgba(255,255,255,0.01)'
                }}
              >
                View docs for CLI deploy
              </Button>
            </Flex>

            {/* Simulated Banner */}
            <Paper
              p="md"
              style={{
                background: 'rgba(99,102,241,0.05)',
                border: '1px dashed var(--border-active)',
                borderRadius: 'var(--r-md)',
              }}
            >
              <Text size="sm" c="var(--text-dim)">
                <strong>Beta Notice:</strong> This dashboard is a visual mockup (Work in Progress) demonstrating DataVec compiled cloud console telemetry. To compile and deploy live applications, please download and run our local <a href="/docs" style={{ color: 'var(--accent-mint)', fontWeight: 600, textDecoration: 'none' }}>DataVec CLI toolchain</a>.
              </Text>
            </Paper>

            {/* Active Projects Table */}
            <Paper
              p="xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-lg)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <Stack gap="md">
                <Title order={3} style={{ color: 'white', fontSize: '18px', fontWeight: 800 }}>
                  Statically Compiled Projects
                </Title>
                
                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
                  {projects.map((proj, idx) => (
                    <Paper
                      key={idx}
                      p="lg"
                      style={{
                        background: 'var(--bg-grid)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r-md)'
                      }}
                    >
                      <Stack gap="sm">
                        <Flex align="center" justify="space-between">
                          <Text size="sm" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>
                            {proj.name}
                          </Text>
                          <Badge variant="light" color="teal" size="xs">
                            {proj.status}
                          </Badge>
                        </Flex>

                        <div style={{ height: '1px', background: 'var(--border)', margin: '4px 0' }} />

                        <SimpleGrid cols={2} spacing="xs">
                          <div>
                            <Text size="10px" c="dimmed">BINARY SIZE</Text>
                            <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.size}
                            </Text>
                          </div>
                          <div>
                            <Text size="10px" c="dimmed">MONTHLY REQS</Text>
                            <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.reqs}
                            </Text>
                          </div>
                          <div>
                            <Text size="10px" c="dimmed">HOST / LEASE</Text>
                            <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.hosting}
                            </Text>
                          </div>
                          <div>
                            <Text size="10px" c="dimmed">UNVEIL SPACE</Text>
                            <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.unveil}
                            </Text>
                          </div>
                          <div>
                            <Text size="10px" c="dimmed">ACTIVE CONNS</Text>
                            <Text size="xs" fw={700} c="var(--cyan)" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.conns}
                            </Text>
                          </div>
                          <div>
                            <Text size="10px" c="dimmed">HEALTH RATE</Text>
                            <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>
                              {proj.health}
                            </Text>
                          </div>
                        </SimpleGrid>

                        <Group gap="xs" mt="sm">
                          <Button size="xs" variant="outline" style={{ borderColor: 'var(--border-strong)', color: 'white', flex: 1 }}>
                            Logs
                          </Button>
                          <Button size="xs" style={{ background: 'var(--accent)', color: 'white', flex: 1 }}>
                            Rebuild
                          </Button>
                        </Group>
                      </Stack>
                    </Paper>
                  ))}
                </SimpleGrid>
              </Stack>
            </Paper>

            {/* Infrastructure Details */}
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              <Paper p="lg" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)' }}>
                <Stack gap="xs">
                  <Title order={4} style={{ color: 'white', fontSize: '15px' }}>Compiler &amp; Network Telemetry</Title>
                  <Text size="xs" c="dimmed">DataVec native edge listener nodes running on leased Droplets and secure unveil database spaces.</Text>
                  <SimpleGrid cols={3} mt="sm">
                    <div>
                      <Text size="10px" c="dimmed">ACTIVE REGIONS</Text>
                      <Text size="sm" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>28 Droplets</Text>
                    </div>
                    <div>
                      <Text size="10px" c="dimmed">AVG RUNTIME CPU</Text>
                      <Text size="sm" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>1.24%</Text>
                    </div>
                    <div>
                      <Text size="10px" c="dimmed">MEM FOOTPRINT</Text>
                      <Text size="sm" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>2.1 MB / Node</Text>
                    </div>
                  </SimpleGrid>
                </Stack>
              </Paper>

              <Paper p="lg" style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)' }}>
                <Stack gap="xs">
                  <Title order={4} style={{ color: 'white', fontSize: '15px' }}>Database &amp; Object Store Status</Title>
                  <Text size="xs" c="dimmed">Unveil PostgreSQL spaces and R2-compatible S3 Object Stores status.</Text>
                  <SimpleGrid cols={2} mt="sm">
                    <div>
                      <Text size="10px" c="dimmed">POSTGRESQL UNVEIL</Text>
                      <Text size="sm" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)' }}>Secure Process Space</Text>
                    </div>
                    <div>
                      <Text size="10px" c="dimmed">S3 OBJECT STORE</Text>
                      <Text size="sm" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>Web Worker R2 API</Text>
                    </div>
                  </SimpleGrid>
                </Stack>
              </Paper>
            </SimpleGrid>

          </Stack>
        </Container>
      </div>
    </>
  );
}
