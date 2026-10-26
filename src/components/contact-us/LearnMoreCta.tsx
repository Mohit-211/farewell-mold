import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LearnMoreCta() {
  return (
    <section className="container-x flex flex-col items-start justify-between gap-6 py-20 md:flex-row md:items-center">
      <div className="reveal">
        <h2 className="text-3xl font-extrabold">Want to learn more first?</h2>
        <p className="mt-2 text-muted-foreground">Explore our services or head back to the homepage.</p>
      </div>
      <div className="reveal flex flex-col gap-3 sm:flex-row">
        <Button asChild variant="gold" size="lg"><Link href="/services">Explore Our Services <ArrowRight /></Link></Button>
        <Button asChild variant="line" size="lg"><Link href="/">Back to Home</Link></Button>
      </div>
    </section>
  );
}
