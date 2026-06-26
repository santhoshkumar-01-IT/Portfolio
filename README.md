# 🚀 Portfolio Website

A modern, interactive, and professional portfolio website showcasing projects, skills, and expertise with cutting-edge animations and seamless user experience.

## ✨ Features

- 🎨 **Modern Design**: Dark/Light theme with glassmorphism
- ✨ **Advanced Animations**: Framer Motion + Three.js 3D effects
- 📱 **Fully Responsive**: Mobile-first design approach
- 🎯 **Interactive Sections**: Hero, About, Skills, Projects, Articles, Contact
- 🌙 **Dark Mode Toggle**: Smooth theme switching
- 📧 **Email Integration**: Contact form with EmailJS
- 📄 **Resume Download**: PDF download functionality
- 🔗 **Social Links**: Integrated social media profiles
- ⚡ **Performance Optimized**: Lazy loading, code splitting
- ♿ **Accessible**: WCAG compliant

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Framer Motion** - Animations
- **Three.js** - 3D graphics
- **Tailwind CSS** - Styling
- **EmailJS** - Email service
- **React Icons** - Icon library

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/santhoshkumar-01-IT/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
npm run build
git add dist
git commit -m "Deploy"
git push
```

## 📝 Configuration

### EmailJS Setup
1. Create account at [EmailJS](https://www.emailjs.com)
2. Get your Service ID, Template ID, and Public Key
3. Update `src/utils/emailService.js`

### Resume Download
1. Add your resume PDF to `public/resume.pdf`
2. Update resume data in `src/utils/resumeData.js`

### Social Links & Content
1. Update `src/utils/projectsData.js` with your projects
2. Update `src/utils/articlesData.js` with your articles
3. Update social links in components

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - feel free to use this as a template

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and enhancement requests.

## 📧 Contact

- Email: your@email.com
- LinkedIn: [Your Profile](https://linkedin.com)
- GitHub: [@santhoshkumar-01-IT](https://github.com/santhoshkumar-01-IT)

---

**Built with ❤️ by Santhosh Kumar**
