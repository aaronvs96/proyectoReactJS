import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/container/ItemListContainer';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; //importando boostrap


function App() { // este es un componente de react

  const url = '../assets/data_personas.json'
  fetch(url)
  .then( resp =>resp.json())
  .then( data => console.log(data))
  .catch( error => console.log(error))

  return ( //un componente siempre retorna un jsx
    <div className='App'>
      <NavBar />
      <ItemListContainer  />
    </div>
  )
}

export default App
