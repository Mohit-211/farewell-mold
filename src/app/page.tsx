import type { Metadata } from "next";
import { AboutSection } from "@/components/home/AboutSection";
import { AreasServed } from "@/components/home/AreasServed";
import { ConcernsSection } from "@/components/home/ConcernsSection";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeProcess } from "@/components/home/HomeProcess";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { ValuesStrip } from "@/components/home/ValuesStrip";
import { WhoWeHelp } from "@/components/home/WhoWeHelp";

export const metadata: Metadata = {
  title: { absolute: "Farewell Mold Remediation | Professional Mold Remediation" },
  description: "Farewell Mold Remediation helps residential and commercial property owners address mold problems with professional remediation and clear next steps.",
  openGraph: {
    type: "website",
    title: "Farewell Mold Remediation | Professional Mold Remediation",
    description: "Professional mold remediation for homes and commercial properties. Request an inspection today.",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ValuesStrip />
      <AboutSection />
      <ServicesOverview />
      <ConcernsSection />
      <HomeProcess />
      <WhoWeHelp />
      <AreasServed />
      <HomeFaq />
      <HomeCta />
    </>
  );
}
