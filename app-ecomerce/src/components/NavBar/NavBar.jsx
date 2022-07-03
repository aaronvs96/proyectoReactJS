import {Container, Nav, Navbar} from 'react-bootstrap';

import Titulo from '../Titulo/Titulo'
import CarWidget from './CarWidget'
import './NavBar.css'

const NavBar = () => {

  let titulo = 'SOMOS MOTOS '// estado de App 

  return (
   
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
      <Container>
        <Navbar.Brand href="../index.html">
          <Titulo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../index.html">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <Nav.Link href="#link">Productos</Nav.Link>
            <Nav.Link href="#link">Cotizacion</Nav.Link>
            <CarWidget />
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    //   <a className="navbar-brand" href="#"><Titulo titulo={titulo}  /></a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>

    //   <div className="collapse navbar-collapse" id="navbarsExample05">
    //     <ul className="navbar-nav mr-auto">
    //       <li className="nav-item active">
    //         <a className="nav-link" href="../index.html">Inicio</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Nosotros</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Productos</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link" href="#">Cotizacion</a>
    //       </li>
    //     </ul>
    //     <CarWidget />
    //   </div>
    // </nav>
    
  )
}
export default NavBar