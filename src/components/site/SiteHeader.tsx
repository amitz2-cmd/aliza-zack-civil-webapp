import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const nav = [
  { href: "/services", label: "שירותים" },
  { href: "/credentials", label: "הסמכות" },
  { href: "/projects", label: "פרויקטים" },
  { href: "/contact", label: "צור קשר" }
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/AlizaLogo.png"
              alt="עליזה זק — אדריכלות והנדסה"
              width={72}
              height={72}
              priority
              className="h-16 w-16 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm font-semibold">עליזה זק</div>
              <div className="text-xs text-slate-500">אדריכלות והנדסה</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {nav.map((item) => (
              <Link key={item.href} className="hover:text-slate-900" href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+972548060673"
              className="inline-flex items-center justify-center gap-1 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              <span>📞</span> לייעוץ ראשוני
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
