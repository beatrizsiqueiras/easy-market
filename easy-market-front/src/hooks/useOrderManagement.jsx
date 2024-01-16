import { useEffect, useState } from 'react';
import api from '../services/api';

export const useOrderManagement = () => {
    const [orderProducts, setOrderProducts] = useState([]);
    const [selectedProductsIds, setSelectedProductsIds] = useState([]);
    const [orderTaxes, setOrderTaxes] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);
    const [error, setError] = useState(null);
    const [insertedOrder, setInsertedOrder] = useState(false);

    useEffect(() => {
        let taxes = 0;
        let total = 0;

        orderProducts.forEach((product) => {
            taxes += calculateProductTotalTaxAmount(product);
            total += parseFloat(product.subtotal);
        });

        setOrderTaxes(taxes.toFixed(2));
        setTotalOrder(total.toFixed(2));
    }, [orderProducts]);

    const calculateProductTotalTaxAmount = (product) => {
        const taxPercentage = parseFloat(product.tax_percentage);
        const selectedQuantity = parseInt(product.selectedQuantity);

        if (isNaN(taxPercentage) || isNaN(selectedQuantity)) {
            return 0;
        }

        const total = taxPercentage * selectedQuantity;
        return total;
    };

    const productSubTotalCalculator = (product, quantity) => {
        const subtotal =
            product.unitary_value * quantity +
            ((product.unitary_value * product.tax_percentage) / 100) * quantity;

        return subtotal.toFixed(2);
    };

    const handleAddProductToOrder = (product) => {
        const inititalQuantity = 1;
        const initialSubtotal = productSubTotalCalculator(product, inititalQuantity);

        setOrderProducts((prevOrderProducts) => [
            ...prevOrderProducts,
            { ...product, subtotal: initialSubtotal, selectedQuantity: inititalQuantity },
        ]);
        setSelectedProductsIds([...selectedProductsIds, product.id]);
    };

    const handleSubTotalValue = (product, quantity) => {
        const subtotal = productSubTotalCalculator(product, quantity);

        setOrderProducts((prevOrderProducts) => {
            const updatedProducts = prevOrderProducts.map((prevProduct) => {
                if (prevProduct.id === product.id) {
                    prevProduct.subtotal = subtotal;
                    prevProduct.selectedQuantity = quantity;
                    return prevProduct;
                }
                return prevProduct;
            });

            return updatedProducts;
        });
    };

    const handleRemoveSelectedProduct = (product) => {
        setOrderProducts((prevOrderProducts) => {
            const updatedProducts = prevOrderProducts.filter(
                (prevProduct) => prevProduct.id !== product.id
            );
            return updatedProducts;
        });
        setSelectedProductsIds((prevSelectedProducts) => {
            const isProductSelected = prevSelectedProducts.includes(product.id);

            if (isProductSelected) {
                const updatedProducts = prevSelectedProducts.filter(
                    (selectedProductId) => selectedProductId !== product.id
                );
                return updatedProducts;
            }
        });
    };

    const handleSubmitOrder = async () => {
        try {
            const response = await api.post('/order.php', {
                orderProducts,
                order: {
                    total: totalOrder,
                    total_taxes: orderTaxes,
                },
            });
            
            if (response.data.error) {
                setError(response.data.error);
                return;
            }

            setInsertedOrder(true);
        } catch (error) {
            setError(error);
        }
    };

    return {
        orderProducts,
        selectedProductsIds,
        totalOrder,
        orderTaxes,
        error,
        insertedOrder,
        handleAddProductToOrder,
        handleSubTotalValue,
        handleRemoveSelectedProduct,
        handleSubmitOrder,
    };
};
