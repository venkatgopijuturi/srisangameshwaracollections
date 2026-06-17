import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoldTicker from './components/GoldTicker';
import PromoRibbon from './components/PromoRibbon';
import { FloatingConcierge } from './components/PremiumWidgets';
import logo from './assets/logo.png';

// Pages
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import Wishlist from './pages/Wishlist';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isNavigating, setIsNavigating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Branded Transition Logic
  const triggerTransition = (path, category = null) => {
    if (isNavigating) return;
    setIsNavigating(true);

    setTimeout(() => {
      if (category !== null) setSelectedCategory(category);
      navigate(path);
      window.scrollTo(0, 0);
    }, 1100);

    setTimeout(() => {
      setIsNavigating(false);
    }, 2200);
  };

  useEffect(() => {
    // Bidirectional reveal — sections animate in AND out on scroll
    const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -60px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        } else {
          entry.target.classList.remove('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-container" style={{ background: 'var(--bg-main)', overflowX: 'hidden' }}>
      {/* Branded Page Transition Overlay */}
      <div className={`page-transition-overlay ${isNavigating ? 'active' : ''}`}>
        <div className="transition-underlay left"></div>
        <div className="transition-underlay right"></div>
        <div className="transition-panel left"></div>
        <div className="transition-panel right"></div>
        <div className="transition-branding">
          <img src={logo} alt="Branding" className="transition-logo" />
          <div className="transition-text">
            {"SRI SANGAMESHWARA".split("").map((char, index) => (
              <span key={index} style={{ "--delay": `${index * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="transition-subtext">ESTD 1989</div>
        </div>
      </div>

      <PromoRibbon />

      <Navbar
        onNavigate={(page) => triggerTransition(`/${page === 'home' ? '' : page}`)}
        onCategorySelect={(cat) => triggerTransition('/', cat)}
      />

      <div className={`page-wrapper page-content-wrapper ${isNavigating ? 'transitioning' : ''}`} style={{
        position: 'relative',
        zIndex: 2,
        background: 'var(--bg-main)',
        paddingTop: location.pathname === '/'
          ? (selectedCategory === 'all' ? '0px' : '110px')
          : '110px',
        minHeight: '100vh'
      }}>
        <Routes>
          <Route path="/" element={<Home selectedCategory={selectedCategory} handleCategorySelect={(cat) => triggerTransition('/', cat)} />} />

          <Route path="/login" element={<Login onNavigate={(page) => triggerTransition(`/${page === 'home' ? '' : page}`)} />} />
          <Route path="/register" element={<Register onNavigate={(page) => triggerTransition(`/${page === 'home' ? '' : page}`)} />} />
          <Route path="/wishlist" element={<Wishlist onNavigate={(page) => triggerTransition(`/${page === 'home' ? '' : page}`)} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>

        <FloatingConcierge />



        <Footer />
      </div>
    </div >
  );
}

export default App;
