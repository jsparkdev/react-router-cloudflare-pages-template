# React Router + Cloudflare Pages Template

A minimal template for building a React Router App with Cloudflare Pages.

## Features

- [Vite](https://vite.dev/) + [React Router v7](https://reactrouter.com/) + [React v19](https://react.dev)
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful and accessible components
- [Biome](https://biomejs.dev/) - Fast and modern linter and formatter
- Deploy to [Cloudflare Pages](https://pages.cloudflare.com/) with zero configuration

## Project Structure

```
app/
├── components/     # Reusable UI components
│   └── ui/        # shadcn/ui components
├── lib/           # Utility functions and configuration
├── routes/        # Route components and nested routes
├── entry.client.tsx    # Client entry point
├── entry.server.tsx    # Server entry point
├── root.tsx           # Root layout component
└── routes.ts         # Route configuration
```

## Getting Started

```bash
# Install dependencies
pnpm i

# Start dev server at localhost:5173
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Format code
pnpm format

# Run linter
pnpm lint

# Run formatter, linter and sort imports
pnpm check
```

## License

MIT
