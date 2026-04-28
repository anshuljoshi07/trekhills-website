import React, { useState, useEffect, useRef } from 'react';
import { treks } from '../data/treks';

const Chatbot = ({ onSelectTrek }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [step, setStep] = useState(0);
  const [filters, setFilters] = useState({ location: '', budget: '', difficulty: '' });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setMessages([
          { type: 'bot', text: "Namaste! I'm your TrekHills virtual guide. Where are you dreaming of going?" },
          { type: 'options', options: ['Uttarakhand', 'Himachal Pradesh', 'Anywhere'] }
        ]);
      }, 300);
    }
    scrollToBottom();
  }, [isOpen, messages]);

  const handleOptionClick = (option) => {
    // Add user message
    setMessages(prev => [...prev.filter(m => m.type !== 'options'), { type: 'user', text: option }]);

    setTimeout(() => {
      if (step === 0) {
        setFilters(prev => ({ ...prev, location: option }));
        setStep(1);
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: "Awesome! What's your approximate budget per person?" },
          { type: 'options', options: ['Under ₹10,000', 'Above ₹10,000', 'Doesn\'t matter'] }
        ]);
      } else if (step === 1) {
        setFilters(prev => ({ ...prev, budget: option }));
        setStep(2);
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: "Got it. Finally, what kind of experience are you looking for?" },
          { type: 'options', options: ['Easy / Leisure', 'Moderate / Trekking', 'Difficult / Spiritual'] }
        ]);
      } else if (step === 2) {
        const newFilters = { ...filters, difficulty: option };
        setFilters(newFilters);
        setStep(3);
        showResults(newFilters);
      }
    }, 600);
  };

  const showResults = (finalFilters) => {
    setMessages(prev => [...prev, { type: 'bot', text: "Let me find the perfect adventures for you..." }]);
    
    setTimeout(() => {
      let results = treks;

      // Filter Location
      if (finalFilters.location !== 'Anywhere') {
        results = results.filter(t => t.location.includes(finalFilters.location));
      }

      // Filter Budget
      if (finalFilters.budget === 'Under ₹10,000') {
        results = results.filter(t => {
          if (t.cost === 'Contact Us') return false;
          const price = parseInt(t.cost.replace(/[^0-9]/g, ''));
          return price < 10000;
        });
      } else if (finalFilters.budget === 'Above ₹10,000') {
        results = results.filter(t => {
          if (t.cost === 'Contact Us') return true; // Premium treks usually say contact us
          const price = parseInt(t.cost.replace(/[^0-9]/g, ''));
          return price >= 10000;
        });
      }

      // Filter Difficulty
      if (finalFilters.difficulty === 'Easy / Leisure') {
        results = results.filter(t => t.difficulty.toLowerCase().includes('easy') || t.difficulty.toLowerCase().includes('driving'));
      } else if (finalFilters.difficulty === 'Moderate / Trekking') {
        results = results.filter(t => t.difficulty.toLowerCase().includes('moderate'));
      } else if (finalFilters.difficulty === 'Difficult / Spiritual') {
        results = results.filter(t => t.difficulty.toLowerCase().includes('difficult'));
      }

      if (results.length > 0) {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: `Here are ${results.length} amazing options that match your vibe!` },
          { type: 'results', data: results.slice(0, 4) } // show top 4 max
        ]);
      } else {
        setMessages(prev => [
          ...prev, 
          { type: 'bot', text: "Hmm, I couldn't find an exact match for those specific filters right now. But our experts can customize a trip for you! Reach out via WhatsApp." }
        ]);
      }

      // Add a restart button
      setMessages(prev => [...prev, { type: 'options', options: ['Start Over'] }]);
    }, 1500);
  };

  const resetChat = () => {
    setStep(0);
    setFilters({ location: '', budget: '', difficulty: '' });
    setMessages([]);
    setTimeout(() => {
      setMessages([
        { type: 'bot', text: "Let's try again! Where are you dreaming of going?" },
        { type: 'options', options: ['Uttarakhand', 'Himachal Pradesh', 'Anywhere'] }
      ]);
    }, 300);
  };

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <button 
        className="chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open Chat Assistant"
      >
        {isOpen ? '✕' : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Trek Guide Assistant</h3>
          </div>
          
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message-container ${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="chat-bubble bot-bubble">{msg.text}</div>
                )}
                
                {msg.type === 'user' && (
                  <div className="chat-bubble user-bubble">{msg.text}</div>
                )}
                
                {msg.type === 'options' && (
                  <div className="chat-options">
                    {msg.options.map(opt => (
                      <button key={opt} className="chat-opt-btn" onClick={() => opt === 'Start Over' ? resetChat() : handleOptionClick(opt)}>
                        {opt}
                      </button>
                    ))}
                  </div>
                )}

                {msg.type === 'results' && (
                  <div className="chat-results">
                    {msg.data.map(trek => (
                      <div key={trek.id} className="chat-trek-card" onClick={() => { setIsOpen(false); onSelectTrek(trek); }}>
                        <img src={trek.image} alt={trek.name} />
                        <div>
                          <h4>{trek.name}</h4>
                          <p>{trek.duration} • {trek.cost}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
