import { CloudDrizzle, Droplet, Eye, Layers, Wind } from "lucide-react";

const SIGNS = [
  { icon: Eye, title: "Visible mold", text: "Spots, patches or discoloration on walls, ceilings or other surfaces." },
  { icon: Wind, title: "Persistent musty odors", text: "An earthy or stale smell that lingers in a room or area." },
  { icon: Droplet, title: "Moisture damage", text: "Staining, bubbling paint or warping that suggests water exposure." },
  { icon: CloudDrizzle, title: "Recurring dampness", text: "Condensation or damp patches that keep coming back." },
  { icon: Layers, title: "Water-damaged materials", text: "Drywall, flooring or furnishings affected by leaks or flooding." },
];

export function SignsSection() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="reveal max-w-2xl">
        <p className="eyebrow">Know the Signs</p>
        <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">What May Indicate a Mold Problem</h2>
        <p className="mt-5 text-lg text-muted-foreground">These signs may warrant further assessment. On their own, they don&apos;t establish the full extent of a problem — but they&apos;re worth taking seriously.</p>
      </div>
      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {SIGNS.map(({ icon: Icon, title, text }) => (
          <li key={title} className="reveal rounded-md border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-accent">
              <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.5} />
            </span>
            <h3 className="mt-5 font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
