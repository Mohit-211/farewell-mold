import "server-only";
import nodemailer from "nodemailer";

import type { Enquiry } from "@/lib/enquiry";
import { BUSINESS } from "@/lib/site";

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => `&#${char.charCodeAt(0)};`);

/** Emails a contact form enquiry to the business inbox through Gmail SMTP. */
export async function sendEnquiryEmail(enquiry: Enquiry) {
  const user = process.env.GMAIL_USER;
  // Google displays app passwords in groups of four; accept them pasted with or without spaces.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!user || !pass) {
    throw new Error("GMAIL_USER and GMAIL_APP_PASSWORD must be set to send enquiry emails.");
  }
  // Gmail only keeps this if it's a verified "Send mail as" alias of GMAIL_USER; otherwise it's replaced with GMAIL_USER.
  const from = process.env.MAIL_FROM || user;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  const fields: [label: string, value: string][] = [
    ["Name", enquiry.fullName],
    ["Phone", enquiry.phone],
    ["Email", enquiry.email],
    ["Property type", enquiry.propertyType],
    ["Location", enquiry.location],
    ["Concern", enquiry.concern],
    ["Details", enquiry.details || "—"],
  ];

  await transporter.sendMail({
    from: { name: `${BUSINESS.name} Website`, address: from },
    to: process.env.CONTACT_TO_EMAIL || user,
    replyTo: { name: enquiry.fullName, address: enquiry.email },
    subject: `New enquiry from ${enquiry.fullName} — ${enquiry.concern}`,
    text: fields.map(([label, value]) => `${label}: ${value}`).join("\n"),
    html: `<table cellpadding="6">${fields
      .map(([label, value]) => `<tr><th align="left" valign="top">${label}</th><td style="white-space:pre-wrap">${escapeHtml(value)}</td></tr>`)
      .join("")}</table>`,
  });
}
