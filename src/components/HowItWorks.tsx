'use client';

import { useState } from 'react';
import { Container, SimpleGrid, Paper, Stack, Flex, Title, Text, Timeline, Code } from '@mantine/core';

const MONITOR_LOGS = [
  // Step 0: Write
  `[MONITOR: WRITE LOGS]
$ cat src/index.ts
------------------------------------------------------------
export default {
  async fetch(request, env) {
    const token = request.headers.get('Authorization');
    if (!token?.startsWith('Bearer ')) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return Response.json({ success: true, data: [] });
  }
};
------------------------------------------------------------
✓ Standard Web Worker structure detected.
✓ Framework: Next.js Static API build verified.
✓ Imports checked: Zero bulky Node.js filesystem dependencies.`,

  // Step 1: Compile
  `[MONITOR: COMPILER LOGS]
$ datavec compile src/index.ts --optimize
------------------------------------------------------------
[1] Loading local AST compiler toolchain...
[2] Stripping JavaScript V8 isolate contexts
[3] Resolving allocations (physically deleting GC overhead)
[4] Generating C header definitions:
    → struct Request { char* path; char* headers; ... };
    → struct Response { int status; char* body; ... };
[5] Translating ECMAScript router to C callback indices
[6] Invoking GCC compiler optimization flags (-O3)

✓ Native C compilation completed in 3.4 seconds.
✓ Standalone static executable ready: index.bin (104 KB)`,

  // Step 2: Runtime
  `[MONITOR: RUNTIME LOGS]
$ datavec run --inspect
------------------------------------------------------------
[1] Starting purpose-built DataVec native execution layer...
[2] Listening on global edge port :443
[3] Native libraries linked:
    → openssl_tls_handshake (Instant global HTTPS cert)
    → http_parser_v2 (Natively compiled HTTP/1.1 & HTTP/2)
    → sqlite_driver_static (Direct database binding)
[4] Microthread scheduler status:
    → Co-routing active: 300,000 requests/sec target
    → Virtual memory allocated: 2.1 MB
    → Cold start latency: 0.00ms

✓ Live listener bound: https://app.datavec.io`,

  // Step 3: Flat Rate
  `[MONITOR: SYSTEM BILLING]
$ datavec billing --verify
------------------------------------------------------------
Project ID: nextjs-edge-service
Billing Tier: Developer Pro ($19.00/mo flat)

[Invoice Diagnostic Report]
→ Monthly requests: 46,285,104 / 50,000,000 (92.5% cap)
→ Metered overage charges: $0.00 (SURGE_METERING: OFF)
→ Transit bandwidth consumed: 840 GB / 1000 GB
→ Bandwidth surcharges: $0.00 (BANDWIDTH_METERING: OFF)
------------------------------------------------------------
✓ Invoice total locked: $19.00 / month
✓ Surprise overage charges physically impossible.`
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="how">
      <Container size="lg">
        <div className="section-header">
          <span className="sec-eye">
            Infrastructure Pipeline
          </span>
          <Title order={2}>
            The compiled edge deployment pipeline
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
            Hover over the compilation phases to inspect how standard JavaScript code is compiled, linked, and hosted on our native edge network.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
          {/* Timeline steps on the left */}
          <Timeline
            active={activeStep}
            bulletSize={30}
            lineWidth={2}
            styles={{
              item: { cursor: 'pointer', transition: 'all 0.2s ease' }
            }}
          >
            {[
              { title: 'Write standard JavaScript', desc: 'Build endpoints using Next.js static layouts or standard Web Worker APIs conforming to edge specifications.', badge: 'PHASE 01 / BUILD' },
              { title: 'Compile directly to C', desc: 'Our compiler translates JavaScript AST logic into highly optimized, statically allocated native C structures.', badge: 'PHASE 02 / TRANSLATE' },
              { title: '104 KB Runtime Engine', desc: 'Serve requests instantly on a standalone native process coordinating SSL handshakes, routing, and database drivers.', badge: 'PHASE 03 / RUN' },
              { title: 'Predictable Billing Locks', desc: 'Maintain total budget control with fixed monthly billing caps that physically disable metered overage invoices.', badge: 'PHASE 04 / AUDIT' }
            ].map((step, idx) => (
              <Timeline.Item
                key={idx}
                bullet={
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: activeStep === idx ? 'var(--accent-mint)' : 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    0{idx + 1}
                  </span>
                }
                onMouseEnter={() => setActiveStep(idx)}
                onClick={() => setActiveStep(idx)}
                style={{
                  opacity: activeStep === idx ? 1 : 0.45,
                  transform: activeStep === idx ? 'translateX(8px)' : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <Paper
                  p="md"
                  style={{
                    background: activeStep === idx ? 'var(--surface)' : 'transparent',
                    border: '1px solid',
                    borderColor: activeStep === idx ? 'var(--border-strong)' : 'transparent',
                    borderRadius: 'var(--r-md)',
                    boxShadow: activeStep === idx ? 'var(--shadow-sm)' : 'none'
                  }}
                >
                  <Text size="xs" fw={700} c="var(--accent)" style={{ fontFamily: 'var(--font-mono)' }}>
                    [{step.badge}]
                  </Text>
                  <Text size="md" fw={700} mt={4} c="white">
                    {step.title}
                  </Text>
                  <Text size="sm" c="dimmed" mt={6} style={{ lineHeight: 1.5 }}>
                    {step.desc}
                  </Text>
                </Paper>
              </Timeline.Item>
            ))}
          </Timeline>

          {/* Interactive Compiler Inspector Monitor on the right */}
          <Stack gap={0} w="100%">
            <Paper
              p="xs"
              style={{
                background: 'var(--bg-grid)',
                borderTop: '1px solid var(--border-strong)',
                borderLeft: '1px solid var(--border-strong)',
                borderRight: '1px solid var(--border-strong)',
                borderTopLeftRadius: 'var(--r-lg)',
                borderTopRightRadius: 'var(--r-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px'
              }}
            >
              <Flex gap="xs">
                <span className="dot-r" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span className="dot-y" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span className="dot-g" style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              </Flex>
              <Text size="xs" fw={600} c="dimmed" style={{ fontFamily: 'var(--font-mono)' }}>
                compiler_inspector.log
              </Text>
              <Text size="xs" fw={600} c="var(--accent)" style={{ fontFamily: 'var(--font-mono)' }}>
                telemetry
              </Text>
            </Paper>

            <Paper
              p="xl"
              style={{
                background: '#161c28',
                border: '1px solid var(--border-strong)',
                borderBottomLeftRadius: 'var(--r-lg)',
                borderBottomRightRadius: 'var(--r-lg)',
                minHeight: '400px',
                position: 'relative'
              }}
            >
              <span style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '10px', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>
                active_screen_0{activeStep + 1}
              </span>
              <pre style={{ margin: 0, overflowX: 'auto', whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
                <Code
                  block
                  style={{
                    background: 'transparent',
                    padding: 0,
                    color: '#a78bfa',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12.5px',
                    lineHeight: 1.55
                  }}
                >
                  {MONITOR_LOGS[activeStep]}
                </Code>
              </pre>
            </Paper>
          </Stack>
        </SimpleGrid>
      </Container>
    </section>
  );
}
