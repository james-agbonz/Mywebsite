# Personal Website

A modern personal website built with React, Vite, TypeScript, and shadcn/ui.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives

## Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   └── Header.tsx       # Navigation header
├── pages/
│   └── Home.tsx         # Home page
├── lib/
│   └── utils.ts         # Utility functions
├── assets/              # Images, fonts, etc.
├── App.tsx              # Main app component
├── main.tsx             # App entry point
└── index.css            # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The site will be available at [http://localhost:5173/](http://localhost:5173/)

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding shadcn/ui Components

This project uses shadcn/ui components. To add new components:

```bash
# Example: Add a new component
npx shadcn@latest add [component-name]

# Example: Add button component
npx shadcn@latest add button
```

Available components include:
- button
- card
- navigation-menu
- And many more at [shadcn/ui](https://ui.shadcn.com)

## Customization

### Theme Colors

Edit `src/index.css` to customize the color scheme. The theme uses CSS variables for easy customization.

### Tailwind Configuration

Modify `tailwind.config.js` to customize Tailwind settings, including colors, spacing, and breakpoints.

### Components

All shadcn/ui components are in `src/components/ui/` and can be customized directly.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT
