import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

const Navigationbar = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">StriveBooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Browse</Nav.Link>
        <Nav.Link href="#">All Books</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigationbar
