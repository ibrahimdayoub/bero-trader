/**
 * Hero section displaying the primary USD rate alongside mini currency cards.
 * The city placeholder and rate labels are driven by the dictionary.
 */
export function HeroSection({
  lang,
  dict,
}: {
  lang: string
  dict: {
    usdPrice: string
    buySell: string
    cityDefault: string
    cityHasaka: string
    syp: string
  }
}) {
  return (
    <section className="hero-gradient text-white pb-8 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {/* City selector */}
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            {dict.cityDefault}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          {/* Primary USD hero card */}
          <div className="lg:col-span-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-4">
              {/* US flag */}
              <svg viewBox="0 0 64 64" className="size-10 rounded-full">
                <rect width="64" height="64" fill="#BD3D44" />
                {[0, 14.2, 28.4, 42.6, 56.8].map((y) => (
                  <rect key={y} width="64" height="7.1" y={y} fill="#fff" />
                ))}
                <rect width="30" height="32" fill="#192F5D" />
              </svg>
              <div>
                <p className="text-sm text-white/60">{dict.usdPrice}</p>
              </div>
            </div>
            <div className="flex items-baseline gap-2 mb-3 flex-wrap">
              <span className="text-4xl lg:text-5xl font-bold tracking-tight red-glow">13,910</span>
              <span className="text-lg text-white/60">-</span>
              <span className="text-4xl lg:text-5xl font-bold tracking-tight">13,970</span>
              <span className="text-sm text-white/40 mr-2">{dict.syp}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm flex-wrap">
              <span className="px-2 py-0.5 rounded text-xs font-medium bg-red-500/20 text-red-400">{dict.buySell}</span>
              <span className="text-red-400 flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3.5">
                  <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                  <polyline points="16 17 22 17 22 11" />
                </svg>
                0.22%
              </span>
            </div>
          </div>

          {/* Mini currency cards */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-3">
            {[
              { code: "EUR", buy: 16030, change: -0.12 },
              { code: "TRY", buy: 300, change: -0.33 },
              { code: "SAR", buy: 3666, change: -0.22 },
              { code: "EGP", buy: 266, change: 0.00 },
            ].map((cur) => (
              <div key={cur.code} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-white/80">{cur.code}</span>
                </div>
                <p className="text-sm text-white/60">{cur.buy.toLocaleString()} {dict.syp}</p>
                <span className={`text-xs flex items-center gap-0.5 mt-1 ${cur.change < 0 ? "text-red-400" : "text-green-400"}`}>
                  {cur.change < 0 ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-3">
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                  ) : null}
                  {Math.abs(cur.change)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
