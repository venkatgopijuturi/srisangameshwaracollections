import React from 'react';
import ProductCard from '../components/ProductCard';
import { useWishlist } from '../context/WishlistContext';

const Wishlist = ({ onNavigate }) => {
    const { wishlist } = useWishlist();

    return (
        <div className="wishlist-page slide-up" style={{ padding: '4rem 10%', minHeight: '80vh' }}>
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{
                    fontSize: '3.5rem',
                    fontFamily: 'Cormorant Garamond, serif',
                    color: 'var(--text-main)',
                    marginBottom: '1rem'
                }}>My Wishlist</h1>
                <p style={{ color: 'var(--text-muted)' }}>
                    {wishlist.length > 0
                        ? `You have ${wishlist.length} item${wishlist.length > 1 ? 's' : ''} saved in your wishlist.`
                        : "Your wishlist is currently empty. Explore our collections to find something you love!"}
                </p>
            </div>

            {wishlist.length > 0 ? (
                <div className="product-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '4rem'
                }}>
                    {wishlist.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <button
                        className="buy-now-btn"
                        style={{ width: 'auto', padding: '1rem 30px' }}
                        onClick={() => onNavigate('home')}
                    >
                        GO SHOPPING →
                    </button>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
