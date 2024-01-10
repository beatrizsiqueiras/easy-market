import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NewCategory = () => {
    return (
        <>
            <Container>
                <Col md={12} className='mb-5 mt-4'>
                    <h3>
                        <strong> Cadastro </strong> de categoria
                    </h3>
                </Col>
                <Form>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Nome</Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Informe o nome da categoria'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>
                                        Percentual de imposto
                                    </Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Informe o percentual'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Link
                                    to='/categories'
                                    type='button'
                                    className='btn btn-light'
                                    style={{ margin: " 0 15px" }}
                                >
                                    Voltar
                                </Link>
                                <Button variant='success' type='submit'>
                                    Adicionar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Form>
            </Container>
        </>
    );
};

export default NewCategory;
