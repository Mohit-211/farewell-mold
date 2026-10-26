import { MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="bg-charcoal py-20 text-charcoal-foreground md:py-24">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <div className="reveal">
          <p className="eyebrow text-gold">Service Area</p>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">Is Your Property in Our Coverage Area?</h2>
          <p className="mt-5 text-charcoal-foreground/70">Please confirm your property&apos;s location when you get in touch. Service availability depends on where the property is.</p>
        </div>
        <div className="reveal rounded-md border border-charcoal-foreground/15 p-8">
          <p className="flex items-center gap-2 text-lg font-semibold"><MapPin className="h-5 w-5 text-gold" /> {BUSINESS.city}, {BUSINESS.state}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {BUSINESS.areas.map((a) => (
              <li key={a} className="rounded-full border border-charcoal-foreground/20 px-4 py-2 text-sm">{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
