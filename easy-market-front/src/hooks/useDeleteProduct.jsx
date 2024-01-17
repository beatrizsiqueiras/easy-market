import { useState } from 'react';
import api from '../services/api';

export const useDeleteProduct = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const deleteProduct = async (id) => {
        setIsLoading(true);

        try {
            const response = await api.delete(`/product.php?id=${id}`, {
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

    return { deleteProduct, isLoading, error };
};
