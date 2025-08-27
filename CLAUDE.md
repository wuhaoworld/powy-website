# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build for production**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Package manager**: Uses `pnpm` (lockfile present)

## Architecture Overview

This is a Next.js 15 project using the App Router architecture with the following structure:

- **Framework**: Next.js 15.5.2 with React 19
- **Styling**: Tailwind CSS v4 with PostCSS
- **Typography**: Geist Sans and Geist Mono fonts from Google Fonts
- **TypeScript**: Fully configured with strict mode
- **Build tool**: Turbopack (Next.js's faster bundler)

### Key Configuration

- **App Router**: Uses `app/` directory structure (not pages)
- **Path aliases**: `@/*` maps to project root
- **Dark mode**: CSS variables with `prefers-color-scheme` media query support
- **Fonts**: Custom CSS variables for Geist fonts loaded in layout

### Project Structure

- `app/layout.tsx`: Root layout with font configuration and metadata
- `app/page.tsx`: Main home page (currently minimal)
- `app/globals.css`: Global styles with Tailwind imports and CSS variables
- **Public assets**: Located in `public/` including `powy.jpeg`

This appears to be a website for "Powy" based on the project name and assets.