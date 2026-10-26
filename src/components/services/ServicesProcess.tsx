import { ClipboardCheck, Hammer, MessagesSquare, PencilRuler } from "lucide-react";
import { ProcessSection } from "@/components/shared/ProcessSection";

const STEPS = [
  { icon: MessagesSquare, title: "Initial Discussion", text: "A conversation about what you've noticed, the property, and its location." },
  { icon: ClipboardCheck, title: "Property Assessment", text: "Reviewing affected areas to understand the extent and possible moisture sources." },
  { icon: PencilRuler, title: "Remediation Plan", text: "Outlining a proposed approach suited to the materials and conditions found." },
  { icon: Hammer, title: "Remediation Work", text: "Carrying out the agreed work with care, then discussing any next steps." },
];

export function ServicesProcess() {
  return (
    <ProcessSection
      eyebrow="The Process"
      title="Understanding the Remediation Process"
      description="A general outline — each project is shaped by the property and what's found, so not every job follows identical steps."
      steps={STEPS}
    />
  );
}
