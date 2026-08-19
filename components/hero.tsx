"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { suhayl } from "@/lib/personal-brand";

const Hero = () => {
  const reduce = useReducedMotion() ?? false;

  return (
    <section
      className="relative overflow-hidden bg-[#f6f6f4] pt-28 md:pt-36 pb-10 md:pb-12"
      aria-label="Suhayl Dastager — personal brand introduction"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8">
        <div className="grid grid-cols-12 gap-4 md:gap-6 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h1 className="font-display font-bold tracking-tighter leading-[0.95] text-ink text-balance">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-display-2xl"
                >
                  One person.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.08,
                  }}
                  className="block text-display-2xl"
                >
                  Three practices.
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-10 max-w-2xl text-xl md:text-2xl text-text-secondary leading-snug text-balance"
            >
              I build companies, ship intelligent products, and create the stories that make people care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 font-mono text-xs md:text-sm uppercase tracking-monoWide text-text-muted"
            >
              Suhayl Dastager · Dubai, UAE
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-3"
            >
              <Link href="#three-doors" className="btn-primary">
                Enter the story
                <ArrowDown className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-ghost">
                Work With Me
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-5 grid grid-cols-3 gap-2 sm:gap-3">
            <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative col-span-2 row-span-2 min-h-[370px] sm:min-h-[500px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[18px] bg-ink">
              <Image
                src={suhayl.files.portraits.headshot}
                alt="Suhayl Dastager"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[55%_center]"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent px-5 pb-5 pt-16 text-white">
              <p className="text-sm font-medium">Founder</p>
              <p className="mt-1 text-xs text-white/70">SM Stratagem · VoxxHire</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.45 }} className="relative min-h-[180px] overflow-hidden rounded-[18px] bg-coral">
            <Image src={suhayl.files.portraits.driver} alt="Suhayl creating automotive content" fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-xs font-medium text-white">UGC</span>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="relative min-h-[180px] overflow-hidden rounded-[18px] bg-blue">
            <Image src={suhayl.files.portraits.workspace} alt="Suhayl at work" fill sizes="(max-width: 1024px) 33vw, 17vw" className="object-cover" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-12 text-xs font-medium text-white">Work</span>
          </motion.div>
          </div>
        </div>

        {/* Bottom strip — restrained meta, no ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-8 md:mt-12 border-t border-border pt-5 grid grid-cols-3 gap-4"
        >
          {[
            { k: "Founder", v: "Companies, products & decisions" },
            { k: "UGC", v: "Content with real signal" },
            { k: "Work", v: "Systems that get shipped" },
          ].map((m) => (
            <div key={m.v}>
              <div className="font-display font-bold text-xl tracking-tight text-ink">
                {m.k}
              </div>
              <div className="mt-1 text-sm text-text-secondary">{m.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
