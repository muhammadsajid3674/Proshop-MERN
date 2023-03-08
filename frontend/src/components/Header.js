import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {
    const linkDefault = {
        textDecoration: 'none',
        color: 'inherit'
    }
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand>
                    <Link style={linkDefault} to='/'>ProShop</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link>
                            <Link style={linkDefault} to='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={linkDefault} to='/login'><i className="fa-solid fa-user"></i> Signup</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;