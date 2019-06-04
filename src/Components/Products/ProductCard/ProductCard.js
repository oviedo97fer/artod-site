import React from 'react';
import './ProductCard.css';
const ProductCard = (props)=>{
    return(
        <div className='ProductCard'>
            <img src={props.srcImg}/>
            <h2>{props.title}</h2>
        </div>
    )
}

export default ProductCard;