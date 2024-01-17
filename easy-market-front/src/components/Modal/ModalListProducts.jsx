import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ListOrderProducts from '../ListOrderProducts/ListOrderProducts';

const ModalListProducts = ({ show, handleClose, orderId }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Products (Order {orderId})</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListOrderProducts orderId={orderId} />
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>
                Ok
            </Button>
        </Modal.Footer>
    </Modal>
);

export default ModalListProducts;
