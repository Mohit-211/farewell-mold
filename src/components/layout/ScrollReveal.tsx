"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const STAGGER_MS = 90;

function settle(event: AnimationEvent) {
  const el = event.currentTarget as HTMLElement;
  if (event.target !== el) return; // ignore animations bubbling up from children
  el.removeEventListener("animationend", settle);
  el.removeEventListener("animationcancel", settle);
  // Drop the animation once played, or it would replay whenever a kept-alive page is shown again.
  el.dataset.reveal = "done";
}

/**
 * Animates `.reveal` elements (styles in globals.css) the first time they scroll into view. Only elements
 * that start below the viewport are hidden, so nothing already on screen ever blinks out.
 */
export function ScrollReveal() {
  // Re-scan after every navigation. Pages visited earlier stay in the DOM, so settled elements are skipped.
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let arriving = 0;
        for (const { target, isIntersecting, boundingClientRect } of entries) {
          const el = target as HTMLElement;
          if (!el.dataset.reveal) {
            if (!boundingClientRect.height) continue; // not displayed, e.g. a page kept in the background
            // First report: leave anything already on screen alone, park the rest until it scrolls in.
            const onScreen = boundingClientRect.top < window.innerHeight;
            el.dataset.reveal = onScreen ? "done" : "hidden";
            if (onScreen) observer.unobserve(el);
          } else if (isIntersecting) {
            observer.unobserve(el);
            el.addEventListener("animationend", settle);
            el.addEventListener("animationcancel", settle);
            // Stagger with a timer rather than animation-delay: changing the delay of the parked animation
            // moves it back to its before phase, which fires a premature animationend.
            const delay = Math.min(arriving++, 4) * STAGGER_MS;
            const show = () => {
              // Skip if its page was hidden meanwhile, which cancels the animation and settles it.
              if (el.dataset.reveal === "hidden") el.dataset.reveal = "shown";
            };
            if (delay) setTimeout(show, delay);
            else show();
          }
        }
      },
      // Reveal once an element is a little way up the screen, not right at the bottom edge.
      { rootMargin: "0px 0px -12% 0px" },
    );

    for (const el of document.querySelectorAll(".reveal:not([data-reveal]), .reveal[data-reveal=hidden]")) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
