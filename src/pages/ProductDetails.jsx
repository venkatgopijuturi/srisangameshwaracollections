import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/productService';
import WhatsAppButton from '../components/WhatsAppButton';
import { useWishlist } from '../context/WishlistContext';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const { toggleWishlist, isInWishlist } = useWishlist();

    useEffect(() => {
        if (!product || product.id !== id) {
            const foundProduct = getProductById(id);
            if (foundProduct) {
                setProduct(foundProduct);
            } else {
                navigate('/');
            }
        }
        window.scrollTo(0, 0);
    }, [id, navigate, product]);

    if (!product) return <div className="section-padding">Loading...</div>;

    const isWished = isInWishlist(product.id);
    const savings = product.oldPrice ? parseInt(product.oldPrice.replace(/,/g, '')) - parseInt(product.price.replace(/,/g, '')) : null;

    return (
        <div className="product-details-page" style={{ paddingTop: '50px', minHeight: '100vh', background: 'var(--bg-main)' }}>
            <div className="section-padding" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                {/* Image Section */}
                <div className="detail-image-container reveal" style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', boxShadow: 'var(--shadow-silk)' }}>
                    <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    <div className="product-badge digital-purity" style={{ top: '1rem', right: '1rem', left: 'auto' }}>
                        BIS 916 HALLMARKED
                    </div>
                </div>

                {/* Info Section */}
                <div className="detail-info reveal-delayed-1">
                    <div style={{ fontSize: '0.8rem', letterSpacing: '3px', color: 'var(--primary-gold)', marginBottom: '1rem', textTransform: 'uppercase' }}>
                        {product.category} Collection
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: '1.2', color: 'var(--text-main)' }}>
                        {product.title}
                    </h1>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2rem', color: 'var(--text-main)', fontWeight: '500' }}>₹{product.price}</span>
                        {product.oldPrice && (
                            <span style={{ fontSize: '1.2rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>₹{product.oldPrice}</span>
                        )}
                        {savings > 0 && (
                            <span style={{ fontSize: '0.9rem', color: 'var(--primary-gold)', border: '1px solid var(--primary-gold)', padding: '0.2rem 0.5rem' }}>
                                SAVE ₹{savings.toLocaleString()}
                            </span>
                        )}
                    </div>

                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '3rem', fontSize: '1.05rem' }}>
                        Indulge in the radiance of this handcrafted masterpiece. Designed with precision and
                        finished with authentic 1-gram gold plating, this piece embodies the perfect blend of
                        traditional artistry and modern elegance.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                        <a
                            href={`https://wa.me/919014192002?text=Hi, I am interested in ${product.title} - ₹${product.price}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="buy-now-btn"
                            style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textDecoration: 'none',
                                padding: '1.2rem 2rem',
                                fontSize: '0.9rem',
                                letterSpacing: '2px'
                            }}
                        >
                            INQUIRE ON WHATSAPP
                        </a>
                    </div>

                    <div style={{ marginBottom: '3rem' }}>
                        <button
                            onClick={() => toggleWishlist(product)}
                            className="btn-premium"
                            style={{
                                width: '100%',
                                borderColor: 'var(--border-standard)',
                                color: isWished ? 'var(--accent-red)' : 'var(--text-main)',
                                background: 'transparent'
                            }}
                        >
                            {isWished ? '❤️ REMOVE FROM WISHLIST' : '♡ ADD TO WISHLIST'}
                        </button>
                    </div>

                    {/* Trust Badges */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem' }}>🏆</span>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', marginBottom: '0.2rem' }}>Premium Quality</h4>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Certified 1-Gram Gold</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem' }}>✨</span>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', marginBottom: '0.2rem' }}>Skin Friendly</h4>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Nickel & Lead Free</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem' }}>📦</span>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', marginBottom: '0.2rem' }}>Secure Shipping</h4>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Insured Delivery</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem' }}>💬</span>
                            <div>
                                <h4 style={{ fontSize: '0.8rem', marginBottom: '0.2rem' }}>Expert Support</h4>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Via WhatsApp</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
