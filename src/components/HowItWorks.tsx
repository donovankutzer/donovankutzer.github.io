'use client';

import { Container, SimpleGrid, Paper, Stack, Flex, Title, Text } from '@mantine/core';

// Sleek Custom Icons
const CodeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const CompileIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LightningIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ShieldLockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block' }}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

export default function HowItWorks() {
  const steps = [
    {
      phase: 'PHASE 01',
      badge: 'BUILD',
      title: 'Write standard JavaScript',
      desc: 'Build endpoints using Next.js static layouts, Web Workers, or WebSockets, connecting securely to Postgres databases isolated via unveil spaces.',
      color: 'var(--cyan)',
      icon: <CodeIcon />
    },
    {
      phase: 'PHASE 02',
      badge: 'TRANSLATE',
      title: 'Compile directly to C',
      desc: 'Our JSMX compiler translates JavaScript AST and WebSocket logic into highly optimized, statically allocated native C structures.',
      color: 'var(--accent)',
      icon: <CompileIcon />
    },
    {
      phase: 'PHASE 03',
      badge: 'RUN',
      title: '104 KB Runtime Engine',
      desc: 'Serve requests on a standalone process or dedicated droplets with native SSL handshakes, S3 object storage, and DB drivers.',
      color: 'var(--accent-mint)',
      icon: <LightningIcon />
    },
    {
      phase: 'PHASE 04',
      badge: 'AUDIT',
      title: 'Predictable Billing Locks',
      desc: 'Maintain total budget control with fixed monthly billing caps. Traffic spikes on droplets do not automatically become invoice surges.',
      color: 'var(--accent)',
      icon: <ShieldLockIcon />
    }
  ];

  return (
    <section style={{ padding: '100px 0', position: 'relative', zIndex: 1 }} id="how">
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.03) 0%, rgba(99, 102, 241, 0.03) 50%, transparent 100%)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      />

      <Container size="xl">
        <div className="section-header" style={{ marginBottom: '56px' }}>
          <span className="sec-eye">
            Infrastructure Pipeline
          </span>
          <Title order={2} style={{ color: 'white', fontWeight: 800 }}>
            The Compiled Edge Deployment Pipeline
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '720px', lineHeight: 1.6, marginTop: '8px' }}>
            Explore the pipeline phases to inspect how standard JavaScript code is compiled, linked, and hosted on our native edge network.
          </Text>
        </div>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {steps.map((step, idx) => (
            <Paper
              key={idx}
              p="xl"
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.015) 0%, rgba(255, 255, 255, 0.003) 100%)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-lg)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '270px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-active)';
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.4), 0 0 20px rgba(99, 102, 241, 0.05)';
                const bar = e.currentTarget.querySelector('.g-bar') as HTMLElement;
                if (bar) bar.style.width = '100%';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
                const bar = e.currentTarget.querySelector('.g-bar') as HTMLElement;
                if (bar) bar.style.width = '24px';
              }}
            >
              {/* Glowing Top Line */}
              <div
                className="g-bar"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '3px',
                  width: '24px',
                  background: step.color,
                  transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />

              {/* Huge Background Number */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '10px',
                  fontSize: '90px',
                  fontWeight: 900,
                  fontFamily: 'var(--font-mono)',
                  opacity: 0.03,
                  color: 'white',
                  userSelect: 'none',
                  pointerEvents: 'none'
                }}
              >
                0{idx + 1}
              </div>

              <Stack gap="md" style={{ zIndex: 2 }}>
                {/* Icon Container */}
                <Flex
                  align="center"
                  justify="center"
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--r-md)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    color: step.color
                  }}
                >
                  {step.icon}
                </Flex>

                <Stack gap={4}>
                  <Flex align="center" gap="xs">
                    <Text size="xs" fw={700} style={{ fontFamily: 'var(--font-mono)', color: step.color, letterSpacing: '0.08em' }}>
                      {step.phase}
                    </Text>
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.15)' }} />
                    <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.08em' }}>
                      {step.badge}
                    </Text>
                  </Flex>

                  <Title order={3} style={{ fontSize: '18px', fontWeight: 800, color: 'white', marginTop: '2px' }}>
                    {step.title}
                  </Title>
                </Stack>

                <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                  {step.desc}
                </Text>
              </Stack>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}
