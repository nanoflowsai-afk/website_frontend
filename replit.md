# NanoFlows Website Frontend

## Overview
This is a Next.js 16 frontend application for NanoFlows AI Software Technologies. It's a corporate website showcasing services, products, industries, team, and blog content.

## Tech Stack
- **Framework**: Next.js 16 with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Data Fetching**: SWR
- **Validation**: Zod

## Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── admin/        # Admin dashboard
│   ├── auth/         # Authentication pages
│   ├── blog/         # Blog pages
│   ├── careers/      # Careers page
│   ├── contact/      # Contact page
│   ├── industries/   # Industries pages
│   │   ├── [id]/     # Industry detail pages
│   │   │   ├── [subId]/  # Sub-industry detail pages (71 sub-industries)
│   │   │   └── SubIndustryGrid.tsx
│   │   └── page.tsx  # Industries listing
│   ├── products/     # Products pages
│   ├── services/     # Services pages
│   ├── webinars/     # Webinars page (NEW)
│   │   └── WebinarsPage.tsx
│   └── ...
├── components/       # Reusable React components
├── lib/              # Utilities and API helpers
└── middleware.ts     # Next.js middleware
public/               # Static assets
attached_assets/      # Generated images and assets
```

## Recent Changes (Dec 22, 2025)

### New Feature: Webinars Page (Updated)
Created and refined a comprehensive webinars listing page following the Nanoflows design structure:

**Features Implemented:**
- **Hero Section**: Gradient orange background with page title, description, and CTA buttons
- **Search & Filters**: Sticky filter bar with search, category, type (Upcoming/Live/Recorded), and level filters
- **Grid View Only**: Responsive 3-column grid layout (removed list view)
- **Featured Webinar**: Highlighted upcoming webinar with registration counter and detailed info
- **Webinars Grid**: Animated webinar cards with hover effects
- **Program Features Section**: 6 feature cards highlighting:
  - Live Interactive Sessions
  - Real-World Case Studies
  - Expert Panel Discussions
  - Certification Eligible
  - Resource Materials
  - Lifetime Access
- **Why Attend Section**: 6 icon cards explaining benefits
- **Extra Benefits Section**: 6 benefit cards in 2-column layout with icons and descriptions:
  - Networking Opportunities
  - Implementation Support
  - Performance Tracking
  - Exclusive Discounts
  - Community Access
  - Regular Updates
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop

**Removed Sections:**
- Past Webinars & Recordings section (removed per request)
- "Stay Updated with Our AI Webinars" CTA section (removed per request)

**Navbar Integration:**
- "Webinars" link in Resources dropdown menu (Desktop)
- "Webinars" link in mobile Resources menu with emoji icon (🎓)
- "Webinars" link in Footer resources section

**Sample Data:**
- 6 sample webinars with varying levels (Beginner, Intermediate, Advanced)
- Categories: AI Automation, AI Agents, Marketing AI, Business AI, Workshops
- Types: Upcoming, Live, Recorded
- Dynamic badge colors based on webinar type

**Route:** `/webinars`

## Development
- **Port**: 5000 (frontend dev server)
- **Command**: `npm run dev`

## Backend API
This frontend expects a backend API at:
- Development: `http://localhost:5001` (configurable via `NEXT_PUBLIC_API_BASE_URL`)
- The frontend gracefully handles missing API data with fallbacks

## Environment Variables
- `NEXT_PUBLIC_API_BASE_URL` - Backend API URL (optional, defaults to localhost:5001 in development)
- `NEXT_PUBLIC_SITE_URL` - Site URL for SEO and metadata

## Deployment
Configured for autoscale deployment:
- Build: `npm run build`
- Start: `npm run start`
