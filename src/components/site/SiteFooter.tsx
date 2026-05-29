import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          <div className="flex items-start gap-4">
            <Image
              src="/AlizaLogo.png"
              alt="עליזה זק — אדריכלות והנדסה"
              width={72}
              height={72}
              className="h-16 w-16 shrink-0 object-contain"
            />
            <div>
              <div className="text-sm font-semibold text-slate-900">עליזה זק</div>
              <div className="text-xs text-slate-500">אדריכלות והנדסה</div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600">
                תכנון אדריכלי והנדסי מדויק — מבתים פרטיים ועד פרויקטים ציבוריים.
              </p>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              ניווט
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/services">
                  שירותים
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/projects">
                  פרויקטים
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/credentials">
                  הסמכות
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900" href="/contact">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              צרי קשר
            </div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900"
                  href="tel:+972548060673"
                  dir="ltr"
                >
                  054-806-0673
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900"
                  href="mailto:azack1962@gmail.com"
                  dir="ltr"
                >
                  azack1962@gmail.com
                </a>
              </li>
              <li>
                <a
                  className="text-slate-600 hover:text-slate-900"
                  href="https://wa.me/972548060673"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} עליזה זק — אדריכלות והנדסה. כל הזכויות שמורות.
        </div>
      </Container>
    </footer>
  );
}
