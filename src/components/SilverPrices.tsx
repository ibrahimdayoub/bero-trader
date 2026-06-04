/**
 * Silver prices section — a single card showing the ounce price and 24h change.
 * All labels are driven by the dictionary.
 */
export function SilverPrices({
  lang,
  dict,
}: {
  lang: string
  dict: {
    title: string
    viewAll: string
    ounce: string
    change24h: string
  }
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{dict.title}</h2>
        <a href={`/${lang}/silver`} className="text-sm text-[#D80027] hover:underline">
          {dict.viewAll} ←
        </a>
      </div>

      <div className="bg-gradient-to-br from-slate-400/20 to-slate-300/5 rounded-xl border border-slate-500/30 p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-300/80">{dict.ounce}</p>
            <p className="text-2xl font-bold text-slate-200">$73.37</p>
          </div>
          <span className="text-sm text-green-400 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            +0.88%
          </span>
        </div>
        <p className="text-xs text-slate-300/50 mt-2">{dict.change24h}</p>
      </div>
    </section>
  )
}
