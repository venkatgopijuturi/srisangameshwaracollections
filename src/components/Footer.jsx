import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import TraditionalBorder from './TraditionalBorder';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--bg-dark)',
            color: 'var(--text-on-dark)',
            padding: '0 0 3rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Traditional Ornamental Border — Inverted for dark bg */}
            <div style={{ marginBottom: '1.5rem' }}>
                <TraditionalBorder variant="inverted" showMedallion={true} />
            </div>

            {/* Background Texture */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23D4AF37\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.1,
                pointerEvents: 'none'
            }}></div>

            <div className="footer-content" style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                position: 'relative',
                zIndex: 2,
                padding: '0 5%'
            }}>
                {/* Brand Section */}
                <div className="footer-brand">
                    <h2 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '2rem',
                        color: 'var(--primary-gold)',
                        marginBottom: '1rem',
                        letterSpacing: '2px'
                    }}>SRI SANGAMESHWARA</h2>

                </div>

                {/* Social & Copyright - Moved inside brand section for cleaner layout */}
                <div style={{
                    display: 'flex',
                    gap: '1.5rem',
                    alignItems: 'center',
                    marginTop: '2rem'
                }}>
                    <a href="https://wa.me/919014192002" target="_blank" rel="noopener noreferrer" className="magnetic-item social-link" style={{ transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" style={{ width: '28px', height: '28px' }} />
                    </a>
                    <a href="https://www.instagram.com/sri_sangameshwara_01" target="_blank" rel="noopener noreferrer" className="magnetic-item social-link" style={{ transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" style={{ width: '26px', height: '26px' }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="magnetic-item social-link" style={{ transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" style={{ width: '26px', height: '26px' }} />
                    </a>
                    <a href="mailto:support@srisangameshwara.com" className="magnetic-item social-link" style={{ transition: '0.4s cubic-bezier(0.23, 1, 0.32, 1)' }}>
                        <div style={{
                            width: '28px',
                            height: '28px',
                            background: '#ea4335',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: 'white',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            fontFamily: 'Poppins, sans-serif'
                        }}>M</div>
                    </a>
                </div>

                <div style={{
                    fontSize: '0.7rem',
                    opacity: 0.4,
                    letterSpacing: '3px',
                    marginTop: '3rem',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    © 2026 SRI SANGAMESHWARA COLLECTION. ALL RIGHTS RESERVED. <br />
                    <span style={{ marginTop: '0.5rem', display: 'block' }}>REFINING TRADITION SINCE 1989.</span>
                </div>
            </div>

            {/* Quick Links / Contact can be added here if needed, or kept minimal as per latest design */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                right: '5%',
                display: 'flex',
                gap: '2rem',
                fontSize: '0.7rem',
                opacity: 0.5,
                letterSpacing: '1px'
            }}>
                <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>HERITAGE</Link>
                <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>CONTACT</Link>
            </div>
        </footer>
    );
};

export default Footer;
