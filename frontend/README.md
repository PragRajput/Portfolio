# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Vite, and shadcn/ui.

## Features

- Modern and clean design
- Fully responsive layout
- Dark mode support
- Built with shadcn/ui components
- TypeScript for type safety
- Fast development with Vite

## Project Structure

```
src/
├── assets/          # Static assets (images, icons)
├── components/      # Reusable components
│   ├── ui/         # shadcn/ui components
│   └── layout/     # Layout components (Header, Footer)
├── pages/          # Page sections (Hero, About, Projects, Contact)
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── types/          # TypeScript type definitions
├── constants/      # App constants and configurations
└── styles/         # Additional styles

```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd "My Portfolia"
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Adding shadcn/ui Components

To add a new shadcn/ui component:

```bash
npx shadcn@latest add [component-name]
```

For example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Customization

### Update Personal Information

1. Edit `src/constants/index.ts` to update navigation and social links
2. Modify page content in `src/pages/` directory
3. Update the color scheme in `tailwind.config.js`

### Add New Sections

1. Create a new component in `src/pages/`
2. Import and add it to `App.tsx`
3. Update navigation in `src/constants/index.ts`

## Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` directory.

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

## Technologies Used

- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)
