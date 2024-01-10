import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

import styles from "./NewSale.module.css";

const NewSale = () => {
    return (
        <Container fluid>
            <Col md={12} className='mt-3 mb-5'>
                <h2>
                    Nova <strong>Venda</strong>
                </h2>
            </Col>

            <Col md={12}>
                <Row>
                    <Col sm={6}>
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
                    <Col sm={6}>
                        <Card bg='light'>
                            <Card.Body>
                                <Card.Title>
                                    <Col md={12}>Produtos Selecionados</Col>
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
                                                        <p>Produto</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Valor</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>% de Imposto</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Quantidade</p>
                                                    </Col>
                                                    <Col md={2}>
                                                        <p>Subtotal</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </ListGroup.Item>
                                        <div
                                            style={{
                                                fontSize: "14px",
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
                                                        <Col md={1}>
                                                            <path>1</path>
                                                        </Col>
                                                        <Col md={3}>
                                                            <p>
                                                                Pasta de dentes
                                                                - Colgate
                                                            </p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>R$ 5,99</p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>01.34%</p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p> 5 </p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>R$ 10,99</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <Col
                                                    className={
                                                        styles.products_row
                                                    }
                                                    md={12}
                                                >
                                                    <Row>
                                                        <Col md={1}>
                                                            <p>1</p>
                                                        </Col>
                                                        <Col md={3}>
                                                            <p>
                                                                Pasta de dentes
                                                                - Colgate
                                                            </p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>R$ 5,99</p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>01.34%</p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p> 5 </p>
                                                        </Col>
                                                        <Col md={2}>
                                                            <p>R$ 10,99</p>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </ListGroup.Item>
                                        </div>
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
                                            <strong>IMPOSTOS</strong>
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
            <Col md={12} className="mt-4">
                <Col className='d-flex justify-content-end'>
                    <Button variant='info'> Forma de pagamento</Button>
                </Col>
            </Col>
        </Container>
    );
};

export default NewSale;
