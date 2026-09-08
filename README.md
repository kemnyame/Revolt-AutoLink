# Revolt AutoLink
**Find It. Trust It. Drive It.**

A deployable full-stack vehicle discovery and administration platform.

## Included
- Responsive public vehicle marketplace
- Browse/search, vehicle detail, save and compare interactions
- Persistent customer enquiries
- Persistent inspection requests
- Find-Me-a-Car request API/database
- Secure admin login with server-side sessions
- Live admin dashboard
- Vehicle CRUD and lifecycle status management
- Enquiry and inspection views
- Audit log
- SQLite relational database with indexes and foreign keys
- REST API suitable for future mobile apps/integrations
- Docker and Docker Compose deployment files

## Requirements
Node.js 22+ (uses Node's built-in SQLite module).

## Local start
1. Copy `.env.example` values into your shell/environment.
2. **Change ADMIN_PASSWORD before any public deployment.**
3. Run: `npm start`
4. Open: `http://localhost:3000`

Development fallback login (only when environment variables are not set):
- Email: `admin@revoltautolink.local`
- Password: `ChangeMe123!`

## Docker hosting
Set `ADMIN_EMAIL` and `ADMIN_PASSWORD`, then run:
`docker compose up -d --build`

Persist `/app/data` and `/app/uploads` using the included named volumes.

## Production notes
The application is hostable as supplied on a Node/Docker host with persistent storage. Before commercial launch, configure HTTPS/reverse proxy, backups, a real domain, transactional email/WhatsApp credentials, object/cloud media storage, monitoring, and secrets in the hosting provider rather than source code. SQLite is appropriate for an initial deployment; for high write concurrency/multi-instance scaling, migrate the schema to PostgreSQL.

## Key API routes
- `POST /api/auth/login`
- `GET /api/auth/me`
- `GET/POST /api/vehicles`
- `GET/PUT/DELETE /api/vehicles/:id`
- `GET/POST /api/enquiries`
- `GET/POST /api/inspections`
- `POST /api/car-requests`
- `GET /api/analytics/dashboard`
- `GET /api/audit`
- `GET /api/health`
