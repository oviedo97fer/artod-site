import React, {Component} from 'react';
import './Footer.css';
import Logo from '../Home/LOGO.png';

class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                <img src={Logo} alt='Artod' className='logo-footer'/>
                <img alt='hoja de tabaco' src='img/hoja.png' className='hoja-tobaco-foot'/>
                <div className='Foot'>
                    <h1>artod.</h1>
                    <a href='https://www.instagram.com'><img src='img/ig.png' alt='Instagram'/></a>
                    <h4>2019</h4>
                </div>
            </div>
        )
    }
}
export default Footer;