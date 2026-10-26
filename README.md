# Farewell Mold Remediation

Marketing site for Farewell Mold Remediation, built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Gmail credentials
npm run dev                  # http://localhost:3000
```

| Script          | What it does                 |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Run ESLint                   |

## Contact form email

The Contact Us form calls a Server Action (`src/app/contact-us/actions.ts`) that validates the enquiry and emails it to the business through Gmail SMTP using Nodemailer. Nothing is stored.

| Variable             | Required | Description                                                     |
| -------------------- | -------- | --------------------------------------------------------------- |
| `GMAIL_USER`         | Yes      | Main Gmail account that signs in to SMTP                        |
| `GMAIL_APP_PASSWORD` | Yes      | Google App Password for that account (not the normal password)  |
| `MAIL_FROM`          | No       | Address the emails are sent from, e.g. an alias. Defaults to `GMAIL_USER` |
| `CONTACT_TO_EMAIL`   | No       | Inbox that receives enquiries. Defaults to `GMAIL_USER`         |

To create the app password, turn on 2-Step Verification for the Google account, then generate one at <https://myaccount.google.com/apppasswords>. Set the same variables in your hosting provider's environment settings when deploying.

`MAIL_FROM` must be added to the `GMAIL_USER` account under Gmail **Settings → Accounts → Send mail as** and verified. If it isn't, Gmail silently replaces it with `GMAIL_USER`.

Each enquiry email's Reply-To is the customer's address, so replying in Gmail goes straight to them.

## Project structure

```
src/
  app/                Routes (/, /services, /contact-us), the contact Server Action, 404 and error pages
  components/
    home/             Sections of the home page
    services/         Sections of the services page
    contact-us/       Sections of the contact page, including the enquiry form
    shared/           Sections reused across pages: hero, process steps, FAQ, call to action
    layout/           Site header and footer
    ui/               shadcn/ui primitives (button, accordion)
  lib/
    site.ts           Business details and navigation (placeholders to replace)
    services.ts       Service list used by the home and services pages
    enquiry.ts        Contact form validation, shared by the form and the Server Action
    mailer.ts         Gmail SMTP sender (server only)
public/assets/        Images
```
