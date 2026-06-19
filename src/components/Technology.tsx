'use client';

import { useState } from 'react';
import { Container, SimpleGrid, Paper, Stack, Flex, Group, Title, Text } from '@mantine/core';

type SymbolId = 'header' | 'db' | 'json' | null;

const SYMBOLS = {
  header: {
    js: "req.headers.get('Authorization')",
    c: "get_header(req, \"Authorization\")",
    desc: "Translates standard dynamic JavaScript request contexts directly into static pointer-indexed header lookups in C, bypassing V8 scope mapping by leveraging isolated micro-heaps."
  },
  db: {
    js: "env.DB_BINDING.query(...)",
    c: "db_query(get_env_db(\"DB_BINDING\"))",
    desc: "Bridges asynchronous JS environment bindings directly to static, lockless SQLite client structures using a structured memory layout with `struct iovec` ring buffers for auto-aggregating I/O operations."
  },
  json: {
    js: "Response.json(data, { status: 200 })",
    c: "return create_response(200, serialize_to_json(data))",
    desc: "Replaces JavaScript heap GC allocations with stackless coroutines utilizing readiness-oriented standard I/O blocking operations over stream buffers, eliminating runtime GC pauses."
  }
};

export default function Technology() {
  const [hoveredSymbol, setHoveredSymbol] = useState<SymbolId>(null);

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="tech">
      <Container size="lg">
        <div className="section-header-left" style={{ textAlign: 'left', marginBottom: '48px' }}>
          <span className="sec-eye" style={{ display: 'inline-block', background: 'rgba(99, 102, 241, 0.08)', border: '1px solid var(--border-active)', padding: '4px 12px', borderRadius: '30px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent)', fontFamily: 'var(--font-mono)', marginBottom: '16px' }}>
            Architectural Schematics
          </span>
          <Title order={2} style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Visualizing compiler &amp; runtime efficiency
          </Title>
          <Text size="md" c="dimmed" style={{ maxWidth: '640px', margin: '0 auto', lineHeight: 1.6 }}>
            DataVec replaces layers of virtualization with pre-compiled native execution. Hover over the symbol map and stack diagrams below to inspect the design.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          {/* Column 1: The Compiler (Interactive Symbol Map) */}
          <Paper
            p={{ base: 'md', sm: 'xl' }}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(99, 102, 241, 0.08)',
                color: 'var(--accent)',
                border: '1px solid var(--border-active)',
                borderRadius: 'var(--r-sm)',
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                marginBottom: '16px'
              }}
            >
              The Compiler
            </span>
            <Title order={3} style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
              Direct AST Translation Showcase
            </Title>
            <Text size="sm" c="dimmed" mb="xl" style={{ lineHeight: 1.5 }}>
              Our compiler parses your standard JavaScript AST (Abstract Syntax Tree) during deployment and maps statements directly into native C structures. Under the hood, this leverages our stackless coroutine framework to execute concurrent micro-threads in isolated, partitioned micro-heaps:
            </Text>

            <div className="symbol-playground" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
              {/* Column Headers */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', minHeight: '20px', display: 'flex', alignItems: 'flex-end' }}>
                  JavaScript Source
                </Text>
                <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em', minHeight: '20px', display: 'flex', alignItems: 'flex-end' }}>
                  Compiled C Target
                </Text>
              </div>

              {/* Column Nodes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                {/* JS Column */}
                <Stack gap="xs" style={{ minWidth: 0 }}>
                  {[
                    { id: 'header' as SymbolId, label: 'req.headers.get(...)' },
                    { id: 'db' as SymbolId, label: 'env.DB_BINDING.query' },
                    { id: 'json' as SymbolId, label: 'Response.json(data)' }
                  ].map((node) => (
                    <div
                      key={node.id}
                      className={`symbol-node ${hoveredSymbol === node.id ? 'active' : ''}`}
                      onMouseEnter={() => setHoveredSymbol(node.id)}
                      onMouseLeave={() => setHoveredSymbol(null)}
                      style={{
                        background: hoveredSymbol === node.id ? 'rgba(99, 102, 241, 0.06)' : 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: hoveredSymbol === node.id ? 'var(--accent)' : 'var(--border-strong)',
                        padding: '12px',
                        borderRadius: 'var(--r-md)',
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-mono)',
                        color: hoveredSymbol === node.id ? 'white' : 'var(--text-muted)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <Text
                        size="xs"
                        span
                        style={{
                          fontFamily: 'inherit',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%'
                        }}
                      >
                        {node.label}
                      </Text>
                    </div>
                  ))}
                </Stack>

                {/* C Column */}
                <Stack gap="xs" style={{ minWidth: 0 }}>
                  {[
                    { id: 'header' as SymbolId, label: 'get_header(...)' },
                    { id: 'db' as SymbolId, label: 'db_query(...)' },
                    { id: 'json' as SymbolId, label: 'create_response(...)' }
                  ].map((node) => (
                    <div
                      key={node.id}
                      className={`symbol-node ${hoveredSymbol === node.id ? 'active-mint' : ''}`}
                      onMouseEnter={() => setHoveredSymbol(node.id)}
                      onMouseLeave={() => setHoveredSymbol(null)}
                      style={{
                        background: hoveredSymbol === node.id ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.01)',
                        border: '1px solid',
                        borderColor: hoveredSymbol === node.id ? 'var(--accent-mint)' : 'var(--border-strong)',
                        padding: '12px',
                        borderRadius: 'var(--r-md)',
                        fontSize: '12.5px',
                        fontFamily: 'var(--font-mono)',
                        color: hoveredSymbol === node.id ? 'var(--accent-mint)' : 'var(--text-muted)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        height: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden'
                      }}
                    >
                      <Text
                        size="xs"
                        span
                        style={{
                          fontFamily: 'inherit',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          width: '100%'
                        }}
                      >
                        {node.label}
                      </Text>
                    </div>
                  ))}
                </Stack>
              </div>
            </div>

            {/* Translation Details Box */}
            <Paper
              p="md"
              style={{
                background: 'rgba(0,0,0,0.2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                minHeight: '80px',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              {hoveredSymbol ? (
                <Stack gap={4} w="100%">
                  <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)' }}>
                    Mapping: {SYMBOLS[hoveredSymbol].js} → {SYMBOLS[hoveredSymbol].c}
                  </Text>
                  <Text size="xs" c="dimmed" style={{ lineHeight: 1.45 }}>
                    {SYMBOLS[hoveredSymbol].desc}
                  </Text>
                </Stack>
              ) : (
                <Text size="xs" c="dimmed" style={{ fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>
                  → Hover over any JavaScript or C node above to inspect compiled symbols.
                </Text>
              )}
            </Paper>
          </Paper>

          {/* Column 2: The Runtime (Visual Stack Comparison) */}
          <Paper
            p={{ base: 'md', sm: 'xl' }}
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border-strong)',
              borderRadius: 'var(--r-lg)',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(16, 185, 129, 0.08)',
                color: 'var(--accent-mint)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                borderRadius: 'var(--r-sm)',
                padding: '4px 10px',
                fontSize: '11px',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                marginBottom: '16px'
              }}
            >
              The Runtime
            </span>
            <Title order={3} style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
              Virtualization Layer Comparison
            </Title>
            <Text size="sm" c="dimmed" mb="xl" style={{ lineHeight: 1.5 }}>
              Standard serverless architectures stack execution layers (virtual machines, JIT layers, and heavy JS engines) which adds CPU duration latency. DataVec compiles your service into a standalone, memory-protected virtual kernel daemon process.
            </Text>

            <SimpleGrid cols={2} spacing="lg" style={{ marginTop: '24px' }}>
              {/* DataVec Compact Stack */}
              <Stack gap="xs" align="stretch">
                <Text size="xs" fw={700} c="var(--accent-mint)" style={{ fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                  DataVec compiled C
                </Text>
                {['Deductive Socket Poller (0ms)', 'Stackless Coroutine (0ms)', 'Isolated Micro-Heap SQLite (0ms)'].map((layer, idx) => (
                  <Paper
                    key={idx}
                    p="xs"
                    style={{
                      background: 'rgba(16, 185, 129, 0.04)',
                      border: '1px solid var(--accent-mint)',
                      borderRadius: 'var(--r-sm)',
                      textAlign: 'center',
                      color: 'var(--accent-mint)',
                      fontSize: '12px',
                      fontWeight: 700
                    }}
                  >
                    {layer}
                  </Paper>
                ))}
                <Text size="xxs" c="var(--accent-mint)" style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', marginTop: '8px', lineHeight: 1.4 }}>
                  Total: 104 KB Single Binary<br />Cold Start: 0.00ms (M:N Scheduled)
                </Text>
              </Stack>

              {/* AWS/Vercel Isolate Stack */}
              <Stack gap="xs" align="stretch">
                <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textAlign: 'center' }}>
                  Virtualized Edge Isolate
                </Text>
                {['API Gateway (metered)', 'Firecracker VM (startup)', 'V8 Isolate engine', 'Node.js Runtime & GC', 'Dynamic JS Route (V8 Heap)'].map((layer, idx) => (
                  <Paper
                    key={idx}
                    p="xs"
                    style={{
                      background: 'rgba(255, 255, 255, 0.01)',
                      border: '1px solid var(--border-strong)',
                      borderRadius: 'var(--r-sm)',
                      textAlign: 'center',
                      color: 'var(--text-muted)',
                      fontSize: '11px'
                    }}
                  >
                    {layer}
                  </Paper>
                ))}
                <Text size="xxs" c="dimmed" style={{ textAlign: 'center', fontFamily: 'var(--font-mono)', fontSize: '11px', marginTop: '8px', lineHeight: 1.4 }}>
                  Total: 50 MB+ Layer Stack<br />Cold Start: ~5ms - 50ms (Unstructured)
                </Text>
              </Stack>
            </SimpleGrid>
          </Paper>
        </SimpleGrid>
      </Container>
    </section>
  );
}
