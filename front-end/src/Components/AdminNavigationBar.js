import { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/userContext";

function AdminNavigationBar() {

    let navigate = useNavigate()
    const { verify } = useContext(UserContext)

    useEffect(() => {
        async function verifing() {
            let status = await verify()
            if (!status) {
                navigate("/")
            }
        }
        verifing();
    }, [])

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
                                <Link className="nav-link" to="/admin/featured">Featured</Link>
                                <Link className="nav-link" to="/admin/posts">Posts</Link>
                                <Link className="nav-link" to="/admin/slides">Slides</Link>
                                <Link className="nav-link" to="/admin/photos">Photos</Link>
                                <Link className="nav-link" to="/admin/events">Schedule</Link>
                                <Link className="nav-link" to="/admin/guestbook">Guest Book</Link>
                                <Link className="nav-link" to="/admin/store">Store</Link>
                                <Link className="nav-link" to="/">Back to Home</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    )
}
export default AdminNavigationBar