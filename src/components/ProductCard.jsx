import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, title, price, oldPrice, image } = product;
    const { toggleWishlist, isInWishlist } = useWishlist();

    const isWished = isInWishlist(id);
    const savings = oldPrice ? parseInt(oldPrice.replace(/,/g, '')) - parseInt(price.replace(/,/g, '')) : null;

    return (
        <div className="product-card">
            {/* Image Section */}
            <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product-image-container">
                    <div className="luxury-shine"></div>

                    {/* Badge */}
                    <div className="product-badge" style={{
                        left: '0.75rem',
                        background: 'rgba(255, 255, 255, 0.92)',
                        color: 'var(--primary-gold-dark)',
                        border: '1px solid rgba(212, 175, 55, 0.15)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        BIS 916 HALLMARKED
                    </div>

                    {image ? (
                        <img src={image} alt={title} className="product-image" />
                    ) : (
                        <div className="product-image-placeholder">
                            <span style={{ fontSize: '2.5rem', opacity: 0.15 }}>✦</span>
                        </div>
                    )}

                    {/* Hover Overlay — Quick Action */}
                    <div className="product-image-overlay">
                        <a
                            className="quick-inquire-btn"
                            href={`https://wa.me/919014192002?text=Hi, I am interested in ${title}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382C17.112 14.202 15.344 13.332 15.013 13.237C14.682 13.142 14.441 13.095 14.2 13.455C13.959 13.815 13.272 14.63 13.062 14.885C12.852 15.14 12.642 15.17 12.282 14.99C11.922 14.81 10.762 14.43 9.387 13.205C8.307 12.242 7.579 11.055 7.369 10.695C7.159 10.335 7.346 10.138 7.527 9.958C7.688 9.797 7.886 9.542 8.066 9.332C8.246 9.122 8.306 8.972 8.426 8.732C8.546 8.492 8.486 8.282 8.396 8.102C8.306 7.922 7.625 6.242 7.346 5.567C7.073 4.909 6.797 4.997 6.602 5.002L6.002 5.002C5.792 5.002 5.451 5.084 5.166 5.394C4.881 5.704 4.07 6.464 4.07 8.009C4.07 9.554 5.196 11.05 5.361 11.275C5.526 11.5 7.628 14.735 10.849 16.126C13.566 17.085 14.372 17.042 15.011 16.947C15.727 16.84 17.218 16.045 17.533 15.16C17.848 14.275 17.848 13.51 17.758 13.36C17.668 13.21 17.472 13.12 17.112 12.94" />
                            </svg>
                            INQUIRE
                        </a>
                    </div>
                </div>
            </Link>

            {/* Wishlist Heart */}
            <div
                className={`product-wishlist-toggle ${isWished ? 'active' : ''}`}
                onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                }}
                style={{ cursor: 'pointer' }}
            >
                {isWished ? '❤️' : '♡'}
            </div>

            {/* Product Info */}
            <div className="product-info-refined">
                <Link to={`/product/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name-modern">{title}</h3>
                </Link>

                <div className="product-price-modern">
                    <span className="price-new-modern">₹{price}</span>
                    {oldPrice && (
                        <>
                            <span className="price-old-modern">₹{oldPrice}</span>
                            {savings > 0 && <span className="price-save">SAVE ₹{savings.toLocaleString()}</span>}
                        </>
                    )}
                </div>

                <div className="product-action-refined">
                    <a
                        className="buy-now-btn"
                        href={`https://wa.me/919014192002?text=Hi, I am interested in ${title} - ₹${price}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        INQUIRE NOW
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
