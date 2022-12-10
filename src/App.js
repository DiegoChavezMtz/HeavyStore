import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from 'react';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

function App() {
  return (
    
      
      <BrowserRouter>
        <div className="App">
      
          <NavBar color="red" height="100px" display="flex"/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Hola, bienvenido a Heavi Store. La mejor tienda de TCG online."/>}/>
            
            <Route path='/item/:itemID' element={<ItemDetailContainer/>}/>
            <Route path='/category/:categoryID' element={<ItemListContainer/>}/>
            <Route path='*' element={<h1>Error 404: No encontrado</h1>}/>
          </Routes>
          
        </div>
        
      </BrowserRouter>

    
  );
}

export default App;
