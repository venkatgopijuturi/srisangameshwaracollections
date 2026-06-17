import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';
import TraditionalBorder from './TraditionalBorder';

const Hero = () => {
    const [scrollPos, setScrollPos] = React.useState(0);
    const heroRef = React.useRef(null);

    React.useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Fade out as user scrolls — disappears by 60% of viewport height
    const fadeProgress = Math.min(scrollPos / (window.innerHeight * 0.6), 1);
    const heroOpacity = 1 - fadeProgress;
    const heroScale = 1 - fadeProgress * 0.05;

    return (
        <>
            {/* Fixed Hero — stays in place while content scrolls over */}
            <section ref={heroRef} className="hero" style={{
                background: 'var(--bg-main)',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 8%',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 0,
                overflow: 'hidden',
                opacity: heroOpacity,
                transform: `scale(${heroScale})`,
                willChange: 'opacity, transform'
            }}>
                {/* Cinematic Background Layer */}
                <div className="hero-bg-cinematic" style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 70% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                    animation: 'slowZoom 20s infinite alternate ease-in-out',
                    zIndex: 1
                }}></div>
                <div className="hero-content" style={{
                    flex: 1,
                    zIndex: 10,
                    marginTop: '0'
                }}>
                    <div className="slide-up shimmer-gold" style={{
                        display: 'inline-block',
                        padding: '0.4rem 1.5rem',
                        background: 'var(--text-main)',
                        color: 'white',
                        fontSize: '0.7rem',
                        letterSpacing: '4px',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        borderRadius: '2px'
                    }}>
                        ESTABLISHED 1989
                    </div>

                    <h1 className="hero-title slide-up-delayed" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        color: 'var(--text-main)',
                        lineHeight: '1.2',
                        marginBottom: '1.5rem',
                        fontFamily: 'Cormorant Garamond, serif',
                        fontWeight: '300',
                        letterSpacing: '8px',
                        textTransform: 'uppercase'
                    }}>
                        The Future of <br />
                        <span className="luxury-text-gradient" style={{ fontWeight: '400', letterSpacing: '4px' }}>Pure Tradition</span>
                    </h1>

                    <p className="hero-subtitle slide-up-delayed-2" style={{
                        fontSize: '1rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.8',
                        marginBottom: '2rem',
                        maxWidth: '500px',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '300',
                        letterSpacing: '1px'
                    }}>
                        Sri Sangameshwara Collections blends artisanal hallmark
                        purity with AI-driven luxury. Experience the pinnacle of
                        1-Gram gold craftsmanship, re-imagined for the modern connoisseur.
                    </p>
                </div>

                <div className="hero-visual fade-in" style={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 5
                }}>
                    <div className="radiant-nimbus" style={{
                        width: 'min(600px, 80vw)',
                        height: 'min(600px, 80vw)',
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 75%)',
                        borderRadius: '50%',
                        position: 'absolute',
                        zIndex: 1,
                        animation: 'nimbusPulse 10s infinite alternate ease-in-out'
                    }}></div>
                    <img src={logo} alt="Sri Sangameshwara Collections Masterpiece" className="hero-logo-float" style={{
                        width: 'clamp(200px, 35vw, 480px)',
                        height: 'auto',
                        position: 'relative',
                        zIndex: 5,
                        filter: 'drop-shadow(0 40px 80px rgba(0, 0, 0, 0.1))',
                        animation: 'weightlessFloat 8s infinite alternate ease-in-out'
                    }} />
                </div>

                <style>{`
                    @keyframes slowZoom {
                        0% { transform: scale(1); }
                        100% { transform: scale(1.1); }
                    }
                    @keyframes nimbusPulse {
                        0% { transform: scale(0.85); opacity: 0.4; }
                        100% { transform: scale(1.15); opacity: 0.7; }
                    }
                    @keyframes weightlessFloat {
                        0% { transform: translateY(0) rotate(0deg); }
                        50% { transform: translateY(-30px) rotate(1deg); }
                        100% { transform: translateY(0) rotate(0deg); }
                    }
                `}</style>

                {/* Traditional Ornamental Border at bottom */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2
                }}>
                    <TraditionalBorder variant="compact" showMedallion={true} />
                </div>
            </section>

            {/* Spacer to push content below the fixed hero */}
            <div style={{ height: '100vh' }} />
        </>
    );
};

export default Hero;
