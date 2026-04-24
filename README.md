# PH Pantry Philippines

A community-driven pantry initiative website built with Next.js, Railway, and PostgreSQL.

**Founded by Raymond Land III**

---

## Tech Stack

- **Frontend**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS v3 + Custom CSS (Rayland Design System)
- **Database**: PostgreSQL (Railway)
- **Deployment**: Railway
- **Fonts**: Dancing Script (logo) + Barlow Condensed (UI) + Barlow (body)

## Design System

Inspired by rayland.com:
- Dark navy background (`#0B1220`)
- Blue → Red gradient hero
- Barlow Condensed ALL CAPS labels
- Dancing Script cursive logo
- Red + Blue + Green badge system

---

## Local Development

```bash
# 1. Clone
git clone https://github.com/YOUR_USERNAME/phpantry-rayland.git
cd phpantry-rayland

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your DATABASE_URL

# 4. Run database migrations
DATABASE_URL=your_url node lib/migrate.js

# 5. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Deployment on Railway

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "initial commit: PH Pantry Philippines"
gh repo create phpantry-rayland --public --push
```

### Step 2 — Create Railway project
1. Go to [railway.app](https://railway.app) → **New Project**
2. Click **Deploy from GitHub repo** → select `phpantry-rayland`
3. Railway auto-detects Next.js and builds it

### Step 3 — Add PostgreSQL
1. In your Railway project → **New Service** → **Database** → **Add PostgreSQL**
2. Railway auto-creates `DATABASE_URL` and injects it into your app

### Step 4 — Run DB Migration
In Railway dashboard → your app service → **Shell**:
```bash
node lib/migrate.js
```

### Step 5 — Set domain
Railway settings → **Domains** → Generate domain or add custom domain

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, stats, mission, values, gallery preview, CTA |
| `/about` | About — story, timeline, church role, guidelines |
| `/gallery` | Gallery — photo mosaic grid |
| `/get-involved` | Volunteer form → saves to Postgres |

## API Routes

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/volunteer` | POST | Save volunteer signup to DB |
| `/api/contact` | POST | Save contact form to DB |

---

## Database Schema

```sql
CREATE TABLE volunteers (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  message TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE contacts (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

*Made with ♥ for every Filipino*
