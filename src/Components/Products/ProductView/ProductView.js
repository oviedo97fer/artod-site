import React from 'react';

import './ProductView.css';

const ProductView = (props)=>{
    const divStyle = {
        backgroundImage: 'url(' + props.productImgUrl + ')'
      };
    return(
        <div className='ProductView'>
            <div className='ProductViewHead' style={divStyle}></div>
            <h2>{props.productTitle}</h2>
        </div>
    )
}

export default ProductView;