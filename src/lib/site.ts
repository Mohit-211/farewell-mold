// Placeholders — replace once business details are confirmed.
export const BUSINESS = {
  name: "Farewell Mold Remediation",
  phone: "[Phone Number]",
  email: "[Email Address]",
  city: "[Primary City]",
  state: "[State]",
  areas: ["[Service Area 1]", "[Service Area 2]", "[Service Area 3]", "[Service Area 4]"],
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
] as const;

const isPlaceholder = (value: string) => value.startsWith("[");

/** Link targets for the business contact details; undefined while they're still placeholders. */
export const PHONE_HREF = isPlaceholder(BUSINESS.phone) ? undefined : `tel:${BUSINESS.phone.replace(/[^0-9+]/g, "")}`;
export const EMAIL_HREF = isPlaceholder(BUSINESS.email) ? undefined : `mailto:${BUSINESS.email}`;
