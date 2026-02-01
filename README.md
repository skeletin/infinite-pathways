# Infinite Pathways

A warm, personal landing page for a Licensed Clinical Social Worker (LCSW) offering therapy services. Built with a focus on approachability and healing-centered design.

## About

Infinite Pathways is a therapy services website designed with the philosophy that "healing isn't linear and no two paths look the same." The site features an earthy, natural color palette and warm, service-oriented messaging that feels personal.

### Design Philosophy

- **Earthy tones**: Olive greens, warm browns, cream backgrounds
- **Personal touch**: Language that feels human and approachable
- **Healing-centered**: Emphasis on compassion, patience, and meeting clients where they are

## Features

- **Animated splash screen** with floating gradient orbs and tagline reveal
- **Responsive navigation** with mobile hamburger menu
- **Four main pages**:
  - **Home** - Hero section, values, and call-to-action
  - **About** - Therapist story, values, and credentials
  - **Services** - Individual therapy, anxiety support, life transitions, trauma care
  - **Contact** - Contact form with email/phone options
- **Smooth animations** powered by Motion
- **Modern, accessible design** with Tailwind CSS

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **Motion** - Animations and transitions
- **React Router 7** - Client-side routing

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── features/
│   │   └── SplashScreen.tsx      # Animated loading screen
│   ├── layouts/
│   │   ├── AppLayout.tsx         # Main layout wrapper
│   │   ├── Navigation.tsx        # Header navigation
│   │   └── Footer.tsx            # Site footer
│   ├── pages/
│   │   ├── Home/                 # Landing page
│   │   ├── About/                # About the therapist
│   │   ├── Services/             # Services offered
│   │   └── Contact/              # Contact form
│   └── providers/
│       └── AppInitializer.tsx    # Splash screen logic
├── App.tsx                       # Routes and app structure
├── main.tsx                      # Entry point
└── index.css                     # Global styles
```

## Color Palette

| Color       | Hex       | Usage                               |
| ----------- | --------- | ----------------------------------- |
| Olive Green | `#687b0a` | Primary accent, buttons, highlights |
| Dark Olive  | `#3d4a28` | Headings, footer background         |
| Warm Brown  | `#8b7755` | Secondary accent                    |
| Gray        | `#545454` | Body text                           |
| Cream       | `#faf8f3` | Background                          |
| Sand        | `#f5f2eb` | Section backgrounds                 |

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## License

Private project - All rights reserved.
