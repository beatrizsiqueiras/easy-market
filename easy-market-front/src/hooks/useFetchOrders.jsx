import { useState, useEffect } from 'react';
import api from '../services/api';

export const useFetchOrders = () => {
    const [orders, setOrders] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        const loadOrders = async () => {
            setIsLoading(true);

            try {
                const response = await api.get('/order.php');
                setOrders(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        loadOrders();
    }, []);

    return { orders, isLoading, error };
};
