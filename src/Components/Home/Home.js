import React, {Component} from 'react';
import Button from './Button';
import Nav from './Nav';
import './Home.css';

class Home extends Component{
    
    render(){
        return(
            <div className='Home' id='Home'>
                <img alt='Logo' className='logo' src='img/logo.png'/>
                <h1>artod.</h1>
                <Button/>
                <Nav/>
            </div>
        )
     }
}

export default Home;
