'use client';

import { useState, useEffect } from 'react';
import { Container, Title, Text, Button, Flex, Stack, Paper, TextInput, Textarea } from '@mantine/core';
import Navbar from '@/components/Navbar';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.title = "DataVec — Contact Sales";
  }, []);

  const mailtoLink = `mailto:sales@datavec.io?subject=DataVec Sales Inquiry&body=Hi DataVec Team,%0D%0A%0D%0A${encodeURIComponent(message)}%0D%0A%0D%0AFrom,%0D%0A${encodeURIComponent(name)} (${encodeURIComponent(email)})`;

  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, padding: '112px 0 100px' }}>
        <Container size="xs">
          <Stack gap="xl">
            {/* Header */}
            <Stack gap={4} style={{ textAlign: 'center' }}>
              <span className="sec-eye" style={{ color: 'var(--cyan)' }}>Enterprise Scale</span>
              <Title order={1} style={{ fontSize: '36px', fontWeight: 800, color: 'white' }}>
                Contact Sales
              </Title>
              <Text size="sm" c="dimmed" style={{ lineHeight: 1.6 }}>
                Interested in dedicated clusters, bespoke compliance layouts, or custom contract terms? Reach out directly using the form below or send us an email.
              </Text>
            </Stack>

            {/* Contact Form Card */}
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
                <TextInput
                  label="Your Name"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.currentTarget.value)}
                  styles={{
                    label: { color: 'var(--text-dim)', fontSize: '12px', fontWeight: 600, marginBottom: '6px' },
                    input: { background: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)', color: 'white' }
                  }}
                />

                <TextInput
                  label="Business Email"
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  styles={{
                    label: { color: 'var(--text-dim)', fontSize: '12px', fontWeight: 600, marginBottom: '6px' },
                    input: { background: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)', color: 'white' }
                  }}
                />

                <Textarea
                  label="How can we help?"
                  placeholder="Tell us about your workload volume and project requirements..."
                  minRows={4}
                  value={message}
                  onChange={(e) => setMessage(e.currentTarget.value)}
                  styles={{
                    label: { color: 'var(--text-dim)', fontSize: '12px', fontWeight: 600, marginBottom: '6px' },
                    input: { background: 'rgba(0,0,0,0.2)', borderColor: 'var(--border)', color: 'white' }
                  }}
                />

                <Button
                  component="a"
                  href={mailtoLink}
                  fullWidth
                  className="btn-gradient"
                  style={{
                    fontWeight: 600,
                    marginTop: '10px'
                  }}
                >
                  Send Email Directly
                </Button>
              </Stack>
            </Paper>

            {/* Alternative Direct Link */}
            <Paper
              p="md"
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                textAlign: 'center'
              }}
            >
              <Text size="xs" c="var(--text-dim)">
                Prefer direct client emailing? Drop us a note at <a href="mailto:sales@datavec.io" style={{ color: 'var(--accent-mint)', fontWeight: 600, textDecoration: 'none' }}>sales@datavec.io</a>
              </Text>
            </Paper>

          </Stack>
        </Container>
      </div>
    </>
  );
}
