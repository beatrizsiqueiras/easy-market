import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { PiTrash } from 'react-icons/pi';
import styles from './Order.module.css';
import { Link } from 'react-router-dom';
import { useFetchOrders } from '../../hooks/useFetchOrders';
import PulseLoader from 'react-spinners/ClipLoader';
import ModalListProducts from '../../components/Modal/ModalListProducts';

const Order = () => {
    const { orders, isLoading } = useFetchOrders();

    const [showModalProducts, setShowModalProducts] = useState(false);
    const [orderIdTemporary, setOrderIdTemporary] = useState(null);

    const handleClose = () => setShowModalProducts(false);

    const handleShowModalOrderProducts = (id) => {
        setOrderIdTemporary(id);
        setShowModalProducts(true);
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className={styles.add_order_div}>
                        <Link className={styles.add_order_btn} to='/order/new'>
                            <TbShoppingCartPlus />
                        </Link>
                    </Col>
                </Row>
                <Col md={12} className='mt-3'>
                    <h3 className='mb-4'>Orders</h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Products</th>
                                <th>Total</th>
                                <th>Total Taxes</th>
                                <th>Taxes %</th>
                                <th>Date/Time</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <PulseLoader color='#36d7b7' loading={isLoading} />
                            {!orders && (
                                <tr>
                                    <td colSpan={6}>
                                        <p style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Any orders here :/
                                        </p>
                                    </td>
                                </tr>
                            )}
                            {orders &&
                                orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>
                                            <Button
                                                onClick={() => {
                                                    handleShowModalOrderProducts(order.id);
                                                }}
                                                variant='light'
                                            >
                                                See products
                                            </Button>
                                        </td>
                                        <td>R$ {order.total}</td>
                                        <td>R$ {order.total_taxes}</td>
                                        <td>{order.taxes} %</td>
                                        <td>
                                            {order.created_at_date} - {order.created_at_time}
                                        </td>
                                        <td>
                                            <Button
                                                className={styles.btn_action}
                                                variant='light'
                                                style={{
                                                    background: '#f78154 ',
                                                    color: '#FFF',
                                                }}
                                            >
                                                <PiTrash />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
            {showModalProducts && orderIdTemporary && (
                <ModalListProducts
                    show={showModalProducts}
                    handleClose={handleClose}
                    orderId={orderIdTemporary}
                />
            )}
        </div>
    );
};

export default Order;
