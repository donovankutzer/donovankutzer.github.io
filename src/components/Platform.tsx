'use client';

import { Container, Title, Text, SimpleGrid, Paper, Flex, Badge } from '@mantine/core';

export default function Platform() {
  return (
    <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="platform">
      <Container size="xl">
        <div className="section-header">
          <span className="sec-eye">
            Platform
          </span>
          <Title order={2}>
            A new execution model for JavaScript infrastructure.
          </Title>
          <Text size="lg" c="dimmed" style={{ maxWidth: '680px', lineHeight: 1.6 }}>
            DataVec keeps the developer experience familiar while replacing the runtime underneath: no interpreter loop, no JIT warmup, no cold start dependency, and no surprise per-request infrastructure bill.
          </Text>
        </div>

        {/* Three core architectural pillars */}
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt={40}>
          {[
            {
              title: "Compile at deploy time",
              desc: "JSMX converts JavaScript into optimized C before production traffic ever hits your application.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              ),
              tag: "JSMX"
            },
            {
              title: "Stay resident in memory",
              desc: "MNVKD keeps workloads alive and ready, eliminating the spin-up penalty that defines traditional serverless.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                  <line x1="6" y1="6" x2="6.01" y2="6" strokeWidth="3" />
                  <line x1="6" y1="18" x2="6.01" y2="18" strokeWidth="3" />
                </svg>
              ),
              tag: "MNVKD"
            },
            {
              title: "Charge by capacity",
              desc: "Choose the server size and replica count you need. Traffic spikes do not automatically become invoice spikes.",
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent-mint)" strokeWidth="2" style={{ width: '24px', height: '24px' }}>
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="12" cy="5" r="2" />
                  <path d="M12 7v4" />
                </svg>
              ),
              tag: "PREDICTABLE"
            }
          ].map((card, idx) => (
            <Paper
              key={idx}
              p="xl"
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-md)',
                transition: 'var(--transition)',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.borderColor = 'var(--border-strong)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Flex gap="md" align="center" mb="md">
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--r-sm)',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {card.icon}
                </div>
                <Badge variant="light" color="indigo" size="xs" style={{ fontFamily: 'var(--font-mono)' }}>
                  {card.tag}
                </Badge>
              </Flex>
              <Title order={4} style={{ color: 'white', fontSize: '17px', fontWeight: 800, marginBottom: '8px' }}>
                {card.title}
              </Title>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.55 }}>
                {card.desc}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}