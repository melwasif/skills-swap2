# Skills Swap Platform Information

## Summary
Skills Swap Platform is an educational platform for skill exchange in Arabic, built with modern technologies. It enables users to teach and learn skills across various domains, with features including authentication, skill management, subscription plans, real-time communication, analytics, and a rating system.

## Structure
- **app/**: Next.js App Router with API routes, authentication pages, and main application pages
- **components/**: React components organized by function (layout, UI, home, payment)
- **lib/**: Helper libraries for authentication, database, and utilities
- **prisma/**: Database schema and seed data
- **public/**: Static assets including images and icons
- **next-platform-starter/**: Secondary Next.js project with Netlify configuration

## Language & Runtime
**Language**: TypeScript/JavaScript
**Version**: TypeScript 5.3.3
**Framework**: Next.js 14
**Build System**: Next.js build system
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- Next.js 14.2.30 (React framework)
- React 18.2.0 (UI library)
- Prisma 5.7.1 (ORM for database)
- NextAuth.js 4.24.5 (Authentication)
- Tailwind CSS 3.3.6 (Styling)
- Framer Motion 10.16.16 (Animations)
- Socket.io 4.7.4 (Real-time communication)
- PayPal SDK (Payment processing)
- MySQL 8.0 (via @prisma/client)

**Development Dependencies**:
- ESLint 8.56.0 (Code quality)
- TypeScript 5.3.3 (Type safety)
- Rimraf 5.0.0 (File removal utility)

## Database
**Type**: SQLite (development), MySQL 8.0 (production)
**ORM**: Prisma
**Schema**: Comprehensive data model including users, skills, sessions, payments, and messaging

## Build & Installation
```bash
# Installation
npm install

# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Database commands
npx prisma db push
npx prisma db seed
npx prisma studio
```

## Authentication
**Provider**: NextAuth.js
**Methods**: Google OAuth, Apple ID (optional)
**Configuration**: JWT tokens with session management

## Deployment
**Recommended**: Vercel
**Alternative**: Netlify

### Netlify Configuration
**Configuration File**: next-platform-starter/netlify.toml
**Build Command**: `npm run build`
**Publish Directory**: `.next`

## Environment Variables
Key variables required:
- Database connection (DATABASE_URL)
- NextAuth configuration (NEXTAUTH_URL, NEXTAUTH_SECRET)
- OAuth providers (GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET)
- PayPal integration (PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET)
- Email service configuration

## Features
- Multi-language support (Arabic/English)
- Real-time messaging and video calls
- Payment processing with PayPal
- Subscription management
- Skill matching and discovery
- User reviews and ratings
- Profile management