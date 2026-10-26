"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, CircleAlert } from "lucide-react";
import { submitEnquiry } from "@/app/contact-us/actions";
import { Button } from "@/components/ui/button";
import {
  CONCERN_TYPES,
  PROPERTY_TYPES,
  SEND_FAILED_MESSAGE,
  enquirySchema,
  getFieldErrors,
  type Enquiry,
  type EnquiryErrors,
  type EnquiryResult,
} from "@/lib/enquiry";

const inputCls =
  "mt-2 block w-full rounded-md border border-input bg-background px-4 py-3 text-base outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/30 aria-[invalid=true]:border-destructive";

function Field({ id, label, required, error, children }: { id: string; label: string; required?: boolean; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label} {required && <span className="text-gold-deep" aria-hidden>*</span>}
        {required && <span className="sr-only">(required)</span>}
      </label>
      {children}
      {error && <p id={`${id}-error`} className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function EnquiryForm() {
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [formError, setFormError] = useState<string>();
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const parsed = enquirySchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) {
      const next = getFieldErrors(parsed.error);
      setErrors(next);
      setFormError(undefined);
      const first = Object.keys(next)[0];
      if (first) (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setFormError(undefined);
    setStatus("sending");
    let result: EnquiryResult;
    try {
      result = await submitEnquiry(parsed.data);
    } catch {
      // Network failure or the server action itself crashing.
      result = { ok: false, message: SEND_FAILED_MESSAGE };
    }
    if (result.ok) {
      setStatus("done");
      return;
    }
    setErrors(result.errors ?? {});
    setFormError(result.message);
    setStatus("idle");
  }

  if (status === "done") {
    return (
      <div role="status" className="py-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold-deep" strokeWidth={1.4} />
        <h3 className="mt-5 text-2xl font-bold">Thank you — your enquiry was sent</h3>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Our team can review your enquiry and discuss appropriate next steps.
        </p>
        <Button variant="line" className="mt-7" onClick={() => setStatus("idle")}>Start a new enquiry</Button>
      </div>
    );
  }

  const ariaProps = (field: keyof Enquiry) => ({
    "aria-invalid": !!errors[field],
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name" required error={errors.fullName}>
          <input id="fullName" name="fullName" autoComplete="name" required maxLength={100} className={inputCls} {...ariaProps("fullName")} />
        </Field>
        <Field id="phone" label="Phone Number" required error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} className={inputCls} {...ariaProps("phone")} />
        </Field>
      </div>
      <Field id="email" label="Email Address" required error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={255} className={inputCls} {...ariaProps("email")} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="propertyType" label="Property Type" required error={errors.propertyType}>
          <select id="propertyType" name="propertyType" required defaultValue="" className={inputCls} {...ariaProps("propertyType")}>
            <option value="" disabled>Select…</option>
            {PROPERTY_TYPES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
        <Field id="concern" label="Type of Concern" required error={errors.concern}>
          <select id="concern" name="concern" required defaultValue="" className={inputCls} {...ariaProps("concern")}>
            <option value="" disabled>Select…</option>
            {CONCERN_TYPES.map((o) => <option key={o}>{o}</option>)}
          </select>
        </Field>
      </div>
      <Field id="location" label="Property Location or ZIP Code" required error={errors.location}>
        <input id="location" name="location" autoComplete="postal-code" required maxLength={120} className={inputCls} {...ariaProps("location")} />
      </Field>
      <Field id="details" label="Additional Details" error={errors.details}>
        <textarea id="details" name="details" rows={5} maxLength={2000} placeholder="What have you noticed, and where?" className={inputCls} {...ariaProps("details")} />
      </Field>
      <p className="text-xs text-muted-foreground"><span className="text-gold-deep">*</span> Required fields</p>
      {formError && (
        <p role="alert" className="flex gap-2 rounded-md border border-destructive/40 px-4 py-3 text-sm text-destructive">
          <CircleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          {formError}
        </p>
      )}
      <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit Enquiry"}
      </Button>
    </form>
  );
}
