import React from 'react';
import './Nav.css';
const Nav = ()=>{
    return(
        <ul className='Nav'>
            <li><a href='Home'>HOME</a></li>
            <li><a href='#'>¿QUIENES SOMOS?</a></li>
            <li><a href='#'>COMPRAR</a></li>
            <li><a href='#'>CONTACTO</a></li>
        </ul>
    )
}
export default Nav;