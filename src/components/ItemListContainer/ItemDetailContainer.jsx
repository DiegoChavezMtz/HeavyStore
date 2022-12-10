import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { getSingleItem } from '../../services/mockServices';
import ItemDetail from './ItemDetail';



function ItemDetailContainer() {

  const [product,setProduct] = useState([]);
  let {itemID} = useParams();

      useEffect(()=>{
          getSingleItem(itemID).then((respuesta)=> setProduct(respuesta))
      },[]);

  return (
    <ItemDetail name={product.name} img={product.img} price={product.price} />
  )
}

export default ItemDetailContainer