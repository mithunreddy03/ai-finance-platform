# FinTrack — AI Finance Platform 💰

A full-stack AI-powered personal finance management platform built with Next.js, MongoDB, Tailwind CSS, Prisma, Inngest, ArcJet, and Shadcn UI.

## Features

- 📊 Dashboard with account overview and transaction charts
- 🤖 AI-powered receipt scanning (Gemini AI)
- 💳 Multiple account management
- 🔁 Recurring transaction support
- 📧 Monthly financial email reports
- 🔔 Budget alerts
- 🔒 Secure authentication with Clerk
- 🛡️ Bot protection with ArcJet

## Tech Stack

- **Framework:** Next.js 15
- **Database:** MongoDB (via Prisma)
- **Auth:** Clerk
- **AI:** Google Gemini
- **Background Jobs:** Inngest
- **Email:** Resend
- **Security:** ArcJet
- **UI:** Tailwind CSS + Shadcn UI

## Getting Started

Make sure to create a `.env` file with the following variables:

```
DATABASE_URL=
DIRECT_URL=

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=

RESEND_API_KEY=

ARCJET_KEY=
```

Then run:

```bash
npm install
npx prisma db push
npm run dev
```
