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
- **TypeScript**: Strict mode enabled with bundler module resolution
- **Dark mode**: CSS variables with `prefers-color-scheme` media query support
- **Fonts**: Custom CSS variables for Geist fonts loaded in root layout

### Project Structure

- `app/layout.tsx`: Root layout with font configuration, metadata, and global styles
- `app/page.tsx`: Landing page with complete hero, features, and CTA sections
- `app/privacy/page.tsx`: Privacy policy page (placeholder content)
- `app/globals.css`: Global styles with Tailwind v4 imports and CSS variables
- `public/images/`: Feature icons and illustrations for the landing page
- `public/logo.png`: Main Powy logo used throughout the site

## Product Context

This is the marketing website for **Powy**, an AI-powered tool that transforms complex documents (PDFs, Word docs, etc.) into professional, fully-editable PowerPoint presentations. The site targets consultants, analysts, academics, and marketing professionals who need to convert dense documents while preserving content depth and maintaining brand consistency.

### Key Features Highlighted
- Deep document understanding that preserves logic and structure
- Native .pptx output (not web links or locked formats)
- High-fidelity conversion of complex elements (tables, charts, formulas)
- Enterprise brand template support

The main landing page is comprehensive with hero section, problem statement, feature showcase, target audience, and call-to-action sections leading to a Google Forms waitlist.