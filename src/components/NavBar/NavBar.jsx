import React from 'react';
import { Link } from 'react-router-dom';  
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; 
import logo from '../../assets/logo2.png'; 
import './NavBar.css'; 

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary p-3 mb-5">
      <Container>
        <Link to="/">
          <img className="w-auto" src={logo} alt="Logo" />
        </Link>
        <h4 className='mx-3' style={{ color: '#0089CF' }}><b>Juan Pablo Fortuny</b></h4>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title={<b className="nav-dropdown-title">Tienda Online</b>} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Limpia y desintoxica</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Regenera y Defiende</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Vigor mental</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Vigor corporal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Recuperacion de musculos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Linea deportiva</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Control de carbohidratos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Control de peso</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Mejora de sistema inmunologico</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">Revitaliza</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.11">Rejuvenece</NavDropdown.Item>
            </NavDropdown>
            <Link to="/link2" className="nav-link"><b>Afiliarse</b></Link>
            <Link to="/link3" className="nav-link"><b>Acerca de mi</b></Link>
            <Link to="/link4" className="nav-link"><b>Contactame </b></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
