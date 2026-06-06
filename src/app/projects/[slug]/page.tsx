import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import { findProject, projects } from "@/lib/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return { title: "פרויקט" };
  return {
    title: project.title,
    description: project.summary
  };
}

export default async function ProjectDetailPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const gallery =
    project.gallery && project.gallery.length > 1 ? project.gallery : null;

  return (
    <div className="min-h-screen bg-warm-page">
      <SiteHeader />

      <main>
        <section className="py-10 md:py-14">
          <Container>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              → חזרה לכל הפרויקטים
            </Link>

            <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  פרויקט{project.location ? ` · ${project.location}` : ""}
                </div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                  {project.title}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">
                  {project.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 shadow-md">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                על הפרויקט
              </div>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                איך זה נעשה
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
                {project.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {gallery ? (
          <section className="py-12 md:py-16">
            <Container>
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                  גלריה
                </div>
                <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                  עוד מבטים
                </h2>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {gallery.map((src) => (
                  <div
                    key={src}
                    className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50 shadow-sm"
                  >
                    <Image
                      src={src}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-contain transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="border-t border-slate-200 bg-white py-12 md:py-16">
          <Container>
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 text-center md:p-12">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                מתכננים פרויקט דומה?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600">
                אשמח לעזור לכם להפוך רעיון לתוכנית עבודה ברורה ומדויקת.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="tel:+972548060673"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-700"
                >
                  <span>📞</span> לייעוץ ראשוני
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  שלחו לי הודעה
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
