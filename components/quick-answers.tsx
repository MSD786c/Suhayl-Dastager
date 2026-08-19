"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const qas = [
  {
    q: "Who is Suhayl Dastager?",
    a: "Suhayl Dastager is a Dubai-based AI Product Engineer, founder of SM Stratagem, and co-founder of VoxxHire (an AI interview platform). He graduated with a BSc (Hons) in Artificial Intelligence & Computer Science from the University of Birmingham Dubai.",
  },
  {
    q: "What does Suhayl actually build?",
    a: "Three things: products (VoxxHire, Document-Flow Automator, DPH Classifieds, MoneyMentor, Workora, Crypto Market Command Center), companies (SM Stratagem, VoxxHire), and content (short-form UGC at the intersection of cars, technology, AI, and founder life).",
  },
  {
    q: "What is SM Stratagem?",
    a: "SM Stratagem is a Dubai digital product studio founded by Suhayl Dastager in 2025. It houses VoxxHire and takes on selected client work in AI, custom software, and product builds. Positioning: AI that ships, software that scales.",
  },
  {
    q: "What is VoxxHire?",
    a: "VoxxHire is an AI interview platform co-founded by Suhayl Dastager in 2024. It helps graduates land roles by giving them a voice-first interview experience, and gives recruiters enterprise-grade signal through structured rubric-based scoring and a recruiter analytics dashboard.",
  },
  {
    q: "How can brands work with Suhayl as a UGC creator?",
    a: "Suhayl offers four UGC starting packages: UGC Starter, UGC Performance, Content Sprint, and Monthly Creator. All use rights-based licensing with explicit AI/likeness terms. Live showreel includes a 3.3M-view perfume brand piece, automotive brand work, and a software founder walkthrough.",
  },
  {
    q: "What are Suhayl's technical capabilities?",
    a: "Grouped: Applied AI (LLMs, RAG, AI workflows, model integration); Product Engineering (React, Next.js, TypeScript, Node, Flask, FastAPI); Data & Automation (Python, SQL, analytics, ETL, n8n, Zoho); Product & Strategy (product architecture, experimentation, stakeholder management, discovery, execution).",
  },
  {
    q: "Where is Suhayl based and is he open to work?",
    a: "Based in Dubai, United Arab Emirates. Open to senior AI product engineering roles, technical co-founder conversations, and selected UGC partnerships through 2026. Use the contact form at suhayl-dastager.me/contact.",
  },
];

const QuickAnswers = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      id="quick-answers"
      className="relative bg-canvas border-t border-border"
      aria-label="Quick answers about Suhayl Dastager"
    >
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8 py-8 md:py-12">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 md:col-span-7">
            <div className="eyebrow mb-3">Quick answers</div>
            <h2 className="font-display font-bold tracking-tighter text-display-md text-ink text-balance">
              The short version, for AI engines and the impatient.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 self-end">
            <p className="text-xs font-mono uppercase tracking-monoWide text-text-muted">
              Also published at{" "}
              <a
                href="/llms.txt"
                className="text-ink hover:text-blue"
              >
                /llms.txt
              </a>
            </p>
          </div>
        </div>

        <ul className="border-t border-border">
          {qas.map((qa, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={qa.q} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-5 md:py-6 text-left group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                >
                  <span
                    className={cn(
                      "font-display font-semibold text-lg md:text-2xl tracking-tight leading-snug transition-colors",
                      isOpen
                        ? "text-blue"
                        : "text-ink group-hover:text-blue"
                    )}
                  >
                    {qa.q}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 grid place-items-center h-9 w-9 rounded-lg border transition-colors duration-300",
                      isOpen
                        ? "bg-blue border-blue text-white"
                        : "border-border text-text-muted group-hover:border-blue group-hover:text-blue"
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 md:pb-6 pr-12 text-text-secondary text-pretty leading-relaxed max-w-3xl">
                        {qa.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default QuickAnswers;
