import Link from "next/link";
import { Phone } from "lucide-react";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/button";
import { BUSINESS, PHONE_HREF } from "@/lib/site";

export function HomeCta() {
  return (
    <CtaBanner
      title="Ready to Address Your Mold Concerns?"
      description="Tell us what you've noticed. We'll talk through your situation and help you understand the next steps."
    >
      <Button asChild variant="gold" size="lg"><Link href="/contact-us">Contact Our Team</Link></Button>
      <Button asChild variant="lineDark" size="lg"><a href={PHONE_HREF}><Phone /> Call {BUSINESS.phone}</a></Button>
    </CtaBanner>
  );
}
