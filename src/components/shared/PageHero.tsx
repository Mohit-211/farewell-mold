import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  /** Closing words of the title, set in gold. */
  highlight: string;
  description: string;
  image: { src: string; alt: string; width: number; height: number };
  /** Aspect ratio of the image; portrait by default. */
  imageClassName?: string;
  titleClassName?: string;
  /** Calls to action and other content below the description. */
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, highlight, description, image, imageClassName, titleClassName, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid items-center gap-12 pt-8 pb-14 md:pt-10 md:pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-12 lg:pb-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <p className="eyebrow flex items-center gap-3"><span className="gold-rule w-8" />{eyebrow}</p>
          <h1 className={cn("mt-6 text-[2.5rem] font-extrabold leading-[1.05] sm:text-6xl lg:text-[4rem]", titleClassName)}>
            {title} <span className="text-gold-deep">{highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{description}</p>
          {children}
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-md border border-gold/40 lg:block" />
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            preload
            sizes="(min-width: 1024px) 45vw, 100vw"
            className={cn("relative aspect-[4/5] w-full rounded-md object-cover shadow-soft", imageClassName)}
          />
        </div>
      </div>
    </section>
  );
}
