import Link from "next/link";
import { cacheLife } from "next/cache";
import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/site";

// Cache Components rejects reading the clock while prerendering, so cache the year and refresh it daily.
async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-charcoal-foreground">
      <div className="h-px bg-gold-gradient" />
      <div className="container-x grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-xl font-extrabold">Farewell Mold Remediation</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-foreground/65">
            Professional mold remediation for residential and commercial property owners, with a focus on
            clear communication and practical next steps.
          </p>
        </div>
        <div>
          <h2 className="eyebrow text-gold">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV_LINKS.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-charcoal-foreground/75 hover:text-gold">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-charcoal-foreground/75">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /> {BUSINESS.phone}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" /> {BUSINESS.email}</li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold" /> {BUSINESS.city}, {BUSINESS.state}
            </li>
          </ul>
          <p className="mt-5 text-xs text-charcoal-foreground/50">Serving: {BUSINESS.areas.join(", ")}</p>
        </div>
      </div>
      <div className="border-t border-charcoal-foreground/10">
        <div className="container-x py-6 text-xs text-charcoal-foreground/50">
          © <CopyrightYear /> Farewell Mold Remediation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
