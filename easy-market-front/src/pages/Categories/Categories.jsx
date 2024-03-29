import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import PulseLoader from 'react-spinners/ClipLoader';
import { MdFormatListBulletedAdd } from 'react-icons/md';
import { PiTrash } from 'react-icons/pi';
import styles from './Categories.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFetchCategories } from '../../hooks/useFetchCategories';
import { useDeleteCategory } from '../../hooks/useDeleteCategory';
import Swal from 'sweetalert2';

const Categories = () => {
    const { categories, isLoading } = useFetchCategories();

    const { deleteCategory } = useDeleteCategory();

    const navigate = useNavigate();

    const handleDeleteCategory = (id) => {
        Swal.fire({
            title: 'Wait..',
            timer: 4000,
            showConfirmButton: true,
            showCancelButton: true,
            text: 'Do you want to delete?',
            icon: 'info',
        }).then(function (result) {
            if (result.isConfirmed) {
                deleteCategory(id);

                Swal.fire({
                    title: 'Success',
                    timer: 2000,
                    text: 'Category deleted successfully',
                    icon: 'success',
                    showConfirmButton: true,
                }).then(function (result) {
                    if (result.isConfirmed) {
                        navigate('/categories');
                    }
                });
            }
        });
    };
    return (
        <div>
            <Container>
                <Row>
                    <Col md={12} className={styles.add_category_div}>
                        <Link className={styles.add_category_btn} to='/category/new'>
                            <MdFormatListBulletedAdd />
                        </Link>
                    </Col>
                </Row>
                <Col md={12} className='mt-3'>
                    <h3 className='mb-4'>
                        Registered <strong>Categories</strong>
                    </h3>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Tax Percentage</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <PulseLoader color='#36d7b7' loading={isLoading} />
                            {!categories && (
                                <tr>
                                    <td colSpan={6}>
                                        <p style={{ textAlign: 'center', fontSize: '20px' }}>
                                            Any categories here :/
                                        </p>
                                    </td>
                                </tr>
                            )}
                            {categories &&
                                categories.map((category) => (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.tax_percentage}%</td>
                                        <td>
                                            <Button
                                                className={styles.btn_action}
                                                variant='light'
                                                style={{
                                                    background: '#f78154 ',
                                                    color: '#FFF',
                                                }}
                                                onClick={() => {
                                                    handleDeleteCategory(category.id);
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

export default Categories;
