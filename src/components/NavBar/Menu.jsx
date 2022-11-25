import React from 'react'

function Menu(props) {
    let styleMenu = {
        width: props.width
        
    }
  return (
    <ul className="nav-menu" style={styleMenu}>
            <li className='link-menu'><a href="./">Sueltas</a></li>
            <li className='link-menu'><a href="./">Producto Cerrado</a></li>
            <li className='link-menu'><a href="./">Articulos</a></li>
    </ul>
  )
}

export default Menu