# Responsive Web Design with Flexbox and Grid
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project demonstrates a responsive website built with Flexbox and CSS Grid, featuring a modern glassmorphism design with light/dark mode toggle, scroll animations, and a React componentized version.

## Project Structure

```
responsive-web-design/
├── index.html
├── style.css
├── script.js
├── README.md
├── dist/
│   ├── deploy.html
│   ├── index.html
│   └── style.css
└── react-version/
    ├── App.js
    ├── index.js
    ├── style.css
    ├── index.html
    └── package.json
```

## Project Features

1. Flexbox Layout for Navigation and Blog Cards
2. CSS Grid for Gallery Section
3. Responsive Design (Desktop, Tablet, Mobile)
4. Glassmorphism Theme
5. Light/Dark Mode Toggle
6. Advanced CSS Animations and Effects
7. Scroll Animations with AOS (Animate On Scroll)
8. React Componentized Version
9. Deployment Package for GitHub Pages

## Deployment Steps for GitHub Pages

### Option 1: Deploy the Single HTML File (Easiest)

1. Create a new repository on GitHub
2. Upload the `dist/deploy.html` file to your repository
3. Rename it to `index.html`
4. Go to Settings > Pages in your repository
5. Select the branch to deploy from (usually main or master)
6. Your site will be published at `https://<username>.github.io/<repository-name>`

### Option 2: Deploy the Complete Project

1. Create a new repository on GitHub
2. Add all project files to the repository
3. Configure the deployment settings in your repository:
   - Go to Settings > Pages
   - Select the branch to deploy from (usually main or master)
   - Set the root directory to the root of your repository
4. Your site will be published at `https://<username>.github.io/<repository-name>`

## Running the React Version

1. Navigate to the `react-version` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The app will be available at `http://localhost:3000`

## Features

- Flexbox for Navigation and Blog Cards
- CSS Grid for Gallery
- Responsive Design (Mobile-Friendly)
- Glassmorphism Theme
- Light/Dark Mode Toggle
- Advanced CSS Animations and Effects
- Scroll Animations with AOS
- React Componentized Version
- Deployment Package for GitHub Pages

## File Descriptions

### Main Project Files
- `index.html`: Main HTML file with AOS scroll animations
- `style.css`: Stylesheet with glassmorphism effects and responsive design
- `script.js`: JavaScript for light/dark mode toggle

### React Version
- `react-version/App.js`: Main React component
- `react-version/index.js`: React entry point
- `react-version/style.css`: Stylesheet (same as main project)
- `react-version/package.json`: React project dependencies

### Deployment Package
- `dist/deploy.html`: Single HTML file with embedded CSS and JS for easy deployment
- `dist/index.html`: Simplified HTML file for deployment
- `dist/style.css`: Simplified stylesheet for deployment

## Browser Support

This project works on all modern browsers that support:
- Flexbox
- CSS Grid
- CSS Variables
- Backdrop Filter (for glassmorphism effects)

For older browsers, some visual effects may not be visible, but the layout will still work.
