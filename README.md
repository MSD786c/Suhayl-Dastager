# Mohammed Suhayl Dastager - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with smooth animations
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js for optimal loading speeds
- 🎭 **Smooth Animations**: Beautiful transitions using Framer Motion
- 🎯 **Interactive Elements**: Engaging hover effects and micro-interactions
- 📋 **CV Download**: Direct PDF download functionality
- 🔗 **Social Links**: Easy access to LinkedIn, GitHub, and contact information
- 📜 **Scrolling Effects**: Smooth scroll navigation and marquee animations

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Sections

1. **Hero Section**: Eye-catching introduction with profile picture and key information
2. **About Me**: Professional summary and key achievements
3. **Skills**: Categorized skill showcase with visual indicators
4. **Experience**: Timeline-based professional experience
5. **Projects**: Featured projects with technologies used
6. **Education & Certifications**: Academic background and professional certifications
7. **Contact**: Contact form and downloadable CV

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd suhayl-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── navigation.tsx    # Navigation bar
│   ├── hero-section.tsx  # Hero section
│   ├── about-section.tsx # About section
│   ├── skills-section.tsx# Skills section
│   ├── experience-section.tsx # Experience section
│   ├── projects-section.tsx   # Projects section
│   ├── education-section.tsx  # Education section
│   ├── contact-section.tsx    # Contact section
│   └── footer.tsx        # Footer
├── lib/                  # Utility functions and data
│   ├── utils.ts         # Utility functions
│   └── data.ts          # Portfolio data
├── public/              # Static assets
│   ├── IMG_6724.png    # Profile image
│   └── Mohammed Suhayl Dastager.pdf # CV file
└── README.md
```

## Customization

### Personal Information
Update your personal details in `lib/data.ts`:
- Name, title, contact information
- Professional summary
- Skills and technologies
- Work experience
- Projects
- Education and certifications

### Styling
- Modify colors and themes in `tailwind.config.js`
- Update global styles in `app/globals.css`
- Customize component styles in individual component files

### Content
- Replace profile image in `public/IMG_6724.png`
- Update CV file in `public/Mohammed Suhayl Dastager.pdf`
- Modify section content in respective component files

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Docker deployment

## Performance Features

- Image optimization with Next.js Image component
- Lazy loading for better performance
- Efficient bundle splitting
- SEO optimized with metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Mohammed Suhayl Dastager**
- Email: dastagersuhayI@gmail.com
- LinkedIn: [linkedin.com/in/suhayl-dastager](https://linkedin.com/in/suhayl-dastager)
- GitHub: [github.com/MSD786c](https://github.com/MSD786c)

---

Built with ❤️ and ☕ in Dubai, UAE
