"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/personal-brand";

const AboutStrip = () => {
  return (
    <section
      className="relative bg-canvas border-t border-border"
      aria-label="Outside the laptop"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 py-10 md:py-14">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Left — short conversational text */}
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-5">About</div>
            <h2 className="font-display font-bold tracking-tighter leading-[0.98] text-display-lg text-ink text-balance">
              I like building things.
            </h2>

            <div className="mt-8 space-y-5 max-w-2xl text-lg text-text-secondary leading-relaxed text-pretty">
              <p>
                Most of my work starts with wondering why something is
                unnecessarily difficult. Then I try to fix it — sometimes for
                myself, sometimes for a company, sometimes for strangers on the
                internet.
              </p>
              <p>
                Yes, I like cars. Currently building. Probably testing another
                AI tool. Somehow, this all connects.
              </p>
              <p className="text-text-muted">
                I&apos;m the founder who documents the journey. The creator who
                ships. The builder who drives fast and thinks faster.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={suhayl.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
              >
                Instagram
                <ArrowUpRight className="h-3.5 w-3.5 arrow" />
              </Link>
              <span className="text-text-muted/30">/</span>
              <Link
                href={suhayl.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="arrow-link"
              >
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 arrow" />
              </Link>
              <span className="text-text-muted/30">/</span>
              <Link href="/about" className="arrow-link">
                Full story
                <ArrowUpRight className="h-3.5 w-3.5 arrow" />
              </Link>
            </div>
          </div>

          {/* Right — two editorial photos, stacked */}
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-3 md:gap-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-canvas-muted"
            >
              <Image
                src={suhayl.files.portraits.driver}
                alt="Suhayl driving through Dubai"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl bg-canvas-muted mt-8"
            >
              <Image
                src={suhayl.files.portraits.workspace}
                alt="Suhayl at the workspace"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStrip;
