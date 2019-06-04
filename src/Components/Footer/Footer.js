import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component{
    render(){
        return(
            <div className='Footer'>
                
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