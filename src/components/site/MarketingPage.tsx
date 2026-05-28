import type { ReactNode } from "react";
import { Container } from "./Container";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export function MarketingPage({
  title,
  eyebrow,
  children
}: {
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <SiteHeader />
      <main>
        <section className="py-12 md:py-16">
          <Container>
            <div className="max-w-3xl">
              {eyebrow ? (
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  {eyebrow}
                </div>
              ) : null}
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {title}
              </h1>
            </div>
          </Container>
        </section>
        <section className="pb-16 md:pb-20">
          <Container>{children}</Container>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

