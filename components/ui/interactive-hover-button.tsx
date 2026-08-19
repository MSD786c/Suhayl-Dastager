"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  /** Visual variant - primary (coral) or secondary (white). */
  variant?: ButtonVariant;
  /** Optional href - when set, renders as an <a> instead of a <button>. */
  href?: string;
  /** Optional download attribute for the <a> variant. */
  download?: boolean | string;
}

const VARIANT_STYLES: Record<
  ButtonVariant,
  { border: string; dot: string; dotHover: string }
> = {
  // Primary: coral border, coral dot that fills the button on hover
  primary: {
    border: "border-coral",
    dot: "bg-coral",
    dotHover: "group-hover:bg-coral",
  },
  // Secondary: SM-Stratagem blue border, blue dot that fills the button on hover
  secondary: {
    border: "border-blue",
    dot: "bg-blue",
    dotHover: "group-hover:bg-blue",
  },
};

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement, InteractiveHoverButtonProps
>(({ text = "Button", className, href, download, variant = "primary", ...props }, ref) => {
  const v = VARIANT_STYLES[variant];

  // The animation: a tiny dot sits in the middle of the button.
  // On hover it scales up and grows to fill the entire button (the
  // "animated border" effect), while the text slides out and an
  // arrow appears. The dot color matches the variant.
  const inner = (
    <>
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-ink opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{text}</span>
        <ArrowRight className="h-4 w-4" />
      </div>
      <div
        className={cn(
          "pointer-events-none absolute left-[6%] top-[40%] h-2 w-2 scale-[1] rounded-full transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
          v.dot,
          v.dotHover,
        )}
      />
    </>
  );

  const shared = cn(
    "group relative min-w-[12rem] cursor-pointer overflow-hidden rounded-full border bg-transparent px-5 py-2.5 text-center font-medium text-sm text-text-inverse transition-transform duration-300 will-change-transform group-hover:-translate-x-2",
    v.border,
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
