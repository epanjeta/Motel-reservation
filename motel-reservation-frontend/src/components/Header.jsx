import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { isLoggedIn } from '../utilities/UserUtility';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
        <Container>  
      <Navbar.Brand href="/">Motel Montana</Navbar.Brand>  
      <Navbar.Toggle aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="/" exact activeClassName="active">Home</Nav.Link>  
          <Nav.Link href="About" exact activeClassName="active">About Us</Nav.Link>
          <Nav.Link href="Contact" exact activeClassName="active">Contact</Nav.Link>
          {!isLoggedIn() && 
            <Nav.Link href="Login" exact activeClassName="active">Sign In</Nav.Link>
          }
          {isLoggedIn() == true &&
            <Nav.Link href="Logout" exact activeClassName="active">Logout</Nav.Link>
          }
        </Nav>  
      </Navbar.Collapse>  
    </Container>  
    </Navbar>
  );
}

export default Header;