import React from 'react'
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

//FORMATO DOLARES
const formatoDolares = (monto) => {
  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  // console.log(numberFormat2.format(monto));
  return numberFormat2.format(monto);
}
export{formatoDolares};


const Item = ({products}) =>{

    const {id, nombre, precio, img} = products;

    return (
        <Card className="text-center mt-3 w-25 mx-1 shadow">
        <Card.Header as="h4">{nombre}</Card.Header>
        <Card.Img variant="top" src={img} className="p-2" />
        <Card.Body>
          {/* <Card.Title>{nombre}</Card.Title> */}
          <Card.Text>{formatoDolares(precio)}</Card.Text>
          <Button variant="primary">Ver más</Button>
        </Card.Body>
      </Card>
    )
}

export default Item