import React, { Component } from 'react';
import './Menu.css';
import { ReactComponent as Blur } from './blur.svg'

class Menu extends Component{
    render(){
        return(
            <div className='Menu'>
                <img alt='menu' src='img/menu.png' className='menu-btn'/>
                <div className='Menu-bar'></div>
                {/* <div className='blur'>
                     <Blur/>
                </div> */}
            </div>
        )
    }
}
export default Menu;