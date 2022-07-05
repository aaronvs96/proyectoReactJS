import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

//FORMATO DOLARES
const formatoDolares = (monto) => {
  const datos = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', datos);
  return numberFormat2.format(monto);
}
// export { formatoDolares };


const Item = ({ products }) => {

  const { id, nombre, precio, img } = products;

  return (

      <Card className="text-center mt-3 w-25 mx-1 shadow">
      <Card.Header as="h5">{nombre}</Card.Header>
      <Card.Img variant="top" src={img} className="p-2" />
      <Card.Body>
        {/* <Card.Title>{nombre}</Card.Title> */}
        <Card.Text>{formatoDolares(precio)}</Card.Text>
        <Button style={{background:"#2ba977",border: "#2ba977"}}>Ver más</Button>
      </Card.Body>
    </Card>
  )
}

export default Item