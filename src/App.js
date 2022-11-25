import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      
      <NavBar color="red" height="100px" display="flex"/>
      <ItemListContainer greeting="Hola, bienvenido a Heavi Store. La mejor tienda de TCG online."/>

    </div>
  );
}

export default App;
