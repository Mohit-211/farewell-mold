import { ClipboardCheck, Ear, Hammer, PencilRuler } from "lucide-react";
import { ProcessSection } from "@/components/shared/ProcessSection";

const STEPS = [
  { icon: Ear, title: "Understand the Problem", text: "We start by listening to what you've noticed — visible growth, odors, dampness, or past water issues." },
  { icon: ClipboardCheck, title: "Assess the Property", text: "Affected areas are reviewed to understand the extent of the concern and possible moisture sources." },
  { icon: PencilRuler, title: "Plan the Approach", text: "A remediation approach is outlined based on the materials involved and the conditions found." },
  { icon: Hammer, title: "Carry Out the Work", text: "The agreed work is carried out with care for your property, followed by a review of next steps." },
];

export function HomeProcess() {
  return (
    <ProcessSection
      eyebrow="Our Process"
      title="A Clear, Considered Workflow"
      description="A general overview of a typical remediation workflow. Each project is shaped by the property and what's found."
      steps={STEPS}
    />
  );
}
