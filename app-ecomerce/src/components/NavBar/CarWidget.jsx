import {Nav} from 'react-bootstrap';

const CarWidget = () => {

  return (
    // <ul className="navbar-nav mr-auto">
    //   <li className="nav-item active">
    //     <a className="nav-link" href="#">Carrito<i className="bi bi-cart3"></i></a>        
    //   </li>
    //   {/* <li className='li-navegacion'><a className='a-navegacion' href="">Cotizacion</a></li> */}
    // </ul> 

    <Nav.Link href="#link">Carrito<i className="bi bi-cart3"></i></Nav.Link>
  )
}

export default CarWidget

