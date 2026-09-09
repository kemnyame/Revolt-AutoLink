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
