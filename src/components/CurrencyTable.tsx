const currencies = [
  { code: "USD", key: "dollar", buy: 13910, sell: 13970, change: -0.22 },
  { code: "EUR", key: "euro", buy: 16030, sell: 16230, change: -0.12 },
  { code: "TRY", key: "lira", buy: 300, sell: 304, change: -0.33 },
  { code: "SAR", key: "riyal", buy: 3666, sell: 3719, change: -0.22 },
  { code: "AED", key: "dirham", buy: 3750, sell: 3804, change: -0.21 },
  { code: "EGP", key: "pound", buy: 266, sell: 269, change: 0.00 },
]

/** Simple colored rectangle used as a flag fallback in the currency table. */
function FlagIcon({ code }: { code: string }) {
  const colors: Record<string, string> = {
    USD: "#BD3D44", EUR: "#039", TRY: "#E30A17",
    SAR: "#006C35", AED: "#00732F", EGP: "#CE1126",
  }
  return (
    <svg viewBox="0 0 24 24" className="size-5 rounded-sm">
      <rect width="24" height="24" fill={colors[code] || "#333"} rx="2" />
      <text x="12" y="16" textAnchor="middle" fill="#fff" fontSize="9" fontWeight="700">{code[0]}</text>
    </svg>
  )
}

/**
 * Exchange rates table showing buy/sell prices and daily change for 6 currencies.
 * Column headers and currency names are driven by the dictionary.
 */
export function CurrencyTable({
  lang,
  dict,
}: {
  lang: string
  dict: {
    title: string
    viewAll: string
    currency: string
    buy: string
    sell: string
    change: string
    dollar: string
    euro: string
    lira: string
    riyal: string
    dirham: string
    pound: string
  }
}) {
  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{dict.title}</h2>
        <a href={`/${lang}/currencies`} className="text-sm text-[#D80027] hover:underline">
          {dict.viewAll} ←
        </a>
      </div>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#334155]">
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.currency}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.buy}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.sell}</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.change}</th>
            </tr>
          </thead>
          <tbody>
            {currencies.map((cur) => (
              <tr key={cur.code} className="border-b border-[#334155]/50 last:border-0 hover:bg-[#334155]/30 transition-colors">
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <FlagIcon code={cur.code} />
                    <div>
                      <span className="text-sm font-medium text-white">{cur.code}</span>
                      <span className="text-xs text-[#94a3b8] mr-2">{dict[cur.key as keyof typeof dict]}</span>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-sm text-white">{cur.buy.toLocaleString()}</td>
                <td className="px-4 py-3.5 text-sm text-white">{cur.sell.toLocaleString()}</td>
                <td className="px-4 py-3.5">
                  <span className={`text-xs font-medium ${cur.change < 0 ? "text-red-400" : cur.change > 0 ? "text-green-400" : "text-[#94a3b8]"}`}>
                    {cur.change > 0 ? "+" : ""}{cur.change.toFixed(2)}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
