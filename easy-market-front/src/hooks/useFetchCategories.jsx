import { useState, useEffect } from 'react';
import api from '../services/api';

export const useFetchCategories = () => {
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const loadCategories = async () => {
            setIsLoading(true);

            try {
                const response = await api.get('/category.php');
                setCategories(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadCategories();
    }, []);

    return { categories, isLoading, error };
};
