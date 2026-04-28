import React, { useState, useEffect } from 'react';

const TrekModal = ({ trek, onClose }) => {
  if (!trek) return null;

  const storageKey = `trekhills_reviews_${trek.id}`;
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : (trek.reviews || []);
  });

  const [newReview, setNewReview] = useState({ name: '', phone: '', text: '', rating: 5 });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.text) return;
    
    const submittedReview = {
      id: Date.now(),
      name: newReview.name,
      rating: newReview.rating,
      text: newReview.text,
      date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    };

    const updatedReviews = [submittedReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(storageKey, JSON.stringify(updatedReviews));
    setNewReview({ name: '', phone: '', text: '', rating: 5 });
  };

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1)
    : "5.0";

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating));
  };

  const whatsappNumber = "917857934298";
  const message = `Hi! I'm interested in the ${trek.name} (${trek.duration}) package for ${trek.cost}. Please share more details.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <img src={trek.image} alt={trek.name} className="modal-header-img" />
        
        <div className="modal-body">
          <div className="modal-header-info" style={{ marginBottom: '2rem' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{trek.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#FFD700', fontSize: '1.2rem', letterSpacing: '2px' }}>{renderStars(avgRating)}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{avgRating} ({reviews.length} reviews)</span>
              </div>
              <p style={{ color: 'var(--primary)', fontSize: '1.1rem', fontWeight: '600' }}>
                {trek.location} • {trek.duration} • {trek.difficulty}
                {trek.altitude && ` • ${trek.altitude}`}
              </p>
            </div>
            <div className="modal-pricing-info" style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Pricing</p>
              {trek.pricing ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', alignItems: 'flex-end', marginTop: '0.5rem' }}>
                  {Object.entries(trek.pricing).map(([type, price]) => (
                    <div key={type} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>{type}</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--primary)' }}>{price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--primary)' }}>{trek.cost}</p>
              )}
              {trek.note && (
                <p style={{ fontSize: '0.8rem', color: 'var(--accent)', marginTop: '0.5rem', maxWidth: '200px', lineHeight: '1.2' }}>*{trek.note}</p>
              )}
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Detailed Itinerary</h3>
            <div className="itinerary-timeline">
              {trek.itinerary.map((day) => (
                <div key={day.day} className="itinerary-day">
                  <div className="day-title">Day {day.day}: {day.title}</div>
                  <p style={{ color: 'var(--text-muted)' }}>{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* REVIEWS SECTION */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '0.5rem' }}>Traveler Reviews</h3>
            
            <div className="reviews-list" style={{ display: 'grid', gap: '1rem', marginBottom: '2rem' }}>
              {reviews.map(review => (
                <div key={review.id} style={{ background: 'rgba(255,255,255,0.03)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <strong>{review.name}</strong>
                    <span style={{ color: '#FFD700', fontSize: '1.1rem' }}>{renderStars(review.rating)}</span>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{review.text}</p>
                  <small style={{ color: 'rgba(255,255,255,0.4)' }}>{review.date}</small>
                </div>
              ))}
            </div>

            <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ marginBottom: '1.5rem', color: 'var(--primary)' }}>Write a Review</h4>
              <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="review-form-inputs" style={{ display: 'flex', gap: '1rem' }}>
                  <input type="text" placeholder="Your Name" required value={newReview.name} onChange={(e) => setNewReview({...newReview, name: e.target.value})} style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white' }} />
                  <input type="tel" placeholder="Phone Number" value={newReview.phone} onChange={(e) => setNewReview({...newReview, phone: e.target.value})} style={{ flex: 1, padding: '0.8rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white' }} />
                </div>
                <div className="review-rating-input" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Rating:</span>
                  <select value={newReview.rating} onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})} style={{ padding: '0.5rem', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', color: 'white', border: 'none' }}>
                    <option value={5}>5 Stars ★★★★★</option>
                    <option value={4}>4 Stars ★★★★☆</option>
                    <option value={3}>3 Stars ★★★☆☆</option>
                    <option value={2}>2 Stars ★★☆☆☆</option>
                    <option value={1}>1 Star ★☆☆☆☆</option>
                  </select>
                </div>
                <textarea placeholder="Describe your experience..." required value={newReview.text} onChange={(e) => setNewReview({...newReview, text: e.target.value})} rows="4" style={{ padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: 'white', resize: 'vertical' }}></textarea>
                <button type="submit" style={{ padding: '0.8rem 2rem', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', alignSelf: 'flex-start', marginTop: '0.5rem' }}>Submit Review</button>
              </form>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
            <div className="modal-details-grid" style={{ marginBottom: '2rem' }}>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#25D366' }}>Inclusions</h3>
                <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.2rem' }}>
                  <li>Stay (Tents / Homestays / Hotels)</li>
                  <li>Two Meals Everyday</li>
                  <li>Travel & Transportation</li>
                  <li>Expert Trek Leaders & Guides</li>
                </ul>
              </div>
              <div>
                <h3 style={{ marginBottom: '1rem', color: '#ff4444' }}>Exclusions</h3>
                <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.2rem' }}>
                  <li>Any extra meals not mentioned</li>
                  <li>Personal expenses & shopping</li>
                  <li>Offloading charges (porters/mules)</li>
                  <li>Anything not explicitly included</li>
                </ul>
              </div>
            </div>

            <div style={{ padding: '1rem', background: 'rgba(255, 157, 0, 0.1)', borderRadius: '12px', marginBottom: '2rem', borderLeft: '4px solid var(--accent)' }}>
              <h4 style={{ color: 'var(--accent)', marginBottom: '0.5rem' }}>Refund & Cancellation Policy</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Cancellations made 30 days before departure qualify for a 50% refund. 15-29 days before gets a 25% refund. No refunds for cancellations made less than 15 days prior. Full details in our Terms of Service.
              </p>
            </div>
            
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Inquire via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekModal;
