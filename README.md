# Dr. Serena Blake - Therapist Website

A modern, responsive website for Dr. Serena Blake, a clinical psychologist based in Los Angeles, CA. The website is built with Next.js 14, TypeScript, and Tailwind CSS, featuring a clean, professional design with smooth animations and a focus on user experience.

## ✨ Features

- ⚡️ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling with dark mode support
- 🔍 **SEO Optimized** with Next.js Metadata API
- 🚀 **Fast Refresh** for a great development experience
- 📱 **Fully Responsive** design for all devices
- 📝 **Contact Form** with validation using React Hook Form and Zod
- 🔄 **Animations** with Framer Motion
- 🎨 **Modern UI** with Radix UI primitives
- 🛠 **TypeScript** for type safety
- 📦 **Optimized Build** with Next.js
- 🔍 **ESLint** and **Prettier** for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 20.11.0 or later
- npm 8.0.0 or later (or pnpm/yarn)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/therapist-website.git
   cd therapist-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Update the values in .env.local as needed
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser to see the result.

## 🏗 Project Structure

```
therapist-website/
├── app/                    # App router
│   ├── api/                # API routes
│   ├── components/         # Shared components
│   ├── lib/                # Utility functions
│   ├── styles/             # Global styles
│   └── page.tsx            # Home page
├── public/                 # Static files
├── types/                  # TypeScript type definitions
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── next.config.mjs         # Next.js configuration
├── package.json            # Project dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

## 🛠 Development

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`
- **Type Checking**: `npx tsc --noEmit`

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Ftherapist-website&project-name=therapist-website&repository-name=therapist-website)

### Netlify

1. Push your code to a Git repository
2. [Deploy to Netlify](https://app.netlify.com/start)
3. Connect your repository
4. Set the build command to `npm run build`
5. Set the publish directory to `.next`
6. Click "Deploy"

### Self-Hosting

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for animations
