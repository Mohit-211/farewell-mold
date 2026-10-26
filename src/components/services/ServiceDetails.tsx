import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/services";

export function ServiceDetails() {
  return (
    <section className="container-x py-24 md:py-32" aria-labelledby="services-heading">
      <div className="reveal max-w-2xl">
        <p className="eyebrow">What We Offer</p>
        <h2 id="services-heading" className="mt-4 text-4xl font-extrabold md:text-5xl">Our Services</h2>
        <p className="mt-5 text-lg text-muted-foreground">The appropriate approach always depends on the circumstances of your property.</p>
      </div>
      <div className="mt-16 space-y-20 md:space-y-28">
        {SERVICES.map(({ slug, title, icon: Icon, problem, involves, image }, i) => (
          <article key={slug} id={slug} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className={i % 2 ? "reveal lg:order-2" : "reveal"}>
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="aspect-[5/4] w-full rounded-md object-cover shadow-soft"
                />
              ) : (
                <div className="relative grid aspect-[5/4] place-items-center overflow-hidden rounded-md bg-charcoal">
                  <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />
                  <Icon className="h-24 w-24 text-gold" strokeWidth={0.9} aria-hidden />
                </div>
              )}
            </div>
            <div className="reveal">
              <span className="font-display text-sm font-extrabold tracking-[0.2em] text-gold-deep">0{i + 1}</span>
              <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">{title}</h3>
              <span className="gold-rule mt-6" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{problem}</p>
              <h4 className="mt-7 text-sm font-bold uppercase tracking-[0.16em]">What the work may involve</h4>
              <ul className="mt-4 space-y-3">
                {involves.map((x) => (
                  <li key={x} className="flex gap-3 text-muted-foreground">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{x}
                  </li>
                ))}
              </ul>
              <Link href="/contact-us" className="mt-8 inline-flex items-center gap-2 border-b-2 border-gold pb-1 font-semibold transition-all hover:gap-3 hover:text-gold-deep">
                Ask about {title.toLowerCase()} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
