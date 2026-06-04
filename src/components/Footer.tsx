import { FacebookIcon, WhatsAppIcon, TelegramIcon, AppStoreIcon, GooglePlayIcon } from "@/components/icons"
import Image from "next/image"

/**
 * Site footer with brand description, quick links, about links,
 * social icons, and app store badges. All text is dictionary-driven.
 */
export function Footer({
  lang,
  dict,
  siteDict,
}: {
  lang: string
  dict: {
    quickLinks: string
    about: string
    exchangeRates: string
    gold: string
    silver: string
    crypto: string
    energy: string
    news: string
    advertise: string
    contact: string
    api: string
    followUs: string
  }
  siteDict: {
    footerDescription: string
    copyright: string
  }
}) {
  const quickLinks = [
    { label: dict.exchangeRates, path: "/currencies" },
    { label: dict.gold, path: "/gold" },
    { label: dict.silver, path: "/silver" },
    { label: dict.crypto, path: "/crypto" },
    { label: dict.energy, path: "/energy" },
    { label: dict.news, path: "/news" },
  ]
  const aboutLinks = [
    { label: dict.advertise, path: "/advertise" },
    { label: dict.contact, path: "/contact" },
    { label: dict.api, path: "/sptoday-api" },
  ]

  return (
    <footer className="mt-auto bg-[#1e293b] border-t border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2">
            <a href={`/${lang}`} className="flex items-center gap-2 mb-3">
              <Image
                src="/images/logo.svg" // Path relative to the public folder
                alt="Website Cloner Logo"
                width={200}            // Explicit width in pixels for optimization
                height={100}           // Explicit height in pixels for optimization
                className="object-contain"
              />
            </a>
          </div>

            <p className="text-sm text-[#94a3b8] leading-relaxed">{siteDict.footerDescription}</p>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">{dict.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <a href={`/${lang}${link.path}`} className="text-sm text-[#94a3b8] hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* About + social column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">{dict.about}</h3>
            <ul className="space-y-2 mb-4">
              {aboutLinks.map((link) => (
                <li key={link.path}>
                  <a href={link.path} className="text-sm text-[#94a3b8] hover:text-white transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold text-white mb-3">{dict.followUs}</h3>
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#334155] text-[#94a3b8] hover:bg-[#1877F2] hover:text-white transition-all">
                <FacebookIcon className="size-4" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#334155] text-[#94a3b8] hover:bg-[#25D366] hover:text-white transition-all">
                <WhatsAppIcon className="size-4" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-[#334155] text-[#94a3b8] hover:bg-[#0088cc] hover:text-white transition-all">
                <TelegramIcon className="size-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#334155] text-[#94a3b8] hover:text-white hover:bg-[#334155]/80 text-xs transition-colors">
                <AppStoreIcon className="size-3.5" /> App Store
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sptoday" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#334155] text-[#94a3b8] hover:text-white hover:bg-[#334155]/80 text-xs transition-colors">
                <GooglePlayIcon className="size-3.5" /> Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-[#334155] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-[#94a3b8] text-center">{siteDict.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
