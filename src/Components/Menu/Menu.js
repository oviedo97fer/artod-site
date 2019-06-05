import React, { Component } from 'react';
import './Menu.css';
import Nav from '../Home/Nav';
import { ReactComponent as Blur } from './blur.svg'

class Menu extends Component{
    constructor(){
        super();
        this.state = {
            displayMenu: false,
          };
        this.handleMenu = this.handleMenu.bind(this);
    }
    handleMenu(){
        this.setState({
            displayMenu: !this.state.displayMenu
           });
    }
    render(){
        const { displayMenu } = this.state;
        return(
            <div className='Menu'>
                <img onClick={this.handleMenu} alt='menu' src='img/menu.png' className='menu-btn'/>
                <div className={displayMenu ? "Menu-bar-open Menu-bar" : "Menu-bar"}>
                    <h1>artod.</h1>
                    <Nav className='Nav-menu'/>
                </div>
                {/* <div className='blur'>
                     <Blur/>
                </div> */}
            </div>
        )
    }
}
export default Menu;