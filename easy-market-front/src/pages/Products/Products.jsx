import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import { TbCubePlus } from "react-icons/tb";
import { PiTrash } from "react-icons/pi";

import styles from "./Products.module.css";
import { Link } from "react-router-dom";

import { useFetchProducts } from "../../hooks/useFetchProducts";

const Products = () => {
    const { products } = useFetchProducts();

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
                        Registered <strong>Products</strong>
                    </h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>Unitary Value</th>
                                <th>Available Quantity</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {products &&
                                products.map((product) => (
                                    <tr key={product.id}>
                                        <td>{product.id}</td>
                                        <td>{product.product}</td>
                                        <td>{product.category}</td>
                                        <td>{product.unitary_value}</td>
                                        <td>{product.available_quantity}</td>

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
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Container>
        </div>
    );
};

export default Products;
