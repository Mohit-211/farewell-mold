import type { Metadata } from "next";
import { ApproachSection } from "@/components/services/ApproachSection";
import { PropertyTypes } from "@/components/services/PropertyTypes";
import { ServiceDetails } from "@/components/services/ServiceDetails";
import { ServicesCta } from "@/components/services/ServicesCta";
import { ServicesFaq } from "@/components/services/ServicesFaq";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { SignsSection } from "@/components/services/SignsSection";

export const metadata: Metadata = {
  title: "Mold Remediation Services",
  description: "Mold remediation, removal, cleanup, assessment and moisture-related prevention for residential and commercial properties.",
  openGraph: {
    type: "website",
    title: "Mold Remediation Services | Farewell Mold Remediation",
    description: "Mold solutions shaped by your property's affected areas, materials and moisture conditions.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ApproachSection />
      <ServiceDetails />
      <PropertyTypes />
      <ServicesProcess />
      <SignsSection />
      <ServicesFaq />
      <ServicesCta />
    </>
  );
}
