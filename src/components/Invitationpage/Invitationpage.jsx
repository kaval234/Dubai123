import React, { useState } from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';
import './InvitationPage.css';
import { assets } from '../../assets/assets';

const InvitationPage = () => {
  const [visibleDate, setVisibleDate] = useState(null);
  const [form10th, setForm10th] = useState({ name: '', phone: '' });
  const [form11th, setForm11th] = useState({ name: '', phone: '' });

  const throwConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  const handleAttend = (form, date) => {
    if (form.name && form.phone) {
      throwConfetti();

      Swal.fire({
        icon: 'success',
        title: `🎊 RSVP Confirmed!`,
        html: `<strong>${form.name}</strong>, your spot for <b>${date} May</b> is booked!<br>📞 ${form.phone}`,
        confirmButtonColor: '#00b894',
      });

      // Send message to backend to notify admin via WhatsApp
      fetch('http://localhost:5000/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          date,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            console.log('📩 Message sent to admin!');
          } else {
            console.error('❌ Failed to send message', data.error);
          }
        })
        .catch((err) => console.error('❌ Error sending message:', err));

      // Clear form after submission
      if (date === '10th') {
        setForm10th({ name: '', phone: '' });
      } else {
        setForm11th({ name: '', phone: '' });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: '⚠️ Missing Info',
        text: 'Please enter both your name and phone number.',
        confirmButtonColor: '#d33',
      });
    }
  };

  const handleDateClick = (date) => {
    setVisibleDate(visibleDate === date ? null : date);
  };

  const handleCloseDateBox = () => {
    setVisibleDate(null);
  };

  return (
    <div className="invitation-container colorful-bg">
      <img src={assets.prince} alt="Owner" className="owner-profile" />
      <h1 style={{ color: '#000' }}>🎉 You're Invited to the Dubai Property Carnival!</h1>
      <p>📍 Pick your preferred date below and RSVP with your name and phone number.</p>

      <div className="date-boxes">
        {/* 10th May */}
        <div className="date-section" onClick={() => handleDateClick('10th')}>
          <h3>📅 10th May</h3>
          {visibleDate === '10th' && (
            <div className="input-box" onClick={(e) => e.stopPropagation()}>
              <div className="close-btn-wrapper">
                <img
                  src={assets.cross_icon}
                  alt="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseDateBox();
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="👤 Your Name"
                value={form10th.name}
                onChange={(e) => setForm10th({ ...form10th, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="📞 Phone Number"
                value={form10th.phone}
                onChange={(e) => setForm10th({ ...form10th, phone: e.target.value })}
              />
              <button onClick={(e) => { e.stopPropagation(); handleAttend(form10th, '10th'); }}>
                ✅ Submit
              </button>
            </div>
          )}
        </div>

        {/* 11th May */}
        <div className="date-section" onClick={() => handleDateClick('11th')}>
          <h3>📅 11th May</h3>
          {visibleDate === '11th' && (
            <div className="input-box" onClick={(e) => e.stopPropagation()}>
              <div className="close-btn-wrapper">
                <img
                  src={assets.cross_icon}
                  alt="Close"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCloseDateBox();
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="👤 Your Name"
                value={form11th.name}
                onChange={(e) => setForm11th({ ...form11th, name: e.target.value })}
              />
              <input
                type="tel"
                placeholder="📞 Phone Number"
                value={form11th.phone}
                onChange={(e) => setForm11th({ ...form11th, phone: e.target.value })}
              />
              <button onClick={(e) => { e.stopPropagation(); handleAttend(form11th, '11th'); }}>
                ✅ Submit
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

 export default InvitationPage;
