import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-slate-600">
            © {new Date().getFullYear()} עליזה זק — אדריכלות והנדסה. כל הזכויות שמורות.
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link className="text-slate-600 hover:text-slate-900" href="/services">
              שירותים
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/projects">
              פרויקטים
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/credentials">
              הסמכות
            </Link>
            <Link className="text-slate-600 hover:text-slate-900" href="/contact">
              צור קשר
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
