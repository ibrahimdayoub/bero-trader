"use client"

import { createContext, useContext } from "react"
import type { Lang, Dictionary } from "@/app/[lang]/dictionaries"

type LocaleCtx = {
  lang: Lang
  dict: Dictionary
  dir: "rtl" | "ltr"
}

const LocaleContext = createContext<LocaleCtx | null>(null)

export function LocaleProvider({
  lang,
  dict,
  children,
}: {
  lang: Lang
  dict: Dictionary
  children: React.ReactNode
}) {
  return (
    <LocaleContext.Provider value={{ lang, dict, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
