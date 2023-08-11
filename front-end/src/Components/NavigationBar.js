import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

function NavigationBar() {
  document.body.style = 'background: black';
  return (
    <>
      <div>
        <Navbar className="nav-color" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <h1 className="homeHead">Willis Canada</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/bio">Bio</Link>
                <Link className="nav-link" to="/photos">Photos</Link>
                <Link className="nav-link" to="/schedule">Schedule</Link>
                <Link className="nav-link" to="/store">Store</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Outlet />
    </>
  )
}
export default NavigationBar