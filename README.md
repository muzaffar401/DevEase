# ⚡️🧠 DevEase AI - Your Open Source Micro SaaS AI Code Companion

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Now-brightgreen)](https://dev-ease-zeta.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/muzaffar401/DevEase.git)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

<p align="center">
  <a href="public/Logo.mp4" title="Click to watch the demo video">
    <img src="public/preview.gif" alt="DevEase AI Demo" />
  </a>
</p>



Welcome to **DevEase AI**! 🚀

**DevEase AI** is an **open-source micro SaaS** application designed to revolutionize the way developers interact with code.

Whether you're a seasoned developer or just starting out, CodeMind AI streamlines your workflow, making coding faster, smarter, and more enjoyable.


## ✨ Features That Empower You

- **🤖 AI-Powered Code Generation**: Harness the power of Google's Gemini AI to convert your ideas into functional code. Simply describe what you want, and watch as CodeMind AI generates code snippets or even entire project structures for you.

- **💬 Intelligent AI Chat Assistant**: Engage in conversation with the AI to get coding advice, explanations, or help with debugging.

- **🖥 Interactive Workspace**: Work within a user-friendly environment where you can edit code, converse with the AI, and visualize your projects instantly.

- **💻 Live Code Preview**: Utilize Sandpack to get a real-time, interactive code editing and preview environment that updates as you type.

- **💰 Flexible Pricing**: CodeMind AI offers plans tailored to your needs, including a free tier for casual users and premium plans for power users, ensuring everyone can benefit from its features.

- **🔒 Secure Authentication**: Secure and straightforward login experience with Google OAuth, keeping your projects safe and accessible only to you.

- **💳 Seamless Payments**: Upgrade your plan effortlessly with our integrated Stripe payment system, handling all transactions securely with support for all major credit cards.

- **💾 Persistent Storage**: Your work is important. With Convex, your projects are saved and accessible across all your sessions, from any device.

- **🎨 Modern, Customizable UI**: Experience a beautifully designed, modern interface with customizable themes, smooth animations, and an intuitive user experience that adapts to your coding style.

- **🌐 Cross-Platform Accessibility**: Access CodeMind AI from any device with a web browser. It's cloud-based, so there's nothing to install.

## 🌐 Live Demo

Ready to experience CodeMind AI in action? Check out our live demo:

👉 **[Live Demo](https://dev-ease-zeta.vercel.app/)**


## 🛠 Technologies Powering CodeMind AI

CodeMind AI is built with a modern stack designed for performance, scalability, and an excellent developer experience:

- **[Next.js](https://nextjs.org/)**: For building server-side rendered, SEO-friendly, and highly performant React applications.

- **[React](https://reactjs.org/)**: The core of our UI, providing a declarative and component-based approach to building interfaces.

- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework that allows for rapid and custom UI development without leaving your HTML.

- **[Convex](https://www.convex.dev/)**: Our backend platform of choice for seamless data storage, real-time updates, and serverless functions.

- **[Google Generative AI](https://ai.google/)**: Brings advanced AI capabilities, including natural language processing and code generation, to your fingertips.

- **[Sandpack](https://sandpack.codesandbox.io/)**: Enables live, interactive code editing and preview capabilities.

- **[Stripe](https://stripe.com/)**: For secure and reliable payment processing, supporting all major credit cards and providing a seamless checkout experience.

- **[Lucide React](https://lucide.dev/docs/lucide-react)**: A library of beautiful, open-source icons to enhance the visual appeal of your projects.

- **[Shadcn/ui](https://ui.shadcn.com/)**: Modern, accessible, and customizable UI components built with Radix UI and Tailwind CSS.

## 🚀 Getting Started: Your Journey with CodeMind AI

Embarking on your CodeMind AI journey is easy. Follow these steps to get started:

### 1. **Clone the Repository**

```bash
git clone https://github.com/muzaffar401/DevEase.git
cd DevEase
```

### 2. **Install Dependencies**

You can use npm, yarn, pnpm, or bun to install the required packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. **Set Up Environment Variables**

Create a `.env` file at the root of the project and populate it with your API keys and configuration details. Refer to `.env.example` for the structure.

```ini
NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID=<your_google_auth_client_id>
CONVEX_DEPLOYMENT=<your_convex_deployment>
NEXT_PUBLIC_CONVEX_URL=<your_convex_url>
NEXT_PUBLIC_GEMINI_API_KEY=<your_gemini_api_key>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<your_stripe_publishable_key>
STRIPE_SECRET_KEY=<your_stripe_secret_key>
STRIPE_WEBHOOK_SECRET=<your_stripe_webhook_secret>
```

**Note**: You'll need to obtain API keys from the respective services.

### 4. **Launch the Development Server**

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open `http://localhost:3000` in your browser to experience CodeMind AI locally.

### 5. **Build for Production**

To build the application for production:

```bash
npm run build
```

## 📂 Project Structure: A Deep Dive

Understanding the project structure helps with contributions and customizations:

```
code-mind-ai-bolt-clone/
├── app/                      # Main application logic
│   ├── (main)/               # Main app routes and layouts
│   │   ├── pricing/          # Pricing page with Stripe integration
│   │   └── workspace/        # Workspace page for projects
│   ├── api/                  # API routes
│   │   ├── ai-chat/          # AI chat API endpoint
│   │   ├── gen-ai-code/      # Code generation API endpoint
│   │   ├── create-payment-intent/ # Stripe payment intent creation
│   │   └── webhook/stripe/   # Stripe webhook handling
│   ├── ConvexClientProvider.jsx # Convex provider setup
│   ├── globals.css           # Global styles with modern design system
│   ├── layout.js             # Root layout
│   ├── page.js               # Home page
│   └── provider.jsx          # Global state providers with Stripe Elements
├── components/               # Reusable UI components
│   ├── custom/               # Custom application-specific components
│   │   ├── PricingModel.jsx  # Modern pricing cards with Stripe integration
│   │   ├── LandingPage.jsx   # Beautiful landing page with modern design
│   │   ├── ChatView.jsx      # AI chat interface
│   │   ├── CodeView.jsx      # Code editor with Sandpack integration
│   │   └── ...               # Other custom components
│   └── ui/                   # Shadcn UI components
├── configs/                  # Configuration for AI models and other settings
├── context/                  # React context for global state
├── convex/                   # Convex backend functions
│   ├── schema.js             # Database schema
│   ├── users.js              # User-related database operations
│   ├── workspace.js          # Workspace-related database operations
│   └── _generated/           # Auto-generated Convex files
├── data/                     # Static data (prompts, lookups, colors)
├── hooks/                    # Custom React hooks
├── lib/                      # Utility functions
├── public/                   # Public assets (images, icons)
├── .env.example              # Example environment variables
├── components.json           # Shadcn UI components configuration
├── jsconfig.json             # JavaScript configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.mjs        # PostCSS configuration
└── tailwind.config.mjs       # Tailwind CSS configuration with design system
```

## 🎨 Modern UI Design Features

CodeMind AI features a beautifully designed, modern interface that enhances your coding experience:

- **🎨 Modern Design System**: Built with Shadcn/ui components and a comprehensive design system
- **🌙 Dark/Light Theme Support**: Seamless theme switching with system preference detection
- **📱 Responsive Design**: Optimized for all devices from mobile to desktop
- **✨ Smooth Animations**: Subtle animations and transitions for a polished feel
- **🎯 Intuitive Navigation**: Clean sidebar navigation with workspace history
- **💳 Beautiful Payment Flow**: Modern Stripe-powered checkout experience
- **🎨 Gradient Accents**: Beautiful gradient backgrounds and accents throughout
- **📊 Token Management**: Clear token display and usage tracking
- **🔍 Interactive Elements**: Hover effects, loading states, and micro-interactions

## 🤝 Contributing: Join the DevEase AI Community

Contributions are what make the open-source community such a fantastic place to learn, inspire, and create. We warmly welcome contributions of all sizes, from bug fixes to major features.

### How to Contribute

1. **Fork the Repository**: Click on the 'Fork' button on the top right to create a copy of the repository on your account.

2. **Create a Feature Branch**: Create a branch for your feature or bug fix.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Develop Your Feature**: Implement your feature or fix, adhering to the project's coding standards.

4. **Commit Your Changes**: Make your changes and commit them with clear, descriptive messages.

   ```bash
   git commit -am 'Add new feature: your feature name'
   ```

5. **Push to Your Branch**: Push your changes to your fork.

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a Pull Request**: Go to the original repository and create a new pull request from your feature branch.

7. **Await Review**: A project maintainer will review your changes. Be prepared to make adjustments as needed.


## 📝 License

CodeMind AI is proudly open-source, licensed under the [MIT License](LICENSE). This permissive license allows you to use, modify, and distribute the code, ensuring that CodeMind AI remains a community-driven project.

## Created By Maheen Arif & Muzaffer Ahmed 
- Email: maheenadeel3@gmail.com
- Email: ma9400667@gmail.com
