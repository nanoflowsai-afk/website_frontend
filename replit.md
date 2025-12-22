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

### New Feature: Webinars Page (Complete Redesign)
Created and fully redesigned a comprehensive webinars listing page with modern UI and improved UX:

**🎨 UI/UX Improvements:**
- **Hero Section**: Large, compelling gradient with enhanced typography and clear call-to-action buttons
- **Search & Filters**: Sticky filter bar (2px borders, better spacing) with:
  - Full-width search input with icons
  - Category, Type, Level dropdowns
  - Clear Filters button
- **Featured Webinar Section**: Highlighted upcoming webinar with:
  - Beautiful 2-column layout (image + content)
  - Registration counter with progress bar
  - Detailed info (date, time, duration, speaker)
  - Large, prominent "Register Now" button
  - "⭐ Featured Webinar" badge

**📋 Webinar Cards (Redesigned):**
- **Responsive 3-column grid** (1 col mobile, 2 col tablet)
- **Enhanced card design** with:
  - Larger image area (h-56) with smooth hover scale effect
  - Type badge (Live/Upcoming/Recorded) with icons
  - Level and Category badges
  - Full description preview
  - Complete webinar details (date, time, duration, speaker)
  - **Two buttons side by side:**
    - "Register" / "Watch" button (orange gradient)
    - "Know More" button (gray) 
  - Smooth borders and shadow effects

**📍 Reorganized Page Structure:**
1. Hero Section - Compelling introduction
2. Sticky Search & Filters - Quick filtering
3. Featured Webinar - Highlighted session
4. All Webinars Grid - Main content (with 2-button design)
5. Program Features Section - 6 feature cards
6. Why Attend Section - 6 benefit cards
7. Extra Benefits Section - 6 benefits in 2-column layout
8. Footer

**✨ Design Enhancements:**
- Better typography hierarchy (larger fonts, bold headings)
- Improved color scheme with consistent orange/amber gradients
- Enhanced spacing and padding throughout
- Better hover states and transitions
- 2px borders on cards for better definition
- Responsive design for all devices
- Smooth Framer Motion animations

**📌 Features Retained:**
- Grid layout only (removed list view)
- Search functionality
- Category, Type, Level filters
- Featured webinar section
- Program Features (6 cards)
- Why Attend Benefits (6 cards)
- Extra Benefits (6 items in 2-column layout)

**Sample Data:**
- 6 sample webinars with varying levels
- Multiple categories and types
- Registration counts and capacity tracking

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
