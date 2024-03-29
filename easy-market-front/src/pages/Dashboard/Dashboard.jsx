import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { PiShoppingCartSimpleFill, PiListDashesFill } from 'react-icons/pi';
import { GiCardboardBoxClosed } from 'react-icons/gi';

import styles from './Dashboard.module.css';
import OrderChart from '../../components/OrderChart/OrderChart';
import { Link } from 'react-router-dom';
import { useDashboardManagement } from '../../hooks/useDashboardManagement';

const Dashboard = () => {
    const { totalOrders, totalProducts, totalCategories, ordersChartData } =
        useDashboardManagement();

    return (
        <>
            <Container>
                <Stack gap={3}>
                    <div className='p-2'>
                        <Row>
                            <Col>
                                <Link to='/order/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title className={styles.card_title}>
                                                {totalOrders}
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: '15px',
                                                        }}
                                                        md={6}
                                                    >
                                                        Orders
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: 'end',
                                                        }}
                                                    >
                                                        <PiShoppingCartSimpleFill
                                                            className={styles.card_icon}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer className={styles.card_footer}>
                                                ORDER +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/product/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title className={styles.card_title}>
                                                {totalProducts}
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: '15px',
                                                        }}
                                                        md={6}
                                                    >
                                                        Products
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: 'end',
                                                        }}
                                                    >
                                                        <GiCardboardBoxClosed
                                                            className={styles.card_icon}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer className={styles.card_footer}>
                                                PRODUCT +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>

                            <Col>
                                <Link to='/category/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title className={styles.card_title}>
                                                {totalCategories}
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: '15px',
                                                        }}
                                                        md={6}
                                                    >
                                                        Categories
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: 'end',
                                                        }}
                                                    >
                                                        <PiListDashesFill
                                                            className={styles.card_icon}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer className={styles.card_footer}>
                                                CATEGORY +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className='p-2'>
                        <Col style={{ textAlign: 'center' }} className='mt-2'>
                            <p>Orders</p>
                        </Col>
                        <Col
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                textAlign: 'center',
                            }}
                        >
                            <OrderChart ordersChartData={ordersChartData} />
                        </Col>
                    </div>
                </Stack>
            </Container>
        </>
    );
};

export default Dashboard;
