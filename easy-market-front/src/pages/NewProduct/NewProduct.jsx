import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link, useNavigate } from "react-router-dom";
import { useFetchCategories } from "../../hooks/useFetchCategories";
import { useInsertProduct } from "../../hooks/useInsertProduct";

const NewProduct = () => {
    const [name, setName] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [unitaryValue, setUnitaryValue] = useState("");
    const [quantity, setQuantity] = useState("");
    const [image, setImage] = useState("");

    const [formError, setFormError] = useState("");

    const navigate = useNavigate();

    const { insertProduct } = useInsertProduct();
    const { categories } = useFetchCategories();

    const handleSubmitProduct = (e) => {
        e.preventDefault();
        setFormError("");
        if (!name || !quantity || !categoryId || !unitaryValue) {
            setFormError("Please, type all fields!");
        }
        if (!formError) {
            const newProduct = {
                name,
                quantity,
                categoryId,
                unitaryValue,
            };
            insertProduct(newProduct);
            navigate("/products");
        } else {
            return;
        }
    };

    return (
        <>
            <Container>
                <Col md={12} className='mb-5 mt-4'>
                    <h3>
                        Product <strong>Registration</strong>
                    </h3>
                </Col>
                <Form onSubmit={handleSubmitProduct}>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Type a name'
                                        name='name'
                                        required
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                        value={name}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                        aria-label='Choose some category'
                                        onChange={(e) =>
                                            setCategoryId(e.target.value)
                                        }
                                        value={categoryId}
                                        required
                                    >
                                        <option>Choose</option>
                                        {categories &&
                                            categories.map((category) => (
                                                <option
                                                    value={category.id}
                                                    key={category.id}
                                                >
                                                    {category.name} (
                                                    {category.tax_percentage} %)
                                                </option>
                                            ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Unitary Value</Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Type the value'
                                        name='name'
                                        onChange={(e) =>
                                            setUnitaryValue(e.target.value)
                                        }
                                        value={unitaryValue}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Quantity</Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Type the quantity'
                                        name='name'
                                        onChange={(e) =>
                                            setQuantity(e.target.value)
                                        }
                                        value={quantity}
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
                                    Back
                                </Link>
                                <Button variant='success' type='submit'>
                                    Register
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
