"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Plus } from "lucide-react";
import { ugcPackages, ugcCaseStudies, ugcReels } from "@/lib/data";
import { suhayl } from "@/lib/personal-brand";
import { ReelCard, VideoLightbox } from "@/components/reel-card";
import { cn } from "@/lib/utils";

const UGCDetail = () => {
  const [openPackage, setOpenPackage] = React.useState<string | null>(
    ugcPackages[0]?.id ?? null
  );
  const [openReel, setOpenReel] = React.useState<(typeof ugcReels)[number] | null>(null);
  const [showAllReels, setShowAllReels] = React.useState(false);

  const sortedReels = React.useMemo(
    () => [...ugcReels].sort((a, b) => b.views - a.views),
    []
  );
  const visibleReels = showAllReels ? sortedReels : sortedReels.slice(0, 6);

  return (
    <>
      {/* Hero — full-bleed dark with coral glow */}
      <section className="relative pt-20 md:pt-24 pb-6 md:pb-8 bg-ink-950 text-text-inverse overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,74,0.20) 0%, rgba(255,107,74,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="col-span-12 md:col-span-5">
              <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl text-text-inverse text-balance">
                Tech content that
                <br />
                <span className="text-coral">doesn&apos;t feel like an ad.</span>
              </h1>
              <p className="mt-4 md:mt-5 text-base text-text-inverseMuted max-w-md text-pretty">
                I create at the intersection of cars, technology, and founder
                life. The differentiator is simple: I don&apos;t just talk about
                software — I build it.
              </p>
            </div>
            <div className="col-span-12 md:col-span-7">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700"
              >
                <Image
                  src={suhayl.files.hero.ugc}
                  alt="UGC hero — phones and sunglasses marketing shot"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-monoWide text-text-inverseMuted">
                Image — UGC still · Dubai · 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-canvas py-8 md:py-10">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
            <div>
              <div className="flex items-end justify-between gap-4">
                <h2 className="font-display text-display-md font-bold tracking-tighter text-ink text-balance">
                  Examples, not placeholders.
                </h2>
                <button
                  type="button"
                  onClick={() => setShowAllReels((s) => !s)}
                  className="font-mono text-[11px] uppercase tracking-monoWide text-text-secondary hover:text-ink transition-colors shrink-0"
                >
                  {showAllReels ? "Show fewer" : `Show all ${sortedReels.length}`}
                </button>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
                {visibleReels.map((reel, i) => (
                  <ReelCard key={reel.id} reel={reel} index={i} onOpen={setOpenReel} />
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-ink">Brands I&apos;ve worked with</p>
              <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-5 border-t border-border pt-5 sm:grid-cols-2">
                {[
                  ["Parfumix", "/ugc/parfumix-logo.webp"],
                  ["Al Amoudi", "/ugc/alamoudi-logo.png"],
                  ["Milano", "/ugc/milano-logo.jpeg"],
                  ["Wrapsters", "/ugc/wrapsters-logo.jpeg"],
                  ["VoxxHire", "/ugc/voxxhire-logo.png"],
                ].map(([name, src]) => (
                  <div key={name} className="flex h-12 items-center">
                    <Image src={src} alt={`${name} logo`} width={112} height={48} className="max-h-10 w-auto object-contain object-left" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <VideoLightbox reel={openReel} onClose={() => setOpenReel(null)} />
      </section>

      {/* Categories — clean editorial row, not card grid */}
      <section className="py-10 md:py-14 border-y border-border bg-canvas">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-y-4">
            {[
              "Software",
              "Automotive",
              "AI",
              "Consumer Tech",
              "Founder Content",
              "Brand Work",
            ].map((cat, i) => (
              <div key={cat}>
                <div
                  className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  0{i + 1}
                </div>
                <div className="mt-1 font-display font-semibold text-lg text-ink">
                  {cat}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies — editorial rows */}
      <section className="py-8 md:py-12 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">Selected work</div>
              <h2 className="font-display font-bold tracking-tighter text-display-md text-ink text-balance">
                Brand work, with receipts.
              </h2>
            </div>
          </div>

          <div className="border-t border-border">
            {ugcCaseStudies.map((cs, i) => (
              <motion.article
                key={cs.slug}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-border"
              >
                <div className="grid grid-cols-12 gap-6 py-8 md:py-10">
                  <div className="col-span-12 md:col-span-4">
                    <div
                      className="font-mono text-[10px] uppercase tracking-monoWide text-coral"
                      style={{ fontVariantNumeric: "tabular-nums" }}
                    >
                      0{i + 1} · {cs.year}
                    </div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                      {cs.client} · {cs.industry}
                    </div>
                    <h3 className="mt-4 font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-ink text-balance">
                      {cs.brief}
                    </h3>
                    <p className="mt-2 text-sm text-text-muted">{cs.role}</p>
                  </div>
                  <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted mb-2">
                        Concept
                      </div>
                      <p className="text-text-secondary text-pretty">
                        {cs.concept}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted mb-2">
                        Deliverables
                      </div>
                      <ul className="space-y-1.5">
                        {cs.deliverables.map((d, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-text-secondary flex gap-2"
                          >
                            <span
                              className="font-mono text-[10px] text-coral mt-1.5 shrink-0"
                              style={{ fontVariantNumeric: "tabular-nums" }}
                            >
                              ·
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted mb-2">
                        Results
                      </div>
                      <ul className="space-y-1.5">
                        {cs.results.map((r, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-ink font-medium"
                          >
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-monoWide text-text-muted mb-2">
                        Usage
                      </div>
                      <p className="text-text-secondary">{cs.usage}</p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Packages — editorial rows, accordion */}
      <section className="py-8 md:py-12 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-5">Packages</div>
              <h2 className="font-display font-bold tracking-tighter text-display-md text-ink text-balance">
                Pick a shape, scope against the brief.
              </h2>
            </div>
          </div>

          <div className="border-t border-border">
            {ugcPackages.map((pkg, i) => {
              const isOpen = openPackage === pkg.id;
              return (
                <div key={pkg.id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() =>
                      setOpenPackage((cur) =>
                        cur === pkg.id ? null : pkg.id
                      )
                    }
                    aria-expanded={isOpen}
                    className="w-full text-left py-6 md:py-8 group"
                  >
                    <div className="grid grid-cols-12 gap-4 items-baseline">
                      <div
                        className="col-span-2 md:col-span-1 font-mono text-[10px] uppercase tracking-monoWide text-coral"
                        style={{ fontVariantNumeric: "tabular-nums" }}
                      >
                        0{i + 1}
                      </div>
                      <div className="col-span-10 md:col-span-5">
                        <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tighter leading-[1.05] text-ink group-hover:translate-x-1 transition-transform duration-500 ease-editorial">
                          {pkg.name}
                        </h3>
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-monoWide text-text-muted">
                          {pkg.tagline}
                        </div>
                      </div>
                      <div className="hidden md:block md:col-span-4 text-text-secondary text-pretty">
                        {pkg.best}
                      </div>
                      <div className="col-span-12 md:col-span-2 flex md:justify-end items-center gap-2 font-mono text-[11px] uppercase tracking-monoWide">
                        <span className="text-ink">
                          {pkg.deliverables.length} deliverables
                        </span>
                        <Plus
                          className={cn(
                            "h-3.5 w-3.5 transition-transform duration-300",
                            isOpen ? "rotate-45" : ""
                          )}
                        />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid grid-cols-12 gap-4 pb-6 md:pb-8">
                          <div className="col-span-12 md:col-span-6 md:col-start-3">
                            <ul className="space-y-2">
                              {pkg.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="text-text-secondary text-pretty flex gap-3 leading-relaxed"
                                >
                                  <span
                                    className="font-mono text-[10px] text-coral mt-1.5 shrink-0"
                                    style={{ fontVariantNumeric: "tabular-nums" }}
                                  >
                                    ·
                                  </span>
                                  <span>{d}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="col-span-12 md:col-span-3 md:col-start-9 flex md:justify-end">
                            <Link
                              href={`/contact?type=ugc&package=${pkg.id}`}
                              className="inline-flex items-center gap-2 self-start md:self-end rounded-lg bg-ink text-text-inverse font-medium px-5 py-3 text-sm hover:bg-coral transition-colors duration-300"
                            >
                              {pkg.cta}
                              <ArrowUpRight className="h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default UGCDetail;
