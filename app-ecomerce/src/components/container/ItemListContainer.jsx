import { useState } from 'react'
import { useEffect } from 'react'
import { gFetch } from '../../helpers/gFetch';
import ItemList from './ItemList';
import './ItemListContainer.css'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    /*llamando a la funcion gFetch que está en ItemList */
    gFetch //simular llamado a una api
      .then((resp) => {
        setProducts(resp)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(()=>{
        setLoading(false)
      })
    },[])

  // console.log(products)

    // return (
    //   <div>
    //     {[1,2,3,4].map( nro => <li>{nro}</li>)}
    //   </div>
    // )
  return  (
    <div>
      {loading ? <h2>cargando...</h2>
      :
      <ItemList producto={products}/>
      
      }
    </div>
  )

  
}

// ItemListContainer.defaultProps = { //en caso no se mande ningun valor en el prop greeting
//   greeting: 'Bienvenidos'
// }


export default ItemListContainer