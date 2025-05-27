# Personal Blog & Website

A modern, minimal personal website and blog built with Astro, featuring clean design, performance optimization, and integrated analytics.

## ✨ Features

- **Clean, Minimal Design** - Focus on content with a distraction-free reading experience
- **Blog with Reading Time** - Automatically calculated reading time for each post
- **Newsletter Signup** - Integrated email subscription with toast notifications
- **SEO Optimized** - Meta tags, descriptions, and schema markup for better search visibility
- **Analytics Ready** - PostHog integration for user behavior tracking
- **Performance First** - Built with Astro for lightning-fast static site generation
- **Responsive Design** - Tailwind CSS for mobile-first, responsive layouts
- **Type Safety** - Full TypeScript support throughout

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Components**: [React](https://react.dev) - For interactive components
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/) - Toast notifications
- **Analytics**: [PostHog](https://posthog.com) - Product analytics
- **Deployment**: [Netlify](https://netlify.com) - Serverless deployment
- **Reading Time**: Custom remark plugin for automatic calculation

## 📁 Project Structure

```text
personal-site/
├── public/                 # Static assets
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro    # Main layout component
│   ├── pages/
│   │   ├── api/               # API endpoints
│   │   ├── posts/             # Blog posts (Markdown)
│   │   └── index.astro        # Homepage
│   ├── styles/
│   │   └── global.css         # Global styles
│   └── env.d.ts              # TypeScript environment types
├── astro.config.mjs          # Astro configuration
├── remark-reading-time.mjs   # Custom remark plugin
├── BLOG_STRATEGY.md          # Content and growth strategy
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `npm install`       | Installs dependencies                            |
| `npm run dev`       | Starts local dev server at `localhost:4321`      |
| `npm run build`     | Build your production site to `./dist/`          |
| `npm run preview`   | Preview your build locally, before deploying     |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro check` |

## 🎯 Key Features Explained

### Blog Posts

- Write posts in Markdown in `src/pages/posts/`
- Automatic reading time calculation
- SEO-optimized with proper meta tags
- Clean typography with Tailwind's prose classes

### Newsletter Integration

- Email subscription form on homepage
- Toast notifications for user feedback
- API endpoint for handling subscriptions
- PostHog event tracking for analytics

### Performance & SEO

- Static site generation for fast loading
- Optimized images and assets
- Proper meta tags and descriptions
- Sitemap generation for search engines

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd personal-site
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Writing Blog Posts

Create new blog posts by adding Markdown files to `src/pages/posts/`:

```markdown
---
title: "Your Post Title"
description: "A brief description of your post"
pubDate: "2024-01-15"
---

# Your Post Title

Your content here...
```

The reading time will be automatically calculated and displayed.

## 🔧 Configuration

### Environment Variables

Create a `.env` file for configuration:

```bash
POSTHOG_API_KEY=your_posthog_key
PUBLIC_POSTHOG_API_KEY=your_public_posthog_key
```

### Customization

- Update site metadata in `src/layouts/BaseLayout.astro`
- Modify styles in `src/styles/global.css`
- Configure Astro settings in `astro.config.mjs`

## 📈 Analytics & Growth

This project includes a comprehensive blog strategy outlined in `BLOG_STRATEGY.md`, covering:

- Content planning and SEO optimization
- Performance targets (90+ PageSpeed score)
- Growth goals (1K→5K monthly visitors)
- Technical improvements and marketing strategies

## 🚢 Deployment

The site is configured for Netlify deployment with:

- Automatic builds on git push
- Edge functions for API endpoints
- Environment variable management

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using [Astro](https://astro.build)
