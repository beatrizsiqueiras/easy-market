import { useState } from 'react';
import api from '../services/api';

export const useDeleteCategory = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const deleteCategory = async (id) => {
        setIsLoading(true);
        
        try {
            const response = await api.delete(`/category.php?id=${id}`, {
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

    return { deleteCategory, isLoading, error };
};
