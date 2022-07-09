import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

import Titulo from '../Titulo/Titulo'
import CarWidget from './CarWidget'
// import './NavBar.css'

const NavBar = () => {

  let titulo = 'SOMOS MOTOS '// estado de App 

  return (
   
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark" expand="lg">
      <Container>
        <NavLink to='/'>
          <Titulo />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Inicio</NavLink>
            <NavLink to='/nosotros' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Nosotros</NavLink>
            <NavLink to='/categoria/pisteras' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Pisteras</NavLink>
            <NavLink to='/categoria/deportivas' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Deportivas</NavLink>
            <NavLink to='/cotizacion' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Cotizacion</NavLink>
            <Link to='/cart'>
              <CarWidget />
            </Link>           
            {/* <NavDropdown>
              <NavLink to='/categoria/pisteras' className='nav-link'>Pisteras</NavLink>
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