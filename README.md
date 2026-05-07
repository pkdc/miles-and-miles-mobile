# Miles & Miles — Mobile Booking Flow

A speculative mobile app prototype for Miles & Miles' home delivery service in central London. Designed as a focused booking flow: enter postcode, confirm delivery zone, pick date and time, choose vehicle, confirm.

**Live prototype:** https://miles-and-miles-mobile-happy.netlify.app/
**Component gallery:** https://miles-and-miles-mobile-happy.netlify.app/preview

## Table of Contents

- [Quick Start](#quick-start)
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [User Flow](#user-flow)
- [UI Components](#ui-components)
- [Design System](#design-system)
- [Accessibility](#accessibility)
- [Development Guide](#development-guide)
- [Troubleshooting](#troubleshooting)

## Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd miles-and-miles-mobile

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application runs at `http://localhost:5173`. On desktop the app renders inside a centered phone frame; on mobile it fills the screen. Browser device emulation is optional but useful for previewing the mobile layout outside the frame.

### Available Commands

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start development server with hot reload |
| `npm run build`    | Type-check and build for production      |
| `npm run preview`  | Preview the production build locally     |
| `npm run lint`     | Run ESLint to check code quality         |

## Overview

Miles and Miles Mobile demonstrates a complete booking flow for a high-end vehicle rental service based in London. The prototype showcases the user journey from initial postcode entry through vehicle selection, delivery scheduling, and booking confirmation.

**Purpose**: This project serves as a design reference and interactive demonstration, not a production application.

**Target Audience**: UX designers, product managers, and developers evaluating the mobile booking experience.

### Responsive Behavior

On mobile viewports the booking flow fills the screen edge to edge. On desktop viewports (`md` breakpoint, `>= 768px`) the same flow is rendered inside a centered 390 x 844 phone frame with rounded corners and a drop shadow against a grey backdrop. This wrapper is implemented in `src/App.tsx` and uses Tailwind responsive utilities only -- no JavaScript viewport detection.

## Features

| Feature                     | Description                                              |
| --------------------------- | -------------------------------------------------------- |
| Complete Booking Flow       | End-to-end user journey from landing to confirmation     |
| UK Postcode Validation      | Real-time validation of British postcodes                |
| Interactive Vehicle Selection | Browse and select from premium vehicles                |
| Date and Time Scheduling    | Custom modal pickers for delivery scheduling             |
| Mobile-First Design         | Optimized for touch on mobile; framed phone view on desktop |
| Accessible Components       | ARIA labels, keyboard navigation, and focus management   |
| Component Preview           | Developer tool for viewing all UI component states       |
| Live Demo                   | Deployed on Netlify for instant browser access           |

## Tech Stack

| Technology       | Version | Purpose                      |
| ---------------- | ------- | ---------------------------- |
| React            | 19.x    | UI framework                 |
| TypeScript       | 5.9     | Type safety                  |
| Vite             | 7.x     | Build tool and dev server    |
| Tailwind CSS     | 4.x     | Utility-first styling        |
| React Router DOM | 7.x     | Client-side routing          |
| clsx             | 2.x     | Conditional class composition|
| ESLint           | 9.x     | Code quality                 |

## Project Structure

```
miles-and-miles-mobile/
├── src/
│   ├── assets/                    # Static images and icons
│   ├── components/
│   │   ├── pages/                 # Route page components
│   │   │   ├── LandingPage.tsx
│   │   │   ├── AddressPage.tsx
│   │   │   ├── LocationInsideCLondonPage.tsx
│   │   │   ├── ChooseDateTimePage.tsx
│   │   │   ├── AvailableVehiclesPage.tsx
│   │   │   ├── VehicleDetailsPage.tsx
│   │   │   ├── ConfirmDeliveryDetailsPage.tsx
│   │   │   ├── ConfirmationPage.tsx
│   │   │   └── PreviewPage.tsx    # Component showcase
│   │   └── ui/                    # Reusable UI components
│   │       ├── Button.tsx
│   │       ├── Input.tsx
│   │       ├── Header.tsx
│   │       ├── VehicleCard.tsx
│   │       ├── DatePickerModal.tsx
│   │       └── TimePickerModal.tsx
│   ├── App.tsx                    # Root component with routing
│   ├── main.tsx                   # Application entry point
│   └── index.css                  # Global styles and theme tokens
├── public/                        # Static public assets
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

## User Flow

The prototype guides users through an eight-step booking process:

```
Landing Page (/)
       |
       v
Address Page (/address)
       |
       v
Location Confirmation (/location-inside)
       |
       v
Date & Time Selection (/choose-date-time)
       |
       v
Available Vehicles (/available-vehicles)
       |
       v
Vehicle Details (/vehicle-details)
       |
       v
Confirm Delivery (/confirm-delivery)
       |
       v
Confirmation (/confirmation)
```

### Route Reference

| Route                 | Page                    | Purpose                                           |
| --------------------- | ----------------------- | ------------------------------------------------- |
| `/`                   | Landing Page            | Entry point with postcode input and validation    |
| `/address`            | Address Selection       | Display and confirm the delivery address          |
| `/location-inside`    | Location Confirmation   | Verify address is within the London service area  |
| `/choose-date-time`   | Date & Time Selection   | Pick delivery date and time using modal pickers   |
| `/available-vehicles` | Available Vehicles      | Grid view of vehicles for the selected period     |
| `/vehicle-details`    | Vehicle Details         | Detailed view with specifications and pricing     |
| `/confirm-delivery`   | Delivery Confirmation   | Review all booking details before finalizing      |
| `/confirmation`       | Confirmation            | Success page with booking summary                 |
| `/preview`            | Component Preview       | Developer tool displaying all UI components       |

## UI Components

All reusable components are located in `src/components/ui/` and can be previewed at `/preview`.

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from './components/ui/Button';

// Primary button (default)
<Button variant="primary" size="large">
  Check Address
</Button>

// Secondary button
<Button variant="secondary" size="default">
  Cancel
</Button>

// Disabled state
<Button variant="primary" disabled>
  Processing...
</Button>
```

**Props**:
- `variant`: `"primary"` | `"secondary"` (default: `"primary"`)
- `size`: `"small"` | `"default"` | `"medium"` | `"large"` (default: `"default"`)
- `disabled`: `boolean`

### Input

Form input with label support, error states, and validation messaging.

```tsx
import { Input } from './components/ui/Input';

// Basic input with label
<Input
  label="Postcode"
  placeholder="SW1A 2AB"
  required
/>

// Input with error state
<Input
  label="Postcode"
  placeholder="SW1A 2AB"
  error="Please enter a valid UK postcode"
/>
```

**Props**:
- `label`: `string` - Label text displayed above the input
- `error`: `string` - Error message displayed below the input
- `required`: `boolean` - Marks the field as required
- Additional standard input attributes are supported

### Header

Consistent branding header with company logo.

```tsx
import { Header } from './components/ui/Header';

<Header />
```

### VehicleCard

Display card for vehicle listings with selection state.

```tsx
import { VehicleCard } from './components/ui/VehicleCard';

<VehicleCard
  vehicle={{
    id: 1,
    name: "Range Rover Sport",
    image: "/path/to/image.png",
    price: 1200
  }}
  size="large"
  isSelected={false}
  onClick={() => handleSelect(1)}
/>
```

**Props**:
- `vehicle`: `{ id: number; name: string; image: string; price: number }`
- `size`: `"small"` | `"large"` (default: `"small"`)
- `isSelected`: `boolean`
- `onClick`: `() => void`

### DatePickerModal

Modal calendar interface for date selection.

```tsx
import { DatePickerModal } from './components/ui/DatePickerModal';

<DatePickerModal
  isOpen={isDatePickerOpen}
  onClose={() => setDatePickerOpen(false)}
  onSelect={(date) => setSelectedDate(date)}
  selectedDate={selectedDate}
/>
```

### TimePickerModal

Modal interface for time slot selection.

```tsx
import { TimePickerModal } from './components/ui/TimePickerModal';

<TimePickerModal
  isOpen={isTimePickerOpen}
  onClose={() => setTimePickerOpen(false)}
  onSelect={(time) => setSelectedTime(time)}
/>
```

## Design System

### Color Tokens

Custom theme tokens are defined in `src/index.css` using Tailwind CSS v4's `@theme` directive:

| Token            | Hex Value   | Usage                          |
| ---------------- | ----------- | ------------------------------ |
| `primary-400`    | `#0000FF`   | Primary brand color, buttons   |
| `primary-500`    | `#0000B2`   | Hover states, focus rings      |
| `primary-100`    | `#B2B2FF`   | Light accents                  |
| `background-200` | `#D8D8D8`   | Page backgrounds               |
| `background-100` | `#FFFFFF`   | Card backgrounds               |
| `success`        | `#43DF0F`   | Success states                 |
| `danger-400`     | `#E53935`   | Error states, validation       |
| `danger-500`     | `#E0261D`   | Error hover states             |

### Typography Tokens

| Token         | Value  | Usage       |
| ------------- | ------ | ----------- |
| `text-button` | `22px` | Button text |

### Using Theme Tokens

Apply tokens using Tailwind utility classes:

```tsx
// Background colors
<div className="bg-primary-400">Primary background</div>
<div className="bg-background-200">Page background</div>

// Text colors
<span className="text-danger-400">Error message</span>
<span className="text-primary-500">Link text</span>

// Font sizes
<button className="text-button">Submit</button>
```

## Accessibility

This prototype implements accessibility best practices following WCAG guidelines.

### Keyboard Navigation

- All interactive elements are reachable via the Tab key
- Buttons and cards respond to Enter and Space key activation
- Modal dialogs trap focus within the modal when open
- Escape key closes modal dialogs

### ARIA Implementation

| Attribute             | Usage                                    |
| --------------------- | ---------------------------------------- |
| `aria-label`          | Descriptive labels for interactive elements |
| `aria-disabled`       | Communicates disabled state to assistive technology |
| `aria-invalid`        | Indicates form validation errors         |
| `aria-describedby`    | Links inputs to their error messages     |
| `aria-pressed`        | Indicates toggle button states           |
| `aria-hidden`         | Hides decorative elements from screen readers |
| `role="alert"`        | Announces error messages                 |
| `aria-live="polite"`  | Enables dynamic content announcements    |
| `role="banner"`       | Identifies the header landmark           |

### Visual Design

- Focus-visible ring styles for keyboard navigation
- Clear error states with icons and color indicators
- Sufficient color contrast ratios for text readability

## Development Guide

### Adding a New Page

1. Create the page component in `src/components/pages/`:

   ```tsx
   // src/components/pages/NewPage.tsx
   export function NewPage() {
     return (
       <div className="min-h-screen bg-background-200">
         {/* Page content */}
       </div>
     );
   }
   ```

2. Add the route in `src/App.tsx`:

   ```tsx
   import { NewPage } from './components/pages/NewPage';

   // Inside the router configuration
   <Route path="/new-page" element={<NewPage />} />
   ```

3. Add navigation in the Header component if the page should be accessible from the main navigation.

### Adding a New UI Component

1. Create the component in `src/components/ui/`:

   ```tsx
   // src/components/ui/NewComponent.tsx
   import clsx from 'clsx';

   interface NewComponentProps {
     variant?: 'default' | 'alternate';
     children: React.ReactNode;
   }

   export function NewComponent({ variant = 'default', children }: NewComponentProps) {
     return (
       <div
         className={clsx(
           'base-styles',
           variant === 'default' && 'default-styles',
           variant === 'alternate' && 'alternate-styles'
         )}
       >
         {children}
       </div>
     );
   }
   ```

2. Include accessibility attributes (aria-label, focus states).

3. Add all component states and variations to `src/components/pages/PreviewPage.tsx`.

4. Use `clsx` for conditional class composition.

### Styling Guidelines

- Use Tailwind utility classes exclusively (avoid custom CSS)
- Reference theme tokens for colors: `bg-primary-400`, `text-danger-400`
- Use standard Tailwind spacing: `px-4`, `py-2`, `gap-4`
- Use standard Tailwind typography: `text-sm`, `text-lg`, `font-medium`
- Include `focus-visible:` styles for keyboard accessibility

## Troubleshooting

### Development Server Issues

**Port already in use**

If port 5173 is occupied, Vite will automatically try the next available port. Check the terminal output for the actual URL.

To explicitly set a different port:

```bash
npm run dev -- --port 3000
```

**Hot reload not working**

1. Ensure you saved the file
2. Check the terminal for compilation errors
3. Try a hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
4. Restart the development server

### Build Errors

**TypeScript errors during build**

The build command runs `tsc -b` before Vite build. Fix any TypeScript errors shown in the terminal before the build can complete.

```bash
# Check for type errors without building
npx tsc --noEmit
```

### Mobile Preview

The app is viewable on any screen size: desktop renders the booking flow inside a centered phone frame, and mobile fills the viewport. Browser device emulation is useful for inspecting the raw mobile layout without the desktop frame.

**How to enable device emulation**

- **Chrome**: Open DevTools (F12) > Toggle Device Toolbar (Ctrl+Shift+M)
- **Firefox**: Open DevTools (F12) > Responsive Design Mode (Ctrl+Shift+M)
- **Safari**: Develop menu > Enter Responsive Design Mode

**Recommended device presets**: iPhone 12/13/14, Pixel 5, or any device with a width of 375-428px.

## Disclaimer

Speculative bootcamp project. Not affiliated with or endorsed by Miles & Miles Car & Van Rental. Brand identity, logo, and visual system belong to Miles & Miles and are used here for educational purposes only.

## License

This project is private and not licensed for public distribution.
