# Aliza Zack Civil Engineering Web App

Modern marketing site + client portal + admin portal for Aliza Zack (civil engineer), with quote requests, document sharing, project updates, and payments (Stripe + PayPal).

## Run locally

This project is intentionally **dependency-free** (no npm) so it can run in minimal environments.

1) Start the server:

```bash
node server/dev-server.mjs
```

2) Open:
- Public site: `http://localhost:3000/`
- Client portal: `http://localhost:3000/portal/`
- Admin portal: `http://localhost:3000/admin/`

## Configure (later steps)

The UI and flows are implemented. To fully enable backend features you’ll add environment variables and Firebase config:

- Firebase (Auth/Firestore/Storage): set values in `public/js/firebase-config.example.js` and copy to `public/js/firebase-config.js`
- Payments (server endpoints used by the portals):
  - Stripe: set `STRIPE_SECRET_KEY` in your environment
  - PayPal: set `PAYPAL_CLIENT_ID` + `PAYPAL_CLIENT_SECRET` + `PAYPAL_ENV` (`sandbox|live`)

## Project structure
- `public/`: static web app (Tailwind via CDN, modern UI)
- `public/portal/`: client portal pages
- `public/admin/`: admin portal pages
- `public/js/`: shared client-side modules (auth, api, ui)
- `server/`: local dev server + payment endpoints (Node built-ins only)

