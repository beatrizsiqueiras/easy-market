import { useState, useEffect } from "react";

import api from "../services/api";

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    const [cancelled, setCancelled] = useState(false);

    function checkIfCancelled() {
        if (cancelled) {
            return;
        }
    }

    // const createUser = async (data) => {
    //     checkIfCancelled();
    //     setLoading(true);
    //     setError(null);

    //     try {
    //         useEffect(() => {
    //             api.post("user.php", {
    //                 name: data.name,
    //                 login: data.login,
    //                 password: data.password,
    //             })
    //                 .then((response) => setUser(response.data))
    //                 .catch((err) => {
    //                     console.error("ops! ocorreu um erro" + err);
    //                 });
    //         }, []);

    //         setLoading(false);

    //         return user;
    //     } catch (error) {
    //         let systemErrorMessage =
    //             "Ocorreu um erro, por favor tente mais tarde!";
    //         let errorOptions = [
    //             {
    //                 error: "Password",
    //                 message: "A senha precisa conter pelo menos 6 caracteres!",
    //             },
    //             {
    //                 error: "email-already",
    //                 message: "Este login já está cadastrado na plataforma!",
    //             },
    //         ];
    //         errorOptions.map((errorOption) => {
    //             if (error.message.includes(errorOption.error)) {
    //                 systemErrorMessage = errorOption.message;
    //             }
    //         });
    //         setLoading(false);
    //         setError(systemErrorMessage);
    //     }
    // };

    // const logout = () => {
    //     checkIfCancelled();
    //     signOut(auth);
    // };

    const login = async (data) => {
        checkIfCancelled();
        setLoading(true);
        setError(false);
        try {
            api.post("/user.php", {
                login: data.userLogin,
                password: data.password,
            })
                .then((response) => response.data)
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err);
                });
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
            errorOptions.map((errorOption) => {
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
        // auth,
        // createUser,
        // error,
        loading,
        // logout,
        login,
    };
};
