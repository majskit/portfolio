# Modern Portfolio

A beautiful, responsive portfolio built with Astro, Tailwind CSS, and TypeScript.

## Features

- ⚡ Fast and lightweight (built with Astro)
- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🔧 Easy to customize and extend
- 📊 Performance optimized
- 🎯 SEO friendly

## Tech Stack

- **Framework**: Astro
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel/Netlify ready

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Projects.astro
│   └── Contact.astro
├── data/               # Data files
│   ├── projects.ts
│   └── skills.ts
├── layouts/            # Layout components
│   └── Layout.astro
├── pages/              # Page routes
│   └── index.astro
└── types/              # TypeScript types
    └── index.ts
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Adding New Projects

To add a new project, simply add a new entry to `src/data/projects.ts`:

```typescript
{
  id: 'your-project-id',
  title: 'Your Project Title',
  description: 'Short description',
  longDescription: 'Detailed description',
  technologies: ['React', 'Node.js', 'etc'],
  features: ['Feature 1', 'Feature 2'],
  links: {
    demo: 'https://demo-url.com',
    github: 'https://github.com/username/repo'
  },
  image: '/images/projects/your-project.jpg',
  status: 'completed',
  category: 'frontend'
}
```

## Adding New Skills

To add new skills, update `src/data/skills.ts`:

```typescript
{
  name: 'Skill Name',
  category: 'frontend', // or 'backend', 'database', 'tools', 'soft'
  level: 'advanced', // 'beginner', 'intermediate', 'advanced', 'expert'
  icon: 'skill-icon'
}
```

## Customization

### Colors

Edit `tailwind.config.mjs` to customize the color scheme.

### Content

- Update personal information in components
- Modify project data in `src/data/projects.ts`
- Update skills in `src/data/skills.ts`

### Styling

All components use Tailwind CSS classes and can be easily customized.

## Deployment

This portfolio is ready to deploy to:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Just run `npm run build` and upload the `dist` folder.

## License

MIT License - feel free to use this template for your own portfolio!
