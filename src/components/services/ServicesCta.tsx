import Link from "next/link";
import { CtaBanner } from "@/components/shared/CtaBanner";
import { Button } from "@/components/ui/button";

export function ServicesCta() {
  return (
    <CtaBanner
      glow="bottom-left"
      title="Let's Talk About Your Mold Concerns"
      description="Share what you've noticed and we'll help you understand the options for your property."
    >
      <Button asChild variant="gold" size="lg"><Link href="/contact-us">Contact Us</Link></Button>
      <Button asChild variant="lineDark" size="lg"><Link href="/">Back to Home</Link></Button>
    </CtaBanner>
  );
}
