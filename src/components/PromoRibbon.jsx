import React from 'react';

const PromoRibbon = () => {
    return (
        <div className="promo-ribbon" style={{
            background: 'var(--bg-main)',
            borderBottom: 'var(--border-ultra-thin)',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            color: 'var(--primary-gold-dark)',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontFamily: 'Poppins, sans-serif',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 2002
        }}>
            <span style={{ fontWeight: 400 }}>A 2026 Vision:</span>
            <span style={{ marginLeft: '8px', color: 'var(--text-main)', fontStyle: 'italic', fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem' }}>
                Sri Sangameshwara Collections blends artisanal heritage with modern luxury.
            </span>
        </div>
    );
};

export default PromoRibbon;
