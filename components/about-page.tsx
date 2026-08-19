"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/personal-brand";
import { brandVisuals } from "@/lib/data";

const AboutPage = () => {
  return (
    <>
      {/* Hero — striking, full-bleed dark */}
      <section className="relative pt-24 md:pt-28 pb-12 md:pb-16 bg-ink-950 text-text-inverse overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-50" aria-hidden />
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(39,107,255,0.18) 0%, rgba(39,107,255,0) 70%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
            <div className="col-span-12 md:col-span-8">
              <div className="eyebrow-light mb-5">About</div>
              <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-display-xl md:text-display-2xl text-text-inverse text-balance">
                I like building
                <br />
                <span className="text-blue">things.</span>
              </h1>
            </div>
            <div className="col-span-12 md:col-span-4 self-end">
              <p className="text-lg text-text-inverseMuted max-w-md text-pretty">
                Most of my work starts with wondering why something is
                unnecessarily difficult. Then I try to fix it.
              </p>
              <div className="mt-4 flex gap-3">
                <Link
                  href={suhayl.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link-light"
                >
                  Instagram
                  <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                </Link>
                <span className="text-text-inverseMuted/30">/</span>
                <Link
                  href={suhayl.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="arrow-link-light"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 arrow" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial photo feature — single tall hero shot */}
      <section className="py-6 md:py-10 bg-canvas">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-8 relative aspect-[16/10] rounded-2xl overflow-hidden"
            >
              <Image
                src={suhayl.files.portraits.suvSeated}
                alt="Suhayl on SUV with Dubai skyline"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 md:col-span-4 relative aspect-[3/4] rounded-2xl overflow-hidden"
            >
              <Image
                src={suhayl.files.portraits.workspace}
                alt="Workspace"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-6 md:col-span-3 relative aspect-square rounded-2xl overflow-hidden"
            >
              <Image
                src={suhayl.files.portraits.vSign}
                alt="Casual portrait"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-5 relative aspect-[5/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={suhayl.files.portraits.driver}
                alt="Driving through Dubai"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden"
            >
              <Image
                src={suhayl.files.portraits.aerial}
                alt="Dubai aerial"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The story — compact */}
      <section className="py-10 md:py-14 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow mb-3">The story</div>
              <h2 className="font-display font-bold tracking-tighter text-display-sm text-ink text-balance">
                From content to code, in a single arc.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-4 text-base text-text-secondary leading-relaxed text-pretty">
              <p>
                I started in content — Reels, TikToks, community management —
                the short-form muscle that teaches you what attention actually
                looks like in 2026. Then I went to study AI &amp; Computer
                Science because the content I wanted to make required me to
                understand the systems I was talking about.
              </p>
              <p>
                The professional work sharpened the engineering. Halliday
                taught me what production-grade AI workflows look like inside a
                real business. Loop Media taught me what data-driven creative
                looks like at scale. Chicking taught me the long game of
                building brand affection, not just impressions.
              </p>
              <p>
                Then I started building my own things. SM Stratagem is the
                studio. VoxxHire is the product that convinced me the rest of
                the journey would be in AI products, founder mode, and creator
                partnerships that respect the audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Off-screen — life outside the laptop */}
      <section className="py-10 md:py-14 bg-canvas border-t border-border">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Off-screen</div>
              <h2 className="font-display font-bold tracking-tighter text-display-sm text-ink text-balance">
                Cars, fitness, events, learning, documenting.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              suhayl.files.portraits.suitFull,
              suhayl.files.portraits.headshot,
              brandVisuals.Wrapsters?.card ?? "/ugc/visual-wrapsters.jpg",
              suhayl.files.portraits.driver,
              brandVisuals.Parfumix?.card ?? "/ugc/visual-parfumix.jpg",
              suhayl.files.portraits.vSign,
            ].map((src, i) => (
              <motion.div
                key={src + i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
