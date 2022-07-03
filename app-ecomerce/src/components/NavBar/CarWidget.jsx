
import './NavBar.css'

const CarWidget = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="#">Carrito<i className="bi bi-cart3"></i></a></li>
                {/* <li className='li-navegacion'><a className='a-navegacion' href="">Cotizacion</a></li> */}
            </ul>
        </nav>
        
    </div>
  )
}

export default CarWidget