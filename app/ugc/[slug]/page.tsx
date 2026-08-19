import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import { ugcCaseStudies } from "@/lib/data";
import { suhayl } from "@/lib/personal-brand";

export const dynamicParams = true;

export async function generateStaticParams() {
  return ugcCaseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = ugcCaseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "UGC case study" };
  return {
    title: `${cs.client} — UGC case study`,
    description: cs.brief,
    alternates: { canonical: `${suhayl.site.url}/ugc/${cs.slug}` },
    openGraph: {
      type: "article",
      title: `${cs.client} — UGC case study · Suhayl Dastager`,
      description: cs.brief,
      url: `${suhayl.site.url}/ugc/${cs.slug}`,
      images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: `${cs.client} UGC case study` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cs.client} — UGC case study · Suhayl Dastager`,
      description: cs.brief,
      images: [suhayl.site.ogImage],
    },
  };
}

export default async function UGCCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = ugcCaseStudies.find((c) => c.slug === slug);
  if (!cs) return notFound();

  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />

      <article className="pt-36 md:pt-44 pb-24">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <Link
            href="/ugc"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-navy-500 hover:text-ink-900 transition-colors mb-6"
          >
            <ArrowLeft className="h-3 w-3" />
            UGC
          </Link>

          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] mb-4 text-navy-500">
            <span>{cs.client}</span>
            <span className="text-navy-500/40">·</span>
            <span>{cs.industry}</span>
            <span className="text-navy-500/40">·</span>
            <span>{cs.year}</span>
          </div>

          <h1 className="font-display font-bold tracking-tightest leading-[0.96] text-display-lg text-balance">
            {cs.brief}
          </h1>
          <p className="mt-6 text-xl text-ink-900/70 max-w-2xl text-pretty">
            {cs.role}
          </p>
        </div>

        <div className="mt-20 md:mt-32 mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 md:col-span-4 space-y-8">
              <Meta label="Client" body={cs.client} />
              <Meta label="Industry" body={cs.industry} />
              <Meta label="Year" body={cs.year} />
              <Meta label="Usage" body={cs.usage} />
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-12">
              <Section title="Concept">{cs.concept}</Section>
              <Section title="Deliverables">
                <ul className="space-y-2">
                  {cs.deliverables.map((d, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 rounded-full bg-coral flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section title="Results">
                <ul className="space-y-2">
                  {cs.results.map((r, i) => (
                    <li
                      key={i}
                      className="font-display font-semibold text-lg text-ink-900"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>
          </div>
        </div>

        <div className="mt-32 mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="border-t border-navy-900/10 pt-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                Up next
              </div>
              <div className="mt-2 font-display font-bold text-2xl tracking-tight">
                Plan your own campaign.
              </div>
            </div>
            <Link
              href={`/contact?type=ugc`}
              className="btn-coral self-start md:self-end"
            >
              Request a UGC quote
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
}: {
  label: string;
  body: string;
}) => (
  <div>
    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
      {label}
    </div>
    <div className="mt-1.5 text-base text-ink-900">{body}</div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-3">
      {title}
    </h2>
    <div className="text-lg leading-relaxed text-ink-900/80 text-pretty">
      {children}
    </div>
  </section>
);
