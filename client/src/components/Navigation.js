import {useNavigate} from 'react-router-dom'
import header_img from '../assets/header_img.jpg'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation({ updateUser, user }) {

    const navigate = useNavigate();

    const handleLogout = () => {
        fetch("/logout", {
            method: "DELETE",
            })
            .then(res => {
                if (res.ok) {
                    updateUser(null)
                    navigate("/");
                }
            })
    }

    return (
        <Navbar>
            <Navbar.Brand href="/">
                <img src={header_img} alt="logo" height="100" />
            </Navbar.Brand>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/users/new">Sign Up</Nav.Link>
                        {user ? <Nav.Link href={`/users/${user?.id}`}>My Favorites</Nav.Link> : null}
                        {user?.is_admin ? <Nav.Link href="/admin">Admin</Nav.Link> : null}
                        {user ? <Nav.Link onClick={handleLogout}>Logout</Nav.Link> : null}
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Navbar.Text>Current User: {user ? user.username : "No User"}</Navbar.Text>
        </Navbar>
    )
}

export default Navigation;