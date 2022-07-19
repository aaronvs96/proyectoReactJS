import { useState } from 'react'
import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { gFetch } from '../../../helpers/gFetch';
import Footer from '../../Footer/Footer';
import ItemList from '../../ItemList/ItemList';

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams()

  useEffect(() => {
    // if (categoriaId) {
    //   gFetch //simular llamado a una api
    //   .then((resp) => {
    //       setProducts(resp.filter((prod) => prod.categoria === categoriaId))          
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
    //   .finally(() => {
    //     setLoading(false)
    //   })
    // } else {
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
  //   }

  }, [])
  // console.log(categoriaId)

  return (
    <div>
      {loading ?
        <span >Cargando...
          <Spinner animation="border" variant="success" />
        </span>
        :
        <ItemList producto={products}/>
      }
    </div>
  )
}


export default ItemListContainer