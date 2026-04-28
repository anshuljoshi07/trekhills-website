import React from 'react';

const TrekCard = ({ trek, onSelect }) => {
  return (
    <div className="trek-card" onClick={() => onSelect(trek)}>
      <img src={trek.image} alt={trek.name} className="trek-image" />
      <div className="trek-info">
        <div className="trek-meta">
          <span>📍 {trek.location}</span>
          <span>⏱️ {trek.duration}</span>
        </div>
        <h3 className="trek-name">{trek.name}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem', height: '3.6rem', overflow: 'hidden' }}>
          {trek.description}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="trek-price">
            {trek.pricing ? `From ${Object.values(trek.pricing).reduce((min, p) => parseInt(p.replace(/[^0-9]/g, '')) < parseInt(min.replace(/[^0-9]/g, '')) ? p : min, Object.values(trek.pricing)[0])}` : trek.cost}
          </div>
          <div style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem' }}>Details →</div>
        </div>
      </div>
    </div>
  );
};

export default TrekCard;
