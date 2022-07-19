import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './item_estilos.css'

//FORMATO DOLARES
const formatoDolares = (monto) => {
  const datos = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', datos);
  return numberFormat2.format(monto);
}
// export { formatoDolares };


const Item = ({ products }) => {

  const { id, nombre, marca, categoria, precio, img } = products;

  return (
    <div id={marca} className='text-center mt-3 w-25 mx-1 shadow mostrarElementos'>
    
      <Card >
        <Card.Header as="h5">{nombre}</Card.Header>
        <Card.Img variant="top" src={img} className="p-2" />
        <Card.Body>
          {/* <Card.Title>{nombre}</Card.Title> */}
          <Card.Text>{formatoDolares(precio)}</Card.Text>
          <Link to={`/detalle/${id}`}>
            <Button style={{ background: "#2ba977", border: "#2ba977" }}>Ver más</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Item