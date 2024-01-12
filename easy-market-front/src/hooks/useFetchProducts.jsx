import { useState, useEffect } from "react";
import api from "../services/api";

export const useFetchProducts = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);

            try {
                const response = await api.get("/product.php");
                setLoading(false);
                setProducts(response.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        };

        loadProducts();
    });

    return { products, loading, error };
};
