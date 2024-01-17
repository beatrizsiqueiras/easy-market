import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BsShop } from 'react-icons/bs';
import {
    PiHouseSimpleThin,
    PiListBulletsThin,
    PiShoppingBagOpenThin,
    PiShoppingCartSimpleLight,
    PiUserCircleGearThin,
    PiSignOutThin,
} from 'react-icons/pi';
import { NavLink } from 'react-router-dom';
import styles from './NavbarComponent.module.css';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function NavbarComponent() {
    const { signed, signOut } = useContext(AuthContext);

    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className='bg-body-tertiary mb-3'>
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement='start'
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Menu
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className='justify-content-start flex-grow-1 pe-3'>
                                    <Nav.Link>
                                        <NavLink to='/'>
                                            <PiHouseSimpleThin className={styles.nav_icon} />
                                            Dashboard
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <NavLink to='/products'>
                                            <PiShoppingBagOpenThin className={styles.nav_icon} />
                                            Products
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <NavLink to='/categories'>
                                            <PiListBulletsThin className={styles.nav_icon} />
                                            Categories
                                        </NavLink>
                                    </Nav.Link>
                                    <Nav.Link>
                                        <NavLink to='/orders'>
                                            <PiShoppingCartSimpleLight
                                                className={styles.nav_icon}
                                            />
                                            Orders
                                        </NavLink>
                                    </Nav.Link>
                                    <NavDropdown
                                        title={<PiUserCircleGearThin className={styles.nav_icon} />}
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item onClick={signOut}>
                                            <PiSignOutThin />
                                            Sign Out
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                        <Col className='d-flex justify-content-center'>
                            <Navbar.Brand id={styles.nav_title}>
                                <NavLink to='/'>
                                    <BsShop className={styles.nav_icon} />
                                    <strong>Easy</strong>
                                    Market
                                </NavLink>
                            </Navbar.Brand>
                        </Col>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavbarComponent;
