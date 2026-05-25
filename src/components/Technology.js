export default function Technology() {
  return (
    <section className="tech z">
      <div className="wrap">
        <div className="section-header-center">
          <span className="sec-eye">The technology</span>
          <h2>The architectural design behind our performance and cost efficiency</h2>
          <p className="sec-sub">We developed two core infrastructure pieces that allow us to bypass standard cloud
            computing overhead entirely.</p>
        </div>
        <div className="tech-grid">
          <div className="tech-card b">
            <div className="tech-tag b">JSMX: JavaScript-to-C Compiler</div>
            <h3>Direct compilation of JavaScript to optimized native code</h3>
            <p>JSMX processes your standard JavaScript files during deployment and compiles them directly into native C
              code before they ever reach a production node. This ensures that what runs on DataVec is a true native
              binary rather than a script executing inside a bulky virtual machine, eliminating interpreter lag,
              background garbage collection pauses, and JIT compilation overhead. As a direct result, cold start delays
              are physically reduced to absolute zero since the executable is loaded directly by the kernel.</p>
            <div className="tech-metrics">
              <div className="tm">
                <div className="tm-val b">~100x</div>
                <div className="tm-label">faster than interpreted JS</div>
              </div>
              <div className="tm">
                <div className="tm-val b">0ms</div>
                <div className="tm-label">cold start</div>
              </div>
              <div className="tm">
                <div className="tm-val b">Native</div>
                <div className="tm-label">CPU execution</div>
              </div>
            </div>
          </div>
          <div className="tech-card g">
            <div className="tech-tag g">MNVKD: Micro-Native Runtime</div>
            <h3>A highly consolidated, ultra-compact native runtime</h3>
            <p>MNVKD acts as our ultra-lightweight execution container, packing routing, secure TLS handshakes, HTTP/1.1
              and HTTP/2 protocol support, memory management, and microthread scheduling into a single 104 KB binary.
              While legacy cloud platforms like AWS Lambda stitch together more than a dozen discrete backend services
              to coordinate the same request pipeline, MNVKD processes all operations natively inside a single process,
              enabling us to run infrastructure at a fraction of typical industry costs and confidently offer fixed
              flat-rate pricing plans.</p>
            <div className="tech-metrics">
              <div className="tm">
                <div className="tm-val g">104KB</div>
                <div className="tm-label">total runtime</div>
              </div>
              <div className="tm">
                <div className="tm-val g">300K+</div>
                <div className="tm-label">req/sec per instance</div>
              </div>
              <div className="tm">
                <div className="tm-val g">1 binary</div>
                <div className="tm-label">vs a dozen AWS services</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
