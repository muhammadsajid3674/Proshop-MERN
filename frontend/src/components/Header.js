import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Link style={{ textDecoration: 'none' }} to='/'>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link style={{ textDecoration: 'none' }} to='/cart'>
                            <Nav.Link><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                        </Link>
                        <Link style={{ textDecoration: 'none' }} to='/login'>
                            <Nav.Link><i className="fa-solid fa-user"></i> Signup</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;