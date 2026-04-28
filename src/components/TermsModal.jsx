import React from 'react';

const TermsModal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ padding: '3rem' }}>
        <button className="close-btn" onClick={onClose}>✕</button>
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Terms & Conditions</h2>
        
        <div style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>General Terms</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            By booking a trek or package with TrekHills, you agree to abide by our safety guidelines and the instructions of the trek leaders. We reserve the right to modify itineraries based on weather conditions or other unforeseen circumstances for the safety of our participants.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Payment Policy</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            A <strong>100% advance payment</strong> is required to confirm your booking. Your spot on the trek or tour is not guaranteed until the full payment is received and acknowledged by our team.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Cancellation & Refund Policy</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
            <li><strong>30 Days or more before departure:</strong> 50% refund of the total package cost.</li>
            <li><strong>15 to 29 Days before departure:</strong> 25% refund of the total package cost.</li>
            <li><strong>Less than 15 Days before departure:</strong> No refund will be provided.</li>
            <li><strong>No Show:</strong> No refund will be provided if a participant fails to join the trek on the scheduled departure date.</li>
          </ul>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.5rem' }}>Liability</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Trekking in the Himalayas involves inherent risks. TrekHills is not liable for any personal injury, loss of property, or delays caused by natural disasters, roadblocks, or medical emergencies. Participants must carry personal travel and medical insurance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
