import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const PROPERTIES = [
  { image: "/assets/residential.jpg", alt: "Bright, clean open-plan home kitchen and living room", title: "Residential Properties", text: "Mold concerns in homes and rental properties often follow leaks, humidity, or past water damage. We help homeowners and landlords understand the issue and plan a way forward." },
  { image: "/assets/commercial.jpg", alt: "Modern commercial office hallway with glass meeting rooms", title: "Commercial Properties", text: "Offices and other buildings can face moisture-related concerns that affect how spaces are used. We work with owners and managers to discuss the situation and next steps." },
];

export function WhoWeHelp() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="reveal">
        <p className="eyebrow">Who We Help</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Homes and Buildings Alike</h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {PROPERTIES.map((p) => (
          <article key={p.title} className="reveal group overflow-hidden rounded-md border border-border bg-card">
            <div className="overflow-hidden">
              <Image
                src={p.image}
                alt={p.alt}
                width={1280}
                height={912}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
              <Button asChild variant="line" className="mt-6"><Link href="/contact-us">Discuss Your Property <ArrowRight /></Link></Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
