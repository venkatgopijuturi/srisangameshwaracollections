export const login = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email && password) {
        return {
            success: true,
            user: { email, name: email.split('@')[0], role: 'customer' }
        };
    }
    return { success: false, message: 'Invalid credentials' };
};

export const register = async (userData) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
        success: true,
        user: { ...userData, role: 'customer' }
    };
};

export const logout = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true };
};
