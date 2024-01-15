import { createContext, useState, useEffect } from 'react';
import api from '../services/api';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [signed, setSigned] = useState(false);

    useEffect(() => {
        const loadingStorageData = async () => {
            const storageUser = localStorage.getItem('@Auth:user');
            const storageToken = localStorage.getItem('@Auth:token');

            if (storageToken && storageUser) {
                setUser(storageUser);
                setSigned(true);
            }
        };
        loadingStorageData();
    }, []);

    const signIn = async ({ login, password }) => {
        try {
            const response = await api.post('/user.php', {
                action: 'login',
                data: {
                    login,
                    password,
                },
            });

            if (response.data.error) {
                setError(response.data.error);
                return;
            }

            setUser(response.data);
            setSigned(true);

            api.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;

            localStorage.setItem('@Auth:token', JSON.stringify(response.data.token));
            localStorage.setItem('@Auth:user', JSON.stringify(response.data));
        } catch (error) {
            setError(error);
            return;
        }
    };

    const signOut = () => {
        localStorage.clear();
        setUser(null);
        setSigned(false);
    };
    return (
        <AuthContext.Provider value={{ user, signed, signIn, error, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}
