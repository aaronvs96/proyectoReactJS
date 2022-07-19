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
            <NavLink to='/catalogo' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Catalogooooo</NavLink>
            {/* <NavLink to='/categoria/pisteras' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Pisteras</NavLink>
            <NavLink to='/categoria/deportivas' className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Deportivas</NavLink> */}
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



    
  )
}
export default NavBar