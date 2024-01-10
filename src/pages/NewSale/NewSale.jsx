import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import styles from "./NewSale.module.css";

const NewSale = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={7}>
                    <Card bg='light'>
                        <Card.Body>
                            <Card.Title>Lista de Produtos</Card.Title>
                            <Card.Text>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={2}>
                                                    <p>1</p>
                                                </Col>
                                                <Col md={7}>
                                                    <p>
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={3}>
                                                    <img
                                                        src='https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13604/medium/creme-dental-colgate-tripla-acao-90g_92465.png'
                                                        alt=''
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={2}>
                                                    <p>1</p>
                                                </Col>
                                                <Col md={7}>
                                                    <p>
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={3}>
                                                    <img
                                                        src='https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13604/medium/creme-dental-colgate-tripla-acao-90g_92465.png'
                                                        alt=''
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={2}>
                                                    <p>1</p>
                                                </Col>
                                                <Col md={7}>
                                                    <p>
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={3}>
                                                    <img
                                                        src='https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13604/medium/creme-dental-colgate-tripla-acao-90g_92465.png'
                                                        alt=''
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={2}>
                                                    <p>1</p>
                                                </Col>
                                                <Col md={7}>
                                                    <p>
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={3}>
                                                    <img
                                                        src='https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13604/medium/creme-dental-colgate-tripla-acao-90g_92465.png'
                                                        alt=''
                                                    />
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={5}>
                    <Card bg='light'>
                        <Card.Body>
                            <Card.Title>Produtos Selecionados</Card.Title>
                            <Card.Text>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={1}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        1
                                                    </p>
                                                </Col>
                                                <Col md={5}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={2}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        R$ 5,99
                                                    </p>
                                                </Col>
                                                <Col md={2}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        01.34%
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Col
                                            className={styles.products_row}
                                            md={12}
                                        >
                                            <Row>
                                                <Col md={1}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        1
                                                    </p>
                                                </Col>
                                                <Col md={5}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        Pasta de dentes -
                                                        Colgate
                                                    </p>
                                                </Col>
                                                <Col md={2}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        R$ 5,99
                                                    </p>
                                                </Col>
                                                <Col md={2}>
                                                    <p
                                                        style={{
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        01.34%
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Text>
                        </Card.Body>
                    </Card>{" "}
                </Col>
            </Row>
            <Row>
                <Col sm className='bg-success'>
                    sm=true
                </Col>
                <Col sm className='bg-danger'>
                    sm=true
                </Col>
                <Col sm className='bg-info'>
                    sm=true
                </Col>
            </Row>
        </Container>
    );
};

export default NewSale;
