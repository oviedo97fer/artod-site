import React, {Component} from 'react';
import Button from './Button';
import Nav from './Nav';
import './Home.css';

import Logo from './LOGO.png';

class Home extends Component{
    
    render(){
        return(
            <div className='Home' id='Home'>
                <img alt='Logo' className='logo' src={Logo}/>
                <img alt='hoja de tabaco' src='img/seed.png' className='seed'/>
                <img alt='hoja de tabaco' src='img/seed1.png' className='seed1'/>
                <h1>artod.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ciusmod</p>
                <Button/>
                <Nav/>
            </div>
        )
     }
}

export default Home;
