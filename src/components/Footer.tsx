'use client';

import { Container, Grid, SimpleGrid, Stack, Flex, Group, Title, Text, Button } from '@mantine/core';

export default function Footer() {
  return (
    <>
      {/* FINAL CTA PANEL */}
      <section 
        style={{ 
          padding: '60px 16px', 
          borderTop: '1px solid var(--border-strong)', 
          background: 'rgba(99, 102, 241, 0.01)', 
          position: 'relative', 
          zIndex: 1,
          textAlign: 'center'
        }}
      >
        <Container size="sm">
          <Title order={2} style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Upgrade to simple, predictable hosting today
          </Title>
          <Text size="md" c="dimmed" style={{ lineHeight: 1.6, marginBottom: '32px' }}>
            Deploy standard Web Workers application stacks and execute at native C speed under a stable flat-rate monthly invoice.
          </Text>
          
          <Flex 
            justify="center" 
            gap="md" 
            wrap="wrap" 
            direction={{ base: 'column', sm: 'row' }}
            style={{ width: '100%', maxWidth: '480px', margin: '0 auto' }}
          >
            <Button 
              component="a" 
              href="mailto:hello@datavec.com?subject=DataVec - get started" 
              size="lg" 
              className="btn-gradient"
              style={{ 
                fontWeight: 600,
                padding: '0 28px',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              Get started today
            </Button>
            <Button 
              component="a" 
              href="mailto:hello@datavec.com?subject=DataVec - sandbox request" 
              variant="outline"
              size="lg" 
              style={{ 
                borderColor: 'var(--border-strong)',
                color: 'white', 
                fontWeight: 600,
                padding: '0 28px',
                background: 'rgba(255,255,255,0.01)',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
            >
              Request a test deployment
            </Button>
          </Flex>

          <Text size="xs" c="dimmed" mt="xl" style={{ fontFamily: 'var(--font-mono)' }}>
            Sandbox credentials · hello@datavec.com · Founding member pricing locked for active signups
          </Text>
        </Container>
      </section>

      {/* FOOTER */}
      <footer 
        style={{ 
          padding: '60px 16px 40px', 
          borderTop: '1px solid var(--border-strong)', 
          position: 'relative', 
          zIndex: 1, 
          background: '#090b10' 
        }}
      >
        <Container size="xl">
          <Grid>
            {/* Brand details */}
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack gap="md" align="flex-start">
                <a href="#" style={{ textDecoration: 'none', cursor: 'pointer' }}>
                  <Group gap="xs">
                    <div 
                      style={{ 
                        width: '30px', 
                        height: '30px', 
                        background: 'rgba(99, 102, 241, 0.1)', 
                        border: '1px solid var(--border-active)', 
                        borderRadius: 'var(--r-sm)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <svg 
                        viewBox="0 0 16 16" 
                        aria-hidden="true" 
                        style={{ width: '16px', height: '16px', fill: 'var(--accent-mint)', stroke: 'var(--accent-mint)', strokeWidth: 1 }}
                      >
                        <circle cx="8" cy="8" r="2.5" />
                        <line x1="8" y1="1" x2="8" y2="5" />
                        <line x1="8" y1="11" x2="8" y2="15" />
                        <line x1="1" y1="8" x2="5" y2="8" />
                        <line x1="11" y1="8" x2="15" y2="8" />
                      </svg>
                    </div>
                    <Text size="lg" fw={800} c="white" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                      Data<span style={{ color: 'var(--accent-mint)', fontStyle: 'italic' }}>vec</span>
                    </Text>
                  </Group>
                </a>
                
                <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                  Statically compiled edge execution for standard Web Worker scripts. Native speed. Transparent flat pricing.
                </Text>
              </Stack>
            </Grid.Col>

            {/* Links Columns */}
            <Grid.Col span={{ base: 12, md: 8 }}>
              <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }} spacing="lg">
                {/* Platform Links */}
                <Stack gap="sm">
                  <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Platform
                  </Text>
                  {[
                    { href: '#how', label: 'How it works' },
                    { href: '#runs', label: 'Compatibility' },
                    { href: '#pricing', label: 'Standard plans' }
                  ].map((link) => (
                    <Text 
                      key={link.label}
                      component="a" 
                      href={link.href} 
                      size="sm" 
                      c="dimmed" 
                      style={{ textDecoration: 'none', transition: 'var(--transition)' }}
                      className="nav-link-item"
                    >
                      {link.label}
                    </Text>
                  ))}
                </Stack>

                {/* Guides Links */}
                <Stack gap="sm">
                  <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Guides
                  </Text>
                  {[
                    { label: 'Next.js deployment' },
                    { label: 'Elysia routing' },
                    { label: 'Workers migration' },
                    { label: 'Web Workers API spec' }
                  ].map((link) => (
                    <Text 
                      key={link.label}
                      component="a" 
                      href="#" 
                      size="sm" 
                      c="dimmed" 
                      style={{ textDecoration: 'none', transition: 'var(--transition)' }}
                      className="nav-link-item"
                    >
                      {link.label}
                    </Text>
                  ))}
                </Stack>

                {/* Corporate Links */}
                <Stack gap="sm">
                  <Text size="xs" fw={700} c="white" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Corporate
                  </Text>
                  {[
                    { href: 'mailto:hello@datavec.com', label: 'hello@datavec.com' },
                    { href: '#', label: 'Terms of service' },
                    { href: '#', label: 'Privacy policy' }
                  ].map((link) => (
                    <Text 
                      key={link.label}
                      component="a" 
                      href={link.href} 
                      size="sm" 
                      c="dimmed" 
                      style={{ textDecoration: 'none', transition: 'var(--transition)' }}
                      className="nav-link-item"
                    >
                      {link.label}
                    </Text>
                  ))}
                </Stack>
              </SimpleGrid>
            </Grid.Col>
          </Grid>

          {/* Bottom section */}
          <Stack gap="xs" mt={60} style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
            <Text size="xs" c="dimmed" style={{ fontFamily: 'var(--font-mono)' }}>
              © 2026 DataVec. All rights reserved.
            </Text>
            <Text size="xxs" c="dimmed" style={{ lineHeight: 1.5 }}>
              DataVec is an independent hosting platform. We are not affiliated with Cloudflare, Vercel, AWS, Google, or Microsoft. All registered trademarks belong to their respective owners.
            </Text>
          </Stack>
        </Container>
      </footer>
    </>
  );
}
