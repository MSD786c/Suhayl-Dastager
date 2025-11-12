"use client";

import { SpotlightCardDemo } from "@/components/ui/spotlight-card-demo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function SpotlightDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#e95d2c]/10 dark:from-[#1A2730] dark:via-[#424048] dark:to-[#1A2730] py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Spotlight Card <span className="gradient-text">Demo</span>
          </h1>
          <Link href="/">
            <Button variant="outline">Back to Portfolio</Button>
          </Link>
        </div>
        <p className="text-xl text-gray-600 dark:text-[#B0CEE2]/80 mb-12 max-w-3xl">
          Interactive cards with dynamic glow effects
        </p>
        <SpotlightCardDemo />
      </div>
    </div>
  );
}