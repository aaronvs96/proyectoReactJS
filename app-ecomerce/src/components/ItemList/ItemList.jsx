import Item from "./Item";
import { Button, Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { gFetch } from "../../helpers/gFetch";

const ItemList = ({ producto }) => {

  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(true);

  const onChangeValue = (e) => {
    // e.preventDefault();

    console.log(e.target.value);
    setValue(e.target.value)
    const valorBuscado = value.toUpperCase();
    
    console.log(valorBuscado)
    if (valorBuscado) {
      // console.log("Value", valorBuscado)     
      // fetch("../../../assets/data.json")
      //   .then((response) => response.json())
      gFetch
        .then((json) => {
          let listaMotos = json;
          const moto = listaMotos.filter((el) => el.marca.toUpperCase() === valorBuscado)
          console.log(moto)

          moto.forEach(element => {
            if (valorBuscado == element.marca.toUpperCase()) {
              console.log(element)

              const motos_mostradas = document.querySelectorAll(".mostrarElementos");
              motos_mostradas.forEach(el => {
                el.className = "text-center mt-3 w-25 mx-1 shadow ocultarElementos"
              })

              //mostrando las motos de la marca elegida en el select
              const marca = document.querySelectorAll(`#${selectFiltro.value}`);
              marca.forEach(e => {
                e.className = "text-center mt-3 w-25 mx-1 shadow mostrarElementos";
              })
            }
          });
        })
        .catch(error => console.log(error))
      
      
    }
  }

  return (
    <div>
        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
          <Form>
            {/* <Form.Control size="mg" type="text" placeholder="Ingresar texto..." onChange={onChangeValue} /> */}
            <Form.Select id="selectFiltro" aria-label="Default select example" onChange={onChangeValue}>
              <option value="DEFAULT" selected disabled>Selecciona una opción</option>
              <option value="HONDA">HONDA</option>
              <option value="SSENDA">SSENDA</option>
              <option value="RTM">RTM</option>
              <option value="SUZUKI">SUZUKI</option>
              <option value="NUEVAMARCA">NUEVAMARCA</option>
            </Form.Select>
            {/* <Button style={{ background: "#2ba988", border: "#2ba977" }} variant="primary" type="submit">
              Buscar
            </Button> */}
          </Form>
        </Container>

        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
          {producto.map((element) => (
            <Item products={element} key={element.id} />
          ))
          }
        </Container>





    </div>


  );
}

export default ItemList;
