export default function Pricing() {
  return (
    <>
      {/* PRICING PLANS */}
      <section className="pricing z" id="pricing">
        <div className="wrap">
          <div className="section-header-center">
            <span className="sec-eye">Pricing</span>
            <h2>Transparent flat-rate pricing with<br /><em>zero usage-based metering</em></h2>
            <p className="sec-sub">We eliminate the anxiety of modern serverless infrastructure by removing individual request
              meters, arbitrary CPU timing limits, and bandwidth overage charges, guaranteeing that your monthly invoice
              remains completely predictable.</p>
          </div>

          <div className="founder-band">
            <span className="founder-lock-icon" aria-hidden="true">🔒</span>
            <div>
              <h4>Founding Member Pricing. First 50 customers lock this rate forever.</h4>
              <p>Your price never increases as long as you stay subscribed.</p>
            </div>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-eye">Starter</div>
              <h3>Pro</h3>
              <p className="price-desc">Ideal for individual developers running production-level projects with constant
                traffic and no worries about scaling thresholds.</p>
              <div className="price-num">$19<span>/mo</span></div>
              <div className="price-period">Founding rate, normally $29/mo</div>
              <ul className="price-features">
                <li>1 project</li>
                <li>Custom domain + automatic HTTPS</li>
                <li>Up to 50M requests/month</li>
                <li>Up to 1 TB bandwidth</li>
                <li>HTTP/1.1 + HTTP/2</li>
                <li>Developer dashboard</li>
                <li>Email support</li>
              </ul>
              <a href="mailto:hello@datavec.com?subject=DataVec Pro plan" className="btn-outline">Get started</a>
            </div>
            <div className="price-card feat">
              <div className="price-eye">Most popular</div>
              <h3>Business</h3>
              <p className="price-desc">Perfect for growing teams that need high-availability deployments across multiple
                distinct projects and prioritised support channels.</p>
              <div className="price-num">$149<span>/mo</span></div>
              <div className="price-period">Founding rate, normally $199/mo</div>
              <ul className="price-features">
                <li>Up to 5 projects</li>
                <li>Unlimited custom domains</li>
                <li>Up to 500M requests/month</li>
                <li>Up to 10 TB bandwidth</li>
                <li>Priority support + SLA</li>
                <li>Advanced analytics</li>
                <li>Team access controls</li>
                <li>99.9% uptime SLA</li>
              </ul>
              <a href="mailto:hello@datavec.com?subject=DataVec Business plan" className="btn-filled">Get started</a>
            </div>
          </div>

          <div className="enterprise-band">
            <div className="eb-left">
              <h3>Customized Enterprise Scaling</h3>
              <p>For applications processing over 500 million monthly requests, we design a customized flat-rate contract
                tailored to your specific system architecture and transit requirements. You can use the calculator below
                to estimate your potential savings, then reach out to schedule a consultation with our infrastructure
                team.</p>
            </div>
            <a href="mailto:hello@datavec.com?subject=DataVec Enterprise" className="btn-primary">Talk to us</a>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="compare z">
        <div className="wrap">
          <div className="section-header-center small-margin">
            <span className="sec-eye">Feature comparison</span>
            <h2>DataVec vs <em>the rest</em></h2>
          </div>
          <div className="table-wrap">
            <table className="ctable">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="dv">DataVec</th>
                  <th scope="col">Cloudflare Workers</th>
                  <th scope="col">Vercel Edge</th>
                  <th scope="col">Deno Deploy</th>
                  <th scope="col">AWS Lambda</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Web Workers compatible</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="cx">Partial</span></td>
                </tr>
                <tr>
                  <th scope="row">Cold start time</th>
                  <td className="dv">0ms</td>
                  <td>~5ms</td>
                  <td>50–200ms</td>
                  <td>~0ms</td>
                  <td>100–500ms</td>
                </tr>
                <tr>
                  <th scope="row">Billing model</th>
                  <td className="dv">Flat rate</td>
                  <td>Per req + CPU-ms</td>
                  <td>Per CPU-hr + seat</td>
                  <td>Per req + egress</td>
                  <td>Per req + GB-sec</td>
                </tr>
                <tr>
                  <th scope="row">Bandwidth charges</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span> Included</td>
                  <td><span className="ck" aria-label="Yes">✓</span> Free</td>
                  <td><span className="cx" aria-label="No">✗</span> $0.15/GB</td>
                  <td><span className="cx" aria-label="No">✗</span> Metered</td>
                  <td><span className="cx" aria-label="No">✗</span> $0.09/GB</td>
                </tr>
                <tr>
                  <th scope="row">Surprise bills possible</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span> Impossible</td>
                  <td><span className="cx" aria-label="No">✗</span> Common</td>
                  <td><span className="cx" aria-label="No">✗</span> Common</td>
                  <td><span className="cx" aria-label="No">✗</span> Possible</td>
                  <td><span className="cx" aria-label="No">✗</span> Very common</td>
                </tr>
                <tr>
                  <th scope="row">JS execution</th>
                  <td className="dv">Compiled to C</td>
                  <td>V8 isolates</td>
                  <td>V8 isolates</td>
                  <td>V8 isolates</td>
                  <td>Node.js runtime</td>
                </tr>
                <tr>
                  <th scope="row">HTTP/2 support</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span> Native</td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="cx">Via ALB only</span></td>
                </tr>
                <tr>
                  <th scope="row">Automatic HTTPS</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span> Auto</td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="ck" aria-label="Yes">✓</span></td>
                  <td><span className="cx" aria-label="No">✗</span> Manual</td>
                </tr>
                <tr>
                  <th scope="row">Runtime footprint</th>
                  <td className="dv">104 KB</td>
                  <td>~5 MB</td>
                  <td>~20 MB</td>
                  <td>~40 MB</td>
                  <td>~50 MB</td>
                </tr>
                <tr>
                  <th scope="row">Predictable monthly bill</th>
                  <td className="dv"><span className="ck" aria-label="Yes">✓</span> Always</td>
                  <td><span className="cx" aria-label="No">✗</span></td>
                  <td><span className="cx" aria-label="No">✗</span></td>
                  <td><span className="cx" aria-label="No">✗</span></td>
                  <td><span className="cx" aria-label="No">✗</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
