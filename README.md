# Samit Kumar Patel - Portfolio Website

A modern, responsive portfolio website built with Vue.js 3 and Vite, showcasing professional experience, skills, and achievements.

## Features

- 🎨 **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and production builds
- 🔧 **Maintainable**: All content stored in JSON for easy updates
- 🎯 **SEO Friendly**: Semantic HTML structure for better search engine optimization

## Technology Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Pure CSS with modern features
- **Fonts**: Inter (Google Fonts)
- **Icons**: Unicode emojis for simplicity

## Project Structure

```
min-portfolio/
├── index.html              # Main HTML file
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── README.md              # This file
└── src/
    ├── main.js            # Vue app entry point
    ├── App.vue            # Main Vue component
    ├── style.css          # Global styles
    └── data/
        └── portfolio.json # All portfolio content
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Content Management

All portfolio content is stored in `src/data/portfolio.json`. This makes it easy to:

- ✅ Add new experiences
- ✅ Update skills and technologies
- ✅ Modify personal information
- ✅ Add new certifications
- ✅ Update contact details

### JSON Structure

The portfolio data is organized into the following sections:

- **personal**: Name, title, location, avatar, contact info
- **summary**: Professional summary and focus areas
- **expertise**: Areas of expertise with descriptions
- **experience**: Work experience with responsibilities
- **education**: Educational background
- **skills**: Technical skills organized by category
- **languages**: Language proficiency
- **certifications**: Professional certifications

## Customization

### Styling

The website uses a modern CSS approach with:
- CSS Grid and Flexbox for layouts
- CSS Custom Properties for consistent theming
- Smooth transitions and hover effects
- Responsive design with mobile-first approach

### Colors

The current color scheme uses:
- Primary: `#667eea` (Blue gradient)
- Secondary: `#764ba2` (Purple gradient)
- Text: `#333` (Dark gray)
- Background: `#fafafa` (Light gray)

### Adding New Sections

1. Add the data to `portfolio.json`
2. Create the corresponding HTML structure in `App.vue`
3. Add appropriate CSS styles in `style.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Vite for fast development and optimized builds
- 🖼️ Optimized images and assets
- 📦 Minimal bundle size
- 🚀 Fast loading times

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please contact:
- **Email**: samitkumarpatel@live.com
- **LinkedIn**: [linkedin.com/in/samitkumarpatel](https://www.linkedin.com/in/samitkumarpatel)

---

Built with ❤️ using Vue.js and Vite
