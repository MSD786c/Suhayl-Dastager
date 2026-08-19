"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /** Optional href — when set, renders as an <a> instead of a <button>. */
  href?: string;
  /** Optional download attribute for the <a> variant. */
  download?: boolean | string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement, InteractiveHoverButtonProps
>(({ text = "Button", className, href, download, ...props }, ref) => {
  // The animation: a tiny coral dot sits in the middle of the button.
  // On hover it scales up and grows to fill the entire button (the
  // "animated coral border" effect), while the text slides out and an
  // arrow appears.
  const inner = (
    <>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-text-inverse opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div className="pointer-events-none absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-coral transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-coral" />
    </>
  );

  const shared = cn(
    "group relative w-44 cursor-pointer overflow-hidden rounded-full border border-coral bg-transparent px-5 py-2.5 text-center font-medium text-sm text-text-inverse",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={shared}
        aria-label={text}
      >
        {inner}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      className={shared}
      {...props}
    >
      {inner}
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
