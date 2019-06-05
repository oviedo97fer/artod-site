import React, {Component} from 'react';
import './Banner.css';
import tobaco from './tobaco.jpg';

class Banner extends Component{
    render(){
        return(
            <div className='Banner'>
                <img alt='tobaco' src={tobaco} className='tobaco'/>
                <img alt='hoja de tabaco' src='img/hoja.png' className='hoja-tobaco'/>
                <div className='blur-banner'></div>
                <div className='Banner-desc'>
                    <h1>¿QUÉ ES ARTOD?</h1>
                    <h3>Lorem Ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et.</h3>
                </div>
            </div>
        )
    }
}

export default Banner;