import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import styles from "./NewOrder.module.css";
import { useFetchProducts } from "../../hooks/useFetchProducts";

const NewOrder = () => {
    const { products } = useFetchProducts();
    const [orderProducts, setOrderProducts] = useState([]);

    const handleAddProductToOrder = (product) => {
        setOrderProducts((prevOrderProducts) => [
            ...prevOrderProducts,
            product,
        ]);
    };

    const handleSubTotalValue = (product, quantity) => {
        const subtotal =  parseFloat(product.unitary_value) * quantity;
        setOrderProducts((prevOrderProducts) => {
            const updatedProducts = prevOrderProducts.map((prevProduct) => {
                if (prevProduct.id === product.id) {
                    return {
                        ...prevProduct,
                        subtotal: subtotal,
                    };
                }
                return prevProduct;
            });
            return updatedProducts;
        });
    };

    return (
        <Container fluid>
            <Col md={12} className='mt-3 mb-5'>
                <h2>
                    New <strong>Order</strong>
                </h2>
            </Col>

            <Col md={12}>
                <Row>
                    <Col md={5} className={styles.card}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>Products list</Card.Title>
                                <Card.Text className={styles.card_body}>
                                    <ListGroup variant='flush'>
                                        {products &&
                                            products.map((product) => (
                                                <button
                                                    key={product.id}
                                                    onClick={() => {
                                                        handleAddProductToOrder(
                                                            product
                                                        );
                                                    }}
                                                >
                                                    <ListGroup.Item>
                                                        <Col
                                                            className={
                                                                styles.products_row
                                                            }
                                                            md={12}
                                                        >
                                                            <Row>
                                                                <Col md={2}>
                                                                    <p>
                                                                        {
                                                                            product.id
                                                                        }
                                                                    </p>
                                                                </Col>
                                                                <Col md={6}>
                                                                    <p>
                                                                        {
                                                                            product.product
                                                                        }
                                                                        (
                                                                        {
                                                                            product.category
                                                                        }
                                                                        -
                                                                        {
                                                                            product.tax_percentage
                                                                        }
                                                                        %)
                                                                    </p>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <p>
                                                                        R$
                                                                        {
                                                                            product.unitary_value
                                                                        }
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </ListGroup.Item>
                                                </button>
                                            ))}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={7}>
                        <Card bg='light' className={styles.card}>
                            <Card.Body>
                                <Card.Title>
                                    <Col md={12}>Selected Products</Col>
                                </Card.Title>
                                <Card.Text
                                    style={{
                                        textAlign: "center",
                                    }}
                                >
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <Col
                                                md={12}
                                                style={{
                                                    fontSize: "12px",
                                                    fontWeight: "bolder",
                                                    padding: "0",
                                                    border: "0",
                                                }}
                                            >
                                                <Row>
                                                    <Col md={1}>
                                                        <p>ID</p>
                                                    </Col>
                                                    <Col md={3}>
                                                        <p>Product</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Unitary Value</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>% Taxes</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Quantity</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Subtotal</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </ListGroup.Item>

                                        {orderProducts &&
                                            orderProducts.map((product) => (
                                                <button key={product.id}>
                                                    <ListGroup.Item>
                                                        <Col
                                                            className={
                                                                styles.products_row
                                                            }
                                                            md={12}
                                                        >
                                                            <Row>
                                                                <Col md={1}>
                                                                    <p>
                                                                        {
                                                                            product.id
                                                                        }
                                                                    </p>
                                                                </Col>
                                                                <Col md={3}>
                                                                    <p>
                                                                        {
                                                                            product.product
                                                                        }
                                                                    </p>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <p>
                                                                        R$
                                                                        {
                                                                            product.unitary_value
                                                                        }
                                                                    </p>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <p>
                                                                        {
                                                                            product.tax_percentage
                                                                        }
                                                                        %
                                                                    </p>
                                                                </Col>
                                                                <Col md={2}>
                                                                    <input
                                                                        style={{
                                                                            width: "35px",
                                                                        }}
                                                                        type='number'
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            handleSubTotalValue(
                                                                                product,  e.target.value
                                                                            )
                                                                        }
                                                                    />
                                                                </Col>
                                                                <Col md={2}>
                                                                    <p>
                                                                        {
                                                                            product.unitary_value
                                                                        }
                                                                    </p>
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </ListGroup.Item>
                                                </button>
                                            ))}
                                    </ListGroup>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='mt-5'>
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
                                    style={{ fontSize: "40px", padding: "0" }}
                                >
                                    <p>R$ 3,00</p>
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
                                    style={{ fontSize: "40px", padding: "0" }}
                                >
                                    <p>R$ 23,00</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col md={12} className='mt-4'>
                <Col className='d-flex justify-content-end'>
                    <Button variant='info'> Register</Button>
                </Col>
            </Col>
        </Container>
    );
};

export default NewOrder;
