import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import { ScrollReveal } from "@/components/layout/ScrollReveal";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const figtree = Figtree({ subsets: ["latin"], variable: "--font-figtree" });

export const metadata: Metadata = {
  title: {
    default: "Farewell Mold Remediation",
    template: "%s | Farewell Mold Remediation",
  },
  description: "Professional mold remediation for residential and commercial properties.",
  openGraph: {
    type: "website",
    title: "Farewell Mold Remediation",
    description: "Professional mold remediation for residential and commercial properties.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // data-scroll-behavior keeps smooth scrolling for in-page anchors but not for route changes.
    <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${figtree.variable}`}>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollReveal />
      </body>
    </html>
  );
}
