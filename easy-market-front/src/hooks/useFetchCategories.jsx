import { useState, useEffect } from "react";
import api from "../services/api";

export const useFetchCategories = () => {
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
            setLoading(true);

            try {
                const response = await api.get("/category.php");
                setLoading(false);
                setCategories(response.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
                setLoading(false);
            }
        };

        loadCategories();
    }, []);

    return { categories, loading, error };
};
