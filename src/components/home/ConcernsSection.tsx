import Image from "next/image";

const SIGNS = ["Visible mold growth", "Persistent musty odors", "Recurring dampness", "Water-damaged materials"];

export function ConcernsSection() {
  return (
    <section className="container-x grid items-center gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div className="reveal lg:order-2">
        <Image
          src="/assets/concern.jpg"
          alt="Gloved hand shining a flashlight on water staining in a ceiling corner near a window"
          width={1280}
          height={1024}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="aspect-[5/4] w-full rounded-md object-cover shadow-soft"
        />
      </div>
      <div className="reveal">
        <p className="eyebrow">Why It Matters</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Address Mold Concerns at Their Source</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Some signs suggest a situation deserves a closer look:</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {SIGNS.map((s) => (
            <li key={s} className="flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />{s}
            </li>
          ))}
        </ul>
        <p className="mt-6 leading-relaxed text-muted-foreground">Understanding where moisture is coming from is just as important as the visible problem. An assessment helps determine an appropriate remediation approach for your property.</p>
      </div>
    </section>
  );
}
