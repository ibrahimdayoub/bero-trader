"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { useLocale } from "@/i18n/locale-context"
import { cn } from "@/lib/utils"
import { MenuIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import Image from "next/image"

/**
 * Top navigation bar with sticky positioning, locale-aware nav links,
 * and a language toggle that preserves the current path.
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, dict } = useLocale()
  const pathname = usePathname()

  // Build the language-switch URL safely handling the root path
  const otherLang = lang === "ar" ? "en" : "ar"

  // If we are at the default root "/", simply point to the other language route (e.g., /en)
  // Otherwise, handle path replacement normally
  const switchPath = pathname === "/"
    ? `/${otherLang}`
    : pathname.startsWith(`/${lang}`)
      ? pathname.replace(`/${lang}`, `/${otherLang}`)
      : `/${otherLang}${pathname}`

  const navItems = [
    { label: dict.nav.currencies, path: "/currencies" },
    { label: dict.nav.gold, path: "/gold" },
    { label: dict.nav.silver, path: "/silver" },
    { label: dict.nav.crypto, path: "/crypto" },
    { label: dict.nav.energy, path: "/energy" },
    { label: dict.nav.portfolio, path: "/portfolio" },
    { label: dict.nav.news, path: "/news" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#0f172a]/90 backdrop-blur-md border-b border-[#334155]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand logo */}
          <div className="flex items-center gap-2">
            <a href={`/${lang}`} className="flex items-center gap-2">
              <Image
                src="/images/logo.svg" // Path relative to the public folder
                alt="Bero Trader Logo"
                width={200}            // Explicit width in pixels for optimization
                height={100}           // Explicit height in pixels for optimization
                className="object-contain"
                priority              // Tells Next.js to load this image instantly (good for headers)
              />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={`/${lang}${item.path}`}
                className="px-3 py-2 text-sm text-[#94a3b8] hover:text-white hover:bg-[#334155]/50 rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right-side controls */}
          <div className="flex items-center gap-2">
            {/* Language toggle pill */}
            <a
              href={switchPath || `/${otherLang}`}
              className="hidden sm:inline-flex h-8 w-10 items-center justify-center rounded-full border border-[#334155] text-xs font-medium text-[#94a3b8] hover:text-white hover:border-white/30 transition-colors"
            >
              {dict.header.toggleLanguage}
            </a>
            {/* Google Play badge (desktop) */}
            <a
              href="https://play.google.com/store/apps/details?id=com.sptoday"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-8 px-3 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-medium hover:bg-amber-500/20 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                <path d="M17.523 12.765l-3.02 3.024-1.472-1.472 4.492-4.492 1.472 1.472-1.472 1.468zm-4.492 4.492L2.076 6.124c.116-.536.664-.968 1.244-.968h17.364c.58 0 1.128.432 1.244.968l-10.955 10.956-1.472 1.472-1.472-1.472-1.604-1.604 1.472-1.472 1.604 1.604zM7.112 7.112l1.472 1.472-1.472 1.472L5.64 8.584l1.472-1.472zm0 0L5.64 8.584l-1.472 1.472 1.472-1.472 1.472-1.472zm10.956 10.956l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm-10.956 0l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm0 0" />
              </svg>
              {dict.header.appDownload}
            </a>
            {/* Mobile hamburger */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-[#94a3b8]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <MenuIcon className="size-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile navigation panel — collapses with max-height transition */}
      <div
        className={cn(
          "md:hidden border-t border-[#334155] overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={`/${lang}${item.path}`}
              className="block px-3 py-2.5 text-sm text-[#94a3b8] hover:text-white hover:bg-[#334155]/50 rounded-lg transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={switchPath || `/${otherLang}`}
            className="block px-3 py-2.5 text-sm text-[#94a3b8] hover:text-white hover:bg-[#334155]/50 rounded-lg transition-colors"
          >
            {dict.header.toggleLanguage}
          </a>
        </nav>
      </div>
    </header>
  )
}
