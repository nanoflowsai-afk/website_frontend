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
│   └── ...
├── components/       # Reusable React components
├── lib/              # Utilities and API helpers
└── middleware.ts     # Next.js middleware
public/               # Static assets
attached_assets/      # Generated images and assets
```

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
