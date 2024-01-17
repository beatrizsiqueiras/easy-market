import { useState, useEffect } from 'react';
import api from '../services/api';

export const useFetchOrderProducts = (orderId) => {
    console.log(orderId);
    const [orderProducts, setOrderProducts] = useState(null);
    const [error, setError] = useState(null);
    const [isProductsLoading, setIsProductsLoading] = useState(null);

    useEffect(() => {
        const loadOrderProducts = async () => {
            setIsProductsLoading(true);
            try {
                const response = await api.get('/orderProducts.php', {
                    params: { order: orderId },
                });
                setOrderProducts(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsProductsLoading(false);
            }
        };

        loadOrderProducts();
    }, [orderId]);

    return { orderProducts, isProductsLoading, error };
};
