import { Building2, Home as HomeIcon, ListChecks, MessageSquare } from "lucide-react";

const VALUES = [
  { icon: Building2, label: "Residential & Commercial Solutions" },
  { icon: HomeIcon, label: "Property-Focused Approach" },
  { icon: MessageSquare, label: "Clear Communication" },
  { icon: ListChecks, label: "Practical Next Steps" },
];

export function ValuesStrip() {
  return (
    <section aria-label="Our service principles" className="border-y border-border bg-card">
      <ul className="container-x grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4">
        {VALUES.map(({ icon: Icon, label }) => (
          <li key={label} className="reveal flex items-center gap-3 px-2">
            <Icon className="h-6 w-6 shrink-0 text-gold-deep" strokeWidth={1.4} />
            <span className="text-sm font-semibold">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
