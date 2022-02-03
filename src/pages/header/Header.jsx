// Bootstrap and css imports
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./header.css";

// images imports
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className=" justify-content-md-center"
          id="basic-navbar-nav"
        >
          <Nav className="">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
            <Nav.Link href="#link">Testimonials</Nav.Link>
            <Nav.Link href="#link">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="btns">
          <Button>Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
