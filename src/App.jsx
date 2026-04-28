import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrekCard from './components/TrekCard';
import TrekModal from './components/TrekModal';
import { treks } from './data/treks';

import AboutSection from './components/AboutSection';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import TermsModal from './components/TermsModal';
import ContactUsModal from './components/ContactUsModal';
import InstagramFeed from './components/InstagramFeed';
import Chatbot from './components/Chatbot';
import ContactWidget from './components/ContactWidget';

function App() {
  const [selectedTrek, setSelectedTrek] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  React.useEffect(() => {
    document.body.className = `${theme}-mode`;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`app ${theme}-mode`}>
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenPrivacyPolicy={() => setIsPrivacyPolicyOpen(true)} 
        onOpenContact={() => setIsContactOpen(true)}
      />
      <Hero />
      
      <section className="trek-container" id="treks">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          Explore Our <span style={{ color: 'var(--primary)' }}>Top</span> Packages
        </h2>
        <div className="trek-grid">
          {treks.map(trek => (
            <TrekCard 
              key={trek.id} 
              trek={trek} 
              onSelect={setSelectedTrek} 
            />
          ))}
        </div>
      </section>

      <AboutSection />

      <InstagramFeed />

      <footer style={{ padding: '5rem 5%', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
        <div className="logo-text" style={{ marginBottom: '1rem', fontSize: '2rem' }}>TrekHills</div>
        <p style={{ color: 'var(--text-muted)' }}>© 2026 TrekHills Adventures. All rights reserved.</p>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          <span style={{ cursor: 'pointer' }} onClick={() => setIsPrivacyPolicyOpen(true)}>Privacy Policy</span>
          <span style={{ cursor: 'pointer' }} onClick={() => setIsTermsOpen(true)}>Terms of Service & Cancellation</span>
          <span style={{ cursor: 'pointer' }} onClick={() => setIsContactOpen(true)}>Contact Us</span>
        </div>
      </footer>

      {selectedTrek && (
        <TrekModal 
          trek={selectedTrek} 
          onClose={() => setSelectedTrek(null)} 
        />
      )}

      {isPrivacyPolicyOpen && (
        <PrivacyPolicyModal onClose={() => setIsPrivacyPolicyOpen(false)} />
      )}

      {isTermsOpen && (
        <TermsModal onClose={() => setIsTermsOpen(false)} />
      )}

      {isContactOpen && (
        <ContactUsModal onClose={() => setIsContactOpen(false)} />
      )}

      <Chatbot onSelectTrek={setSelectedTrek} />
      <ContactWidget />
    </div>
  );
}

export default App;
