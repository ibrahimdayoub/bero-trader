import "server-only"

export const locales = ["ar", "en"] as const
export type Lang = (typeof locales)[number]

/** Structure for a single news article entry */
export interface NewsItem {
  date: string
  title: string
  excerpt: string
  slug: string
  image: string
}

/** Fully typed dictionary structure matching both JSON files */
export type Dictionary = {
  site: {
    title: string
    description: string
    footerDescription: string
    copyright: string
  }
  nav: {
    currencies: string
    gold: string
    silver: string
    crypto: string
    energy: string
    portfolio: string
    news: string
  }
  header: {
    appDownload: string
    toggleLanguage: string
  }
  hero: {
    usdPrice: string
    buySell: string
    cityDefault: string
    cityHasaka: string
    syp: string
  }
  currencyTable: {
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
  gold: {
    title: string
    viewAll: string
    ounce: string
    change24h: string
    karat: string
    gramUsd: string
    buySyp: string
    sellSyp: string
  }
  silver: {
    title: string
    viewAll: string
    ounce: string
    change24h: string
  }
  news: {
    title: string
    viewAll: string
    readMore: string
    items: NewsItem[]
  }
  energy: {
    title: string
    viewAll: string
    electricity: string
    gasoline: string
    diesel: string
    gas: string
    perLiter: string
    cylinder10kg: string
    tier1: string
    tier1Desc: string
    tier2: string
    tier2Desc: string
    tier3: string
    tier3Desc: string
    price: string
    unit: string
    sypPerKwh: string
    syp: string
    category: string
  }
  sidebar: {
    converter: string
    buy: string
    sell: string
    worldRates: string
    downloadApp: string
    downloadDesc: string
  }
  footer: {
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
    more: string
  }
}

export function isValidLang(lang: string): lang is Lang {
  return locales.includes(lang as Lang)
}

export async function getDictionary(lang: Lang): Promise<Dictionary> {
  const dict = await import(`./dictionaries/${lang}.json`)
  return dict.default as Dictionary
}
