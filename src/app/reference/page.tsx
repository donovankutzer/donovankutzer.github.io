'use client';

import { useEffect } from 'react';
import { Container, Title, Text, Flex, Stack, Paper, SimpleGrid, Code, Table, Badge } from '@mantine/core';
import Navbar from '@/components/Navbar';

export default function Reference() {
  useEffect(() => {
    document.title = "DataVec — API Reference";
  }, []);

  const runtimeAPIs = [
    { name: "fetch(request, env)", type: "async function", desc: "Core entrypoint for Web Worker requests. Receives incoming request and bound environments.", returns: "Promise<Response>" },
    { name: "env.POSTGRES_DB", type: "binding", desc: "PostgreSQL wire connection binding isolated inside custom unveil process spaces for network security.", returns: "PostgresClient" },
    { name: "env.S3_STORE", type: "binding", desc: "R2-compatible S3 object storage web worker binding deployed on leased Digital Ocean droplets.", returns: "ObjectStorage" }
  ];

  const requestProperties = [
    { prop: "request.url", type: "string", desc: "The full incoming HTTP request URL string." },
    { prop: "request.method", type: "string", desc: "HTTP request verb (GET, POST, PUT, DELETE, etc.)." },
    { prop: "request.headers", type: "Headers", desc: "Map of HTTP request headers." },
    { prop: "request.websocket", type: "WebSocket", desc: "Incoming WebSocket stream connection instance for real-time bi-directional messaging." }
  ];

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, padding: '112px 0 100px' }}>
        <Container size="lg">
          <Stack gap="xl">
            {/* Header */}
            <Stack gap={4}>
              <span className="sec-eye" style={{ color: 'var(--cyan)' }}>API Specifications</span>
              <Title order={1} style={{ fontSize: '36px', fontWeight: 800, color: 'white' }}>
                Runtime Reference
              </Title>
              <Text size="md" c="dimmed" style={{ maxWidth: '780px', lineHeight: 1.6 }}>
                Technical reference for compiler configurations, global runtime variables, and standard APIs supported by the DataVec AST-to-C compilation layer.
              </Text>
            </Stack>

            {/* Core API Reference Table */}
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
                  Global Worker Interfaces
                </Title>
                <Table
                  variant="simple"
                  verticalSpacing="md"
                  styles={{
                    table: { borderCollapse: 'collapse' },
                    thead: { borderBottom: '1px solid var(--border-strong)' },
                    tbody: { color: 'var(--text-muted)' },
                    th: { fontSize: '11px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' },
                    td: { fontSize: '12px', borderBottom: '1px solid var(--border)' }
                  }}
                >
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Name / Binding</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th style={{ textAlign: 'right' }}>Returns</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {runtimeAPIs.map((row) => (
                      <Table.Tr key={row.name}>
                        <Table.Td style={{ fontWeight: 600, color: 'white', fontFamily: 'var(--font-mono)' }}>
                          {row.name}
                        </Table.Td>
                        <Table.Td>
                          <Badge variant="dot" color="indigo" size="sm">
                            {row.type}
                          </Badge>
                        </Table.Td>
                        <Table.Td>{row.desc}</Table.Td>
                        <Table.Td style={{ textAlign: 'right', fontFamily: 'var(--font-mono)', color: 'var(--accent-mint)' }}>
                          {row.returns}
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Stack>
            </Paper>

            {/* Subgrid of request specification vs sample endpoint */}
            <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
              
              {/* Request Structs */}
              <Paper
                p="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)'
                }}
              >
                <Stack gap="md">
                  <Title order={4} style={{ color: 'white', fontSize: '16px' }}>
                    Request Object Properties
                  </Title>
                  <Table
                    variant="simple"
                    verticalSpacing="sm"
                    styles={{
                      th: { fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' },
                      td: { fontSize: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }
                    }}
                  >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th>Property</Table.Th>
                        <Table.Th>Type</Table.Th>
                        <Table.Th>Description</Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {requestProperties.map((row) => (
                        <Table.Tr key={row.prop}>
                          <Table.Td style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'white' }}>{row.prop}</Table.Td>
                          <Table.Td style={{ fontFamily: 'var(--font-mono)', color: 'indigo' }}>{row.type}</Table.Td>
                          <Table.Td>{row.desc}</Table.Td>
                        </Table.Tr>
                      ))}
                    </Table.Tbody>
                  </Table>
                </Stack>
              </Paper>

              {/* Sample API Code Block */}
              <Paper
                p="lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.01)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--r-md)'
                }}
              >
                <Stack gap="xs">
                  <Title order={4} style={{ color: 'white', fontSize: '16px', marginBottom: '4px' }}>
                    Sample WebSocket &amp; Postgres Endpoint
                  </Title>
                  <Text size="xs" c="dimmed">
                    Example endpoint showing WebSocket streams and secure Postgres database query bindings inside unveil spaces:
                  </Text>
                  <Code block style={{ background: '#161c28', color: '#a78bfa', fontFamily: 'var(--font-mono)', fontSize: '11.5px', lineHeight: 1.55 }}>
{`export default {
  async fetch(request, env) {
    if (request.headers.get('Upgrade') === 'websocket') {
      const [client, server] = new WebSocketPair();
      server.accept();
      server.addEventListener('message', async (event) => {
        // Query Postgres safely inside isolated unveil space
        const users = await env.POSTGRES_DB.query(
          "SELECT * FROM users WHERE status = $1", 
          [event.data]
        );
        server.send(JSON.stringify(users.rows));
      });
      return new Response(null, { status: 101, webSocket: client });
    }
    return new Response("Not a WebSocket connection", { status: 400 });
  }
};`}
                  </Code>
                </Stack>
              </Paper>
            </SimpleGrid>
          </Stack>
        </Container>
      </div>
    </>
  );
}
