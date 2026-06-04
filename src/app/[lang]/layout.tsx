import type { Metadata } from "next"
import { IBM_Plex_Sans_Arabic } from "next/font/google"
import { notFound } from "next/navigation"
import { isValidLang } from "./dictionaries"
import "../globals.css"

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-plex-sans-arabic",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  const { lang } = await params

  if (!isValidLang(lang)) return {}

  const isArabic = lang === "ar"

  return {
    title: isArabic
      ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0644\u064A\u0631\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629 | \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A"
      : "Syrian Pound Today | Currency Exchange & Gold Prices",
    description: isArabic
      ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0644\u064A\u0631\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629 \u0627\u0644\u0623\u0648\u0644 \u0644\u0645\u062A\u0627\u0628\u0639\u0629 \u0623\u0633\u0639\u0627\u0631 \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0648\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0641\u0636\u0629 \u0641\u064A \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0648\u0631\u064A\u0629 \u0628\u062A\u062D\u062F\u064A\u062B \u0645\u0628\u0627\u0634\u0631 \u0648\u0645\u062C\u0627\u0646\u064A."
      : "Syrian Pound Today \u2014 real-time currency exchange rates, gold and silver prices, and energy tariffs in Syria. Accurate, up-to-date, and free.",
    openGraph: {
      locale: isArabic ? "ar_SY" : "en_US",
      siteName: isArabic
        ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0644\u064A\u0631\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629"
        : "Syrian Pound Today",
      title: isArabic
        ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0644\u064A\u0631\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629 | \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A"
        : "Syrian Pound Today | Currency Exchange & Gold Prices",
      description: isArabic
        ? "\u0623\u0633\u0639\u0627\u0631 \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0648\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0641\u0636\u0629 \u0641\u064A \u0633\u0648\u0631\u064A\u0627 \u2014 \u062A\u062D\u062F\u064A\u062B \u064A\u0648\u0645\u064A \u0645\u0628\u0627\u0634\u0631."
        : "Currency exchange rates, gold & silver prices in Syria \u2014 updated daily.",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "\u0645\u0648\u0642\u0639 \u0627\u0644\u0644\u064A\u0631\u0629 \u0627\u0644\u0633\u0648\u0631\u064A\u0629 | \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A"
        : "Syrian Pound Today | Currency Exchange & Gold Prices",
      description: isArabic
        ? "\u0623\u0633\u0639\u0627\u0631 \u0635\u0631\u0641 \u0627\u0644\u0639\u0645\u0644\u0627\u062A \u0648\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0641\u0636\u0629 \u0641\u064A \u0633\u0648\u0631\u064A\u0627."
        : "Currency exchange rates, gold & silver prices in Syria.",
    },
    alternates: {
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isValidLang(lang)) notFound()

  const dir = lang === "ar" ? "rtl" : "ltr"

  return (
    <html
      lang={lang}
      dir={dir}
      className={`${ibmPlexSansArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  )
}
