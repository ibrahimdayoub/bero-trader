const fuels = [
  { icon: "⛽", usd: 1.10, unitKey: "perLiter" as const, syp: 15370 },
  { icon: "🛢️", usd: 0.88, unitKey: "perLiter" as const, syp: 12290 },
  { icon: "🔵", usd: 12.50, unitKey: "cylinder10kg" as const, syp: 174630 },
]

/**
 * Fuel prices and electricity tariff tables.
 * Fuel types, labels, and tariff descriptions come from the dictionary.
 */
export function EnergyPrices({
  lang,
  dict,
}: {
  lang: string
  dict: {
    title: string
    viewAll: string
    electricity: string
    gasoline: string
    diesel: string
    gas: string
    perLiter: string
    cylinder10kg: string
    tier1Desc: string
    tier2Desc: string
    tier3Desc: string
    price: string
    unit: string
    sypPerKwh: string
    syp: string
    category: string
  }
}) {
  const fuelLabels = [dict.gasoline, dict.diesel, dict.gas]
  const tiers = [dict.tier1Desc, dict.tier2Desc, dict.tier3Desc]
  const unitMap: Record<string, string> = {
    perLiter: dict.perLiter,
    cylinder10kg: dict.cylinder10kg,
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{dict.title}</h2>
        <a href={`/${lang}/energy`} className="text-sm text-[#D80027] hover:underline">
          {dict.viewAll} ←
        </a>
      </div>

      {/* Fuel list */}
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden mb-4">
        <div className="divide-y divide-[#334155]/50">
          {fuels.map((fuel, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-3.5 hover:bg-[#334155]/30 transition-colors">
              <div className="flex items-center gap-2.5">
                <span className="text-lg">{fuel.icon}</span>
                <div>
                  <p className="text-sm font-medium text-white">{fuelLabels[i]}</p>
                  <p className="text-xs text-[#94a3b8]">${fuel.usd.toFixed(2)}{unitMap[fuel.unitKey]}</p>
                </div>
              </div>
              <span className="text-sm text-white font-medium">{fuel.syp.toLocaleString()} {dict.syp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Electricity tariff table */}
      <h3 className="text-base font-medium text-white mb-3">{dict.electricity}</h3>
      <div className="bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#334155]">
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.category}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.price}</th>
              <th className="text-right px-4 py-3 text-xs font-medium text-[#94a3b8]">{dict.unit}</th>
            </tr>
          </thead>
          <tbody>
            {[600, 1400, 1400].map((price, i) => (
              <tr key={i} className="border-b border-[#334155]/50 last:border-0 hover:bg-[#334155]/30 transition-colors">
                <td className="px-4 py-3.5">
                  <p className="text-sm text-white">{tiers[i]}</p>
                </td>
                <td className="px-4 py-3.5 text-sm text-white">{price.toLocaleString()}</td>
                <td className="px-4 py-3.5 text-sm text-[#94a3b8]">{dict.sypPerKwh}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
