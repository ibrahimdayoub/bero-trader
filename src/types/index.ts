export interface CurrencyRate {
  code: string;
  name: string;
  nameAr: string;
  buy: number;
  sell: number;
  change: number;
  flag: string;
}

export interface GoldKarats {
  karat: string;
  usdPrice: number;
  buySyp: number;
  sellSyp: number;
}

export interface GoldPrice {
  ounceUsd: number;
  ounceChange: number;
  karats: GoldKarats[];
}

export interface SilverPrice {
  ounceUsd: number;
  ounceChange: number;
}

export interface NewsItem {
  date: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

export interface FuelPrice {
  name: string;
  icon: string;
  usdPrice: string;
  sypPrice: number;
}

export interface ElectricityTier {
  name: string;
  description: string;
  price: number;
  unit: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface FooterLink {
  label: string;
  path: string;
}
