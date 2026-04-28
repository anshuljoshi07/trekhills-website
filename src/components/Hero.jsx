import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      
      {/* Lightweight CSS Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>

      <div className="hero-content">
        <h1 className="animate-title">
          <span className="title-word">Ascend</span> 
          <span className="title-word highlight">Your Limits</span>
        </h1>
        <p className="animate-subtitle">
          Discover handpicked Himalayan adventures. From serene meadows to challenging summits, find your next legendary trek with detailed itineraries and expert guidance.
        </p>
        <a href="#treks" className="hero-cta animate-cta">Start Exploring</a>
      </div>

      <div className="scroll-indicator animate-bounce">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
