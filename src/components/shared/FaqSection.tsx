import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type FaqSectionProps = {
  title: string;
  description: string;
  faqs: { q: string; a: string }[];
  className?: string;
};

export function FaqSection({ title, description, faqs, className }: FaqSectionProps) {
  return (
    <section className={className}>
      <div className="container-x grid gap-12 py-24 md:py-32 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">{title}</h2>
          <p className="mt-5 text-muted-foreground">{description}</p>
        </div>
        <Accordion type="single" collapsible className="reveal border-t border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`q${i}`}>
              <AccordionTrigger className="py-6 text-left text-lg font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
