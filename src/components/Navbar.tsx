'use client';

import { Container, Flex, Group, Text, Button } from '@mantine/core';

export default function Navbar() {
  return (
    <header 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        height: '72px', 
        background: 'rgba(32, 39, 56, 0.85)', 
        backdropFilter: 'blur(12px)', 
        borderBottom: '1px solid var(--border-strong)', 
        zIndex: 1000 
      }}
    >
      <Container size="lg" h="100%">
        <Flex h="100%" align="center" justify="space-between">
          {/* Logo */}
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
                  <line x1="3.2" y1="3.2" x2="5.8" y2="5.8" />
                  <line x1="10.2" y1="10.2" x2="12.8" y2="12.8" />
                  <line x1="12.8" y1="3.2" x2="10.2" y2="5.8" />
                  <line x1="5.8" y1="10.2" x2="3.2" y2="12.8" />
                </svg>
              </div>
              <Text size="lg" fw={800} c="white" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                Data<span style={{ color: 'var(--accent-mint)', fontStyle: 'italic' }}>vec</span>
              </Text>
            </Group>
          </a>

          {/* Navigation Links */}
          <Group gap="xl" visibleFrom="sm">
            {[
              { href: '#how', label: 'How it works' },
              { href: '#runs', label: 'Compatibility' },
              { href: '#pricing', label: 'Pricing' },
              { href: '#calc', label: 'Calculator' },
              { href: '#faq', label: 'FAQ' }
            ].map((link) => (
              <Text 
                key={link.label}
                component="a" 
                href={link.href} 
                size="sm" 
                fw={600} 
                c="dimmed" 
                style={{ 
                  textDecoration: 'none', 
                  transition: 'var(--transition)',
                  cursor: 'pointer'
                }}
                className="nav-link-item"
              >
                {link.label}
              </Text>
            ))}
          </Group>

          {/* Action button */}
          <Group>
            <Button 
              component="a" 
              href="mailto:hello@datavec.com?subject=DataVec - get started" 
              size="xs" 
              style={{ 
                background: 'var(--accent)', 
                color: 'white', 
                fontWeight: 600
              }}
            >
              Get started
            </Button>
          </Group>
        </Flex>
      </Container>
    </header>
  );
}
