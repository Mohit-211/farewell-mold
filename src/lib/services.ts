import { Droplets, Eraser, Search, ShieldAlert, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

export type Service = {
  /** Anchor id of the service on the services page. */
  slug: string;
  title: string;
  icon: LucideIcon;
  /** Short description for the home page overview cards. */
  summary: string;
  /** The situation the service addresses, shown on the services page. */
  problem: string;
  involves: string[];
  /** Services without a photo show their icon on a dark tile instead. */
  image?: { src: string; alt: string; width: number; height: number };
};

// Provisional service list — remove, rename, or reorder entries here once the actual offering is confirmed.
export const SERVICES: Service[] = [
  {
    slug: "mold-remediation",
    title: "Mold Remediation",
    icon: ShieldCheck,
    summary: "A structured approach to addressing mold growth and the conditions that allowed it to develop.",
    problem: "For mold growth that has affected parts of a property and needs a structured, considered response rather than a surface-level fix.",
    involves: ["Reviewing the affected areas and likely moisture source", "Containing work areas where appropriate", "Removing or cleaning affected materials as the situation calls for"],
    image: { src: "/assets/svc-removal.jpg", alt: "Worker in protective suit removing damaged drywall inside a plastic containment area", width: 1280, height: 1024 },
  },
  {
    slug: "mold-removal",
    title: "Mold Removal",
    icon: Eraser,
    summary: "Removing affected materials where appropriate, based on what the property and situation call for.",
    problem: "For materials where mold growth is present and removal is the more practical option than cleaning.",
    involves: ["Identifying which materials may need to be removed", "Careful removal with attention to surrounding areas", "Discussing what may be needed afterwards"],
    image: { src: "/assets/svc-mold-removal.jpg", alt: "Technician in a protective suit and mask placing sections of removed drywall into a heavy-duty disposal bag", width: 1280, height: 1024 },
  },
  {
    slug: "black-mold",
    title: "Black Mold Remediation",
    icon: ShieldAlert,
    summary: "Careful handling of dark-colored mold growth with attention to containment and affected surfaces.",
    problem: "For dark-colored mold growth, often found in damp areas such as basements, bathrooms or around past leaks. Color alone doesn't determine the type or the approach.",
    involves: ["Assessing the extent of visible growth", "Planning containment and handling of affected surfaces", "Considering the moisture conditions involved"],
    image: { src: "/assets/about.jpg", alt: "Professional with a clipboard examining dark staining on a basement wall", width: 1200, height: 1408 },
  },
  {
    slug: "inspection",
    title: "Mold Inspection and Assessment",
    icon: Search,
    summary: "A visual review of the property to understand visible concerns, moisture signs, and likely next steps.",
    problem: "For property owners who've noticed signs of a possible problem and want to understand what they're dealing with.",
    involves: ["A visual review of areas of concern", "Looking for signs of moisture or water damage", "Explaining findings and possible next steps"],
    image: { src: "/assets/concern.jpg", alt: "Gloved hand shining a flashlight on water staining in a ceiling corner", width: 1280, height: 1024 },
  },
  {
    slug: "cleanup",
    title: "Mold Cleanup",
    icon: Sparkles,
    summary: "Cleaning of affected areas and surfaces to help return the space to a more usable condition.",
    problem: "For affected surfaces that can be cleaned rather than removed, helping return a space to a more usable condition.",
    involves: ["Cleaning affected surfaces suited to cleaning", "Attention to nearby areas during the work", "A review of the area once work is complete"],
    image: { src: "/assets/svc-cleanup.jpg", alt: "Technician in gloves and mask cleaning a tiled bathroom wall", width: 1280, height: 1024 },
  },
  {
    slug: "prevention",
    title: "Moisture-Related Mold Prevention",
    icon: Droplets,
    summary: "Guidance on moisture sources and conditions that can contribute to mold returning.",
    problem: "For reducing the conditions that allow mold to return — because remediation alone doesn't address an ongoing moisture source.",
    involves: ["Discussing possible moisture sources", "Practical guidance on humidity and ventilation", "Pointing out issues that may need other trades"],
    image: { src: "/assets/svc-prevention.jpg", alt: "Hand holding a humidity meter reading 56% near a window", width: 1280, height: 1024 },
  },
];
