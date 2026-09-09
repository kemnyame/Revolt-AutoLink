# Revolt AutoLink - Hosting Complete Build

This build keeps the approved Revolt AutoLink public design and uses the Node.js + SQLite backend as the operational source of truth.

## Included
- Public vehicle catalogue loaded from the database
- Separate `/admin.html` dashboard
- Direct admin access for the current testing phase (no admin authentication gate)
- Vehicle create/edit/status/delete
- Multi-photo vehicle upload from Add/Edit Vehicle
- Uploaded images stored in `/uploads` and linked in the `media` database table
- About Us content editor in Admin, reflected on the public About page
- Customer registration/login/profile
- Enquiries, inspections, Find Me a Car requests, alerts, contacts, customers and audit records
- Dashboard analytics from live database records
- Saved and Compare use browser `sessionStorage`, so they clear when the browser/tab session ends
- Docker/Docker Compose files with persistent `/app/data` and `/app/uploads` volumes

## Start locally
Requires Node.js 22+.

```bash
npm start
```

Open:
- Website: `http://localhost:3000`
- Admin: `http://localhost:3000/admin.html`

## Hosting
Use a Node/Docker host with persistent volumes. The database file is created automatically at `data/revolt.db` on first start. Keep both the database and uploads directories persistent.

The current Admin dashboard intentionally has direct access as requested. Restore authentication before a public commercial launch.

## Photo limits
The admin can select up to 12 images per save operation. JPG, PNG and WebP are supported, with a 6 MB limit per image.
