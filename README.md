# Portfolio OS - Retro Desktop Experience

A React-based portfolio website that mimics a retro Windows 95/98 desktop environment, featuring classic DOS games and a showcase of your work.

## Features

- 🖥️ **Retro Desktop Interface** - Windows 95/98 style UI
- 🎮 **Classic DOS Games** - Doom, Pacman, Oregon Trail, Scrabble
- 📁 **Window Management** - Drag, resize, minimize windows
- 🎵 **Music Player** - Built-in audio player
- 📱 **Responsive Design** - Works on desktop and mobile
- 🎨 **Custom Icons** - Retro-style desktop icons

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from your project directory**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Confirm deployment settings
   - Wait for build to complete

### Option 2: Deploy via Vercel Dashboard

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign in

3. **Click "New Project"**

4. **Import your GitHub repository**

5. **Configure the project**:
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`

6. **Click "Deploy"**

### Option 3: Deploy via GitHub Integration

1. **Connect your GitHub account to Vercel**

2. **Import your repository**

3. **Vercel will automatically detect it's a React app**

4. **Deploy with default settings**

## Configuration

The `vercel.json` file is already configured with:
- ✅ Build optimization for React apps
- ✅ Static asset caching
- ✅ Client-side routing support
- ✅ Proper headers for DOS game assets

## Troubleshooting

### Common Issues:

1. **Build fails**: Make sure all dependencies are in `package.json`
2. **DOS games not loading**: Check that all `.jsdos` files are in the `public` folder
3. **Routing issues**: The `vercel.json` includes SPA fallback configuration

### Performance Tips:

- The app includes optimized caching for static assets
- DOS game bundles are cached for better performance
- Images and icons are optimized for web delivery

## Tech Stack

- **React 17** - UI framework
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **js-dos** - DOS game emulation
- **Framer Motion** - Animations
- **Vercel** - Hosting and deployment

## License

MIT License - feel free to use this code for your own portfolio!
