import { useState } from 'react'

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //importando boostrap


function App() { // este es un componente de react

  
  return ( //un componente siempre retorna un jsx
    <div className='App'>
      <NavBar />
      <ItemListContainer  />
    </div>
  )
}

export default App
