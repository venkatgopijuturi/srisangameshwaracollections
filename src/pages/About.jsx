import React from 'react';

const About = () => {
    return (
        <div className="about-page section-padding slide-up" style={{ minHeight: '100vh', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.5rem', marginBottom: '2rem', color: 'var(--text-main)' }}>Our Heritage</h1>
                <div style={{ width: '60px', height: '2px', background: 'var(--primary-gold)', margin: '0 auto 3rem' }}></div>

                <p style={{ fontSize: '1.2rem', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Established in 1989, Sri Sangameshwara Collection has been a beacon of trust and tradition in the world of jewellery.
                    Based in Andhra Pradesh, we specialize in premium 1-gram gold jewellery that rivals the beauty of solid gold.
                </p>

                <p style={{ fontSize: '1.1rem', lineHeight: '2', color: 'var(--text-muted)', marginBottom: '3rem' }}>
                    Our mission is to make luxury accessible. By blending traditional craftsmanship with modern technology,
                    we create pieces that are not just ornaments, but heirlooms. Every item in our collection is BIS Hallmarked
                    standard 1-gram gold, ensuring you get the best quality and finish.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '5rem' }}>
                    <div className="reveal">
                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', marginBottom: '1rem' }}>Our Vision</h3>
                        <p style={{ color: 'var(--text-muted)' }}>To be the most trusted name in alternative luxury jewellery, bringing the elegance of gold to every household.</p>
                    </div>
                    <div className="reveal-delayed-1">
                        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', marginBottom: '1rem' }}>Our Promise</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Uncompromising quality, transparent pricing, and a customer experience that feels like family.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
