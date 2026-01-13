# Miles and Miles Mobile

**⚠️ Important: This is a mobile-only UX prototype.**

This project is a UX prototype designed exclusively for mobile devices. It demonstrates the user flow for a vehicle rental and delivery service application.

## Overview

This is a UX prototype built with React and TypeScript to showcase the mobile user experience for Miles and Miles. The prototype includes a complete booking flow from landing page through vehicle selection and confirmation.

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** as build tool
- **Tailwind CSS v4** for styling
- **React Router DOM** for navigation
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

**Note:** This prototype is optimized for mobile viewports. For the best experience, view it on a mobile device or use your browser's device emulation mode.

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── pages/          # Page components for the booking flow
│   └── ui/             # Reusable UI components
├── assets/             # Images and static assets
├── App.tsx             # Main app component with routing
└── main.tsx            # Application entry point
```

## Pages

The prototype includes the following pages in the booking flow:

- Landing Page (`/`)
- Address Selection (`/address`)
- Location Inside London (`/location-inside`)
- Date & Time Selection (`/choose-date-time`)
- Available Vehicles (`/available-vehicles`)
- Vehicle Details (`/vehicle-details`)
- Delivery Details Confirmation (`/confirm-delivery`)
- Confirmation Page (`/confirmation`)
- Preview Page (`/preview`) - Accessible through the `/preview` URL for component showcase

## Styling

This project uses Tailwind CSS v4 with custom theme tokens defined in `src/index.css`. Custom colors and font sizes are available as Tailwind utility classes.

## Disclaimer

This is a UX prototype and is not intended for production use. It is designed to demonstrate user flows and interface design concepts for mobile devices only.
