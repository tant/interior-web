# Project Setup Guide

This guide provides a complete walkthrough for setting up the project from scratch. By following these steps, you will have a fully functional development environment.

## 1. Initial Setup

First, create a new Next.js project:

```bash
npx create-next-app@latest interior-website
cd interior-website
```

## 2. Install Dependencies

Next, install the required dependencies:

```bash
npm i @headlessui/react @heroicons/react @radix-ui/react-dialog @radix-ui/react-icons @radix-ui/react-slot framer-motion clsx lucide-react react-countup swiper tailwindcss-animatecss tailwind-merge react-icons next-themes
```

## 3. Initialize Shadcn/UI

Initialize Shadcn/UI for the project:

```bash
npx shadcn-ui@latest init
```

Follow the prompts to configure the settings.

## 4. Add UI Components

Add the necessary UI components using the Shadcn/UI CLI:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add sheet
npx shadcn-ui@latest add textarea
```

## 5. Run the Development Server

Finally, start the development server:

```bash
npm run dev
```

Your project will be running at [http://localhost:3000](http://localhost:3000).

---

## Raw Terminal Output for Reference

developer@machine:~/nextjs/interior-website$ npm i @headlessui/react

added 24 packages, and audited 365 packages in 34s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i @heroicons/react

added 1 package, and audited 366 packages in 2s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i @radix-ui/react-dialog

added 25 packages, and audited 391 packages in 4s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i @radix-ui/react-icons

added 1 package, and audited 392 packages in 2s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i @radix-ui/react-slot

up to date, audited 392 packages in 1s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i framer-motion

added 3 packages, and audited 395 packages in 2s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i clsx

up to date, audited 395 packages in 921ms

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i lucide-react

added 1 package, and audited 396 packages in 2s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i react-countup

added 2 packages, and audited 398 packages in 3s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i swiper

added 1 package, and audited 399 packages in 1s

143 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i tailwindcss-animatecss

added 1 package, and audited 400 packages in 2s

143 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npm i tailwind-merge

added 1 package, and audited 401 packages in 1s

144 packages are looking for funding
  run `npm fund` for details

developer@machine:~/nextjs/interior-website$ npm i react-icons

added 1 package, and audited 405 packages in 4s

146 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

developer@machine:~/nextjs/interior-website$ npm i next-themes

added 1 package, and audited 404 packages in 2s

146 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

found 0 vulnerabilities
developer@machine:~/nextjs/interior-website$ npx shadcn@latest init
✔ Preflight checks.
✔ Verifying framework. Found Next.js.
✔ Validating Tailwind CSS config. Found v4.
✔ Validating import alias.
✔ Which color would you like to use as the base color? › Slate
✔ Writing components.json.
✔ Checking registry.
✔ Updating CSS variables in app/globals.css
✔ Installing dependencies.
✔ Created 1 file:
  - lib/utils.ts

Success! Project initialization completed.
You may now add components.

developer@machine:~/nextjs/interior-website$ npx shadcn@latest add button
✔ Checking registry.
✔ Installing dependencies.
✔ Created 1 file:
  - components/ui/button.tsx

developer@machine:~/nextjs/interior-website$ npx shadcn@latest add input
✔ Checking registry.
✔ Created 1 file:
  - components/ui/input.tsx

developer@machine:~/nextjs/interior-website$ npx shadcn@latest add sheet
✔ Checking registry.
✔ Installing dependencies.
✔ Created 1 file:
  - components/ui/sheet.tsx

developer@machine:~/nextjs/interior-website$ npx shadcn@latest add textarea
✔ Checking registry.
✔ Created 1 file:
  - components/ui/textarea.tsx

