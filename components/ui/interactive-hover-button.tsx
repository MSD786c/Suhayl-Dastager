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

  // The dot grows into the fill while the whole control makes one small,
  // intentional leftward acknowledgement on hover/press.
  const inner = (
    <>
      <span className="inline-block transition-all duration-300 group-hover:translate-x-10 group-hover:opacity-0">
        {text}
      </span>
      <div className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
    "group relative min-w-[12rem] cursor-pointer overflow-hidden rounded-full border bg-transparent px-5 py-2.5 text-center font-medium text-sm text-text-inverse transition-transform duration-300 will-change-transform group-hover:-translate-x-1 active:-translate-x-2",
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
