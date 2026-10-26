"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/site";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Farewell Mold Remediation home">
      <span className="grid h-9 w-9 place-items-center rounded-sm bg-foreground font-display text-lg font-extrabold text-gold">
        F
      </span>
      <span className="leading-tight">
        <span className="block font-display text-[1.05rem] font-extrabold tracking-tight">Farewell</span>
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Mold Remediation
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-x flex h-[4.5rem] items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              aria-current={pathname === n.href ? "page" : undefined}
              className="relative py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground aria-[current=page]:font-semibold aria-[current=page]:text-foreground aria-[current=page]:after:absolute aria-[current=page]:after:inset-x-0 aria-[current=page]:after:-bottom-0.5 aria-[current=page]:after:h-0.5 aria-[current=page]:after:bg-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="gold">
            <Link href="/contact-us">Request an Inspection</Link>
          </Button>
        </div>
        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === n.href ? "page" : undefined}
                className="rounded-md border-l-2 border-transparent px-3 py-3 font-medium hover:bg-muted aria-[current=page]:border-gold aria-[current=page]:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild variant="gold" size="lg" className="mt-3">
              <Link href="/contact-us" onClick={() => setOpen(false)}>
                Request an Inspection
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
