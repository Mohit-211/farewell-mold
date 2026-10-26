"use server";

import { enquirySchema, getFieldErrors, SEND_FAILED_MESSAGE, type EnquiryResult } from "@/lib/enquiry";
import { sendEnquiryEmail } from "@/lib/mailer";

export async function submitEnquiry(input: unknown): Promise<EnquiryResult> {
  // Server Actions are public POST endpoints, so never trust the client-side validation.
  const parsed = enquirySchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, errors: getFieldErrors(parsed.error), message: "Please check the highlighted fields." };
  }

  try {
    await sendEnquiryEmail(parsed.data);
    return { ok: true };
  } catch (error) {
    console.error("Failed to send enquiry email:", error);
    return { ok: false, message: SEND_FAILED_MESSAGE };
  }
}
