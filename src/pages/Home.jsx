import React from 'react';
import Hero from '../components/Hero';
import { HallmarkRibbon } from '../components/PremiumWidgets';
import ProductCard from '../components/ProductCard';
import GoldTicker from '../components/GoldTicker';
import TraditionalBorder, { OrnamentalDivider } from '../components/TraditionalBorder';
import { getNewArrivals, getProductsByCategory } from '../services/productService';

const Home = ({ selectedCategory, handleCategorySelect }) => {
    const products = selectedCategory === 'all'
        ? getNewArrivals()
        : getProductsByCategory(selectedCategory);

    return (
        <>
            {selectedCategory === 'all' && <Hero />}
            <div className="scrollable-content" style={{
                position: 'relative',
                zIndex: 3,
                background: 'var(--bg-main)',
                boxShadow: '0 -20px 60px rgba(0, 0, 0, 0.08)',
                overflow: 'hidden'
            }}>
                {selectedCategory === 'all' && (
                    <>
                        {/* Hallmark Trust Ribbon */}
                        <HallmarkRibbon />

                        {/* Ornamental Border */}
                        <TraditionalBorder showMedallion={true} />

                        {/* ── Curated Categories Section ── */}
                        <section className="luxury-categories section-padding reveal" style={{ paddingBottom: '2rem' }}>
                            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                <p style={{
                                    fontSize: '0.7rem',
                                    letterSpacing: '4px',
                                    textTransform: 'uppercase',
                                    color: 'var(--primary-gold)',
                                    fontWeight: '500',
                                    marginBottom: '0.8rem',
                                    fontFamily: 'Poppins, sans-serif'
                                }}>EXPLORE BY CATEGORY</p>
                                <h2 style={{
                                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                                    color: 'var(--text-main)',
                                    fontFamily: 'Cormorant Garamond, serif',
                                    fontWeight: '400',
                                    lineHeight: '1.2'
                                }}>Curated Selections</h2>
                                <div style={{
                                    width: '40px',
                                    height: '1px',
                                    background: 'var(--primary-gold)',
                                    margin: '1rem auto 0'
                                }} />
                            </div>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(12, 1fr)',
                                gap: '1rem'
                            }}>
                                {[
                                    { name: 'Divine Necklaces', id: 'necklace', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80', span: 'span 8', h: '500px' },
                                    { name: 'Bridal Couture', id: 'bangles', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&w=800&q=80', span: 'span 4', h: '500px' },
                                    { name: 'Earring Gallery', id: 'earrings', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80', span: 'span 12', h: '350px' }
                                ].map((cat) => (
                                    <div
                                        key={cat.name}
                                        className="reveal"
                                        onClick={() => handleCategorySelect(cat.id)}
                                        style={{
                                            height: cat.h,
                                            position: 'relative',
                                            overflow: 'hidden',
                                            cursor: 'pointer',
                                            gridColumn: cat.span,
                                            borderRadius: '4px'
                                        }}
                                    >
                                        <img
                                            src={cat.img}
                                            alt={cat.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)'
                                            }}
                                            className="category-img"
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 40%, transparent 100%)',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            padding: '2.5rem',
                                            transition: 'background 0.4s ease'
                                        }}>
                                            <span style={{
                                                color: 'var(--primary-gold-light)',
                                                fontSize: '0.6rem',
                                                letterSpacing: '3px',
                                                fontWeight: '500',
                                                marginBottom: '0.5rem',
                                                fontFamily: 'Poppins, sans-serif'
                                            }}>SHOP NOW</span>
                                            <h4 style={{
                                                color: '#fff',
                                                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                                                fontFamily: 'Cormorant Garamond, serif',
                                                fontWeight: '500',
                                                letterSpacing: '1px'
                                            }}>{cat.name}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </>
                )}

                {selectedCategory === 'all' && <GoldTicker />}

                {/* Ornamental Border */}
                <TraditionalBorder variant="compact" />

                {/* ── Product Grid Section ── */}
                <section
                    className="signature-collections section-padding reveal"
                    style={{
                        background: selectedCategory === 'all' ? 'var(--bg-secondary)' : 'var(--bg-main)'
                    }}
                >
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <p style={{
                            fontSize: '0.7rem',
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            color: 'var(--primary-gold)',
                            fontWeight: '500',
                            marginBottom: '0.8rem',
                            fontFamily: 'Poppins, sans-serif'
                        }}>
                            {selectedCategory === 'all' ? 'FRESH FROM THE ATELIER' : 'PREMIUM COLLECTION'}
                        </p>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            marginBottom: '0.8rem',
                            color: 'var(--text-main)',
                            fontFamily: 'Cormorant Garamond, serif',
                            fontWeight: '400',
                            textTransform: 'capitalize'
                        }}>
                            {selectedCategory === 'all' ? 'New Arrivals' : `${selectedCategory} Collection`}
                        </h2>
                        <p style={{
                            color: 'var(--text-muted)',
                            fontSize: '0.9rem',
                            maxWidth: '500px',
                            margin: '0 auto',
                            lineHeight: '1.7',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: '300'
                        }}>
                            {selectedCategory === 'all'
                                ? 'Explore our latest artisanal masterpieces, fresh from the atelier.'
                                : `Discover our curated range of premium 1-gram gold ${selectedCategory}.`
                            }
                        </p>
                        <div style={{
                            width: '40px',
                            height: '1px',
                            background: 'var(--primary-gold)',
                            margin: '1.2rem auto 0'
                        }} />
                    </div>

                    <div className="product-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '1.5rem'
                    }}>
                        {products.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                            />
                        ))}
                    </div>
                </section>

                <div className="spacer-lg"></div>
            </div>
        </>
    );
};

export default Home;
