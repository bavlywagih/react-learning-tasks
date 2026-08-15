# Final React / Next.js Practice Project

## Description

A practical project that combines the main React and Next.js concepts practiced in the previous tasks.

The project is a simple personal portfolio website for Bavly.

## Concepts Practiced

- React Components
- Props
- TypeScript Props
- Conditional Rendering
- Ternary Operator
- JSX Styling
- CSS Modules
- Next.js Routing
- React Hooks
- useState
- Event Handling with onClick
- Component Organization

## Features

### Profile

The Profile component receives user information through Props:

- Name
- Age
- Job

### Conditional Rendering

The application displays either the Welcome or Login component depending on the login state.

### Counter

The Counter component uses `useState` to manage the counter value and `onClick` to increase or decrease it.

### Routing

The application contains multiple pages:

- `/` — Home
- `/about` — About
- `/contact` — Contact

### Styling

The project uses CSS Modules to organize component-specific styles.

## Project Structure

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
└── contact/
    └── page.tsx

components/
├── Navbar/
│   ├── Navbar.tsx
│   └── Navbar.module.css
├── Profile/
│   ├── Profile.tsx
│   └── Profile.module.css
├── Welcome/
│   └── Welcome.tsx
├── Login/
│   └── Login.tsx
├── Counter/
│   ├── Counter.tsx
│   └── Counter.module.css
└── Footer/
    └── Footer.tsx