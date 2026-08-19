"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/data";
import { brandVisuals } from "@/lib/data";

const AboutPage = () => {
  return (
    <>
      <section className="relative pt-36 md:pt-44 pb-16 md:pb-24 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="chapter mb-6">About · outside the laptop</div>
          <h1 className="font-display font-bold tracking-tightest leading-[0.94] text-display-xl text-ink-900 text-balance">
            Dubai, cars, technology,
            <br />
            <span className="quote-mark text-electric">building companies.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-ink-900/70 text-pretty">
            The founder who documents the journey. The creator who ships. The
            builder who drives fast and thinks faster.
          </p>
        </div>
      </section>

      {/* Editorial photo feature */}
      <section className="py-20 md:py-32 bg-canvas-warm">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden soft-glow">
              <Image
                src={suhayl.files.portraits.suvSeated}
                alt="Suhayl on SUV with Dubai skyline"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-[3/4] rounded-3xl overflow-hidden soft-glow">
              <Image
                src={suhayl.files.portraits.workspace}
                alt="Modern workspace"
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-3 relative aspect-square rounded-3xl overflow-hidden soft-glow">
              <Image
                src={suhayl.files.portraits.vSign}
                alt="Casual creator portrait"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-5 relative aspect-[5/3] rounded-3xl overflow-hidden soft-glow">
              <Image
                src={suhayl.files.portraits.driver}
                alt="Driver in city traffic"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-4 relative aspect-[4/3] rounded-3xl overflow-hidden soft-glow">
              <Image
                src={suhayl.files.portraits.aerial}
                alt="Aerial Dubai"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4">
              <div className="eyebrow mb-3">The story</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                From content to code, in a single arc.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-6 text-lg text-ink-900/80 leading-relaxed text-pretty">
              <p>
                I started in content — Reels, TikToks, community management, the
                short-form muscle that teaches you what attention actually looks
                like in 2026. Then I went to study AI & Computer Science because
                the content I wanted to make required me to understand the
                systems I was talking about.
              </p>
              <p>
                The professional work sharpened the engineering. Halliday taught
                me what production-grade AI workflows look like inside a real
                business. Loop Media taught me what data-driven creative looks
                like at scale. Chicking taught me the long game of building
                brand affection, not just impressions.
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

      {/* Off-screen */}
      <section className="py-20 md:py-32 bg-canvas-warm">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <div className="eyebrow mb-3">Off-screen</div>
              <h2 className="font-display font-bold tracking-tightest text-display-md text-ink-900 text-balance">
                Cars, fitness, events, learning, documenting the journey.
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
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden soft-glow"
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

      {/* CTAs */}
      <section className="py-20 md:py-32 bg-ink-900 text-cream">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-8 text-center">
          <h2 className="font-display font-bold tracking-tightest text-display-md text-cream text-balance">
            Follow along.
          </h2>
          <p className="mt-4 text-cream/65 max-w-md mx-auto">
            LinkedIn for the professional arc. Instagram for everything in
            between.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={suhayl.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-ink-900 font-medium px-5 py-3 text-sm hover:bg-electric-bright transition-colors"
            >
              Instagram
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href={suhayl.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream-100/20 text-cream font-medium px-5 py-3 text-sm hover:bg-cream/10 transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
