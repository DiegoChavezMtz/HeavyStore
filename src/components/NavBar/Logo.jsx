import React from 'react'
import Logoimg from './../../img/LogoHeavyStore-01.png';

function Logo(props) {
    let styleLogo = {
        width: props.width,
        
    }
  return (
    <figure className='logo-container' style={styleLogo}>
        <img src={Logoimg} className="logo-img" alt="" />
    </figure>
  )
}

export default Logo