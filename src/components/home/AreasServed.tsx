import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/site";

export function AreasServed() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="reveal relative">
          <Image
            src="/assets/neighborhood.jpg"
            alt="Aerial view of a tree-lined residential neighborhood at golden hour"
            width={1280}
            height={912}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="aspect-[4/3] w-full rounded-md object-cover shadow-soft"
          />
          <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-md bg-card/95 px-4 py-3 text-sm font-semibold shadow-soft">
            <MapPin className="h-4 w-4 text-gold-deep" /> {BUSINESS.city}, {BUSINESS.state}
          </div>
        </div>
        <div className="reveal">
          <p className="eyebrow">Areas Served</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Local Mold Remediation, With a Property-Focused Approach</h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Based in {BUSINESS.city}, {BUSINESS.state}. Service availability depends on your property&apos;s location — get in touch to confirm we can help.</p>
          <ul className="mt-7 flex flex-wrap gap-2">
            {BUSINESS.areas.map((a) => (
              <li key={a} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{a}</li>
            ))}
          </ul>
          <Button asChild variant="gold" size="lg" className="mt-9"><Link href="/contact-us">Check Service Availability</Link></Button>
        </div>
      </div>
    </section>
  );
}
