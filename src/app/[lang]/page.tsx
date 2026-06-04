import { notFound } from "next/navigation"
import { isValidLang, getDictionary } from "./dictionaries"
import { LocaleProvider } from "@/i18n/locale-context"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { CurrencyTable } from "@/components/CurrencyTable"
import { GoldPrices } from "@/components/GoldPrices"
import { SilverPrices } from "@/components/SilverPrices"
import { LatestNews } from "@/components/LatestNews"
import { EnergyPrices } from "@/components/EnergyPrices"
import { Sidebar } from "@/components/Sidebar"
import { Footer } from "@/components/Footer"

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (!isValidLang(lang)) notFound()

  const dict = await getDictionary(lang)

  return (
    <LocaleProvider lang={lang} dict={dict}>
      <Header />
      <HeroSection lang={lang} dict={dict.hero} />
      <main id="main-content" className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8 space-y-10 lg:space-y-12">
              <CurrencyTable lang={lang} dict={dict.currencyTable} />
              <GoldPrices lang={lang} dict={dict.gold} />
              <SilverPrices lang={lang} dict={dict.silver} />
              <LatestNews lang={lang} dict={dict.news} />
              <EnergyPrices lang={lang} dict={dict.energy} />
            </div>
            <div className="lg:col-span-4">
              <Sidebar lang={lang} dict={dict.sidebar} />
            </div>
          </div>
        </div>
      </main>
      <Footer lang={lang} dict={dict.footer} siteDict={dict.site} />
    </LocaleProvider>
  )
}
