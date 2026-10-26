import { PageHero } from "@/components/shared/PageHero";
import { Button } from "@/components/ui/button";

export function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Our Team"
      title="Let's Talk About Your"
      highlight="Mold Concerns."
      description="Whether you're a homeowner, landlord or property manager, describe your situation and ask about our services. We'll help you understand the options for your property."
      image={{
        src: "/assets/contact-hero.jpg",
        alt: "Mold remediation specialist in a respirator checking a hallway wall with a moisture meter and tablet",
        width: 1280,
        height: 1280,
      }}
      imageClassName="aspect-square"
    >
      <Button asChild variant="gold" size="lg" className="mt-9"><a href="#enquiry">Start Your Enquiry</a></Button>
    </PageHero>
  );
}
