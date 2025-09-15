# 🧠 AI Wellness Companion

<div align="center">
  <img src="https://img.shields.io/badge/MindFlow%20AI-Wellness%20Companion-2563eb?style=for-the-badge&logo=react&logoColor=white" alt="MindFlow AI"/>
  
  <h3>An intelligent wellness platform powered by AI to support your mental health journey</h3>
  
  [![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue.svg)](https://www.typescriptlang.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-green.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-blue.svg)](https://tailwindcss.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
</div>

---

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🚀 Live Demo](#-live-demo)
- [📱 Screenshots](#-screenshots)
- [🛠️ Technology Stack](#️-technology-stack)
- [📋 Prerequisites](#-prerequisites)
- [⚡ Quick Start](#-quick-start)
- [📖 Usage Guide](#-usage-guide)
- [🏗️ Project Structure](#️-project-structure)
- [🔧 Available Scripts](#-available-scripts)
- [🎨 Design Philosophy](#-design-philosophy)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🤝 Contributing](#-contributing)
- [🐛 Known Issues & Roadmap](#-known-issues--roadmap)
- [📄 License](#-license)
- [🙋‍♀️ Support & Contact](#️-support--contact)

## ✨ Overview

AI Wellness Companion is a modern, intelligent web application designed to support mental health and wellness through personalized AI-powered insights, mood tracking, and interactive guidance. Built with cutting-edge technologies, it provides users with a comprehensive platform to monitor, understand, and improve their mental wellbeing.

### 🎯 Key Features

- **🤖 AI-Powered Chat Assistant**: Intelligent conversational interface providing personalized wellness guidance and support
- **📊 Wellness Dashboard**: Comprehensive overview of your mental health metrics, mood trends, and progress tracking
- **❤️ Mood & Energy Tracking**: Visual representation of daily mood patterns and energy levels with trend analysis
- **🎯 Goal Management**: Set, track, and achieve personal wellness objectives with AI recommendations
- **📈 Progress Monitoring**: Detailed analytics of your wellness journey with insights and achievements
- **📚 Resource Library**: Curated wellness content, meditation guides, and educational materials
- **👤 Personal Profile**: Customizable user experience with personalized settings and preferences

## 🚀 Live Demo

Experience the application at: https://ai-wellness-website-kcjd.bolt.host/(#)

## 📱 Screenshots

### 🏠 Landing Page - Your AI-Powered Wellness Journey
Beautiful, welcoming interface showcasing the core features and value proposition of the AI wellness platform.

![Landing Page](https://github.com/user-attachments/assets/ecf8e703-b316-44f4-bcb4-c741832f6863)

### 📊 Dashboard Overview - Comprehensive Wellness Metrics
Interactive dashboard displaying wellness scores, mood trends, goal progress, and AI-generated insights with beautiful data visualizations.

![Dashboard](https://github.com/user-attachments/assets/e984146d-f6ef-4b71-8b79-25bde1a300af)

### 🤖 AI Chat Assistant - Your Personal Wellness Companion
Intelligent conversational interface providing personalized support, guidance, and quick response options for mental health needs.

![AI Chat Assistant](https://github.com/user-attachments/assets/c4e3b8dd-6a72-478b-a884-650c5ade15ac)

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks and functional components
- **TypeScript 5.5.3** - Type-safe JavaScript for enhanced development experience
- **Vite 5.4.2** - Lightning-fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons
- **PostCSS & Autoprefixer** - Enhanced CSS processing

### Data & Backend Integration
- **Supabase 2.57.4** - Backend-as-a-Service for database and authentication
- **Real-time data sync** - Live updates for wellness metrics

### Development Tools
- **ESLint 9.9.1** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **React Hooks ESLint** - React hooks best practices enforcement

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**
- **Git** for version control

## ⚡ Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/Aastha7078/Gen_AI_Hackthon.git
cd Gen_AI_Hackthon
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
```

### 6. Preview Production Build
```bash
npm run preview
```

## 📖 Usage Guide

### Getting Started
1. **Welcome Screen**: Start your wellness journey from the beautiful landing page
2. **Dashboard**: Monitor your daily wellness metrics and AI-generated insights
3. **Chat Assistant**: Interact with the AI for personalized guidance and support
4. **Mood Tracking**: Log your daily mood and energy levels
5. **Progress Review**: Analyze your wellness trends and achievements
6. **Resource Center**: Access meditation guides, articles, and wellness tips

### AI Chat Assistant Features
- **Anxiety Support**: Breathing exercises and coping strategies
- **Motivation Boost**: Personalized encouragement and goal-setting
- **Meditation Guidance**: Guided sessions for different experience levels
- **Sleep Support**: Tips and techniques for better sleep hygiene
- **Mood Analysis**: Understanding and improving emotional patterns

### Dashboard Metrics
- **Wellness Score**: AI-calculated overall wellbeing indicator
- **Mood Trends**: Visual charts showing emotional patterns
- **Goal Progress**: Track completion of wellness objectives
- **Streak Counter**: Motivation through consistency tracking
- **AI Insights**: Personalized recommendations and discoveries

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing page hero section
│   ├── Dashboard.tsx   # Main wellness dashboard
│   ├── ChatAssistant.tsx # AI chat interface
│   ├── Progress.tsx    # Progress tracking
│   ├── Resources.tsx   # Resource library
│   └── Profile.tsx     # User profile
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # TypeScript declarations
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint code analysis |

## 🎨 Design Philosophy

This application follows modern UI/UX principles:

- **Clean & Minimalist**: Uncluttered interface focusing on user experience
- **Responsive Design**: Seamless experience across all devices
- **Accessibility First**: WCAG compliant with proper color contrast and navigation
- **Performance Optimized**: Fast loading times and smooth interactions
- **Color Psychology**: Calming color palette promoting mental wellness

## 🚀 Deployment

### Netlify (Recommended)
```bash
npm run build
# Deploy the 'dist' folder to Netlify
```

### Vercel
```bash
npm run build
# Deploy using Vercel CLI or drag-and-drop
```

### Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder to your web server
```

## 🧪 Testing

Currently, the project uses manual testing. To run basic validation:

1. Start the development server: `npm run dev`
2. Navigate through all application sections
3. Test AI chat functionality
4. Verify responsive design on different screen sizes
5. Check browser console for any errors

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Write clear, self-documenting code
- Test across different browsers and devices

## 🐛 Known Issues & Roadmap

### Current Limitations
- AI responses are currently simulated (demo mode)
- User authentication not yet implemented
- Data persistence requires Supabase configuration

### Upcoming Features
- [ ] Real AI integration (OpenAI/Anthropic)
- [ ] User authentication and profiles
- [ ] Data persistence and sync
- [ ] Mobile app version
- [ ] Advanced analytics dashboard
- [ ] Community features
- [ ] Therapist referral system

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♀️ Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/Aastha7078/Gen_AI_Hackthon/issues)
- **Project Repository**: [GitHub - Gen_AI_Hackthon](https://github.com/Aastha7078/Gen_AI_Hackthon)
- **Developer**: [@Aastha7078](https://github.com/Aastha7078)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS approach
- **Lucide Icons** for beautiful iconography
- **Vite Team** for the incredible build tool
- **Supabase** for backend infrastructure
- **Mental Health Community** for inspiration and guidance

---

<div align="center">
  <p><strong>Made with ❤️ for mental wellness</strong></p>
  <p><em>Supporting mental health through technology</em></p>
  
  <p>
    <a href="https://github.com/Aastha7078/Gen_AI_Hackthon">⭐ Star this repo</a> •
    <a href="https://github.com/Aastha7078/Gen_AI_Hackthon/issues">🐛 Report Bug</a> •
    <a href="https://github.com/Aastha7078/Gen_AI_Hackthon/issues">✨ Request Feature</a>
  </p>
</div>
