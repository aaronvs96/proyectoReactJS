import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //importando boostrap
import { useEffect, useState } from 'react';


function App() { // este es un componente de react

  const getFetchApi = async (url) => {
    try {
      const query = await fetch(url) //query captura la respuesta del fetch
      const queryParse = await query.json()//parsear la respuesta

      console.table(queryParse.results)

    } catch (error) {
      console.log(error)
    }

    // .then(resp => resp.json())
    // .then(data => console.table(data))
    // .catch(error => console.log(error))
  }

  useEffect(() => {
    // const url = '../assets/data_personas.json'
    const url = 'https://pokeapi.co/api/v2/pokemon/?offset=20'
    getFetchApi(url);
  }, [])


  return ( //un componente siempre retorna un jsx
    <div className='App'>
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App
