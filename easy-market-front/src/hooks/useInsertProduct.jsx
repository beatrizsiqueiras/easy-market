import { useState, useEffect, useReducer } from "react";
import { database } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore"; //tables on firebase are called "collection"

const initialState = {
    loading: null,
    error: null,
};

const insertReducer = (state, action) => {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "INSERTED_DOC":
            return { loading: false, error: null };
        case "ERROR":
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const useInsertProduct = () => {
    const [response, dispatch] = useReducer(insertReducer, initialState);
    const [cancelled, setCancelled] = useState(false);

    const checkIfCancelBeforeDispatch = (action) => {
        if (!cancelled) {
            dispatch(action);
        }
    };

    const insertDocument = async (document) => {
        checkIfCancelBeforeDispatch({ type: "LOADING" });
        api.post("/product.php", {
            name: data.name,
            category: data.category,
            unitary_value: data.unitaryValue,
            available_quantity: data.quantity
        })
            .then((response) => {
                let token = response.data["token"];
                if (token) {
                    setAuth(token);
                }
            })
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

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { insertDocument, response };
};
