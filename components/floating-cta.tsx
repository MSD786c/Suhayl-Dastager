"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

const FloatingCTA = () => {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 drop-shadow-2xl">
      <Button
        onClick={handleClick}
        className="bg-gradient-to-r from-[#0FA5A2] to-[#E95D2C] text-white font-semibold px-5 py-4 rounded-full shadow-[0_20px_35px_rgba(6,25,56,0.35)] hover:brightness-105"
      >
        <Sparkles className="h-4 w-4 mr-2" />
        Let's Build
      </Button>
    </div>
  );
};

export default FloatingCTA;
