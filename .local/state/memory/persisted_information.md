# NanoFlows Website Project - Current Status

## Project Overview
- **Type**: React + Vite frontend application (NanoFlows AI Software Technologies marketing site)
- **Stack**: React 19, Vite 7, TypeScript, Tailwind CSS, Framer Motion, React Router
- **Status**: Running successfully on port 5000
- **Deployment**: Configured as static site

## Latest Changes (December 22, 2025)
### Mobile Industries View - COMPLETED
**Files Modified**:
1. `src/components/IndustriesDropdown.tsx` - Added responsive design with separate mobile/desktop views
2. `src/components/Navbar.tsx` - Updated mobile industries dropdown

**Implementation**:
- **Mobile Industries**: Shows first 3 industries only (Startups & SaaS, Enterprises, E-Commerce)
- **Vertical Scroll**: `max-h-80 overflow-y-auto` for scrolling down to see additional industries
- **Expand/Collapse**: Each industry can be expanded to show sub-industries
- **Sub-industries**: Shows up to 6 by default with "Show more" button to see all
- **Responsive**: Desktop (grid layout) vs Mobile (list with scroll)

## Project Structure
- `src/components/`: Reusable components (Navbar, IndustriesDropdown, ProductsDropdown)
- `src/app/`: Page components and layouts
- `src/lib/data/`: Data files (industries.ts, services.ts, etc.)
- `attached_assets/`: Generated images and stock images

## Workflow Configuration
- **Name**: Start application
- **Command**: npm run dev
- **Port**: 5000
- **Output Type**: webview (Vite dev server)
- **Status**: RUNNING

## Configuration Details
- Vite config: allowedHosts: true (Replit proxy compatible)
- All npm dependencies installed and working
- Hot module replacement active

## User Preferences
- Mobile: Vertical scrolling with limited initial items visible
- First 3 industries shown by default in mobile menu
- Expandable sections for sub-industries
