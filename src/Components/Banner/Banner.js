import React, {Component} from 'react';
import './Banner.css';

class Banner extends Component{
    render(){
        return(
            <div className='Banner'>
                <img alt='tobaco' src='img/tobaco.jpg'/>
                <img alt='hoja de tabaco' src='img/hoja.png' className='hoja-tobaco'/>
            </div>
        )
    }
}

export default Banner;