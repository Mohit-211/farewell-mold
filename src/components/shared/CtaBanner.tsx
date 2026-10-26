import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const GLOW_POSITION = {
  "top-right": "-right-32 -top-32",
  "bottom-left": "-left-32 -bottom-32",
};

type CtaBannerProps = {
  title: string;
  description: string;
  glow?: keyof typeof GLOW_POSITION;
  /** The call-to-action buttons. */
  children: ReactNode;
};

export function CtaBanner({ title, description, glow = "top-right", children }: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden bg-charcoal text-charcoal-foreground">
      <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient" />
      <div aria-hidden className={cn("absolute h-96 w-96 rounded-full bg-gold/10 blur-3xl", GLOW_POSITION[glow])} />
      <div className="reveal container-x relative py-24 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-4xl font-extrabold md:text-6xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-charcoal-foreground/70">{description}</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">{children}</div>
      </div>
    </section>
  );
}
