import React from 'react'
import {Link} from 'react-router-dom';

function Menu(props) {
    let styleMenu = {
        width: props.width
        
    }
  return (
    <ul className="nav-menu" style={styleMenu}>
            <li className='link-menu'><Link to="/category/single">Sueltas</Link></li>
            <li className='link-menu'><Link to="/category/package">Producto Cerrado</Link></li>
            
    </ul>
  )
}

export default Menu