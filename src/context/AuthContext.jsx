import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem('ss_user');
        return saved ? JSON.parse(saved) : null;
    });

    const login = (email) => {
        // Mock login for now
        const mockUser = { email, name: email.split('@')[0], role: 'customer' };
        setUser(mockUser);
        localStorage.setItem('ss_user', JSON.stringify(mockUser));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('ss_user');
    };

    const register = (userData) => {
        // Mock register
        const newUser = { ...userData, role: 'customer' };
        setUser(newUser);
        localStorage.setItem('ss_user', JSON.stringify(newUser));
        return true;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};
