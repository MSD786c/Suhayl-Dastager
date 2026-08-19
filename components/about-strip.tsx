"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/data";

const AboutStrip = () => {
  return (
    <section
      className="relative py-24 md:py-32 bg-canvas-warm"
      aria-label="Outside the laptop"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-5">
            <div className="eyebrow mb-4">Outside the laptop</div>
            <h2 className="font-display font-bold tracking-tightest leading-[0.96] text-display-md text-ink-900 text-balance">
              Dubai, cars, technology, building companies. The rest is just
              the highlight reel.
            </h2>
            <p className="mt-6 text-ink-900/70 text-lg max-w-md text-pretty">
              A founder who documents the journey. A creator who ships. A
              builder who drives fast and thinks faster.
            </p>
            <div className="mt-8 flex gap-4">
              <Link
                href={suhayl.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900 hover:text-electric transition-colors"
              >
                Instagram
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <span className="text-navy-500/40">/</span>
              <Link
                href={suhayl.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-900 hover:text-electric transition-colors"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div className="grid grid-cols-12 gap-3">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="col-span-7 relative aspect-[3/4] rounded-2xl overflow-hidden soft-glow"
              >
                <Image
                  src={suhayl.files.portraits.suvSeated}
                  alt="Suhayl on SUV with Dubai skyline"
                  fill
                  sizes="(max-width: 768px) 60vw, 40vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden soft-glow"
              >
                <Image
                  src={suhayl.files.portraits.vSign}
                  alt="Casual creator portrait"
                  fill
                  sizes="(max-width: 768px) 40vw, 30vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="col-span-5 relative aspect-square rounded-2xl overflow-hidden soft-glow"
              >
                <Image
                  src={suhayl.files.portraits.workspace}
                  alt="Modern workspace"
                  fill
                  sizes="(max-width: 768px) 40vw, 25vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="col-span-7 relative aspect-square rounded-2xl overflow-hidden soft-glow"
              >
                <Image
                  src={suhayl.files.portraits.aerial}
                  alt="Aerial view"
                  fill
                  sizes="(max-width: 768px) 60vw, 35vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
