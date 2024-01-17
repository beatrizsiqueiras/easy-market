import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { PiTrash } from 'react-icons/pi';
import { TbCubePlus } from 'react-icons/tb';
import { Link, useNavigate } from 'react-router-dom';
import PulseLoader from 'react-spinners/ClipLoader';
import { useFetchProducts } from '../../hooks/useFetchProducts';
import styles from './Products.module.css';
import Swal from 'sweetalert2';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';

const Products = () => {
    const { products, isLoading } = useFetchProducts();
    const { deleteProduct } = useDeleteProduct();

    const navigate = useNavigate();

    const handleDeleteProduct = (id) => {
        Swal.fire({
            title: 'Wait..',
            timer: 4000,
            showConfirmButton: true,
            showCancelButton: true,
            text: 'Do you want to delete?',
            icon: 'info',
        }).then(function (result) {
            if (result.isConfirmed) {
                deleteProduct(id);

                Swal.fire({
                    title: 'Success',
                    timer: 2000,
                    text: 'Product deleted successfully',
                    icon: 'success',
                    showConfirmButton: true,
                }).then(function (result) {
                    if (result.isConfirmed) {
                        navigate('/products');
                    }
                });
            }
        });
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className={styles.add_product_div}>
                        <Link className={styles.add_product_btn} to='/product/new'>
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
                            <PulseLoader color='#36d7b7' loading={isLoading} />
                            {!products && (
                                <tr>
                                    <td colSpan={6}>
                                        <p style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Any products here :/
                                        </p>
                                    </td>
                                </tr>
                            )}
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
                                                    background: '#f78154 ',
                                                    color: '#FFF',
                                                }}
                                                onClick={() => {
                                                    handleDeleteProduct(product.id);
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
