import React from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap';
import './CSS/NavigationBar.css'


class NavigationBar extends React.Component{

  render(){
    return (
      <Navbar collapseOnSelect className='navbar' expand="lg">
        <Navbar.Brand href="/">Edukare</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <div><hr className='hohrizontal'/></div>
            <Nav.Link href="#Logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;
