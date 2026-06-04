# CurrencyTable Specification

## Overview
- **Target file:** `src/components/CurrencyTable.tsx`
- **Interaction model:** static + hover states

## DOM Structure
section > [header + table]

## Computed Styles
- **Table bg:** bg-[#1e293b], rounded-xl, border-[#334155]
- **Header cells:** text-xs, font-medium, text-[#94a3b8]
- **Cells:** py-3.5, text-sm, text-white
- **Flag icons:** size-5, rounded-sm
- **Change color:** red (#red-400) for negative, green (#green-400) for positive

## Text Content
6 currencies: USD, EUR, TRY, SAR, AED, EGP with buy/sell/change values
