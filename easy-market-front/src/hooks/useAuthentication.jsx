import { useState } from 'react';

import api from '../services/api';
import { useAuthValue } from '../context/AuthContext';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [auth, setAuth] = useAuthValue({});
    const [loading, setLoading] = useState(null);

    const createUser = async (data) => {
        setLoading(true);
        setError(null);

        api.post('/user.php', {
            action: 'create',
            data: {
                login: data.name,
                login: data.userLogin,
                password: data.password,
            },
        })
            .then((response) => {})
            .catch((err) => {
                let systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde!';
                let errorOptions = [
                    {
                        error: 'user-not-found',
                        message: 'Usuário não encontrado!',
                    },
                    {
                        error: 'wrong-password',
                        message: 'Senha incorreta, tente novamente!',
                    },
                ];
                errorOptions.map((errorOption) => {
                    if (error.message.includes(errorOption.error)) {
                        systemErrorMessage = errorOption.message;
                    }
                });
                setLoading(false);
                setError(systemErrorMessage);
            });
    };

    const logout = () => {
        // signOut(auth);
    };

    const login = async (data) => {
        try {
            setLoading(true);
            setError(false);

            const response = await api.post('/user.php', {
                action: 'login',
                data: {
                    login: data.userLogin,
                    password: data.password,
                },
            });

            let { user } = response.data;
            
            let token = user.token;
            if (token) {
                setAuth(user);
            }
        } catch (error) {
            let systemErrorMessage = 'An error ocurred!';
            let errorOptions = [
                {
                    error: 'user-not-found',
                    message: 'User not found!',
                },
                {
                    error: 'wrong-password',
                    message: 'Wrong password, try again!',
                },
            ];

            errorOptions.forEach((errorOption) => {
                if (error.message.includes(errorOption.error)) {
                    systemErrorMessage = errorOption.message;
                }
            });

            setLoading(false);
            setError(systemErrorMessage);
        }
    };

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};
