import { Container, Title, Text } from '@mantine/core';

export default function Platform() {
    return (
        <section style={{ padding: '80px 0', position: 'relative', zIndex: 1 }} id="platform">
            <Container size="lg">
                <div className="section-header">
                    <span className="sec-eye">
                        Platform
                    </span>
                    <Title order={2} style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px' }}>
                        A new execution model for JavaScript infrastructure.
                    </Title>
                    <Text size="lg" c="dimmed" style={{ lineHeight: 1.6, marginBottom: '32px' }}>
                        DataVec keeps the developer experience familiar while replacing the runtime underneath: no interpreter loop, no JIT warmup, no cold start dependency, and no surprise per-request infrastructure bill.
                    </Text>
                </div>
            </Container>
        </section>
    );
}