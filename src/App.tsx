import { Routes, Route, Link } from "react-router-dom";
import BusquedaAlumnos from "./views/busquedaAlumnos";
import CreacionCurso from "./views/creacionCurso";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" className="shadow">
        <div className="container">
          <Navbar.Brand href="/" className="fw-bold">
            Inicio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/creacionCurso" className="text-light">
                Creación de cursos
              </Nav.Link>
              <Nav.Link as={Link} to="/busquedaAlumnos" className="text-light">
                Buscar alumnos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <div className="container mt-4">
        <Routes>
          <Route path="/creacionCurso" element={<CreacionCurso />} />
          <Route path="/busquedaAlumnos" element={<BusquedaAlumnos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
