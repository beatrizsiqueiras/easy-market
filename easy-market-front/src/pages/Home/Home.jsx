import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

import { PiShoppingCartSimpleFill, PiListDashesFill } from "react-icons/pi";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";

import styles from "./Home.module.css";
import SalesChart from "../../components/SalesChart/SalesChart";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Container>
                <Stack gap={3}>
                    <div className='p-2'>
                        <Row>
                            <Col>
                                <Link to='/sale/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title
                                                className={styles.card_title}
                                            >
                                                100
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: "15px",
                                                        }}
                                                        md={6}
                                                    >
                                                        Vendas realizadas
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: "end",
                                                        }}
                                                    >
                                                        <PiShoppingCartSimpleFill
                                                            className={
                                                                styles.card_icon
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer
                                                className={styles.card_footer}
                                            >
                                                VENDAS +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/product/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title
                                                className={styles.card_title}
                                            >
                                                235
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: "15px",
                                                        }}
                                                        md={6}
                                                    >
                                                        Produtos cadastrados
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: "end",
                                                        }}
                                                    >
                                                        <GiCardboardBoxClosed
                                                            className={
                                                                styles.card_icon
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer
                                                className={styles.card_footer}
                                            >
                                                PRODUTOS +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title
                                                className={styles.card_title}
                                            >
                                                10
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: "15px",
                                                        }}
                                                        md={6}
                                                    >
                                                        Parcelas Pendentes
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: "end",
                                                        }}
                                                    >
                                                        <TbZoomMoney
                                                            className={
                                                                styles.card_icon
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer
                                                className={styles.card_footer}
                                            >
                                                PARCELAS
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/category/new'>
                                    <Card bg='light' className={styles.card}>
                                        <Card.Body>
                                            <Card.Title
                                                className={styles.card_title}
                                            >
                                                10
                                            </Card.Title>
                                            <Card.Text>
                                                <Row>
                                                    <Col
                                                        style={{
                                                            fontSize: "15px",
                                                        }}
                                                        md={6}
                                                    >
                                                        Categorias
                                                    </Col>
                                                    <Col
                                                        md={6}
                                                        style={{
                                                            textAlign: "end",
                                                        }}
                                                    >
                                                        <PiListDashesFill
                                                            className={
                                                                styles.card_icon
                                                            }
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card.Text>
                                            <Card.Footer
                                                className={styles.card_footer}
                                            >
                                                CATEGORIAS +
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className='p-2'>
                        <Col
                            style={{ textAlign: "center" }}
                            className='mt-2 ${}'
                        >
                            <p>Vendas do ano</p>
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <SalesChart />
                        </Col>
                    </div>
                </Stack>
            </Container>
        </>
    );
};

export default Home;