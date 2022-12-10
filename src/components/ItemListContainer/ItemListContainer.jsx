import React,{useState,useEffect} from 'react'
import './ItemListContainer-style.css'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { getItemsCategory ,getItems } from '../../services/mockServices';

function ItemListContainer(props) {
  let {categoryID} = useParams();
  const [products,setProducts] = useState([]);

  useEffect(()=>{

    if(categoryID === undefined){

      getItems().then((respuesta)=> setProducts(respuesta))

    }else{
      getItemsCategory(categoryID).then((respuestaFiltrada)=> setProducts(respuestaFiltrada))
    }

  },[categoryID]);
 
  return (
    <div className='itemList-container'>
      <h1>{props.greeting}</h1>
      <ItemList data={products}/>

    </div>
  )
}

export default ItemListContainer