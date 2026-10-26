import { z } from "zod";

export const PROPERTY_TYPES = ["Residential", "Rental Property", "Commercial", "Other"] as const;
export const CONCERN_TYPES = ["Visible Mold", "Musty Odor", "Moisture or Water Damage", "Suspected Hidden Mold", "Other"] as const;

// Inputs can't contain line breaks, but direct POSTs can; collapse them so they can't fake lines in the email.
const singleLine = () => z.string().trim().overwrite((value) => value.replace(/\s+/g, " "));

// Shared by the contact form (instant feedback) and the server action (the actual check).
export const enquirySchema = z.object({
  fullName: singleLine().min(1, "Please enter your full name").max(100, "Name must be under 100 characters"),
  phone: singleLine()
    .min(1, "Please enter a phone number")
    .max(30, "Phone number is too long")
    .regex(/^[0-9+()\-.\s]{7,}$/, "Please enter a valid phone number"),
  email: z.string().trim().min(1, "Please enter your email").max(255).pipe(z.email("Please enter a valid email address")),
  propertyType: z.enum(PROPERTY_TYPES, { error: "Please select a property type" }),
  location: singleLine().min(1, "Please enter the property location or ZIP code").max(120),
  concern: z.enum(CONCERN_TYPES, { error: "Please select a type of concern" }),
  details: z.string().trim().max(2000, "Please keep details under 2000 characters").optional(),
});

export type Enquiry = z.infer<typeof enquirySchema>;
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;
export type EnquiryResult = { ok: true } | { ok: false; errors?: EnquiryErrors; message?: string };

export const SEND_FAILED_MESSAGE =
  "We couldn't send your enquiry right now. Please try again shortly, or contact us by phone or email.";

/** The first validation message for each invalid field. */
export function getFieldErrors(error: z.ZodError<Enquiry>): EnquiryErrors {
  const { fieldErrors } = z.flattenError(error);
  const errors: EnquiryErrors = {};
  for (const field of Object.keys(fieldErrors) as (keyof Enquiry)[]) {
    errors[field] = fieldErrors[field]?.[0];
  }
  return errors;
}
