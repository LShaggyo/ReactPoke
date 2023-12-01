// Header.jsx
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css"; 

export const Header = () => {
  return (
    <Navbar expand="lg" className="shadow-sm z-1">
      <Container>
        <Navbar.Brand>
          <i className="fa-solid fa-location-crosshairs"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/"
            >
              Inicio
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/pokemons"
            >
              Pokemones
            </NavLink>
          </Nav>
          <Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
