# Luke Stanbery - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## Features

- Modern, responsive design with dark mode support
- Mobile-first approach with Tailwind CSS
- Beautiful UI components with shadcn/ui
- MDX-powered blog with syntax highlighting
- Static site generation for optimal performance
- Vercel Analytics integration
- SEO optimized with metadata and Open Graph tags
- Accessible and WCAG compliant

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (Radix UI + Tailwind)
- **Content**: MDX for blog posts and projects
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Project Structure

```
├── content/                 # MDX content files
│   ├── blog/               # Blog post MDX files
│   └── projects/           # Project showcase MDX files
├── public/                 # Static assets
│   └── images/            # Images for blog and projects
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── about/         # About page
│   │   ├── blog/          # Blog pages
│   │   ├── projects/      # Project pages
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Homepage
│   ├── components/        # React components
│   │   ├── layout/        # Header, Footer
│   │   └── ui/            # shadcn/ui components
│   ├── lib/               # Utility functions
│   │   └── mdx.ts         # MDX parsing utilities
│   └── types/             # TypeScript type definitions
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://127.0.0.1:3000](http://127.0.0.1:3000) in your browser.

## Adding Content

### Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "A brief description"
date: "2024-01-20"
tags: ["Next.js", "React"]
author: "Luke Stanbery"
published: true
---

# Your Post Title

Your content here...
```

### Projects

Create a new `.mdx` file in `content/projects/`:

```mdx
---
title: "Project Name"
description: "Project description"
date: "2024-01-15"
tags: ["Next.js", "TypeScript"]
image: "/images/projects/project-name.jpg"
demoUrl: "https://example.com"
githubUrl: "https://github.com/username/project"
featured: true
---

# Project Name

Your project details here...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

The site is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Environment Variables

If needed, add these in your Vercel dashboard:

- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Customization

### Update Personal Information

1. **Site Metadata**: Edit `src/app/layout.tsx`
2. **About Page**: Edit `src/app/about/page.tsx`
3. **Homepage Hero**: Edit `src/app/page.tsx`
4. **Social Links**: Edit `src/components/layout/Footer.tsx`

### Styling

- **Theme Colors**: Edit CSS variables in `src/app/globals.css`
- **Component Styles**: Modify shadcn/ui components in `src/components/ui/`

## Performance

- Lighthouse Score: 90+ target
- Static generation for all routes
- Optimized images with next/image
- Font optimization with next/font
- Automatic code splitting

## License

MIT License
