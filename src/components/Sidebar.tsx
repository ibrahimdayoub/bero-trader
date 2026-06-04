"use client"

/**
 * Right sidebar containing the currency converter widget,
 * world exchange rate pairs, and an app download callout.
 */
export function Sidebar({
  lang,
  dict,
}: {
  lang: string
  dict: {
    converter: string
    buy: string
    sell: string
    worldRates: string
    downloadApp: string
    downloadDesc: string
  }
}) {
  const currencies = [
    "SYP", "USD", "EUR", "TRY", "SAR", "AED", "EGP", "LYD", "JOD", "KWD", "GBP",
    "QAR", "BHD", "SEK", "CAD", "OMR", "NOK", "DKK", "DZD", "MAD", "TND", "RUB",
    "MYR", "BRL", "NZD", "CHF", "AUD", "ZAR", "IQD", "IRR", "SGD",
  ]

  const worldRates = [
    { pair: "EUR/USD", rate: "1.1620" },
    { pair: "GBP/USD", rate: "1.3436" },
    { pair: "USD/TRY", rate: "45.9748" },
  ]

  return (
    <aside className="space-y-6">
      {/* Currency converter widget */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
        <h3 className="text-sm font-semibold text-white mb-4">{dict.converter}</h3>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-[#94a3b8] mb-1.5 block">{dict.buy}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="any"
                placeholder="0.00"
                className="flex-1 h-9 px-3 rounded-lg bg-[#0f172a] border border-[#334155] text-sm text-white placeholder:text-[#64748b] font-mono tabular-nums outline-none focus:border-[#D80027] transition-colors"
              />
              <select className="h-9 px-2 rounded-lg bg-[#0f172a] border border-[#334155] text-sm text-white outline-none appearance-none bg-transparent focus:border-[#D80027] transition-colors">
                {currencies.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-xs text-[#94a3b8] mb-1.5 block">{dict.sell}</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="any"
                placeholder="0.00"
                readOnly
                className="flex-1 h-9 px-3 rounded-lg bg-[#0f172a] border border-[#334155] text-sm text-white placeholder:text-[#64748b] font-mono tabular-nums outline-none"
              />
              <select className="h-9 px-2 rounded-lg bg-[#0f172a] border border-[#334155] text-sm text-white outline-none appearance-none bg-transparent focus:border-[#D80027] transition-colors">
                {currencies.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* World exchange rates */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] p-5">
        <h3 className="text-sm font-semibold text-white mb-4">{dict.worldRates}</h3>
        <div className="space-y-3">
          {worldRates.map((r) => (
            <div key={r.pair} className="flex items-center justify-between">
              <span className="text-sm text-[#94a3b8]">{r.pair}</span>
              <span className="text-sm font-medium text-white font-mono tabular-nums">{r.rate}</span>
            </div>
          ))}
        </div>
      </div>

      {/* App download cards */}
      <div className="bg-gradient-to-br from-[#D80027]/10 to-[#D80027]/5 rounded-xl border border-[#D80027]/20 p-5">
        <h3 className="text-sm font-semibold text-white mb-2">{dict.downloadApp}</h3>
        <p className="text-xs text-[#94a3b8] mb-3">{dict.downloadDesc}</p>
        <div className="space-y-2">
          <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-9 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            App Store
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.sptoday" target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 h-9 rounded-lg bg-white/10 text-white text-sm hover:bg-white/20 transition-colors">
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
              <path d="M17.523 12.765l-3.02 3.024-1.472-1.472 4.492-4.492 1.472 1.472-1.472 1.468zm-4.492 4.492L2.076 6.124c.116-.536.664-.968 1.244-.968h17.364c.58 0 1.128.432 1.244.968l-10.955 10.956-1.472 1.472-1.472-1.472-1.604-1.604 1.472-1.472 1.604 1.604zM7.112 7.112l1.472 1.472-1.472 1.472L5.64 8.584l1.472-1.472zm0 0L5.64 8.584l-1.472 1.472 1.472-1.472 1.472-1.472zm10.956 10.956l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm-10.956 0l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm0 0" />
            </svg>
            Google Play
          </a>
        </div>
      </div>
    </aside>
  )
}
