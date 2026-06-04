const karats = [
  { karat: "24K", usd: 144.00, buy: 1996900, sell: 2020700 },
  { karat: "21K", usd: 126.00, buy: 1747300, sell: 1768200 },
  { karat: "18K", usd: 108.00, buy: 1497700, sell: 1515600 },
  { karat: "14K", usd: 84.00, buy: 1164800, sell: 1178700 },
]

/**
 * Small gold coin badge SVG — circular gradient with the karat number inside.
 */
function GoldCoinBadge({ num, size = "size-6" }: { num: string; size?: string }) {
  const gradId = `coin-grad-${num}`
  const shineId = `coin-shine-${num}`
  return (
    <svg
      viewBox="0 0 28 28"
      className={`${size} shrink-0`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#ca8a04" />
        </linearGradient>
        <radialGradient id={shineId} cx="35%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="14" cy="14" r="13" fill={`url(#${gradId})`} stroke="#d97706" strokeWidth="1" />
      <circle cx="14" cy="14" r="13" fill={`url(#${shineId})`} />
      <circle cx="14" cy="14" r="10" fill="none" stroke="#b45309" strokeWidth="0.5" opacity="0.4" />
      <text x="14" y="18" textAnchor="middle" fill="#78350f" fontSize="10" fontWeight="700">
        {num}
      </text>
    </svg>
  )
}

/**
 * Gold prices section with an ounce summary card and a karat breakdown table.
 * All labels are driven by the dictionary.
 */
export function GoldPrices({
  lang,
  dict,
}: {
  lang: string
  dict: {
    title: string
    viewAll: string
    ounce: string
    change24h: string
    karat: string
    gramUsd: string
    buySyp: string
    sellSyp: string
  }
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{dict.title}</h2>
        <a href={`/${lang}/gold`} className="text-sm text-[#D80027] hover:underline">
          {dict.viewAll} ←
        </a>
      </div>

      {/* Ounce summary card */}
      <div className="bg-gradient-to-br from-amber-900/30 to-amber-800/10 rounded-xl border border-amber-700/30 p-5 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-amber-300/80">{dict.ounce}</p>
            <p className="text-2xl font-bold text-amber-300">$4,465.17</p>
          </div>
          <span className="text-sm text-green-400 flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            +0.70%
          </span>
        </div>
        <p className="text-xs text-amber-300/50 mt-2">{dict.change24h}</p>
      </div>

      {/* Karat breakdown table */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#334155]">
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.karat}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.gramUsd}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.buySyp}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.sellSyp}</th>
            </tr>
          </thead>
          <tbody>
            {karats.map((k) => (
              <tr key={k.karat} className="border-b border-[#334155]/50 last:border-0 hover:bg-[#334155]/30 transition-colors">
                <td className="px-4 py-3.5">
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    <GoldCoinBadge num={k.karat.replace("K", "")} />
                    {k.karat}
                  </span>
                </td>
                <td className="px-4 py-3.5 text-sm text-white">${k.usd.toFixed(2)}</td>
                <td className="px-4 py-3.5 text-sm text-white">{k.buy.toLocaleString()}</td>
                <td className="px-4 py-3.5 text-sm text-white">{k.sell.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
