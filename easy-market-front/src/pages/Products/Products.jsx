import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { TbCubePlus } from "react-icons/tb";
import { PiPencilSimpleLight, PiTrash } from "react-icons/pi";

import styles from "./Products.module.css";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className={styles.add_product_div}>
                        <Link
                            className={styles.add_product_btn}
                            to='/product/new'
                        >
                            <TbCubePlus />
                        </Link>
                    </Col>
                </Row>
                <Col md={12} className='mt-3'>
                    <h3 className='mb-4'>
                        Produtos <strong>Cadastrados</strong>
                    </h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Categoria</th>
                                <th>Valor</th>
                                <th>Quantidade</th>
                                <th>Imagem</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pasta de dentes - Colgate</td>
                                <td>Higiene</td>
                                <td>R$ 5,99</td>
                                <td>100</td>
                                <td>
                                    <img
                                        src='https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/13604/medium/creme-dental-colgate-tripla-acao-90g_92465.png'
                                        alt=''
                                    />
                                </td>
                                <td>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#4d9078",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiPencilSimpleLight />
                                    </Button>
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
                                <td>2</td>
                                <td>Macarrão instantaneo Nissin</td>
                                <td>Alimentos (embalados)</td>
                                <td>R$ 2,99</td>
                                <td>74</td>
                                <td>
                                    <img
                                        src='https://img.megaboxatacado.com.br/produto/1000X1000/201873_10836.jpg'
                                        alt=''
                                    />
                                </td>
                                <td className={styles.btn_action}>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#4d9078",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiPencilSimpleLight />
                                    </Button>
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
                                <td>3</td>
                                <td>Maçã Fuji</td>
                                <td>Alimentos (frutas)</td>
                                <td>R$ 0,57</td>
                                <td>300</td>
                                <td>
                                    <img
                                        src='https://domolivio.vtexassets.com/unsafe/fit-in/720x720/center/middle/https%3A%2F%2Fdomolivio.vtexassets.com%2Farquivos%2Fids%2F344080%2FMaca-Fuji-Kg.jpg%3Fv%3D638388794024500000'
                                        alt=''
                                    />
                                </td>
                                <td className={styles.btn_action}>
                                    <Button
                                        className={styles.btn_action}
                                        variant='light'
                                        style={{
                                            background: "#4d9078",
                                            color: "#FFF",
                                        }}
                                    >
                                        <PiPencilSimpleLight />
                                    </Button>
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

export default Products;
