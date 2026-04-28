import React from 'react';

const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '3rem' }}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Privacy Policy</h2>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <p style={{ marginBottom: '1.5rem' }}>
            At TrekHills Adventures, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            When you inquire about a trek via WhatsApp or contact us through our website, we may collect personal information such as your name, phone number, email address, and travel preferences. We only collect information that is necessary to provide you with our services.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The information we collect is used to:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li>Process your trekking inquiries and bookings.</li>
            <li>Communicate with you regarding your itinerary, safety guidelines, and updates.</li>
            <li>Improve our website and customer service.</li>
            <li>Send you promotional offers (only if you have opted in).</li>
          </ul>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Security</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Third-Party Services</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business (such as WhatsApp for communication), so long as those parties agree to keep this information confidential.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>5. Contact Us</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            If you have any questions or concerns about this Privacy Policy, please contact us at privacy@trekhills.com or via WhatsApp at +91 78579 34298.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;
