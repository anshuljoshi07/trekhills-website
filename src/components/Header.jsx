import React, { useState, useEffect } from 'react';

const Header = ({ theme, toggleTheme, onOpenPrivacyPolicy, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src="/trekhills_logo_new.png" alt="TrekHills" className="logo-img" style={{ height: '50px' }} />
        <div className="logo-text">TrekHills</div>
      </div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#treks" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>Packages</a>
          <a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem' }}>About Us</a>
          <span onClick={onOpenPrivacyPolicy} style={{ color: 'var(--text-main)', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}>Privacy Policy</span>
          <span onClick={onOpenContact} style={{ color: 'var(--text-main)', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' }}>Contact Us</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'dark' ? (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
            </svg>
          ) : (
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          )}
        </button>
        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }} className="nav-slogan">
          Himalayan Spirit
        </div>
      </nav>
    </header>
  );
};

export default Header;
