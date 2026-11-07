This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

Use Node.js **22 or newer** and **pnpm 11.21.0** (pinned in `package.json`).
This frontend uses pnpm exclusively; commit `pnpm-lock.yaml` with dependency changes
and do not generate npm, Yarn, or Bun lockfiles.

Install the locked dependencies, then run the development server:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

To intentionally change dependencies, use `pnpm add` / `pnpm remove`, or edit
`package.json` and run `pnpm install`. Review and commit the resulting lockfile.

Install safeguards are configured in `pnpm-workspace.yaml`: dependency versions
must be at least 24 hours old, exotic transitive sources are blocked, and only
`@heroui/shared-utils` and `sharp` are approved to run dependency build scripts.
Review any new build-script request before changing this allowlist; do not bypass
these checks to make an install pass.

HeroUI is pinned to **2.8.10** because the components and Tailwind plugin use its
v2 APIs. HeroUI packages are hoisted for Tailwind's theme source scanning.

Validate and build:

```bash
pnpm exec tsc --noEmit
pnpm build
pnpm start
```

The production build downloads Geist fonts from Google and needs network access.
The dashboard store count also requires the backend to be running.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
