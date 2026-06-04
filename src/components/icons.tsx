import type { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 40" fill="none" {...props}>
      <rect width="120" height="40" rx="8" fill="#D80027" />
      <text x="60" y="26" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="sans-serif">الليرة اليوم</text>
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

export function ChevronDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

export function SYPIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#CE1126" />
      <rect y="20" width="64" height="24" fill="#fff" />
      <rect y="24" width="64" height="16" fill="#000" />
      <circle cx="32" cy="32" r="6" fill="#007A3D" />
      <polygon points="29,26 32,20 35,26 29,30 35,30" fill="none" stroke="#fff" strokeWidth="0.5" />
    </svg>
  );
}

export function USDIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#BD3D44" />
      <rect width="64" height="7.1" y="0" fill="#fff" />
      <rect width="64" height="7.1" y="14.2" fill="#fff" />
      <rect width="64" height="7.1" y="28.4" fill="#fff" />
      <rect width="64" height="7.1" y="42.6" fill="#fff" />
      <rect width="64" height="7.1" y="56.8" fill="#fff" />
      <rect width="30" height="32" fill="#192F5D" />
      <line x1="2" y1="0" x2="2" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="6" y1="0" x2="6" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="10" y1="0" x2="10" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="14" y1="0" x2="14" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="18" y1="0" x2="18" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="22" y1="0" x2="22" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="26" y1="0" x2="26" y2="32" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="4" x2="30" y2="4" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="8" x2="30" y2="8" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="12" x2="30" y2="12" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="16" x2="30" y2="16" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="20" x2="30" y2="20" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="24" x2="30" y2="24" stroke="#fff" strokeWidth="0.5" />
      <line x1="0" y1="28" x2="30" y2="28" stroke="#fff" strokeWidth="0.5" />
    </svg>
  );
}

export function EURIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#039" />
      <circle cx="32" cy="32" r="12" fill="none" stroke="#FC0" strokeWidth="2" />
      <line x1="20" y1="32" x2="44" y2="32" stroke="#FC0" strokeWidth="2" />
      <line x1="24" y1="22" x2="40" y2="42" stroke="#FC0" strokeWidth="2" />
      <line x1="40" y1="22" x2="24" y2="42" stroke="#FC0" strokeWidth="2" />
    </svg>
  );
}

export function TRYIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#E30A17" />
      <circle cx="30" cy="32" r="12" fill="#fff" />
      <polygon points="30,32 42,24 42,40" fill="#E30A17" />
    </svg>
  );
}

export function SARIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#006C35" />
      <text x="32" y="44" textAnchor="middle" fill="#fff" fontSize="24" fontFamily="serif">﷼</text>
    </svg>
  );
}

export function AEDIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#00732F" />
      <rect width="12" height="64" fill="#FF0000" />
      <text x="38" y="44" textAnchor="middle" fill="#fff" fontSize="20" fontFamily="serif">د.إ</text>
    </svg>
  );
}

export function EGPIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#CE1126" />
      <rect y="20" width="64" height="24" fill="#fff" />
      <rect y="24" width="64" height="16" fill="#000" />
      <polygon points="32,22 36,30 28,28 36,28 28,30" fill="#C09300" />
    </svg>
  );
}

export function GBPIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <rect width="64" height="64" fill="#012169" />
      <rect width="64" height="64" fill="url(#g)" />
      <defs>
        <pattern id="g" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#fff" />
          <rect x="4" y="4" width="4" height="4" fill="#fff" />
        </pattern>
      </defs>
      <rect width="64" height="64" fill="none" stroke="#C8102E" strokeWidth="2" />
    </svg>
  );
}

export function AppStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  );
}

export function GooglePlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.523 12.765l-3.02 3.024-1.472-1.472 4.492-4.492 1.472 1.472-1.472 1.468zm-4.492 4.492L2.076 6.124c.116-.536.664-.968 1.244-.968h17.364c.58 0 1.128.432 1.244.968l-10.955 10.956-1.472 1.472-1.472-1.472-1.604-1.604 1.472-1.472 1.604 1.604zM7.112 7.112l1.472 1.472-1.472 1.472L5.64 8.584l1.472-1.472zm0 0L5.64 8.584l-1.472 1.472 1.472-1.472 1.472-1.472zm10.956 10.956l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm-10.956 0l-1.472-1.472 1.472-1.472 1.472 1.472-1.472 1.472zm0 0" />
    </svg>
  );
}

export function TrendingDownIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

export function TrendingUpIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export function FlameIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 23c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7zm0-2c2.761 0 5-2.239 5-5 0-2.761-2.239-5-5-5s-5 2.239-5 5c0 2.761 2.239 5 5 5zm-1-16.5V1h2v3.5h-2zM5.636 5.636L4.222 4.222l1.414-1.414 1.414 1.414L5.636 5.636zM19.778 4.222l-1.414 1.414-1.414-1.414 1.414-1.414 1.414 1.414zM12 8c-4.418 0-8 3.582-8 8 0 1.465.398 2.835 1.085 4h13.83A7.95 7.95 0 0020 16c0-4.418-3.582-8-8-8z" />
    </svg>
  );
}
