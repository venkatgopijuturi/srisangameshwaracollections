import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Register = ({ onNavigate }) => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        address: '',
        postcode: '',
        state: 'Tamil Nadu'
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const success = await register(formData);
        setIsLoading(false);
        if (success) onNavigate('home');
    };

    return (
        <div className="register-page slide-up" style={{
            padding: '6rem 10%',
            background: 'var(--bg-main)',
            minHeight: '100vh'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', gap: '6rem', flexWrap: 'wrap' }}>
                <main style={{ flex: '1.5', minWidth: '350px' }}>
                    <div className="breadcrumb" style={{ fontSize: '0.7rem', color: 'var(--text-ultra-muted)', marginBottom: '3rem', letterSpacing: '2px' }}>
                        HOME / ACCOUNT / REGISTER
                    </div>

                    <h1 style={{
                        fontFamily: 'Cormorant Garamond, serif',
                        fontSize: '3rem',
                        color: 'var(--text-main)',
                        marginBottom: '3rem'
                    }}>Create Account</h1>

                    <div style={{ marginBottom: '4rem' }}>
                        <button style={{
                            width: '100%',
                            background: 'white',
                            color: 'var(--text-main)',
                            border: '1px solid var(--border-light)',
                            padding: '1.2rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                            fontWeight: '500',
                            cursor: 'pointer',
                            fontFamily: 'Poppins, sans-serif'
                        }}>
                            <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" style={{ width: '18px' }} />
                            Sign up with Google
                        </button>
                        <p style={{ fontSize: '0.85rem', marginTop: '1.5rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                            Already have an account? <span style={{ color: 'var(--primary-gold)', cursor: 'pointer', fontWeight: '600' }} onClick={() => onNavigate('login')}>Log In Here.</span>
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="register-form" style={{ display: 'grid', gap: '2rem' }}>
                        <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem' }}>
                            <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-main)', textTransform: 'uppercase' }}>Personal Details</h4>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="form-group">
                                <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Full Name *</label>
                                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="John Doe" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Mobile No *</label>
                                <input name="mobile" value={formData.mobile} onChange={handleChange} type="text" placeholder="+91 XXXX XXX XXX" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>E-Mail Address *</label>
                            <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }} />
                        </div>

                        <div style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '1rem', marginTop: '2rem' }}>
                            <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-main)', textTransform: 'uppercase' }}>Shipping Address</h4>
                        </div>

                        <div className="form-group">
                            <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Street Address *</label>
                            <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Door No, Building Name, Street" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }} />
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div className="form-group">
                                <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Post Code *</label>
                                <input name="postcode" value={formData.postcode} onChange={handleChange} type="text" placeholder="600001" required style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>State *</label>
                                <select name="state" value={formData.state} onChange={handleChange} style={{ width: '100%', padding: '1rem', border: '1px solid var(--border-light)', background: 'var(--bg-tertiary)', fontFamily: 'Poppins, sans-serif' }}>
                                    <option>Tamil Nadu</option>
                                    <option>Karnataka</option>
                                    <option>Kerala</option>
                                </select>
                            </div>
                        </div>

                        <button disabled={isLoading} className="buy-now-btn" style={{ marginTop: '2rem', padding: '1.2rem' }}>
                            {isLoading ? 'CREATING ACCOUNT...' : 'CONTINUE TO SECURE CHECKOUT'}
                        </button>
                    </form>
                </main>

                <aside style={{ flex: '0.5', minWidth: '250px' }}>
                    <div style={{
                        border: '1px solid var(--border-light)',
                        padding: '3rem 2rem',
                        background: 'var(--bg-tertiary)',
                        position: 'sticky',
                        top: '160px'
                    }}>
                        <h4 style={{
                            fontSize: '0.8rem',
                            letterSpacing: '2px',
                            marginBottom: '2rem',
                            color: 'var(--text-main)',
                            textAlign: 'center'
                        }}>RETAIL BENEFITS</h4>
                        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                            {[
                                'Express Global Logistics',
                                'Hallmark Purity Certification',
                                'Personal Concierge Service',
                                'Insured Pan-India Shipping',
                                'Exclusive Reward Program'
                            ].map(benefit => (
                                <li key={benefit} style={{
                                    padding: '1.2rem 0',
                                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                                    color: 'var(--text-muted)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem'
                                }}>
                                    <span style={{ color: 'var(--primary-gold)' }}>✓</span> {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default Register;
