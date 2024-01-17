import React from 'react';
import { useFetchOrderProducts } from '../../hooks/useFetchOrderProducts';
import Table from 'react-bootstrap/Table';
import PulseLoader from 'react-spinners/ClipLoader';

const ListOrderProducts = ({ orderId }) => {
    const { orderProducts, isProductsLoading, error } = useFetchOrderProducts(orderId);
    return (
        <div>
            <Table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Un.Value</th>
                    <th>Tax %</th>
                </thead>
                <tbody>
                    <PulseLoader color='#36d7b7' loading={isProductsLoading} />
                    {!orderProducts && (
                        <tr>
                            <td colSpan={6}>
                                <p style={{ textAlign: 'center', fontSize: '20px' }}>
                                    Any products here :/
                                </p>
                            </td>
                        </tr>
                    )}
                    {orderProducts &&
                        orderProducts.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>R$ {product.unitary_value}</td>
                                <td>{product.tax_percentage}%</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ListOrderProducts;
