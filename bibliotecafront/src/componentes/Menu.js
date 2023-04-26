import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Menu () {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">Projeto Biblioteca</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/emprestimos">Empréstimos</Nav.Link>
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/pessoas">Pessoas</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/livros">Livros</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/categorias">Categorias</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/editoras">Editoras</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/autores">Autores</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item as={Link} to="/usuarios">Usuários</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    );
}