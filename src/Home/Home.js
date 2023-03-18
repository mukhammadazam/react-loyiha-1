import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './imges/logo.svg'
function BasicExample() {
    return (
        <Navbar className='fixed-top' bg="danger" expand="md" >
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="navbar" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto bg-danger  ">
                        <Nav.Link className='text-white' href="#home">Menu</Nav.Link>
                        <Nav.Link className='text-white' href="#link">News</Nav.Link>
                        <Nav.Link className='text-white' href="#link">About Us</Nav.Link>
                        <Nav.Link className='text-white' href="#link">Contact Us</Nav.Link>
                        <Nav.Link className='text-white border rounded-pill border-light border-2 px-3' href="#link"> Log in </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;