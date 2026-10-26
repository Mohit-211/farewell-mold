import { FaqSection } from "@/components/shared/FaqSection";

const FAQS = [
  { q: "What are the common signs of a mold problem?", a: "Common signs include visible spots or discoloration on walls, ceilings, or other surfaces, a persistent musty odor, recurring dampness or condensation, and materials that have been affected by leaks or flooding. These signs don't confirm a problem on their own, but they are worth having assessed." },
  { q: "What is the difference between mold removal and mold remediation?", a: "\"Removal\" usually refers to physically removing mold or affected materials. \"Remediation\" is a broader process that typically includes assessing the situation, containing affected areas, removing or cleaning materials as appropriate, and considering the moisture conditions behind the growth." },
  { q: "How long can mold remediation take?", a: "It depends on the size of the affected area, the materials involved, and the underlying moisture conditions. Smaller projects may be completed relatively quickly, while larger or more complex situations take longer. A timeframe can be discussed once the property has been assessed." },
  { q: "Can mold return after remediation?", a: "Mold can return if the conditions that allowed it to grow remain. Identifying and addressing the underlying moisture source — such as leaks, poor ventilation, or ongoing humidity — is an important part of reducing the chance of recurrence." },
  { q: "Do you handle residential and commercial properties?", a: "Farewell Mold Remediation works with property owners on mold-related concerns. [Confirm the specific property types served — e.g. homes, rental properties, offices.] Get in touch to discuss your property." },
  { q: "How can I request an assessment?", a: "Visit our Contact Us page or call [Phone Number] to share a few details about your property and the concerns you've noticed. We'll follow up to discuss next steps." },
];

export function HomeFaq() {
  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Every property is different. These answers offer general guidance — the best next step is a conversation about yours."
      faqs={FAQS}
    />
  );
}
