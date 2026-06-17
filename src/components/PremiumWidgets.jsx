import React from 'react';

// --- Hallmark Trust Ribbon Component ---
export const HallmarkRibbon = () => {
    const brands = [
        "BIS HALLMARK 916", "2026 DIGITAL AUTHENTICITY", "LAB TESTED PURITY",
        "ESTD 1989 HERITAGE", "WORLDWIDE SHIPPING", "SECURE PAYMENT"
    ];

    return (
        <div className="hallmark-ribbon" style={{
            background: 'var(--bg-tertiary)',
            padding: '1.2rem 0',
            borderTop: '1px solid rgba(203, 139, 30, 0.1)',
            borderBottom: '1px solid rgba(203, 139, 30, 0.1)',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            position: 'relative'
        }}>
            <div className="ribbon-scroll" style={{
                display: 'inline-block',
                animation: 'ribbonSlide 40s linear infinite'
            }}>
                {[...brands, ...brands, ...brands].map((brand, idx) => (
                    <span key={idx} style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        letterSpacing: '3px',
                        fontWeight: '500',
                        marginRight: '6rem',
                        textTransform: 'uppercase',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{ color: 'var(--primary-gold)', fontSize: '1rem' }}>✦</span> {brand}
                    </span>
                ))}
            </div>
            <style>{`
                @keyframes ribbonSlide {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
            `}</style>
        </div>
    );
};

// --- Luxury Stats Tracker Component ---
export const StatsTracker = () => {
    const stats = [
        { label: "YEARS OF HERITAGE", value: "35+" },
        { label: "GOLD PURITY", value: "100%" },
        { label: "HAPPY FAMILIES", value: "15k+" },
        { label: "UNIQUE DESIGNS", value: "5000+" }
    ];

    return (
        <div className="stats-tracker" style={{
            padding: '6rem 10%',
            background: 'var(--bg-main)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            textAlign: 'center'
        }}>
            {stats.map((stat, idx) => (
                <div key={idx} className="stat-item reveal" style={{ opacity: 1, transform: 'none' }}>
                    <div style={{
                        fontSize: '2.5rem',
                        fontFamily: 'Cormorant Garamond, serif',
                        color: 'var(--primary-gold)',
                        marginBottom: '0.5rem',
                        fontWeight: '500'
                    }}>
                        {stat.value}
                    </div>
                    <div style={{
                        fontSize: '0.65rem',
                        letterSpacing: '2px',
                        color: 'var(--text-muted)',
                        fontWeight: '600'
                    }}>
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

// --- Floating Glass Concierge ---
export const FloatingConcierge = () => {
    return (
        <div className="floating-concierge" style={{
            position: 'fixed',
            bottom: '2.5rem',
            right: '2.5rem',
            zIndex: 3000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.8rem'
        }}>
            <div className="concierge-tooltip" style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                fontSize: '0.7rem',
                letterSpacing: '1px',
                color: 'var(--text-main)',
                border: '1px solid rgba(203, 139, 30, 0.2)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                whiteSpace: 'nowrap',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
            }}>
                <span style={{ width: '6px', height: '6px', background: '#4CAF50', borderRadius: '50%' }}></span>
                ONLINE ASSISTANCE
            </div>

            <a
                href="https://wa.me/919014192002"
                target="_blank"
                rel="noopener noreferrer"
                className="concierge-btn magnetic-item"
                style={{
                    width: '64px',
                    height: '64px',
                    background: 'var(--text-main)',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: '1.4rem',
                    color: 'white',
                    boxShadow: '0 15px 45px rgba(0,0,0,0.15)',
                    transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                    textDecoration: 'none',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)';
                    e.currentTarget.style.background = 'var(--primary-gold)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)';
                    e.currentTarget.style.background = 'var(--text-main)';
                }}
            >
                <span role="img" aria-label="WhatsApp">💬</span>
            </a>
        </div>
    );
};
