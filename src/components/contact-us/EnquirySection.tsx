import { Home as HomeIcon, MessageSquareText, Route as RouteIcon } from "lucide-react";
import { EnquiryForm } from "@/components/contact-us/EnquiryForm";

const NEXT_STEPS = [
  { icon: MessageSquareText, title: "Share Your Concern", text: "Tell us what you've noticed and a little about the property." },
  { icon: HomeIcon, title: "Discuss the Property", text: "The team can review your enquiry and talk through the situation with you." },
  { icon: RouteIcon, title: "Determine the Next Step", text: "Together, we'll work out an appropriate next step for your property." },
];

export function EnquirySection() {
  return (
    <section id="enquiry" className="scroll-mt-24 bg-secondary/60 py-20 md:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
        <div className="reveal rounded-md border border-border bg-card p-6 shadow-soft sm:p-10">
          <h2 className="text-3xl font-extrabold md:text-4xl">Tell Us About Your Property</h2>
          <p className="mt-3 mb-8 text-muted-foreground">These details help our team understand your enquiry before we get in touch.</p>
          <EnquiryForm />
        </div>
        <aside className="reveal lg:pt-6">
          <h2 className="text-2xl font-extrabold">What Happens Next?</h2>
          <span className="gold-rule mt-5" />
          <ol className="mt-8 space-y-8">
            {NEXT_STEPS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/60 bg-card">
                  <Icon className="h-5 w-5 text-gold-deep" strokeWidth={1.4} />
                </span>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] text-gold-deep">STEP 0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-bold">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-md border-l-2 border-gold bg-card p-6">
            <h3 className="font-bold">Questions are welcome</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              You can contact us to discuss visible mold, moisture concerns, or general questions about remediation.
              There&apos;s no need to have all the answers — just share what you&apos;ve noticed.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
