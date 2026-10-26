import { FaqSection } from "@/components/shared/FaqSection";

const FAQS = [
  { q: "What is the difference between mold removal and mold remediation?", a: "Removal generally refers to physically taking out mold or affected materials. Remediation is a broader approach that may include assessment, containment, removal or cleaning of materials as appropriate, and attention to the moisture conditions behind the growth." },
  { q: "What factors affect how long a project takes?", a: "Duration depends on the size of the affected area, the types of materials involved, access to the area, and the underlying moisture conditions. A realistic timeframe can only be discussed once the property has been assessed." },
  { q: "Why does moisture control matter?", a: "Mold needs moisture to grow. If a leak, humidity problem or ventilation issue continues, mold may return even after remediation. Addressing the moisture source is an important part of reducing the chance of recurrence, though no approach can guarantee it." },
  { q: "Does the right method vary by property?", a: "Yes. The appropriate approach depends on the affected materials, the extent of the problem, where it's located, and the conditions involved. Two properties with similar-looking problems may need different responses." },
  { q: "How can I request an assessment?", a: "Visit our Contact Us page or call [Phone Number]. Share a few details about your property, its location, and what you've noticed, and we'll follow up to discuss next steps." },
];

export function ServicesFaq() {
  return (
    <FaqSection
      className="border-t border-border bg-card"
      title="Service Questions"
      description="General guidance only — every property is different."
      faqs={FAQS}
    />
  );
}
