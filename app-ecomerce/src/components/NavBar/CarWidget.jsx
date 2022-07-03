
import './NavBar.css'

const CarWidget = () => {
  return (

    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Carrito<i className="bi bi-cart3"></i></a>
        
      </li>
      <i className="bi bi-cart3"></i>
      {/* <li className='li-navegacion'><a className='a-navegacion' href="">Cotizacion</a></li> */}
    </ul>


  )
}

export default CarWidget