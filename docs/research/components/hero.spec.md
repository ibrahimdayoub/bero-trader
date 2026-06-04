# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** static + city selector dropdown

## DOM Structure
section.hero-gradient > div.max-w-7xl > [city-selector + grid: USD hero card + 4 mini cards]

## Computed Styles
- **Container:** hero-gradient (linear-gradient 135deg, #0f172a → #1a2744 → #0f172a), text-white
- **USD Card:** bg-white/5, backdrop-blur-sm, rounded-2xl, border-white/10
- **Mini Cards:** bg-white/5, rounded-xl, border-white/10, grid-cols-2
- **USD Rate:** text-4xl lg:text-5xl, font-bold, red-glow

## Text Content
- USD buy: 13,910
- USD sell: 13,970
- Change: -0.22%
- EUR: 16,030
- TRY: 300
- SAR: 3,666
- EGP: 266
