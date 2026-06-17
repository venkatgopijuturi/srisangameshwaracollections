import React from 'react';

const GoldTicker = () => {
    const rates = [
        { label: '1G Gold (24K)', rate: '₹7,450', trend: 'up' },
        { label: '1G Gold (22K)', rate: '₹6,850', trend: 'down' },
        { label: '1G Gold (18K)', rate: '₹5,620', trend: 'up' },
        { label: 'Silver (1G)', rate: '₹95.40', trend: 'up' }
    ];

    return (
        <div className="gold-ticker-section" style={{
            background: 'var(--bg-main)',
            color: 'var(--text-main)',
            padding: '1.2rem 0',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            fontSize: '0.7rem',
            letterSpacing: '3px',
            fontWeight: '500',
            borderTop: '0.5px solid rgba(166, 117, 22, 0.1)',
            borderBottom: '0.5px solid rgba(166, 117, 22, 0.1)',
            margin: '6rem 0'
        }}>
            <div className="ticker-scroll" style={{ display: 'inline-block', animation: 'ticker 30s linear infinite' }}>
                {[...rates, ...rates, ...rates].map((item, idx) => (
                    <span key={idx} style={{ marginRight: '4rem' }}>
                        {item.label}: <span style={{ color: 'var(--primary-gold)' }}>{item.rate}</span>
                        <span style={{ marginLeft: '0.5rem', opacity: 0.5 }}>{item.trend === 'up' ? '↗' : '↘'}</span>
                    </span>
                ))}
            </div>
            <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
        </div>
    );
};

export default GoldTicker;
