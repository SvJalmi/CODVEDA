import React, { useState } from 'react';
import './style.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="theme-toggle" data-aos="fade-down" data-aos-delay="500">
        <button id="toggleBtn" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>

      <header className="glass-header" data-aos="fade-up">
        <h1>Flexbox & Grid Responsive Layout</h1>
      </header>

      <nav className="glass-nav" data-aos="fade-up" data-aos-delay="100">
        <a href="#">Home</a>
        <a href="#">Gallery</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </nav>

      <section className="hero-section" data-aos="zoom-in" data-aos-delay="200">
        <div className="hero-content">
          <h2>Welcome to the Future of Web Design</h2>
          <p>Advanced Flexbox + Grid | Glassmorphism | Responsive | Dark Mode</p>
          <button data-aos="fade-up" data-aos-delay="300">Get Started</button>
        </div>
      </section>

      <section className="gallery-section">
        <h2 data-aos="fade-right">Photo Gallery (Grid)</h2>
        <div className="gallery-grid">
          {[1,2,3,4,5,6].map((num) => (
            <div key={num} className="gallery-item" data-aos="flip-left" data-aos-delay={num * 100}>
              {num}
            </div>
          ))}
        </div>
      </section>

      <section className="blog-section">
        <h2 data-aos="fade-left">Blog Layout (Flexbox)</h2>
        <div className="blog-container">
          {['Blog Post 1', 'Blog Post 2', 'Blog Post 3'].map((post, index) => (
            <div key={index} className="blog-card" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              {post}
            </div>
          ))}
        </div>
      </section>

      <footer className="glass-footer" data-aos="fade-up" data-aos-delay="100">
        <p>&copy; 2025 Responsive Design. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
