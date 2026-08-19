import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/navigation";
import Footer from "@/components/footer";
import { suhayl } from "@/lib/personal-brand";
import { experiences } from "@/lib/data";
import { education, certifications, fullStack } from "@/lib/personal-brand";
import { ArrowUpRight, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Résumé — Suhayl Dastager",
  description:
    "A recruiter-friendly résumé for Suhayl Dastager — experience, education, certifications, and technical capabilities.",
  alternates: { canonical: `${suhayl.site.url}/resume` },
  openGraph: {
    type: "article",
    url: `${suhayl.site.url}/resume`,
    title: "Suhayl Dastager — Résumé",
    description:
      "Experience, education, certifications, and technical capabilities.",
    images: [{ url: suhayl.site.ogImage, width: 1200, height: 630, alt: "Suhayl Dastager — Résumé" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhayl Dastager — Résumé",
    description:
      "Experience, education, certifications, and technical capabilities.",
    images: [suhayl.site.ogImage],
  },
};

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-canvas-warm text-ink-900">
      <Nav />

      <section className="pt-36 md:pt-44 pb-16">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-navy-900/10 pb-10">
            <div>
              <div className="eyebrow mb-3">Résumé</div>
              <h1 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Suhayl Dastager
              </h1>
              <p className="mt-2 text-ink-900/65 text-lg">
                AI Product Engineer · Founder · Tech Creator · Dubai, UAE
              </p>
            </div>
            <a
              href={suhayl.files.resume}
              download
              className="btn-primary self-start md:self-end"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 space-y-10">
              <Block title="Summary">
                <p className="text-ink-900/75 text-pretty">
                  AI & Computer Science graduate building the intersection of
                  products, companies, and content. Two-time founder (SM
                  Stratagem, VoxxHire), former data automation lead at Halliday
                  Forfaiting, and creator with seven 1M+ view videos at Loop
                  Media. Engineering depth that connects to business outcomes.
                </p>
              </Block>

              <Block title="Experience">
                <ol className="space-y-8">
                  {experiences.map((e) => (
                    <li
                      key={`${e.company}-${e.role}`}
                      className="grid grid-cols-12 gap-4"
                    >
                      <div className="col-span-12 md:col-span-4">
                        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500">
                          {e.duration}
                        </div>
                        <div className="mt-1 font-display font-semibold text-lg text-ink-900">
                          {e.company}
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-8">
                        <div className="font-display font-semibold text-lg text-ink-900">
                          {e.role}
                        </div>
                        <div className="text-sm text-navy-500">{e.location}</div>
                        <p className="mt-2 text-ink-900/75 text-pretty">
                          {e.summary}
                        </p>
                        <ul className="mt-3 space-y-1.5">
                          {e.bullets.map((b, i) => (
                            <li
                              key={i}
                              className="text-sm text-ink-900/70 flex gap-3"
                            >
                              <span className="mt-2 h-1 w-1 rounded-full bg-electric flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block title="Selected achievements">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "7 videos >1M views · Loop Media",
                    "40% faster onboarding reviews · Halliday",
                    "30% follower growth in 90 days",
                    "35% reporting time reduction",
                    "12% CPA reduction · RelphaCare",
                    "40% engagement lift · Chicking",
                  ].map((a) => (
                    <li
                      key={a}
                      className="rounded-2xl border border-navy-900/10 bg-white p-4 text-sm text-ink-900/80"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>

            <aside className="md:col-span-4 space-y-10">
              <Block title="Education">
                {education.map((e, i) => (
                  <div key={i} className="mb-4 last:mb-0">
                    <div className="font-display font-semibold text-ink-900">
                      {e.degree}
                    </div>
                    <div className="text-sm text-navy-500">
                      {e.institution}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mt-1">
                      {e.duration}
                    </div>
                  </div>
                ))}
              </Block>

              <Block title="Certifications">
                <ul className="space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.name}
                      className="rounded-xl border border-navy-900/10 bg-white p-3"
                    >
                      <div className="text-sm font-semibold text-ink-900">
                        {c.name}
                      </div>
                      <div className="text-xs text-navy-500">
                        {c.issuer} · {c.date}
                      </div>
                    </li>
                  ))}
                </ul>
              </Block>

              <Block title="Technical capabilities">
                <div className="flex flex-wrap gap-1.5">
                  {fullStack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-[0.14em] px-2 py-1 rounded-full border border-navy-900/10 text-navy-500"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Block>

              <Block title="Get in touch">
                <ul className="space-y-2 text-sm text-ink-900/80">
                  <li>
                    <Link
                      href={`mailto:${suhayl.email}`}
                      className="hover:text-electric"
                    >
                      {suhayl.email}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={suhayl.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-electric"
                    >
                      LinkedIn
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={suhayl.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-electric"
                    >
                      GitHub
                      <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                </ul>
              </Block>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const Block = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-navy-500 mb-4">
      {title}
    </h2>
    {children}
  </section>
);
