'use client';

import { Container, SimpleGrid, Paper, Text, Group, Flex, Stack } from '@mantine/core';

export default function Stats() {
  return (
    <Stack gap="xl" style={{ position: 'relative', zIndex: 1 }}>
      {/* COMPATIBILITY STRIP */}
      <Container size="xl" w="100%">
        <Paper
          p="md"
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border-strong)',
            borderRadius: 'var(--r-md)',
          }}
        >
          <Flex
            direction={{ base: 'column', sm: 'row' }}
            align="center"
            justify="space-between"
            gap="md"
          >
            <Text size="sm" fw={600} c="dimmed" style={{ fontFamily: 'var(--font-mono)' }}>
              Runs existing code from
            </Text>
            <Group gap="lg" justify="center">
              {['Cloudflare Workers', 'Deno Deploy', 'Vercel Edge', 'Fastly Compute', 'Netlify Edge'].map((item) => (
                <Text key={item} size="sm" fw={700} c="white">
                  {item}
                </Text>
              ))}
            </Group>
          </Flex>
        </Paper>
      </Container>

      {/* CORE METRICS GRID SECTION */}
      <Container size="xl" w="100%" py={40}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {[
            { val: '0ms', label: 'Cold start time', color: 'var(--accent-mint)' },
            { val: '300K+', label: 'Requests/sec per instance', color: 'var(--accent)' },
            { val: '104KB', label: 'Native runtime footprint', color: 'var(--accent-mint)' },
            { val: 'Flat', label: 'Predictable Rate', color: 'var(--accent)' }
          ].map((stat, i) => (
            <Paper
              key={i}
              p="xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border-strong)',
                borderRadius: 'var(--r-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                alignItems: 'center',
                textAlign: 'center'
              }}
            >
              <Text
                style={{
                  fontSize: '36px',
                  fontWeight: 800,
                  color: stat.color,
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '-0.02em'
                }}
              >
                {stat.val}
              </Text>
              <Text size="xs" fw={700} c="dimmed" style={{ fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Stack>
  );
}
