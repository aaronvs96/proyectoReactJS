import React from 'react'
import { Card, Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

//FORMATO DOLARES
const formatoDolares = (monto) => {
    const datos = { style: 'currency', currency: 'USD' };
    const numberFormat2 = new Intl.NumberFormat('en-US', datos);
    return numberFormat2.format(monto);
  }
  // export { formatoDolares };

export default function ItemDetail({ products }) {
    const { id, nombre, marca, categoria, precio, img } = products;
    return (
        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
            <Card className="text-center mt-3 w-25 mx-1 shadow">
            <Card.Header as="h5">{marca}</Card.Header>
            <Card.Img variant="top" src={img} className="p-2" />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>Categoria: {categoria}</Card.Text>
                <Card.Text>{formatoDolares(precio)}</Card.Text>
                <Link to={`/detalle/${id}`}>
                    <Button style={{ background: "#2ba977", border: "#2ba977" }}>Ver más</Button>
                </Link>
            </Card.Body>
        </Card>
        </Container>
        
    )
}
