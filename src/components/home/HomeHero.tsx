import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <PageHero
      eyebrow="Professional Mold Remediation"
      title="A Fresh Start Begins With a"
      highlight="Healthier Space."
      titleClassName="text-[2.6rem] leading-[1.04] lg:text-[4.25rem]"
      description="Farewell Mold Remediation helps property owners address mold problems through professional remediation solutions — from understanding what you're seeing to planning the right next steps."
      image={{
        src: "/assets/hero.jpg",
        alt: "Mold remediation specialist in protective gear checking a water-damaged wall with a moisture meter",
        width: 1280,
        height: 1440,
      }}
    >
      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="gold" size="lg"><Link href="/contact-us">Request an Inspection</Link></Button>
        <Button asChild variant="line" size="lg"><Link href="/services">Explore Our Services <ArrowRight /></Link></Button>
      </div>
      <p className="mt-8 border-l-2 border-gold pl-4 text-sm text-muted-foreground">
        Professional service with careful attention to your property, from first conversation to finished work.
      </p>
    </PageHero>
  );
}
