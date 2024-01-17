import { useState } from 'react';
import api from '../services/api';

export const useDeleteOrder = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const deleteOrder = async (id) => {
        setIsLoading(true);

        try {
            const response = await api.delete(`/order.php?id=${id}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { deleteOrder, isLoading, error };
};
