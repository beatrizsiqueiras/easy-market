import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { TbShoppingCartPlus } from "react-icons/tb";
import { PiTrash } from "react-icons/pi";

import styles from "./Order.module.css";
import { Link } from "react-router-dom";

const Order = () => {
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
                    <h3 className='mb-4'>
                        Vendas <strong>Cadastradas</strong>
                    </h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Produtos</th>
                                <th>Valor Total</th>
                                <th>Valor dos Impostos</th>
                                <th>Data/Hora</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Button variant='light'>
                                        Ver produtos
                                    </Button>
                                </td>
                                <td>R$ 5,99</td>
                                <td>R$ 2,00</td>
                                <td>01/12/2023 às 10:32</td>
                                <td>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#f78154 ",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiTrash />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Button variant='light'>
                                        Ver produtos
                                    </Button>
                                </td>
                                <td>R$ 5,99</td>
                                <td>R$ 2,00</td>
                                <td>01/12/2023 às 10:32</td>
                                <td>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#f78154 ",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiTrash />
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>
                                    <Button variant='light'>
                                        Ver produtos
                                    </Button>
                                </td>
                                <td>R$ 5,99</td>
                                <td>R$ 2,00</td>
                                <td>01/12/2023 às 10:32</td>
                                <td>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#f78154 ",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiTrash />
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
    );
};

export default Order;
