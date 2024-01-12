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
                                <Nav className='justify-content-start flex-grow-1 pe-3'>
                                    <Nav.Link>
                                        <NavLink to='/products'>
                                            <PiShoppingBagOpenThin
                                                className={styles.nav_icon}
                                            />
                                            Products
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <NavLink to='/categories'>
                                            <PiListBulletsThin
                                                className={styles.nav_icon}
                                            />
                                            Categories
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <NavLink to='/order'>
                                            <PiShoppingCartSimpleLight
                                                className={styles.nav_icon}
                                            />
                                            Orders
                                        </NavLink>
                                    </Nav.Link>
                                    <NavDropdown
                                        title={
                                            <PiUserCircleGearThin
                                                className={styles.nav_icon}
                                            />
                                        }
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
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
