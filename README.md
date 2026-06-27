# TENX Fashion E-Commerce

TENX is a production-ready premium fashion storefront built with Next.js 15, React, TypeScript, Tailwind CSS, Framer Motion, Firebase, Stripe, and Zustand.

## Features

- Responsive premium storefront with home, shop, product detail, cart, checkout, account, wishlist, contact, FAQ, and policy pages
- Admin dashboard for revenue overview, orders, customers, products, inventory, coupons, analytics, reviews, discounts, and homepage banner management foundations
- Firebase Authentication with login, register, forgot password, and email verification
- Firebase Firestore collections for users, products, categories, orders, reviews, wishlist, cart, coupon, and newsletter
- Firebase Storage rules for product and user uploads
- Stripe Checkout API route
- Dark/light mode, animated product cards, optimized images, sitemap, robots.txt, Open Graph metadata, and accessible controls

## Getting Started

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env.local
```

Add your Firebase and Stripe keys to `.env.local`.

Run development:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Firebase Setup

1. Create a Firebase project.
2. Enable Email/Password Authentication.
3. Create Firestore collections: `users`, `products`, `categories`, `orders`, `reviews`, `wishlist`, `cart`, `coupon`, `newsletter`.
4. Enable Firebase Storage.
5. Deploy `firestore.rules` and `storage.rules`.
6. Set an admin custom claim for admin users:

```js
await admin.auth().setCustomUserClaims(uid, { admin: true });
```

## Stripe Setup

1. Create a Stripe account.
2. Add `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`.
3. Configure webhook handling for production order fulfillment.
4. The checkout route is available at `/api/checkout`.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import it in Vercel.
3. Add all variables from `.env.example`.
4. Deploy.

### Netlify

1. Push the project to GitHub.
2. Import it in Netlify.
3. Set build command to `npm run build`.
4. Set publish/runtime through the official Next.js Netlify adapter.
5. Add all variables from `.env.example`.

## Production Notes

- Replace demo product data in `lib/products.ts` with Firestore queries when live inventory is ready.
- Add Stripe webhooks to create/update Firestore orders after payment events.
- Connect the admin forms to Firestore writes and Storage uploads.
- Replace the contact map placeholder with a real Google Maps embed key.
- Review legal policy copy with counsel before launch.
