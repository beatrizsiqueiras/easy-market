import { useEffect, useState } from 'react';
import api from '../services/api';

export const useDashboardManagement = () => {
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalCategories, setTotalCategories] = useState(0);
    const [ordersChartData, setOrdersChartData] = useState(undefined);
    const [error, setError] = useState(0);

    useEffect(() => {
        const getQuantityProducts = async () => {
            try {
                const response = await api.get('/dashboard.php', {
                    params: {
                        action: 'products',
                    },
                });

                if (response.data.error) {
                    setError(response.data.error);
                    return;
                }

                setTotalProducts(response.data);
            } catch (error) {
                setError(error);
            }
        };
        getQuantityProducts();
    }, []);

    useEffect(() => {
        const getQuantityOrders = async () => {
            try {
                const response = await api.get('/dashboard.php', {
                    params: {
                        action: 'orders',
                    },
                });

                if (response.data.error) {
                    setError(response.data.error);
                    return;
                }

                setTotalOrders(response.data);
            } catch (error) {
                setError(error);
            }
        };
        getQuantityOrders();
    }, []);

    useEffect(() => {
        const getQuantityCategories = async () => {
            try {
                const response = await api.get('/dashboard.php', {
                    params: {
                        action: 'categories',
                    },
                });

                if (response.data.error) {
                    setError(response.data.error);
                    return;
                }

                setTotalCategories(response.data);
            } catch (error) {
                setError(error);
            }
        };
        getQuantityCategories();
    }, []);

    useEffect(() => {
        const getOrdersChartData = async () => {
            try {
                const response = await api.get('/dashboard.php', {
                    params: {
                        action: 'orderChart',
                    },
                });

                if (response.data.error) {
                    setError(response.data.error);
                    return;
                }

                setOrdersChartData(response.data);
            } catch (error) {
                setError(error);
            }
        };
        getOrdersChartData();
    }, []);

    return {
        totalOrders,
        totalProducts,
        totalCategories,
        ordersChartData,
    };
};
