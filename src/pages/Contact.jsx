import React from 'react';
import WhatsAppButton from '../components/WhatsAppButton';

const Contact = () => {
    return (
        <div className="contact-page section-padding slide-up" style={{ minHeight: '100vh', background: 'var(--bg-main)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--text-main)', textAlign: 'center' }}>Contact Us</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '3rem', border: 'var(--border-light)' }}>
                        <h3 style={{ letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem', color: 'var(--primary-gold)' }}>GET IN TOUCH</h3>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>WhatsApp Support</h4>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Instant responses between 9 AM - 9 PM</p>
                            <WhatsAppButton productName="General Inquiry" price="" />
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email Us</h4>
                            <a href="mailto:support@srisangameshwara.com" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>support@srisangameshwara.com</a>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Follow Us</h4>
                            <a href="https://www.instagram.com/sri_sangameshwara_01" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>@sri_sangameshwara_01</a>
                        </div>
                    </div>

                    <div>
                        <h3 style={{ letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '2rem', color: 'var(--primary-gold)' }}>VISIT OUR STORE</h3>
                        <address style={{ fontStyle: 'normal', lineHeight: '2', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                            <strong>Sri Sangameshwara Collection</strong><br />
                            Main Market Road,<br />
                            Proddatur, Andhra Pradesh 516360<br />
                            India
                        </address>

                        <div style={{ marginTop: '3rem', width: '100%', height: '250px', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            MAP PLACEHOLDER
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
