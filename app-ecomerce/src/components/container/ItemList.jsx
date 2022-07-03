import Item from "./Item";
import { Container } from "react-bootstrap";

const ItemList = ({producto}) =>{
    // return (
    //     <div className="container">
    //         <div className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
    //             {producto.map((elem) =>{
    //                 <Item products={elem} key={elem.id}/>
    //             })}
    //         </div>
    //     </div>
    // );

    return (
        <Container className="d-flex justify-content-evenly mt-4 flex-wrap w-100">
          {producto.map((element) => (
            <Item products={element} key={element.id} />
          ))}
        </Container>
      );
}

export default ItemList;
