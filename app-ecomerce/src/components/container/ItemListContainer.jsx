import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { gFetch } from '../../helpers/gFetch';
import Footer from '../Footer/Footer';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*llamando a la funcion gFetch que está en ItemList */
    gFetch //simular llamado a una api
      .then((resp) => {
        setProducts(resp)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])


  return (
    <div>
      {loading ? 
        <span >Cargando...
        <Spinner animation="border" variant="success" />
        </span>
      :
        <ItemList producto={products} />
      }
      {/* <Footer /> */}
    </div>
  )
}


export default ItemListContainer