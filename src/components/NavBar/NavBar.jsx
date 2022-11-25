import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import CartWidget from './CartWidget';

function NavBar(props) {

    let styleNav = {
        background:props.color,
        height:props.height,
        display:props.display,
        alignItems: 'center',
        padding: '10px'
        
    } 

  return (

    <div style={styleNav} className="menu-container">
        <Logo width="30%"/>
        <Menu width="50%"/>
        <CartWidget width="20%"/>
    </div>
  )
}

export default NavBar