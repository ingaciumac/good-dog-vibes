# Good Dog Vibes 🐕🎵

An interactive animated music player featuring a cute dog and spinning vinyl record, built with React, TypeScript, and Tailwind CSS.

![Good Dog Vibes Preview](https://img.shields.io/badge/React-18.2.0-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0.0--alpha-blue)

## ✨ Features

- **Animated Dog**: Wagging tail and panting mouth animations
- **Spinning Vinyl**: Continuous rotation with floating motion effect
- **Interactive Music**: Synthesized melody using Web Audio API
- **Responsive Design**: Works beautifully on desktop and mobile
- **Modern Typography**: Elegant Playfair Display serif font
- **Smooth Animations**: Powered by Framer Motion

## 🚀 Live Demo

Visit the live demo: [https://yourusername.github.io/good-dog-vibes/](https://yourusername.github.io/good-dog-vibes/)

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool
- **Web Audio API** - Music synthesis
- **Lucide React** - Icons

## 📦 Installation & Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/good-dog-vibes.git
   cd good-dog-vibes
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🌐 GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. **Fork or clone this repository**

2. **Update the repository name** in `vite.config.ts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: "GitHub Actions"

4. **Push to main branch**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Your site will be available at**:
   ```
   https://yourusername.github.io/your-repo-name/
   ```

### Manual Deployment

Alternatively, you can deploy manually:

```bash
npm run build
npm run deploy
```

## 🎵 Music Features

The app generates a cheerful melody using the Web Audio API with:
- **14-note melody** in C major scale
- **Bass accompaniment** for richness
- **Smooth envelopes** for professional sound quality
- **Auto-stop** when melody completes

## 🎨 Customization

### Colors

The main theme colors can be modified in:
- Button background: `#C4F38E` (lime green)
- Vinyl record: `#1915F6` (blue)
- Text: Black with Playfair Display font

### Animations

Animation settings can be adjusted in `components/AnimatedPlayTime.tsx`:
- Tail wagging speed
- Vinyl rotation speed
- Floating motion range
- Mouth panting rhythm

## 📁 Project Structure

```
├── public/                 # Static assets
├── components/
│   ├── AnimatedPlayTime.tsx # Main animation component
│   ├── ui/                 # Reusable UI components
│   └── figma/              # Figma-imported components
├── imports/                # SVG path definitions
├── styles/
│   └── globals.css         # Global styles and Tailwind config
├── .github/workflows/      # GitHub Actions deployment
├── App.tsx                 # Main application component
├── main.tsx                # React entry point
└── index.html              # HTML template
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- Dog illustration inspired by playful, minimalist design
- Music synthesis using Web Audio API
- Smooth animations powered by Framer Motion
- Typography by Google Fonts (Playfair Display)

---

Made with ❤️ and lots of good dog vibes! 🐕✨