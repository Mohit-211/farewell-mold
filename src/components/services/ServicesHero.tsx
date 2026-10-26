import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Our Services"
      title="Mold Remediation Solutions for"
      highlight="Your Property."
      description="Mold-related problems vary depending on the affected area, the materials involved, and the moisture conditions behind them. Understanding the situation is the first step toward choosing the right response."
      image={{
        src: "/assets/services-hero.jpg",
        alt: "Professional in a mask and gloves inspecting a wall and ceiling with a flashlight in a bright apartment",
        width: 1280,
        height: 1440,
      }}
    >
      <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button asChild variant="gold" size="lg"><Link href="/contact-us">Request an Inspection</Link></Button>
        <Link href="/contact-us" className="inline-flex items-center gap-2 px-2 py-3 font-semibold hover:text-gold-deep">
          Contact Our Team <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </PageHero>
  );
}
