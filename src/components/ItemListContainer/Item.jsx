import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {

    let urlDetail = `/item/${props.id}`

  return (
    <div className='item-container'>
        
        <div className='item-img-container'>
            <img src={props.img} alt="" />
        </div>
        <div className='item-details-container'>
            <h2>{props.name}</h2>
            <h3>{props.price}</h3>
        </div>
        <Link to={urlDetail}>Comprar</Link>
    </div>
  )
}



export default Item
