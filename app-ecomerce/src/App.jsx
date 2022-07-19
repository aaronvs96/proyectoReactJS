import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer/ItemListContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //importando boostrap
import { useEffect, useState } from 'react';
import ItemDetailContainer from './components/container/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/container/Cart/Cart';
import Footer from './components/Footer/Footer';


function App() { // este es un componente de react

  const getFetchApi = async (url) => {
    try {
      const query = await fetch(url) //query captura la respuesta del fetch
      const queryParse = await query.json()//parsear la respuesta

      queryParse.forEach(element => {
        // console.log(element)
      });

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const url = '../assets/data.json'
    getFetchApi(url);
  }, [])


  return ( //un componente siempre retorna un jsx
    <BrowserRouter > {/* primero importamos BrowserRouter, Routes y Route para aplicar las urls */}
      <div className='App'>
        <NavBar /> {/*el NavBar no tiene una vista particular, por eso no va dentro de Routes*/}
        <Routes> {/*dentro del Routes tiene que ir todos los componente que van a tener una vista en particular*/}
          <Route index path='/' element={<h1>ESTE ES LA HOME</h1>} />
          <Route path='/nosotros' element={<h1>ESTE ES LA HOJA NOSOTROS</h1>} />
          <Route path='/catalogo' element={<ItemListContainer/>} />
          <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
          <Route path='/cotizacion' element={<ItemListContainer />} />
          <Route path='/detalle' element={<ItemDetailContainer />} />
          <Route path='/detalle/:id_moto' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/404' element={ <404notFound /> }/>  */}

          <Route path='*' element={ <Navigate to='/' /> }/> {/* cuando se ingresa una ruta que no existe */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}

export default App
