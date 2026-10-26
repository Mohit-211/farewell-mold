import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export function ServicesOverview() {
  return (
    <section className="bg-secondary/60 py-24 md:py-32">
      <div className="container-x">
        <div className="reveal max-w-2xl">
          <p className="eyebrow">Services</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">Mold Solutions for Your Property</h2>
          <p className="mt-5 text-lg text-muted-foreground">The right approach depends on the affected materials, the extent of the problem, and the underlying moisture conditions.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, summary }) => (
            <article key={title} className="reveal group relative flex flex-col rounded-md border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
              <span className="absolute left-8 top-0 h-0.5 w-10 bg-gold-gradient transition-all duration-300 group-hover:w-20" />
              <Icon className="h-9 w-9 text-foreground" strokeWidth={1.25} />
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{summary}</p>
              <Link href="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
