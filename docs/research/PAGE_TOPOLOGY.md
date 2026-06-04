# Page Topology - sp-today.com

## Overview
- **URL:** https://sp-today.com
- **Language:** Arabic (RTL)
- **Theme:** Dark (bg #0f172a, text #f8fafc)
- **Layout:** Max-width container (1280px), 12-column grid

## Sections (Top to Bottom)

| # | Section | Type | Notes |
|---|---------|------|-------|
| 1 | **Header** | Fixed/sticky overlay | z-50, bg-transparent → bg-opaque on scroll, nav + EN toggle + mobile menu |
| 2 | **Ticker** | Flow content | Scrolling rate ticker with pulse loading placeholders |
| 3 | **Hero** | Flow content | Hero gradient bg, city selector, USD hero card + 4 mini cards |
| 4 | **Ad Placement** | Flow content | min-height 90px placeholder |
| 5 | **Main Content Grid** | Flow content | 2-column layout (8/4) |
| 5a | Currency Rates Table | Left column | 6 currencies with buy/sell/change |
| 5b | Gold Prices | Left column | Ounce card + 4 karats table |
| 5c | Silver Prices | Left column | Silver ounce card |
| 5d | Latest News | Left column | Featured card + 4 list items |
| 5e | Energy/Fuel Prices | Left column | Fuel list + electricity tiers table |
| 5f | Sidebar | Right column | Currency converter, world rates, app download |
| 6 | **Footer** | Flow content | 3-column grid with links, social, app badges |
| 7 | **Copyright** | Flow content | Copyright bar |

## Page Layout
- **Document:** `<html lang="ar" dir="rtl">`
- **Body:** `min-h-screen flex flex-col`
- **Header:** `sticky top-0 z-50`
- **Main content:** `flex-1` with `max-w-7xl mx-auto`
- **Footer:** `mt-auto` (sticks to bottom)

## Responsive Breakpoints
- **Desktop (1440px):** Full 12-column grid, hero side-by-side, nav visible
- **Tablet (768px):** Grid collapses to single column, hamburger menu appears
- **Mobile (390px):** Single column, smaller padding, stacked layout
