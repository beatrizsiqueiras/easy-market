import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

import { BsShop } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import {
    PiShoppingBagOpenThin,
    PiShoppingCartSimpleLight,
    PiUserCircleGearThin,
    PiListBulletsThin,
} from "react-icons/pi";

import { TfiMoney } from "react-icons/tfi";
import styles from "./NavbarComponent.module.css";
import { NavLink } from "react-router-dom";

function NavbarComponent() {
    return (
        <>
            {[false].map((expand) => (
                <Navbar
                    key={expand}
                    expand={expand}
                    className='bg-body-tertiary mb-3'
                >
                    <Container fluid>
                        <Navbar.Toggle
                            aria-controls={`offcanvasNavbar-expand-${expand}`}
                        />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='start'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title
                                    id={`offcanvasNavbarLabel-expand-${expand}`}
                                >
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Form className='d-flex'>
                                    <Form.Control
                                        type='search'
                                        placeholder='Search'
                                        className='me-2'
                                        aria-label='Search'
                                    />
                                    <Button variant='outline-success'>
                                        <CiSearch />
                                    </Button>
                                </Form>
                                <Nav className='justify-content-start flex-grow-1 pe-3'>
                                    <Nav.Link href='#action1'>
                                        <NavLink to='/products'>
                                            <PiShoppingBagOpenThin
                                                className={styles.nav_icon}
                                            />
                                            Produtos
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href='#action1'>
                                        <NavLink to='/categories'>
                                            <PiListBulletsThin 
                                                className={styles.nav_icon}
                                            />
                                            Categorias
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link href='#action1'>
                                        <PiShoppingCartSimpleLight
                                            className={styles.nav_icon}
                                        />
                                        Vendas
                                    </Nav.Link>
                                    <Nav.Link href='#action2'>
                                        <TfiMoney className={styles.nav_icon} />
                                        Financeiro
                                    </Nav.Link>
                                    <NavDropdown
                                        title={
                                            <PiUserCircleGearThin
                                                className={styles.nav_icon}
                                            />
                                        }
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href='#action4'>
                                            Seus dados
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href='#action3'>
                                            Usuários
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href='#action5'>
                                            Sair
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Navbar.Brand id={styles.nav_title}>
                            <NavLink to='/'>
                                <BsShop className={styles.nav_icon} />
                                <strong>Easy</strong>Market
                            </NavLink>
                        </Navbar.Brand>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComponent;
