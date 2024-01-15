import { useEffect, useState } from 'react';
import api from '../services/api';

export const useFetchProducts = () => {
    const [products, setProducts] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const loadProducts = async () => {
            setIsLoading(true);

            try {
                const response = await api.get('/product.php');
                setProducts(response.data);
            } catch (error) {
                console.log(error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadProducts();
    }, []);

    return { products, isLoading, error };
};
