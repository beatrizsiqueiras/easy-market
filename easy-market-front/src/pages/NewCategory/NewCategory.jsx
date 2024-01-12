import { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Link, useNavigate } from "react-router-dom";

import { useInsertCategory } from "../../hooks/useInsertCategory";

const NewCategory = () => {
    const [name, setName] = useState("");
    const [taxPercentage, setTaxPercentage] = useState("");
    const [formError, setFormError] = useState("");

    const navigate = useNavigate();

    const { insertCategory } = useInsertCategory();

    const handleSubmitCategory = (e) => {
        e.preventDefault();
        setFormError("");

        if (!name || !taxPercentage) {
            setFormError("Please, type all fields!");
        }

        if (!formError) {
            const newCategory = {
                name,
                taxPercentage,
            };

            insertCategory(newCategory);
            navigate("/categories");
        } else {
            return;
        }
    };

    return (
        <>
            <Container>
                <Col md={12} className='mb-5 mt-4'>
                    <h3>
                        <strong> Category </strong> Registration
                    </h3>
                </Col>
                <Form onSubmit={handleSubmitCategory}>
                    <Col>
                        <Row>
                            <Col md={6}>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type='input'
                                        placeholder='Type the name'
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
                                    <Form.Label>Tax Percentage</Form.Label>
                                    <Form.Control
                                        type='number'
                                        placeholder='Type the percentage'
                                        name='taxPercentage'
                                        required
                                        onChange={(e) =>
                                            setTaxPercentage(e.target.value)
                                        }
                                        value={taxPercentage}
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

export default NewCategory;
