# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server**: `npm run dev`
- **Build**: `npm run build` (runs TypeScript compiler then Vite build)
- **Lint**: `npm run lint`
- **Preview production build**: `npm run preview`

## Tech Stack

- React 19 with TypeScript
- Vite 7 as build tool
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin)
- ESLint with React Hooks and React Refresh plugins

## Styling

Uses Tailwind CSS v4 with custom theme tokens defined in `src/index.css` via `@theme`:
- Colors: `primary-400`, `primary-500`, `primary-100`, `background-200`, `background-100`
- Font sizes: `button`

Use these theme tokens in Tailwind classes (e.g., `bg-primary-400`, `text-button`).

## Component Conventions

- Use `clsx` for conditional class name composition
- Reusable components go in `src/components/`
- Include accessibility attributes (aria-label, aria-disabled, focus-visible states)
