import type { Metadata } from "next";
import { ContactHero } from "@/components/contact-us/ContactHero";
import { ContactInfoCards } from "@/components/contact-us/ContactInfoCards";
import { EnquirySection } from "@/components/contact-us/EnquirySection";
import { LearnMoreCta } from "@/components/contact-us/LearnMoreCta";
import { ServiceArea } from "@/components/contact-us/ServiceArea";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Farewell Mold Remediation to describe your mold concern, ask about services, and discuss next steps for your property.",
  openGraph: {
    type: "website",
    title: "Contact Us | Farewell Mold Remediation",
    description: "Tell us about your property and mold concern — we'll discuss the appropriate next steps.",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoCards />
      <EnquirySection />
      <ServiceArea />
      <LearnMoreCta />
    </>
  );
}
