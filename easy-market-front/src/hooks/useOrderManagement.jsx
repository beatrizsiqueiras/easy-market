import { useEffect, useState } from 'react';
import api from '../services/api';
import { PiArrowSquareInLight } from 'react-icons/pi';

export const useOrderManagement = () => {
    const [orderProducts, setOrderProducts] = useState([]);
    const [selectedProductsIds, setSelectedProductsIds] = useState([]);
    const [orderTaxes, setOrderTaxes] = useState(0);
    const [totalOrder, setTotalOrder] = useState(0);
    const [error, setError] = useState(null);
    const [insertedOrder, setInsertedOrder] = useState(false);
    const [totalTaxes, setTotalTaxes] = useState(0);

    useEffect(() => {
        let taxes = 0;
        let total = 0;
        let taxValue = 0;

        orderProducts.forEach((product) => {
            taxValue += calculateTotalAmoutOfTaxes(product);
            taxes += calculateProductsTotalTaxAmount(product);
            total += parseFloat(product.subtotal);
        });

        setOrderTaxes(taxes.toFixed(2));
        setTotalOrder(total.toFixed(2));
        setTotalTaxes(taxValue.toFixed(2));
    }, [orderProducts]);

    const calculateTotalAmoutOfTaxes = (product) => {
        const taxPercentage = parseFloat(product.tax_percentage);
        const unitaryValue = parseFloat(product.unitary_value);
        const selectedQuantity = parseInt(product.selectedQuantity);

        if (isNaN(taxPercentage) || isNaN(selectedQuantity) || isNaN(unitaryValue)) {
            return 0;
        }

        const total = unitaryValue * (taxPercentage / 100) * selectedQuantity;
        return total;
    };

    const calculateProductsTotalTaxAmount = (product) => {
        const taxPercentage = parseFloat(product.tax_percentage);
        const selectedQuantity = parseInt(product.selectedQuantity);

        if (isNaN(taxPercentage) || isNaN(selectedQuantity)) {
            return 0;
        }

        const total = taxPercentage * selectedQuantity;
        return total;
    };

    const productSubTotalCalculator = (product, quantity) => {
        const taxPercentage = parseFloat(product.tax_percentage);
        const unitaryValue = parseFloat(product.unitary_value);
        const quantityInt = parseInt(quantity);

        const subtotal =
            unitaryValue * quantityInt + unitaryValue * (taxPercentage / 100) * quantityInt;

        return subtotal.toFixed(2);
    };

    const handleAddProductToOrder = (product) => {
        const inititalQuantity = 1;
        const initialTotalTaxesProduct = (
            parseFloat(product.unitary_value) *
            (parseFloat(product.tax_percentage) / 100) *
            inititalQuantity
        ).toFixed(2);
        const initialSubtotal = productSubTotalCalculator(product, inititalQuantity);

        setOrderProducts((prevOrderProducts) => [
            ...prevOrderProducts,
            {
                ...product,
                subtotal: initialSubtotal,
                selectedQuantity: inititalQuantity,
                totalTaxesProduct: initialTotalTaxesProduct,
            },
        ]);
        setSelectedProductsIds([...selectedProductsIds, product.id]);
    };

    const handleSubTotalValue = (product, quantity) => {
        const subtotal = productSubTotalCalculator(product, quantity);

        setOrderProducts((prevOrderProducts) => {
            const updatedProducts = prevOrderProducts.map((prevProduct) => {
                if (prevProduct.id === product.id) {
                    prevProduct.subtotal = subtotal;
                    prevProduct.totalTaxesProduct = (
                        parseFloat(product.unitary_value) *
                        (parseFloat(product.tax_percentage) / 100) *
                        parseInt(quantity)
                    ).toFixed(2);
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
                    total_taxes: totalTaxes,
                    taxes: orderTaxes,
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
        totalTaxes,
        handleAddProductToOrder,
        handleSubTotalValue,
        handleRemoveSelectedProduct,
        handleSubmitOrder,
    };
};
