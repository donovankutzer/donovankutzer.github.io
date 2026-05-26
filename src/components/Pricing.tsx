'use client';

import { useState } from 'react';

export default function Pricing() {
  const [activeTier, setActiveTier] = useState<'pro' | 'business' | 'enterprise'>('pro');

  return (
    <section className="pricing z" id="pricing">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Configurator Console</span>
          <h2>Tactile compute tiers configurator</h2>
          <p className="sec-sub">
            Click standard plans or select the Enterprise option to simulate custom compute requirements and check specifications.
          </p>
        </div>

        {/* Founding Member Notice */}
        <div className="founder-band" style={{ marginBottom: '32px' }}>
          <span className="founder-lock-icon" aria-hidden="true">🔒</span>
          <div>
            <h4>Founding Developer Tiers. First 50 signups lock this subscription rate forever.</h4>
            <p>Your locked rate will never increase as long as your service remains active.</p>
          </div>
        </div>

        {/* Unified Spec Sheet Pricing Configurator */}
        <div className="spec-sheet-wrap">
          {/* Spec Selectors on Left */}
          <div className="spec-sheet-controls">
            <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', borderBottom: '1px solid var(--border)', paddingBottom: '8px' }}>
              Select Core Subscription Plan
            </h4>

            {/* Plan Nodes togglers */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                className={`cockpit-tab-item ${activeTier === 'pro' ? 'active' : ''}`}
                onClick={() => setActiveTier('pro')}
              >
                <span>🚀</span>
                [Starter Pro Plan — $19/mo]
              </button>
              <button 
                className={`cockpit-tab-item ${activeTier === 'business' ? 'active' : ''}`}
                onClick={() => setActiveTier('business')}
              >
                <span>🔥</span>
                [Team Business — $149/mo]
              </button>
              <button 
                className={`cockpit-tab-item ${activeTier === 'enterprise' ? 'active' : ''}`}
                onClick={() => setActiveTier('enterprise')}
              >
                <span>💎</span>
                [Enterprise Custom Plan]
              </button>
            </div>
          </div>

          {/* Spec Telemetry details on Right */}
          <div className="spec-sheet-telemetry">
            {/* Standard Tiers: Pro, Business, or Enterprise */}
            {activeTier === 'pro' && (
              <div>
                <div className="cockpit-screen-title" style={{ marginBottom: '20px' }}>
                  <div className="price-num">
                    $19
                    <span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>/month</span>
                  </div>
                  <h3 style={{ marginTop: '8px' }}>Developer Pro Tier</h3>
                  <p>
                    Ideal for individual engineers serving high-traffic production workloads.
                  </p>
                </div>

                <ul className="price-features" style={{ margin: '0 0 32px' }}>
                  <li>1 active edge project compile boundary</li>
                  <li>Custom domain integration + automated HTTPS</li>
                  <li>Up to 50 Million requests / month included</li>
                  <li>Up to 1 TB network egress bandwidth</li>
                  <li>Full HTTP/1.1 & HTTP/2 transport protocols</li>
                  <li>Email support with engineering queue</li>
                </ul>

                <a 
                  href="mailto:hello@datavec.com?subject=DataVec - Pro Plan Subscription" 
                  className="btn-primary"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Configure system now
                </a>

                {/* System Specs Telemetry Grid */}
                <div className="system-spec-grid">
                  <div className="system-card active-mint">
                    <span className="system-card-label">CPU Nodes</span>
                    <div className="system-card-value">Static</div>
                  </div>
                  <div className="system-card">
                    <span className="system-card-label">Cold Latency</span>
                    <div className="system-card-value">0.00ms</div>
                  </div>
                  <div className="system-card active-mint">
                    <span className="system-card-label">GC Pauses</span>
                    <div className="system-card-value">None</div>
                  </div>
                </div>
              </div>
            )}

            {activeTier === 'business' && (
              <div>
                <div className="cockpit-screen-title" style={{ marginBottom: '20px' }}>
                  <div className="price-num">
                    $149
                    <span style={{ fontSize: '16px', color: 'var(--text-muted)' }}>/month</span>
                  </div>
                  <h3 style={{ marginTop: '8px' }}>Team Business Tier</h3>
                  <p>
                    Perfect for scaling operations and squads needing dedicated project scopes.
                  </p>
                </div>

                <ul className="price-features" style={{ margin: '0 0 32px' }}>
                  <li>Up to 5 active edge project compile boundaries</li>
                  <li>Unlimited custom domains + automated HTTPS</li>
                  <li>Up to 500 Million requests / month included</li>
                  <li>Up to 10 TB network egress bandwidth</li>
                  <li>Priority support tickets + 99.9% uptime SLA</li>
                  <li>Advanced analytics telemetry metrics & logs</li>
                </ul>

                <a 
                  href="mailto:hello@datavec.com?subject=DataVec - Business Plan Subscription" 
                  className="btn-filled"
                  style={{ width: '100%', textAlign: 'center' }}
                >
                  Configure system now
                </a>

                {/* System Specs Telemetry Grid */}
                <div className="system-spec-grid">
                  <div className="system-card active-mint">
                    <span className="system-card-label">CPU Nodes</span>
                    <div className="system-card-value">Dynamic</div>
                  </div>
                  <div className="system-card">
                    <span className="system-card-label">Cold Latency</span>
                    <div className="system-card-value">0.00ms</div>
                  </div>
                  <div className="system-card active-mint">
                    <span className="system-card-label">GC Pauses</span>
                    <div className="system-card-value">None</div>
                  </div>
                </div>
              </div>
            )}

            {activeTier === 'enterprise' && (
              <div>
                <div className="cockpit-screen-title" style={{ marginBottom: '20px' }}>
                  <div className="price-num">
                    Custom
                    <span style={{ fontSize: '16px', color: 'var(--text-muted)' }}> (starts at $2,500/mo)</span>
                  </div>
                  <h3 style={{ marginTop: '8px' }}>Enterprise Custom Tier</h3>
                  <p>
                    Dedicated hardware isolation, custom memory page scaling, and prioritized network routes for maximum enterprise compliance.
                  </p>
                </div>

                <ul className="price-features" style={{ margin: '0 0 32px' }}>
                  <li>Custom memory limits & dedicated virtual heaps</li>
                  <li>Dedicated edge compiler lanes for custom binaries</li>
                  <li>Multi-tenant & private single-tenant network routing</li>
                  <li>Premium SLA with 24/7/365 dedicated developer support</li>
                  <li>Custom POSIX scheduling priorities</li>
                  <li>Dedicated enterprise solutions architect</li>
                </ul>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a 
                    href="#calc" 
                    className="btn-primary"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Estimate enterprise savings below
                  </a>
                  <a 
                    href="mailto:hello@datavec.com?subject=DataVec Enterprise Custom Plan inquiry" 
                    className="btn-ghost"
                    style={{ width: '100%', textAlign: 'center' }}
                  >
                    Request custom enterprise quote
                  </a>
                </div>

                {/* System Specs Telemetry Grid */}
                <div className="system-spec-grid">
                  <div className="system-card active-mint">
                    <span className="system-card-label">CPU Nodes</span>
                    <div className="system-card-value">Dedicated</div>
                  </div>
                  <div className="system-card">
                    <span className="system-card-label">Cold Latency</span>
                    <div className="system-card-value">0.00ms</div>
                  </div>
                  <div className="system-card active-mint">
                    <span className="system-card-label">GC Pauses</span>
                    <div className="system-card-value">None</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
