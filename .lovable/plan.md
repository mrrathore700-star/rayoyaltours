Plan to make the contact inquiry system production-ready on Vercel:

1. Normalize the Vercel project structure
   - Keep the serverless function at exactly `api/contact.ts` in the project root.
   - Keep `vercel.json` as exactly:

```json
{
  "version": 2
}
```

   - Remove any obsolete contact/email implementations if present, including EmailJS/Web3Forms handlers, old rewrites/routes/builds config, and any Supabase Edge Function contact/email code. Current inspection found no `supabase/functions` folder and no EmailJS/Web3Forms usage in the frontend.

2. Replace `api/contact.ts` with a minimal Vercel Node function
   - Use TypeScript with `export default async function handler(req, res)`.
   - Handle only `POST`; `GET` returns `405 Method Not Allowed` so `/api/contact` is not a 404 after deployment.
   - Read only `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` from environment variables.
   - Use Nodemailer SMTP with `secure: true` when port is `465`.
   - Send all inquiries to `info@heritagejaipurtravels.com`.
   - Include Name, Email, Phone, Message, and Time.
   - Return exactly `{ "success": true }` on success.
   - Return exactly `{ "success": false, "error": "Unable to send inquiry. Please try again later." }` on failures.
   - Add detailed server-side `console.error` logs without exposing credentials.

3. Update the Contact page form behavior
   - Submit with `fetch('/api/contact')` using `POST` and `Content-Type: application/json`.
   - Preserve client-side validation and spam honeypot.
   - Show a loading state while sending.
   - Show success text: `Thank you. Our Rajasthan travel specialist will contact you shortly.`
   - Show failure text: `Unable to send inquiry right now. Please try again later.`

4. Dependency/config verification
   - Ensure `nodemailer`, `@types/nodemailer`, and `@vercel/node` are present.
   - Keep the app compatible with React + Vite + Vercel, framework preset Vite, output directory `dist`.

5. Validation after implementation
   - Check files are in the expected paths.
   - Run a focused test/lint-style validation where appropriate without changing deployment settings.
   - Confirm the local source is ready so that after Vercel redeploys, `/api/contact` should return `Method Not Allowed` for browser GET instead of 404.

Important deployment note: if Vercel still shows 404 after these source fixes, the remaining cause is outside code: Vercel is deploying the wrong Git branch/root directory or the latest commit was not redeployed. The root directory must be the repository root that contains `api/`, `src/`, `public/`, `package.json`, and `vercel.json`.