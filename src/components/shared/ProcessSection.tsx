import type { LucideIcon } from "lucide-react";

type ProcessSectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  steps: { icon: LucideIcon; title: string; text: string }[];
};

export function ProcessSection({ eyebrow, title, description, steps }: ProcessSectionProps) {
  return (
    <section className="bg-charcoal py-24 text-charcoal-foreground md:py-32">
      <div className="container-x">
        <div className="reveal">
          <p className="eyebrow text-gold">{eyebrow}</p>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold md:text-5xl">{title}</h2>
          <p className="mt-5 max-w-2xl text-charcoal-foreground/65">{description}</p>
        </div>
        <ol className="relative mt-16 grid gap-10 lg:grid-cols-4 lg:gap-8">
          <span aria-hidden className="absolute left-7 top-0 h-full w-px bg-charcoal-foreground/15 lg:left-0 lg:top-7 lg:h-px lg:w-full" />
          {steps.map(({ icon: Icon, title, text }, i) => (
            <li key={title} className="reveal relative flex gap-6 lg:flex-col">
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full border border-gold/60 bg-charcoal">
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.4} />
              </span>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] text-gold">STEP 0{i + 1}</p>
                <h3 className="mt-2 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-relaxed text-charcoal-foreground/65">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
