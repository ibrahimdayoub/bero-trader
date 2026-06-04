# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Interaction model:** static + hover states + mobile toggle

## DOM Structure
header.sticky.top-0.z-50 > div.max-w-7xl > div.flex > [logo + nav + controls]

## States & Behaviors
- **Desktop:** Nav items visible inline
- **Mobile (<768px):** Hamburger button, nav hidden in collapsible panel
- **Hover:** Links change from #94a3b8 to #fff

## Text Content
- Logo: "الليرة اليوم"
- Nav: العملات, الذهب, الفضة, العملات الرقمية, الطاقة, المحفظة, الأخبار
- Toggle: EN
- Badge: التطبيق

## Assets
- Logo: text-based (no image)
