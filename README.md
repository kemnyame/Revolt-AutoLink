# Revolt AutoLink — Railway Hosting Build
**Find It. Trust It. Drive It.**

## Included
- Separate protected Admin portal at `/admin.html`
- Default requested Admin credentials: `admin` / `admin`
- Backend-managed vehicles, photos, video, engine sound, About Us, customers, enquiries, inspections, car requests, alerts, messages and audit logs
- Structured photo upload slots: front, back, left, right, front interior, rear interior, engine bay, boot/trunk, plus gallery
- Walkaround video and engine-sound upload, rendered on vehicle pages
- Customer email/password accounts plus configurable Google and Facebook OAuth
- Customer sign-in required before enquiries, inspections and Find Me a Car requests
- WhatsApp chat linked to +233 50 008 1646
- Saved/Compare use sessionStorage and clear after the browser/tab session
- SQLite database and persistent upload directory

## Railway variables
Set these in Railway > Service > Variables:
`PORT=3000`
`DATABASE_PATH=/app/data/revolt.db`
`ADMIN_EMAIL=admin`
`ADMIN_PASSWORD=admin`
`APP_URL=https://YOUR-RAILWAY-DOMAIN.up.railway.app`

For Google sign-in also set `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
Authorized redirect URI: `https://YOUR-DOMAIN/api/oauth/google/callback`

For Facebook sign-in also set `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET`.
Valid OAuth redirect URI: `https://YOUR-DOMAIN/api/oauth/facebook/callback`

Google/Facebook buttons are built in, but the providers will not authenticate users until their app credentials and redirect URLs are configured in the provider consoles.

## Persistent Railway storage
Mount persistent storage to `/app/data` for SQLite and `/app/uploads` for vehicle media. Uploaded photos, videos and audio are local files and require persistent storage.

## Start
`npm start`

## Security
The requested default Admin credentials are included. Change them before a real public launch.


## Ecosystem expansion
Includes interactive gallery, Parts Store/cart/orders, payment architecture for MoMo/card provider credentials, services/service requests, towing coming-soon page, agents, admin-managed terms, finance dashboard, and database-backed in-app chat with Admin Chat Centre.

## Customer Experience & Communication Update
- Dark/light theme toggle with saved preference.
- Responsive, differentiated Parts Store and Services experiences.
- Animated Add to Cart feedback and compact responsive checkout.
- Service requests, vehicle enquiries, inspection requests and Find-a-Car requests automatically create linked in-app conversations.
- Admin Notification Setup page configures admin email/WhatsApp recipients plus Resend and Meta WhatsApp Cloud API credentials.
- External notifications require provider credentials. Recommended production practice is to store API secrets as Railway environment variables: `RESEND_API_KEY`, `NOTIFY_FROM_EMAIL`, `ADMIN_NOTIFY_EMAIL`, `WHATSAPP_TOKEN`, `WHATSAPP_PHONE_NUMBER_ID`, `ADMIN_NOTIFY_WHATSAPP`.
- Admin can upload product/service images from files instead of pasting URLs.
- Legal & Agreement Documents centre supports PDF, DOC/DOCX and image uploads.

### Notification providers
Email delivery is wired to Resend when configured. WhatsApp delivery is wired to Meta WhatsApp Cloud API when configured. In-app request/chat functionality works even when external notification providers are not configured.

## Urgent media/chat/store/payment update - 9 Sep 2026
- Vehicle photography now uses labelled upload frames (Front, Back, Left, Right, Front Interior, Rear Interior, Engine Bay, Boot/Trunk, Gallery).
- Admin previews selected photography immediately and can choose any uploaded image as the Browse Cars display photo.
- Public vehicle detail now renders an organised, labelled photography gallery with fullscreen arrows.
- Admin Chat Centre no longer re-renders while the agent is typing; replies remain stable and messages refresh without destroying the input.
- Store has live client-side search. Internal stock counts are not displayed to customers.
- Admin > Payment Setup accepts Paystack configuration for GHS Card and Mobile Money checkout. Use TEST keys first. Secret keys remain server-side.
- Vehicle registration uses dropdowns and feature checkboxes for standardized data entry.

### Payment production setup
In Admin > Payment Setup configure Paystack and the callback URL. Railway can alternatively set `PAYSTACK_SECRET_KEY`. Never place the secret key in frontend code. Complete merchant verification and test transactions before switching to live keys.

## Production hardening added Sep 10, 2026

### Staging and production
Use two Railway services from the same repository:
- `revolt-autolink-staging` connected to a staging branch and separate database/volumes.
- `revolt-autolink-production` connected to the production/main branch and production database/volumes.
Promote a tested commit from staging to production rather than editing production directly.

### Vehicle media storage
The application continues to support its existing `/uploads` volume for compatibility. For scale, configure an S3-compatible object-storage/CDN layer and migrate uploaded vehicle images/video/audio there. Keep only object URLs in the `media.path` column. Do not share staging and production buckets/credentials.

Recommended environment variables for the next storage adapter:
`OBJECT_STORAGE_ENDPOINT`, `OBJECT_STORAGE_BUCKET`, `OBJECT_STORAGE_ACCESS_KEY`, `OBJECT_STORAGE_SECRET_KEY`, `OBJECT_STORAGE_PUBLIC_BASE_URL`.

The public catalogue now cache-busts its vehicle API refresh and gracefully handles broken media URLs, which prevents a missing file from breaking Browse Cars. Persistent production media still requires a Railway volume or object storage.

## Sep 14 robust request / chat update
- Admin notification panel is now a New / Read alert feed. Opening a request category marks its current alerts as read.
- Request emails use branded HTML with the Revolt AutoLink logo and direct customer/Admin links. Set `APP_URL=https://revolt-autolink-production.up.railway.app` so links and logo resolve correctly. Live email delivery requires `RESEND_API_KEY`, `NOTIFY_FROM_EMAIL`, and `ADMIN_NOTIFY_EMAIL`.
- Vehicle enquiry and inspection email/chat subjects use the vehicle title rather than a numeric request reference.
- Admin Chat Centre groups conversations by customer and keeps each vehicle/service as a named thread.
- Dealers & Garages Admin captures business registration, contact/WhatsApp, location, operating hours, specialties, commercial terms, internal notes and optional logo URL.
- Compare includes a Decision Assistant button that ranks the currently compared vehicles using only recorded data and explains its reasons and missing information. It does not replace a physical/mechanical inspection.

## September 14 ownership and workflow hardening
- Request alerts are presented as NEW and READ only.
- Branded request email workflow includes Revolt logo, request content, vehicle name where applicable, and direct Admin/customer links. Requires configured Resend credentials and APP_URL.
- Customer conversations remain separated by request context but grouped under the same customer in Admin Chat Centre.
- Dealer/Garage CRM remains available in Admin.
- Compare is mobile-hardened and includes a visible "Give Me the Best Option" decision assistant.
- Vehicle Ownership is now a first-class experience. Admin can register a purchased vehicle to a customer and link tracker status/device ID, insurance, service dates, ownership history and last-known location. The customer sees the vehicle under My Vehicles.
- Live GPS coordinates/maps require a future supported tracker-provider API integration. The current build stores and presents tracker linkage/status and ownership data without pretending a live GPS provider is connected.
