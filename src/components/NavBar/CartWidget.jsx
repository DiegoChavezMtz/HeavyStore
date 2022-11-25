import React from 'react'
import Cart from './../../img/shopping-cart.png'

function CartWidget(props) {
    let styleCart ={
        width:props.width,
        height:'100%'
    }
  return (
    <div className='cart-container' style={styleCart}>
        <figure className='img-cart-container' >
            <img src={Cart} alt="" />
        </figure>
        <p className='product-num'>1</p>
    </div>
  )
}

export default CartWidget