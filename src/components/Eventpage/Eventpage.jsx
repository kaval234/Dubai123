import React, { useState } from 'react';
import './Eventpage.css';
import { assets } from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const Eventpage = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h1>Dubai Property Carnival in Surat</h1>

      <div className="event-image">
        <img src={assets.Event_image1} alt="" />
      </div>

      <p className="intro">
        We <strong>Homes4Life Real Estate</strong> are delighted to invite you to our property roadshow in Surat,
        showcasing exclusive real estate investment opportunities.
      </p>

      <div className="why-dubai"><strong>Why Invest in Dubai?</strong></div>

<div className="benefit-row">
  <div className="benefit-item left">🏠 Best Rental Returns</div>
  <div className="benefit-item center">💰 Tax Free Investment</div>
  <div className="benefit-item right">🛂 Golden Visa Residency</div>
</div>


      <section className="event-details">
        <div className="info-box">
          <p><strong>📅Date : May 10th & 11th, 2025</strong></p>
          <p><strong>📍Venue : The Grand Bhagvati, Dumas Rd, Surat</strong></p>
          <p><strong>🕘Time : 9:00 AM to 7:00 PM</strong></p>
        </div>

        <div className="invitation-section" onClick={() => navigate('../Invitationpage')}>
          <div className="invitation-content">
            <span className="icon-left">✉️</span>
            <span className="invitation-text"><strong>Invitation</strong></span>
            <span className="icon-right">›</span>
          </div>
        </div>
      </section>

      <section className="map-section">
  <h3>Event Location</h3>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.476108076401!2d72.7511296!3d21.135985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0527f848aec3d%3A0x503630e1dedae0e2!2sThe%20Grand%20Bhagwati!5e0!3m2!1sen!2sin!4v1713000000000!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    title="Event Location"
  ></iframe>
</section>


      <section className="contact">
        <h3>SHARED BY</h3>
        <img src={assets.prince} alt="Prince Vadodariya" className="img" />
        <p>
          <strong>Prince Vadodariya</strong><br />
          <a href="tel:+971585389675">+971 58 538 9675</a><br />
          Homes4Life Real Estate
        </p>

        <div className="contact-buttons">
          <a href="tel:+971585389675" className="contact-btn">📞 Call</a>
          <a href="sms:+971585389675" className="contact-btn">💬 SMS</a>
          <a href="https://wa.me/971585389675" target="_blank" rel="noopener noreferrer" className="contact-btn">📱 WhatsApp</a>
        </div>
      </section>
    </div>
  );
};

export default Eventpage;

