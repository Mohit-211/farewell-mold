import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const PROPERTIES = [
  { image: "/assets/residential.jpg", alt: "Bright open-plan home kitchen and living area", title: "Residential", text: "Houses, apartments and rental properties can develop mold after leaks, high humidity or past water damage — often in bathrooms, basements, attics or around windows.", types: "[Confirm: houses, apartments, rental properties]" },
  { image: "/assets/commercial.jpg", alt: "Modern office corridor with glass-walled meeting rooms", title: "Commercial", text: "Offices and other buildings may face moisture issues from roof leaks, plumbing or ventilation, affecting how spaces can be used.", types: "[Confirm: offices, retail, other buildings]" },
];

export function PropertyTypes() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Property Types</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Residential and Commercial Properties</h2>
          <p className="mt-5 text-lg text-muted-foreground">Mold concerns can arise wherever moisture lingers — from homes and apartments to offices and other buildings.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROPERTIES.map((p) => (
            <article key={p.title} className="reveal overflow-hidden rounded-md border border-border bg-card">
              <Image
                src={p.image}
                alt={p.alt}
                width={1280}
                height={912}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                <p className="mt-4 text-sm font-medium text-gold-deep">{p.types}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="reveal mt-12 flex flex-col items-start gap-4 rounded-md border border-border bg-card p-8 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-semibold">Tell us about your property and where it&apos;s located.</p>
          <Button asChild variant="gold" size="lg"><Link href="/contact-us">Discuss Your Property</Link></Button>
        </div>
      </div>
    </section>
  );
}
