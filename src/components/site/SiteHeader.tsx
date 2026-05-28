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
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-sm font-bold text-white">
              ע״ז
            </span>
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
            >
              לייעוץ ראשוני
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
