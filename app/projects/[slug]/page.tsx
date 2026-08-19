import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowLeft, ExternalLink, Github } from "lucide-react";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import { projects } from "@/lib/data";
import { suhayl } from "@/lib/personal-brand";

export const dynamicParams = true;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.name} — case study`,
    description: project.description,
    alternates: { canonical: `${suhayl.site.url}/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} — case study · Suhayl Dastager`,
      description: project.description,
      url: `${suhayl.site.url}/projects/${project.slug}`,
      images: project.image
        ? [
            {
              url: project.image,
              width: 1200,
              height: 630,
              alt: `${project.name} — Suhayl Dastager case study`,
            },
          ]
        : [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: suhayl.fullName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — case study · Suhayl Dastager`,
      description: project.description,
      images: project.image ? [project.image] : [suhayl.site.ogImage],
    },
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const dark = project.tone === "dark";

  return (
    <main
      className={`min-h-screen ${
        dark ? "bg-ink-900 text-cream" : "bg-canvas-warm text-ink-900"
      }`}
    >
      <Nav />

      <article className="pt-36 md:pt-44 pb-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <Link
            href="/work"
            className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] mb-6 ${
              dark ? "text-cream/55 hover:text-cream" : "text-navy-500 hover:text-ink-900"
            } transition-colors`}
          >
            <ArrowLeft className="h-3 w-3" />
            Work
          </Link>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] mb-4">
            <span className={dark ? "text-cream/55" : "text-navy-500"}>
              {project.category}
            </span>
            <span className={dark ? "text-cream/30" : "text-navy-500/30"}>·</span>
            <span className={dark ? "text-cream/55" : "text-navy-500"}>
              {project.year}
            </span>
          </div>

          <h1 className="font-display font-bold tracking-tightest leading-[0.96] text-display-lg text-balance">
            {project.name}
          </h1>
          <p
            className={`mt-6 max-w-2xl text-xl ${
              dark ? "text-cream/70" : "text-ink-900/70"
            } text-pretty`}
          >
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  dark
                    ? "inline-flex items-center justify-center gap-2 rounded-full bg-cream text-ink-900 px-6 py-3.5 text-sm font-medium hover:bg-electric-bright transition-colors"
                    : "btn-primary"
                }
              >
                Live
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  dark
                    ? "inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-transparent text-cream px-6 py-3.5 text-sm font-medium hover:bg-cream/10 transition-colors"
                    : "btn-ghost"
                }
              >
                Repository
                <Github className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        {/* Visual */}
        {project.image && (
          <div className="mt-12 md:mt-20 mx-auto max-w-[1280px] px-6 sm:px-8">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden soft-glow">
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="mt-20 md:mt-32 mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4 space-y-12">
              <Meta label="Role" body={project.role} />
              <Meta
                label="Stack"
                items={project.stack}
                dark={dark}
              />
              <Meta label="Impact" body={project.impact} dark={dark} />
            </div>

            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
              <Section title="Problem" dark={dark}>
                {project.problem}
              </Section>
              <Section title="Architecture" dark={dark}>
                {project.architecture}
              </Section>
              <Section title="Key decisions" dark={dark}>
                <ul className="space-y-2">
                  {project.decisions.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className={`mt-2 h-1 w-1 rounded-full flex-shrink-0 ${
                          dark ? "bg-electric-bright" : "bg-electric"
                        }`}
                      />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Outcome" dark={dark}>
                {project.outcome}
              </Section>
              <Section title="What I learned" dark={dark}>
                {project.learning}
              </Section>
              <Section title="What's next" dark={dark}>
                {project.next}
              </Section>
            </div>
          </div>
        </div>

        {/* Next up */}
        <div className="mt-32 mx-auto max-w-[1100px] px-6 sm:px-8">
          <div
            className={`border-t pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
              dark ? "border-cream-100/10" : "border-navy-900/10"
            }`}
          >
            <div>
              <div
                className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
                  dark ? "text-cream/55" : "text-navy-500"
                }`}
              >
                Next
              </div>
              <div className="mt-2 font-display font-bold text-2xl tracking-tight">
                Browse more selected work
              </div>
            </div>
            <Link
              href="/work"
              className="btn-ghost self-start md:self-end"
            >
              All projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

const Meta = ({
  label,
  body,
  items,
  dark,
}: {
  label: string;
  body?: string;
  items?: string[];
  dark?: boolean;
}) => (
  <div>
    <div
      className={`font-mono text-[10px] uppercase tracking-[0.22em] ${
        dark ? "text-cream/55" : "text-navy-500"
      }`}
    >
      {label}
    </div>
    {body && (
      <div
        className={`mt-2 text-base ${
          dark ? "text-cream" : "text-ink-900"
        }`}
      >
        {body}
      </div>
    )}
    {items && (
      <div className="mt-3 flex flex-wrap gap-1.5">
        {items.map((it) => (
          <span
            key={it}
            className={`font-mono text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded-full border ${
              dark
                ? "border-cream-100/15 text-cream/65"
                : "border-navy-900/15 text-navy-500"
            }`}
          >
            {it}
          </span>
        ))}
      </div>
    )}
  </div>
);

const Section = ({
  title,
  children,
  dark,
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) => (
  <section>
    <h2
      className={`font-mono text-[10px] uppercase tracking-[0.22em] mb-3 ${
        dark ? "text-cream/55" : "text-navy-500"
      }`}
    >
      {title}
    </h2>
    <div
      className={`text-lg leading-relaxed text-pretty ${
        dark ? "text-cream/80" : "text-ink-900/80"
      }`}
    >
      {children}
    </div>
  </section>
);
