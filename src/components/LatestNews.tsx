import type { NewsItem } from "@/app/[lang]/dictionaries"

/**
 * Latest news section — renders a featured card + compact list items.
 * All content (titles, dates, excerpts) is driven by the dictionary.
 */
export function LatestNews({
  lang,
  dict,
}: {
  lang: string
  dict: {
    title: string
    viewAll: string
    readMore: string
    items: NewsItem[]
  }
}) {
  const [featured, ...rest] = dict.items

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">{dict.title}</h2>
        <a href={`/${lang}/news`} className="text-sm text-[#D80027] hover:underline">
          {dict.viewAll} ←
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Featured news — large card with image */}
        <a
          href={`/${lang}/news/${featured.slug}`}
          className="group block bg-[#1e293b] rounded-xl border border-[#334155] overflow-hidden hover:bg-[#334155]/50 transition-colors"
        >
          <div className="aspect-[16/9] bg-[#334155] overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              width={400}
              height={225}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <time className="text-xs text-[#94a3b8]">{featured.date}</time>
            <h3 className="text-sm font-medium text-white mt-1.5 leading-relaxed line-clamp-2">{featured.title}</h3>
            {featured.excerpt && (
              <p className="text-xs text-[#94a3b8] mt-2 line-clamp-2">{featured.excerpt}</p>
            )}
          </div>
        </a>

        {/* Compact list — remaining items in a vertical stack */}
        <div className="space-y-3">
          {rest.map((item) => (
            <a
              key={item.slug}
              href={`/${lang}/news/${item.slug}`}
              className="group flex gap-3 p-3 rounded-xl bg-[#1e293b] border border-[#334155] hover:bg-[#334155]/50 transition-colors"
            >
              <div className="shrink-0 w-20 h-20 rounded-lg bg-[#334155] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0 flex-1">
                <time className="text-xs text-[#94a3b8]">{item.date}</time>
                <h3 className="text-sm text-white mt-0.5 leading-relaxed line-clamp-2">{item.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
