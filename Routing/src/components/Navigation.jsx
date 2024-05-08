import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to="/">React Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor : "red"} : {}} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor : "red"} : {}} to="/About">About</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor : "red"} : {}} to="/Contacts">Contacts</Nav.Link>
                        <Nav.Link as={NavLink} style={({isActive}) => isActive ? {backgroundColor : "red"} : {}} to="/Characters">Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation; 