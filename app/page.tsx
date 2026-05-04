export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          Sales Intelligence for Engineering Orgs
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Catch Engineering Hiring Signals<br />
          <span className="text-[#58a6ff]">Before Your Competitors Do</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor GitHub repos for team growth, new contributor patterns, and project scaling — so your sales team reaches out at exactly the right moment.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start Tracking — $17/mo
        </a>
        <div className="mt-8 grid grid-cols-3 gap-6 text-center">
          {[
            ["GitHub API", "Real-time data"],
            ["Hiring Signals", "Auto-detected"],
            ["Instant Alerts", "For your team"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <div className="text-[#58a6ff] font-semibold text-sm">{title}</div>
              <div className="text-[#8b949e] text-xs mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wide mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Monitor unlimited GitHub repos",
              "Detect new contributors & team growth",
              "Project scaling pattern alerts",
              "Weekly digest for your sales team",
              "CSV export for CRM import"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#3fb950] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#238636] hover:bg-[#2ea043] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What hiring signals does it detect?",
              "We track new contributors joining repos, spikes in commit activity, new team members appearing in org membership, and rapid growth in issues and pull requests — all strong indicators of active hiring."
            ],
            [
              "Do I need a GitHub token?",
              "Yes, you'll connect your GitHub token during onboarding. This lets us access public and (optionally) private org data within your rate limits."
            ],
            [
              "Can I cancel anytime?",
              "Absolutely. Cancel anytime from your billing portal — no questions asked, no lock-in."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
