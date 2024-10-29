# Eric Nicholson - Digital Business Card

Welcome to Eric Nicholson's digital business card! This project is a professional, interactive online business card designed to showcase Eric’s business-to-business consulting experience, with seamless access to his contact information.

## 📑 Project Overview

Eric Nicholson has been a business consultant for over two decades, helping businesses improve operational efficiency, primarily through managed print solutions. This project serves as an interactive online business card, allowing users to view his experience, offerings, and testimonials, as well as to easily get in touch.

## 🚀 Features

- **Slides with Auto-Transition**: A series of slides introduce Eric’s background, expertise, services, and testimonials.
- **Contact Modal and Chat Bubble**: Users can reach out via an interactive chat bubble, which opens a contact form for easy messaging.
- **LinkedIn and Email Links**: Quick access links to Eric's LinkedIn profile and direct email for convenient communication.
- **Dynamic Audio**: A welcoming audio plays upon entering the site, providing a more engaging experience.
- **Optimized for Performance**: Built with Next.js, the site has been optimized for fast loading and smooth transitions, achieving high Lighthouse scores.

## 📂 Project Structure

```plaintext
eric-digital-business-card/
├── public/
│   ├── images/
│   │   └── [Eric’s profile and other images]
│   ├── audio/
│   │   └── intro-audio.m4a
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Slides.tsx              # Main component for slides
│   │   ├── ChatBubble.tsx          # Chat bubble that opens the contact modal
│   │   ├── ContactForm.tsx         # Contact form component
│   ├── pages/
│   │   └── index.tsx               # Main page layout
│   └── styles/
│       └── globals.css             # Global CSS styles
└── README.md                       # Project documentation 
```

## 🛠️ Tech Stack

- **Next.js**: A powerful React framework for building optimized, fast, and SEO-friendly web applications.
- **TypeScript**: Provides type safety to improve code quality and maintainability.
- **Tailwind CSS**: Utility-first CSS framework used for creating a responsive, customizable, and consistent design.
- **React Icons**: Library for incorporating vector icons as React components, used to enhance the UI.
- **HTML5 Audio**: Enables background audio playback, adding an engaging touch to the user experience.

## 🚀 Getting Started

Follow these instructions to set up and run this project locally.

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v16 or above)
- **pnpm** (or npm/yarn, if preferred)

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/eric-digital-business-card.git
   cd eric-digital-business-card
2. **Install Dependencies Using pnpm:** 
    pnpm install
    or with npm: npm install
3. **Run the Development Server**
    pnpm dev
    Your application should now be running on http://localhost:3000 (unless you are running another project on this port already).
4. **Building for Production**
    To create an optimized production build, run: pnpm build
    Then, start the production server with: pnpm start

## ⚙️ Configuration

- **Audio Files**: Place any audio files in the `public/audio/` directory. Update file paths in `Slides.tsx` as needed.

- **Environment Variables**: If additional configuration is required, add environment variables in a `.env.local` file.

## 🔧 Optimizations

This project includes performance optimizations:

- **Dynamic Imports**: Chat and Contact components are dynamically loaded to reduce initial bundle size.
- **Lazy Loading**: Images and audio files are lazy-loaded for faster page load times.
- **Code Splitting**: Next.js automatically splits code, improving load times.

## 📄 License
- **MIT License**

## 📞 Contact
- **For inquiries or suggestions, please reach out to Eric via LinkedIn or email him at enicholson@eojohnson.com.**