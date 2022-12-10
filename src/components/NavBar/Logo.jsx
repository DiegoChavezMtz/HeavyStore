import React from 'react'
import Logoimg from './../../img/LogoHeavyStore-01.png';
import { Link } from 'react-router-dom';

function Logo(props) {
    let styleLogo = {
        width: props.width,
        
    }
  return (
    <Link to="/" className='logo-container' style={styleLogo}>
      
        <img src={Logoimg} className="logo-img" alt="" />
      
    </Link>
    
  )
}

export default Logo