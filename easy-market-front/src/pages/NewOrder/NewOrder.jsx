import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/ClipLoader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import styles from './NewOrder.module.css';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import { useOrderManagement } from '../../hooks/useOrderManagement';
import { ToastContainer, toast } from 'react-toastify';
import { PiTrash } from 'react-icons/pi';
import Swal from 'sweetalert2';

const NewOrder = () => {
    const { products, isLoading } = useFetchProducts();

    const navigate = useNavigate();

    const {
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
    } = useOrderManagement();

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: 'top-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }, [error]);

    useEffect(() => {
        if (insertedOrder) {
            Swal.fire({
                title: 'Great!',
                text: 'New order inserted successfully',
                icon: 'success',
            }).then(function () {
                navigate('/order');
            });
        }
    }, [insertedOrder]);

    return (
        <Container fluid>
            <Col md={12} className='mt-3 mb-2'>
                <h2>
                    New <strong>Order</strong>
                </h2>
            </Col>

            <Col md={12}>
                <Row>
                    <Col md={6}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>Products list</Card.Title>
                                <Card.Text className={styles.table_container}>
                                    <Table className='products_table'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Unitary Value</th>
                                                <th>Available Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <PulseLoader color='#36d7b7' loading={isLoading} />
                                            {products &&
                                                products.map((product) => (
                                                    <tr
                                                        key={product.id}
                                                        onClick={() => {
                                                            if (
                                                                selectedProductsIds.includes(
                                                                    product.id
                                                                )
                                                            ) {
                                                                toast.info(
                                                                    'Product already selected',
                                                                    {
                                                                        position: 'top-right',
                                                                        autoClose: 2000,
                                                                        hideProgressBar: false,
                                                                        closeOnClick: true,
                                                                        pauseOnHover: true,
                                                                        draggable: true,
                                                                        progress: undefined,
                                                                        theme: 'light',
                                                                    }
                                                                );
                                                            } else {
                                                                handleAddProductToOrder(product);
                                                            }
                                                        }}
                                                    >
                                                        <td>{product.id}</td>
                                                        <td>{product.product}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.unitary_value}</td>
                                                        <td>{product.available_quantity}</td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <Col md={12}>Selected Products</Col>
                                </Card.Title>
                                <Card.Text className={styles.table_container}>
                                    <Table className='products_table'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Category</th>
                                                <th>Un. Value</th>
                                                <th>Tax</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orderProducts &&
                                                orderProducts.map((product) => (
                                                    <tr key={product.id}>
                                                        <td>{product.id}</td>
                                                        <td>{product.product}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.unitary_value}</td>
                                                        <td>{product.tax_percentage}%</td>
                                                        <td>
                                                            <input
                                                                className={styles.input_quantity}
                                                                type='number'
                                                                value={product.selectedQuantity}
                                                                min={1}
                                                                max={product.available_quantity}
                                                                onChange={(e) => {
                                                                    handleSubTotalValue(
                                                                        product,
                                                                        e.target.value
                                                                    );
                                                                }}
                                                            ></input>
                                                        </td>
                                                        <td>{product.subtotal}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    handleRemoveSelectedProduct(
                                                                        product
                                                                    );
                                                                }}
                                                            >
                                                                <PiTrash
                                                                    style={{
                                                                        color: '#c32f27',
                                                                    }}
                                                                />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='mt-2'>
                <Row className='justify-content-md-end'>
                    <Col sm={3}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <Col md={12}>
                                        <p>
                                            <strong>TAXES TOTAL</strong>
                                        </p>
                                    </Col>
                                </Card.Title>
                                <Card.Text
                                    className='text-end'
                                    style={{ fontSize: '40px', padding: '0' }}
                                >
                                    <p>{orderTaxes} %</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <Col md={12}>
                                        <p>
                                            <strong>TOTAL</strong>
                                        </p>
                                    </Col>
                                </Card.Title>
                                <Card.Text
                                    className='text-end'
                                    style={{ fontSize: '40px', padding: '0' }}
                                >
                                    <p>R$ {totalOrder}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='mt-2'>
                <Col className='d-flex justify-content-end'>
                    <Button
                        style={{ backgroundColor: '#7cb518', border: '0' }}
                        onClick={handleSubmitOrder}
                    >
                        Register
                    </Button>
                </Col>
            </Col>
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <ToastContainer />
        </Container>
    );
};

export default NewOrder;
