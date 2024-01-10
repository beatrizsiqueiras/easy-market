import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

const NewProduct = () => {
    return (
        <>
            <Container>
                <Col md={12} className='mb-5 mt-4'>
                    <h3>
                        <strong> Cadastro </strong> de produto
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
                                        placeholder='Informe o nome do produto'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Select aria-label='Selecione a categoria'>
                                        <option>Selecione a categoria</option>
                                        <option value='1'>Higiene</option>
                                        <option value='2'>Alimentos</option>
                                        <option value='3'>Limpeza</option>
                                        <option value='4'>Bebidas</option>
                                        <option value='5'>Padaria</option>
                                        <option value='6'>Frescos</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Valor Unitário</Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Informe o valor unitário'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>
                                        Quantidade disponível
                                    </Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Informe a quantidade disponível'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Imagem</Form.Label>
                                    <Form.Control
                                        type='file'
                                        placeholder='Adicione uma imagem do produto'
                                        name='name'
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Link
                                    to='/products'
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

export default NewProduct;
