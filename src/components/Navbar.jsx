import React, { useState, useEffect } from 'react';
import { Search, Heart, User } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';

import { useAuth } from '../context/AuthContext';
import logo from '../assets/logo.png';

const Navbar = ({ onNavigate, onCategorySelect }) => {
    const { wishlist } = useWishlist();

    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const wishlistCount = wishlist.length;

    const categories = [
        { id: 'all', label: 'All Jewellery' },
        { id: 'bangles', label: 'Bangles' },
        { id: 'chains', label: 'Chains' },
        { id: 'necklace', label: 'Necklaces' },
        { id: 'buttas', label: 'Buttas' },
        { id: 'earrings', label: 'Earrings' },
        { id: 'rings', label: 'Rings' }
    ];

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Side Navigation Drawer */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: isMenuOpen ? '0' : '-100%',
                width: '350px',
                height: '100vh',
                background: 'rgba(255, 255, 255, 0.98)',
                backdropFilter: 'blur(20px)',
                zIndex: 2000,
                boxShadow: '20px 0 60px rgba(0,0,0,0.1)',
                transition: '0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                padding: '4rem 3rem',
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid var(--border-light)'
            }}>
                <div
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '2rem',
                        cursor: 'pointer',
                        fontSize: '1.5rem',
                        color: 'var(--text-main)',
                        opacity: 0.6
                    }}
                >✕</div>

                <div style={{ marginBottom: '4rem' }}>
                    <img src={logo} alt="Logo" style={{ height: '40px', marginBottom: '2rem' }} />
                    <div style={{ fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--primary-gold)', fontWeight: '600' }}>SRI SANGAMESHWARA</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: 1 }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '1rem' }}>SHOP BY CATEGORY</div>
                    {categories.map(cat => (
                        <a
                            key={cat.id}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onCategorySelect(cat.id);
                                setIsMenuOpen(false);
                            }}
                            style={{
                                textDecoration: 'none',
                                color: 'var(--text-main)',
                                fontSize: '1.1rem',
                                fontFamily: 'Cormorant Garamond, serif',
                                transition: '0.3s'
                            }}
                            className="drawer-link-hover"
                        >
                            {cat.label}
                        </a>
                    ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '3rem', marginTop: '3rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('login'); setIsMenuOpen(false); }} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem' }}>
                            {user ? `Hello, ${user.name}` : 'My Account'}
                        </a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('wishlist'); setIsMenuOpen(false); }} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem' }}>Wishlist ({wishlistCount})</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); setIsMenuOpen(false); }} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem' }}>Our Heritage</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('contact'); setIsMenuOpen(false); }} style={{ textDecoration: 'none', color: 'var(--text-main)', fontSize: '0.9rem' }}>Contact Us</a>
                        <a href="https://wa.me/919014192002" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'var(--primary-gold)', fontSize: '0.9rem', fontWeight: '600' }}>WhatsApp Support</a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.2)',
                        backdropFilter: 'blur(2px)',
                        zIndex: 1999,
                        animation: 'fadeIn 0.5s ease'
                    }}
                ></div>
            )}

            <header className="main-header" style={{
                position: 'fixed',
                top: '40px',
                left: 0,
                width: '100%',
                zIndex: 1000,
                height: '70px',
                borderBottom: scrolled ? '1px solid rgba(212, 175, 55, 0.1)' : '1px solid transparent',
                background: scrolled ? 'rgba(253, 251, 247, 0.97)' : 'rgba(253, 251, 247, 0.5)',
                backdropFilter: 'blur(20px)',
                transition: 'all 0.4s ease',
                boxShadow: scrolled ? '0 2px 15px rgba(0,0,0,0.03)' : 'none'
            }}>
                <div style={{
                    padding: '0 5%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <div style={{ flex: 1 }}>
                        <div
                            className="menu-trigger magnetic-item"
                            onClick={() => setIsMenuOpen(true)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '5px',
                                padding: '10px',
                                width: 'fit-content'
                            }}
                        >
                            <div style={{ width: '22px', height: '1.2px', background: 'var(--text-main)' }}></div>
                            <div style={{ width: '14px', height: '1.2px', background: 'var(--primary-gold)' }}></div>
                            <div style={{ width: '22px', height: '1.2px', background: 'var(--text-main)' }}></div>
                        </div>
                    </div>

                    <div
                        className="logo-section magnetic-item"
                        style={{
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'var(--transition-weightless)',
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                        onClick={() => { onNavigate('home'); onCategorySelect('all'); }}
                    >
                        <img src={logo} alt="Sri Sangameshwara Collections" style={{
                            height: scrolled ? '50px' : '65px',
                            width: 'auto',
                            transition: 'height 0.4s ease',
                            objectFit: 'contain'
                        }} />
                    </div>

                    <div className="header-actions" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.5rem' }}>
                        <div
                            className="icon-hover-premium"
                            style={{ cursor: 'pointer', color: 'var(--text-main)', transition: '0.3s' }}
                            onClick={() => onNavigate('home')}
                        >
                            <Search size={20} strokeWidth={1.5} />
                        </div>

                        <div
                            className="icon-hover-premium"
                            style={{ cursor: 'pointer', position: 'relative', color: 'var(--text-main)', transition: '0.3s' }}
                            onClick={() => onNavigate('wishlist')}
                        >
                            <Heart size={20} strokeWidth={1.5} fill={wishlistCount > 0 ? 'var(--primary-gold)' : 'none'} stroke={wishlistCount > 0 ? 'var(--primary-gold)' : 'currentColor'} />
                            {wishlistCount > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '-6px',
                                    right: '-6px',
                                    background: 'var(--primary-gold)',
                                    color: 'white',
                                    borderRadius: '50%',
                                    width: '14px',
                                    height: '14px',
                                    fontSize: '0.5rem',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontWeight: '600'
                                }}>{wishlistCount}</div>
                            )}
                        </div>

                        <div
                            className="icon-hover-premium"
                            style={{ cursor: 'pointer', color: 'var(--text-main)', transition: '0.3s' }}
                            onClick={() => onNavigate('login')}
                        >
                            {user ? (
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--primary-gold)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '0.7rem',
                                    fontWeight: '600',
                                    color: 'var(--primary-gold)'
                                }}>
                                    {user.name[0]}
                                </div>
                            ) : (
                                <User size={20} strokeWidth={1.5} />
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
