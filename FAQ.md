# Frequently Asked Questions

## Installation & Setup

### Q: How do I install dependencies?
**A:** Run `npm install` in the project root directory.

### Q: What Node.js version do I need?
**A:** Node.js 16+ is recommended. Check your version with `node -v`.

### Q: Port 3000 is already in use, what do I do?
**A:** Change the port in `vite.config.js`:
```javascript
server: { port: 3001 }
```

---

## Customization

### Q: Where do I add my projects?
**A:** Edit `src/utils/projectsData.js` and add your project details.

### Q: How do I change colors?
**A:** Update the color values in `tailwind.config.js` under the `colors` section.

### Q: How do I add my profile picture?
**A:** 
1. Add image to `public/images/` folder
2. Update component to use the image path
3. Replace emoji with `<img src="/images/profile.jpg" />`

### Q: Can I add more sections?
**A:** Yes! Create a new component in `src/components/` and import it in `App.jsx`.

---

## Contact Form

### Q: How do I set up email sending?
**A:** Use EmailJS (recommended):
1. Sign up at emailjs.com
2. Get credentials
3. Update `src/utils/emailService.js`
4. Integrate in `src/components/Contact.jsx`

### Q: Will the contact form work without backend?
**A:** Yes, with EmailJS. Or you can build a simple backend.

---

## Deployment

### Q: What's the easiest way to deploy?
**A:** Vercel is the easiest:
```bash
npm i -g vercel
vercel
```

### Q: How do I deploy to GitHub Pages?
**A:**
1. Build: `npm run build`
2. Push dist folder
3. Enable Pages in Settings

### Q: Can I use my own domain?
**A:** Yes! All hosting platforms support custom domains. Check their documentation.

### Q: How do I get HTTPS?
**A:** Most modern hosting (Vercel, Netlify) provide free HTTPS by default.

---

## Performance

### Q: How can I check my website's performance?
**A:** Use Chrome DevTools > Lighthouse tab to generate a report.

### Q: Why are animations laggy on mobile?
**A:** Reduce particle count and simplify animations for mobile. Check `ParticleBackground.jsx`.

### Q: How do I optimize images?
**A:** 
- Use WebP format
- Resize to actual display size
- Compress with tools like TinyPNG

---

## Troubleshooting

### Q: Build fails with dependency errors
**A:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Q: Styles not showing
**A:** 
1. Clear browser cache
2. Restart dev server
3. Check Tailwind classes are spelled correctly

### Q: Animations not working
**A:** 
1. Ensure Framer Motion is installed
2. Check motion import: `import { motion } from 'framer-motion'`
3. Verify animation syntax

### Q: Form not submitting
**A:** 
1. Check EmailJS configuration
2. Verify email service is initialized
3. Check browser console for errors

---

## GitHub & Version Control

### Q: How do I push changes to GitHub?
**A:**
```bash
git add .
git commit -m "Update portfolio with new projects"
git push origin main
```

### Q: How do I revert changes?
**A:**
```bash
git log  # See commit history
git revert <commit-hash>
```

---

## SEO

### Q: How do I improve SEO?
**A:**
1. Update meta tags in `index.html`
2. Add descriptive alt text to images
3. Use semantic HTML
4. Optimize page titles and descriptions
5. Add structured data (Schema.org)

### Q: How do I submit my site to Google?
**A:**
1. Go to Google Search Console
2. Add your domain
3. Submit sitemap.xml

---

## Advanced

### Q: How do I add a blog section?
**A:** 
1. Create `src/components/Blog.jsx`
2. Create blog posts in `src/content/`
3. Use markdown or raw HTML
4. Import in `App.jsx`

### Q: Can I add authentication?
**A:** Yes, use Firebase or a backend service like Supabase.

### Q: How do I add analytics?
**A:** Add Google Analytics script to `index.html` or use a React package.

---

## Getting Help

- 📚 Check the README.md
- 📖 Read SETUP_GUIDE.md
- ✅ Use CUSTOMIZATION_CHECKLIST.md
- 🔗 Check component comments in code
- 🌐 Search relevant documentation:
  - React: https://react.dev
  - Vite: https://vitejs.dev
  - Tailwind: https://tailwindcss.com
  - Framer Motion: https://framer.com/motion

---

**Still stuck? Create an issue on GitHub!**
