import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="container-x grid items-center gap-12 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
      <Image
        src="/assets/about.jpg"
        alt="Remediation professional with a clipboard assessing a basement wall for moisture"
        width={1200}
        height={1408}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="reveal aspect-[5/6] w-full rounded-md object-cover shadow-soft"
      />
      <div className="reveal">
        <p className="eyebrow">About Us</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Helping Property Owners Move Forward</h2>
        <span className="gold-rule mt-7" />
        <div className="mt-7 space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>Finding mold in a home or building can be unsettling. Often the hardest part is knowing what you&apos;re looking at — and what to do next.</p>
          <p>Farewell Mold Remediation is focused on mold-related property concerns. We take moisture issues seriously, look at the conditions behind the problem, and help you understand your options in plain language.</p>
          <p>Our aim is simple: a clear picture of the situation, a sensible approach, and work carried out with respect for your property.</p>
        </div>
        <Button asChild variant="ink" size="lg" className="mt-9"><Link href="/services">Learn About Our Services <ArrowRight /></Link></Button>
      </div>
    </section>
  );
}
