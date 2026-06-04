import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Supported locales — Arabic is the default
const locales = ["ar", "en"]
const defaultLocale = "ar"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check whether the pathname already carries a known locale prefix
  const hasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  )

  // If it already has a locale, let it through as-is
  if (hasLocale) return

  // Rewrite root '/' (and any unprefixed path) to '/ar' internally.
  // The browser URL stays '/' while Next.js renders the Arabic page.
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.rewrite(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|favicon|images|seo|videos|.*\\..*).*)"],
}
