import React from 'react'

function ItemDetail(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img src={props.img} alt="" />
      <h4>{props.price}</h4>
      
    </div>
  )
}

export default ItemDetail