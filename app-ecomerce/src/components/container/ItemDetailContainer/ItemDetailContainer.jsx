import { useState } from "react";
import { useParams } from "react-router-dom"
import { gFetch } from "../../../helpers/gFetch";
import ItemDetail from "./ItemDetail";


export default function ItemDetailContainer() {
  const { id_moto } = useParams();


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  gFetch //simular llamado a una api
    .then((resp) => {
      setProducts(resp.find((prod) => prod.id === id_moto))
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      setLoading(false)
    })
  // console.log(id_moto)

  return (
    <div>
      <ItemDetail products={products} />
    </div>
  )
}
