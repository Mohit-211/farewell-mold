import { Mail, MapPin, Phone } from "lucide-react";
import { BUSINESS, EMAIL_HREF, PHONE_HREF } from "@/lib/site";

const CARDS = [
  { icon: Phone, label: "Phone", value: BUSINESS.phone, href: PHONE_HREF },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: EMAIL_HREF },
  { icon: MapPin, label: "Service Area", value: `${BUSINESS.city}, ${BUSINESS.state}` },
];

export function ContactInfoCards() {
  return (
    <section aria-label="Contact information" className="container-x grid gap-5 pb-20 md:grid-cols-3">
      {CARDS.map(({ icon: Icon, label, value, href }) => (
        <div key={label} className="rounded-md border border-border bg-card p-8 transition-all hover:border-gold/60 hover:shadow-soft">
          <Icon className="h-7 w-7 text-gold-deep" strokeWidth={1.4} />
          <h2 className="eyebrow mt-5">{label}</h2>
          {href ? (
            <a href={href} className="mt-2 block text-lg font-semibold hover:text-gold-deep">{value}</a>
          ) : (
            <p className="mt-2 text-lg font-semibold">{value}</p>
          )}
        </div>
      ))}
    </section>
  );
}
