import { Component } from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends Component {
   render() {
      return (
         <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                     <NavDropdown title="Manutenção" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/engeman" >Engeman</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      );
   }
}

export default NavBar;