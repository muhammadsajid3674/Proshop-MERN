import { Container, Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function Header() {
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand >
                    <Nav.Link onClick={() => { navigate('/') }}>ProShop</Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link onClick={() => { navigate('/cart') }}><i className="fa-solid fa-cart-shopping"></i> Cart</Nav.Link>
                        <Nav.Link onClick={() => { navigate('/login') }}><i className="fa-solid fa-user"></i> Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;