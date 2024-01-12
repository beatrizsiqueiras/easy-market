import { useState, useEffect } from "react";

import { AuthProvider } from "../context/AuthContext";

import api from "../services/api";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [auth, setAuth] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    function checkIfCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfCancelled();
        setLoading(true);
        setError(null);

        api.post("/user.php", {
            action: "create",
            data: {
                login: data.name,
                login: data.userLogin,
                password: data.password,
            },
        })
            .then((response) => {})
            .catch((err) => {
                let systemErrorMessage =
                    "Ocorreu um erro, por favor tente mais tarde!";
                let errorOptions = [
                    {
                        error: "user-not-found",
                        message: "Usuário não encontrado!",
                    },
                    {
                        error: "wrong-password",
                        message: "Senha incorreta, tente novamente!",
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
        checkIfCancelled();
        // signOut(auth);
    };

    const login = async (data) => {
        try {
            checkIfCancelled();
            setLoading(true);
            setError(false);

            const response = await api.post("/user.php", {
                action: "login",
                data: {
                    login: data.userLogin,
                    password: data.password,
                },
            });

            let user = response.data;
            let token = user.token;
            if (token) {
                return token;
            }
        } catch (error) {
            let systemErrorMessage =
                "Ocorreu um erro, por favor tente mais tarde!";
            let errorOptions = [
                {
                    error: "user-not-found",
                    message: "Usuário não encontrado!",
                },
                {
                    error: "wrong-password",
                    message: "Senha incorreta, tente novamente!",
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

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};
