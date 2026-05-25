export default function Pitch() {
  return (
    <section className="pitch z">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">What makes Datavec different?</span>
          <h2>Enjoy standard runtime compatibility with <em2>predictable flat pricing.</em2></h2>
          <p className="sec-sub">Unlike other modern serverless providers that dynamic-charge you for every million
            requests, CPU millisecond, or gigabyte of transit, DataVec lets you lock in a static, predictable monthly
            hosting cost based entirely on your high-level project size.</p>
        </div>
        <div className="pitch-panels">
          <div className="panel highlight">
            <div className="panel-name">DataVec</div>
            <div className="pitch-row"><span className="pitch-key">Billing model</span><span className="pitch-val good">Flat rate</span></div>
            <div className="pitch-row"><span className="pitch-key">Base cost</span><span className="pitch-val good">From $19/mo</span></div>
            <div className="pitch-row"><span className="pitch-key">Extra requests</span><span className="pitch-val good">None. Flat.</span></div>
            <div className="pitch-row"><span className="pitch-key">CPU overage</span><span className="pitch-val good">None. Flat.</span></div>
            <div className="pitch-row"><span className="pitch-key">Bandwidth</span><span className="pitch-val good">Included flat</span></div>
            <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val good">0ms</span></div>
            <div className="pitch-row"><span className="pitch-key">500M req/mo bill</span><span className="pitch-val good">Use the calculator</span></div>
          </div>
          <div className="panel">
            <div className="panel-name">Cloudflare Workers</div>
            <div className="pitch-row"><span className="pitch-key">Billing model</span><span className="pitch-val bad">Per request + CPU-ms</span></div>
            <div className="pitch-row"><span className="pitch-key">Base cost</span><span className="pitch-val">$5/mo</span></div>
            <div className="pitch-row"><span className="pitch-key">Extra requests</span><span className="pitch-val bad">$0.30/M after 10M</span></div>
            <div className="pitch-row"><span className="pitch-key">CPU overage</span><span className="pitch-val bad">$0.02/M CPU-ms after 30M</span></div>
            <div className="pitch-row"><span className="pitch-key">Bandwidth</span><span className="pitch-val good">Free</span></div>
            <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val bad">~5ms</span></div>
            <div className="pitch-row"><span className="pitch-key">500M req/mo bill</span><span className="pitch-val bad">~$3,200+/mo</span></div>
          </div>
          <div className="panel">
            <div className="panel-name">Vercel Edge Functions</div>
            <div className="pitch-row"><span className="pitch-key">Billing model</span><span className="pitch-val bad">Per CPU-hr + seats</span></div>
            <div className="pitch-row"><span className="pitch-key">Base cost</span><span className="pitch-val">$20/user/mo</span></div>
            <div className="pitch-row"><span className="pitch-key">CPU cost</span><span className="pitch-val bad">$0.128/CPU-hr</span></div>
            <div className="pitch-row"><span className="pitch-key">Memory</span><span className="pitch-val bad">$0.0106/GB-hr</span></div>
            <div className="pitch-row"><span className="pitch-key">Bandwidth</span><span className="pitch-val bad">$0.15/GB over 1TB</span></div>
            <div className="pitch-row"><span className="pitch-key">Cold starts</span><span className="pitch-val bad">50–200ms</span></div>
            <div className="pitch-row"><span className="pitch-key">AI streaming bill</span><span className="pitch-val bad">Quotas gone in days</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
