import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { MdFormatListBulletedAdd } from "react-icons/md";

import { PiPencilSimpleLight, PiTrash } from "react-icons/pi";

import styles from "./Categories.module.css";

import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className={styles.add_category_div}>
                        <Link
                            className={styles.add_category_btn}
                            to='/category/new'
                        >
                            <MdFormatListBulletedAdd />
                        </Link>
                    </Col>
                </Row>
                <Col md={12} className='mt-3'>
                    <h3 className='mb-4'>
                        Categorias <strong>Cadastradas</strong>
                    </h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>Percentual de Imposto</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Higiene</td>
                                <td>05.7 %</td>
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
                                <td>Limpeza</td>
                                <td>14.7 %</td>
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
                                <td>Alimentos</td>
                                <td >0.7%</td>
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

export default Categories;
