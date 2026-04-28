import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="trek-container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>
          Meet the <span style={{ color: 'var(--primary)' }}>Visionaries</span> behind TrekHills
        </h2>
        
        <div className="founders-grid">
          <div className="founder-card">
            <div className="founder-img-wrapper">
              <img src="/founders/rupesh.jpg" alt="Rupesh Raj" className="founder-img" />
            </div>
            <div className="founder-info">
              <h3>Rupesh Raj</h3>
              <p className="founder-title">Director & Founder</p>
              <p className="founder-bio">
                A mountaineering enthusiast with a passion for uncovering the sacred secrets of the Himalayas. 
                Rupesh founded TrekHills to bring spiritual and adventurous souls closer to the peaks.
              </p>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-img-wrapper">
              <img src="/founders/arav.jpg" alt="Arav Michael" className="founder-img" />
            </div>
            <div className="founder-info">
              <h3>Arav Michael</h3>
              <p className="founder-title">Team Head Operations</p>
              <p className="founder-bio">
                The backbone of TrekHills' logistical excellence. Arav ensures that every pilgrimage and trek is 
                executed with precision, safety, and utmost care for our trekkers.
              </p>
            </div>
          </div>

          <div className="founder-card">
            <div className="founder-img-wrapper">
              <img src="/about_us_trishna_new.jpg" alt="Trishna Rajkonwar" className="founder-img" />
            </div>
            <div className="founder-info">
              <h3>Trishna Rajkonwar</h3>
              <p className="founder-title">Head of Expeditions</p>
              <p className="founder-bio">
                An aerospace engineering graduate from Assam, professional mountaineer and accomplished alpinist. She brings discipline, resilience, and leadership from her tenure as an NCC cadet and national-level sportsperson. Committed to the highest standards of safety in high-altitude environments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          background: var(--bg-dark);
          position: relative;
          overflow: hidden;
        }

        .founders-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 4rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .founder-card {
          background: var(--card-bg);
          border: 1px solid var(--glass-border);
          border-radius: 30px;
          padding: 2.5rem;
          text-align: center;
          transition: var(--transition);
          backdrop-filter: blur(10px);
        }

        .founder-card:hover {
          transform: translateY(-15px);
          border-color: var(--primary);
          box-shadow: 0 20px 40px var(--primary-glow);
        }

        .founder-img-wrapper {
          width: 200px;
          height: 200px;
          margin: 0 auto 2rem;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid var(--primary);
          box-shadow: 0 0 20px var(--primary-glow);
        }

        .founder-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition);
        }

        .founder-card:hover .founder-img {
          transform: scale(1.1);
        }

        .founder-info h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
          color: var(--text-main);
        }

        .founder-title {
          color: var(--primary);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
        }

        .founder-bio {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .founders-grid { gap: 2rem; }
          .founder-card { padding: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
