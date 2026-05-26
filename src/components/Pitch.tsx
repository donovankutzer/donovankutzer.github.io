'use client';

import { useState } from 'react';

type ScreenType = 'cost' | 'apis' | 'ecosystem';

export default function Pitch() {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('cost');

  return (
    <section className="pitch z" id="runs">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">Capability Matrix</span>
          <h2>Direct comparison &amp; capabilities showcase</h2>
          <p className="sec-sub">
            DataVec replaces virtualized serverless runtime layers with compiled execution. Explore our billing, API standard compliance, and supported frameworks below.
          </p>
        </div>

        <div className="cockpit-console">
          {/* Sidebar Tabs */}
          <div className="cockpit-tabs">
            <button 
              className={`cockpit-tab-item ${activeScreen === 'cost' ? 'active' : ''}`}
              onClick={() => setActiveScreen('cost')}
            >
              <span style={{ fontSize: '14px' }}>📊</span>
              Billing Comparison
            </button>
            <button 
              className={`cockpit-tab-item ${activeScreen === 'apis' ? 'active' : ''}`}
              onClick={() => setActiveScreen('apis')}
            >
              <span style={{ fontSize: '14px' }}>🛡️</span>
              Web Worker API Spec
            </button>
            <button 
              className={`cockpit-tab-item ${activeScreen === 'ecosystem' ? 'active' : ''}`}
              onClick={() => setActiveScreen('ecosystem')}
            >
              <span style={{ fontSize: '14px' }}>🔗</span>
              Ecosystem Plugins
            </button>
          </div>

          {/* Screen Content */}
          <div className="cockpit-screen">
            {/* Screen 1: Cost Comparative Metrics */}
            {activeScreen === 'cost' && (
              <div>
                <div className="cockpit-screen-title">
                  <h3>Billing &amp; Cost Comparative Metrics</h3>
                  <p>Comparing flat monthly subscriptions vs utility-metered edge networks.</p>
                </div>
                
                <div className="pitch-panels" style={{ border: 'none', background: 'transparent', gap: '20px' }}>
                  {/* DataVec */}
                  <div className="panel highlight" style={{ borderRadius: 'var(--r-md)', padding: '24px' }}>
                    <div className="panel-name" style={{ color: 'var(--accent-mint)', marginBottom: '16px' }}>DataVec compiled C</div>
                    <div className="pitch-row"><span className="pitch-key">Model</span><span className="pitch-val good">Flat monthly rate</span></div>
                    <div className="pitch-row"><span className="pitch-key">Starter bill</span><span className="pitch-val good">$19.00 / mo</span></div>
                    <div className="pitch-row"><span className="pitch-key">Bandwidth fees</span><span className="pitch-val good">Included ($0)</span></div>
                    <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val good">0.00ms latency</span></div>
                  </div>

                  {/* Cloudflare */}
                  <div className="panel" style={{ borderRadius: 'var(--r-md)', padding: '24px' }}>
                    <div className="panel-name" style={{ marginBottom: '16px' }}>Cloudflare Workers</div>
                    <div className="pitch-row"><span className="pitch-key">Model</span><span className="pitch-val bad">Metered requests + CPU</span></div>
                    <div className="pitch-row"><span className="pitch-key">Starter bill</span><span className="pitch-val">$5.00 / mo</span></div>
                    <div className="pitch-row"><span className="pitch-key">Bandwidth fees</span><span className="pitch-val good">Free</span></div>
                    <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val bad">~5.00ms (V8 scope)</span></div>
                  </div>

                  {/* Vercel */}
                  <div className="panel" style={{ borderRadius: 'var(--r-md)', padding: '24px' }}>
                    <div className="panel-name" style={{ marginBottom: '16px' }}>Vercel Edge Functions</div>
                    <div className="pitch-row"><span className="pitch-key">Model</span><span className="pitch-val bad">Metered CPU + Seats</span></div>
                    <div className="pitch-row"><span className="pitch-key">Starter bill</span><span className="pitch-val">$20.00 / user / mo</span></div>
                    <div className="pitch-row"><span className="pitch-key">Bandwidth fees</span><span className="pitch-val bad">$0.15 / GB metered</span></div>
                    <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val bad">50ms - 200ms latency</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 2: Web Workers API Footprint */}
            {activeScreen === 'apis' && (
              <div>
                <div className="cockpit-screen-title">
                  <h3>Web Workers Standard API Compliance</h3>
                  <p>Standard specifications and native edge bindings supported by DataVec.</p>
                </div>

                <div className="runs-grid" style={{ gridTemplateColumns: '1fr' }}>
                  <div className="runs-card yes" style={{ borderLeft: '2px solid var(--accent-mint)', padding: '24px' }}>
                    <div className="runs-label yes" style={{ marginBottom: '20px' }}>✓ Compliant Edge Standard APIs</div>
                    
                    <div className="run-row" style={{ marginBottom: '14px' }}>
                      <span className="run-icon">✓</span>
                      <span className="run-text">
                        <strong>Standard fetch Request &amp; Response</strong>
                        <small>Direct handling for standard WinterTC `Request`, `Response`, `Headers`, and dynamic cryptographic functions.</small>
                      </span>
                    </div>

                    <div className="run-row" style={{ marginBottom: '14px' }}>
                      <span className="run-icon">✓</span>
                      <span className="run-text">
                        <strong>High-Speed Web Crypto Standards</strong>
                        <small>Direct JWT token signature verification and cryptographic session management compiled directly to native code.</small>
                      </span>
                    </div>

                    <div className="run-row" style={{ marginBottom: '14px' }}>
                      <span className="run-icon">✓</span>
                      <span className="run-text">
                        <strong>SSE AI Streaming pipelines</strong>
                        <small>Optimized transfer pipelines handling Server-Sent Events with stackless coroutines, eliminating V8 heap garbage-collection pauses.</small>
                      </span>
                    </div>

                    <div className="run-row" style={{ marginBottom: '0px' }}>
                      <span className="run-icon">✓</span>
                      <span className="run-text">
                        <strong>Static SQLite and REST clients</strong>
                        <small>Direct pre-compiled embedded SQLite drivers and out-of-process HTTP stream pollers executing queries with optimal latency.</small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Screen 3: Ecosystem Integrations */}
            {activeScreen === 'ecosystem' && (
              <div>
                <div className="cockpit-screen-title">
                  <h3>Ecosystem &amp; Supported Packages</h3>
                  <p>JavaScript frameworks and libraries that run seamlessly on our compiled runtime.</p>
                </div>

                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--r-md)', padding: '32px', textAlign: 'center' }}>
                  <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '24px' }}>
                    Compatible Web Worker Frameworks &amp; SDKs
                  </h4>
                  <div className="fw-row" style={{ maxWidth: '100%', margin: '0' }}>
                    <span className="fw-tag featured">Hono Router</span>
                    <span className="fw-tag featured">itty-router</span>
                    <span className="fw-tag featured">Elysia API</span>
                    <span className="fw-tag">Remix (Edge)</span>
                    <span className="fw-tag">tRPC</span>
                    <span className="fw-tag">Zod validator</span>
                    <span className="fw-tag">jose (JWT)</span>
                    <span className="fw-tag">Fauna DB</span>
                    <span className="fw-tag">Upstash Redis</span>
                    <span className="fw-tag">OpenAI SDK</span>
                    <span className="fw-tag">Anthropic SDK</span>
                    <span className="fw-tag">Stripe SDK</span>
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
