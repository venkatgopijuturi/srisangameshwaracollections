import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = ({ onNavigate }) => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const success = await login(email, password);
        setIsLoading(false);
        if (success) onNavigate('home');
    };

    return (
        <div className="login-page slide-up" style={{
            padding: '8rem 10%',
            display: 'flex',
            gap: '8rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            background: 'var(--bg-main)'
        }}>
            <div className="new-customer" style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}>
                <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    color: 'var(--text-main)',
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '1.5rem',
                    marginBottom: '2rem'
                }}>New Customer</h3>
                <p style={{
                    marginBottom: '3rem',
                    color: 'var(--text-muted)',
                    lineHeight: '1.8',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    Register for a free account to experience faster checkout,
                    track your orders, and receive exclusive access to our 1-gram gold collections.
                </p>
                <button
                    className="buy-now-btn"
                    style={{ width: '100%', padding: '1.2rem' }}
                    onClick={() => onNavigate('register')}
                >
                    CREATE ACCOUNT →
                </button>
            </div>

            <div className="login-form-container" style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}>
                <h3 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '2rem',
                    color: 'var(--text-main)',
                    borderBottom: '1px solid var(--border-light)',
                    paddingBottom: '1.5rem',
                    marginBottom: '2rem'
                }}>Sign In</h3>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div className="form-group">
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>E-Mail Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--border-light)',
                                background: 'var(--bg-tertiary)',
                                fontFamily: 'Poppins, sans-serif',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <label style={{ fontSize: '0.7rem', color: 'var(--text-muted)', letterSpacing: '1px', textTransform: 'uppercase', display: 'block', marginBottom: '0.8rem' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                            style={{
                                width: '100%',
                                padding: '1rem',
                                border: '1px solid var(--border-light)',
                                background: 'var(--bg-tertiary)',
                                fontFamily: 'Poppins, sans-serif',
                                outline: 'none'
                            }}
                        />
                    </div>
                    <a href="#" style={{ fontSize: '0.8rem', color: 'var(--primary-gold)', textAlign: 'right', textDecoration: 'none', fontWeight: '500' }}>Forgot Password?</a>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="buy-now-btn"
                        style={{ width: '100%', padding: '1.2rem', marginTop: '1rem' }}
                    >
                        {isLoading ? 'SIGNING IN...' : 'LOGIN →'}
                    </button>

                    <div style={{ textAlign: 'center', margin: '2rem 0', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-ultra-muted)', letterSpacing: '2px' }}>OR</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border-light)' }}></div>
                    </div>

                    <button type="button" style={{
                        width: '100%',
                        padding: '1.1rem',
                        background: 'white',
                        color: 'var(--text-main)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        fontFamily: 'Poppins, sans-serif',
                        transition: '0.3s'
                    }} className="btn-google-hover">
                        <img src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" alt="Google" style={{ width: '18px' }} />
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
