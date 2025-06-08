# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

## Architecture Overview

This is a Next.js 14 TypeScript application called "Pepe the Mystic" featuring a mystical tarot card interface.

### App Structure
- Uses Next.js App Router (app directory)
- Styled with Tailwind CSS
- TypeScript configured for type safety

### Key Features
- **Landing Page** (`app/page.tsx`): Interactive entrance with hidden click zones that trigger "As above, so below" sequence to access the tarot section
- **Tarot Cards** (`app/tarot/`): Complete tarot deck implementation with Major and Minor Arcana
  - Card data organized in separate modules (`MajorArcana.ts`, `MinorArcana.ts`)
  - All tarot card images stored in `public/tarot/` using Rider-Waite-Smith deck
  - Responsive horizontal scrolling layout for card display

### Tarot Data Structure
- Major Arcana: 22 cards (The Fool through The World)
- Minor Arcana: 4 suits (Cups, Pentacles, Swords, Wands) with 14 cards each
- Cards defined as objects with `name` and `src` properties pointing to `/tarot/` images

### Styling Approach
- Uses Tailwind for responsive design
- Custom CSS variables for dark/light theme support
- Image components use Next.js Image optimization