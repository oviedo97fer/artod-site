import React, {Component} from 'react';
import './Products.css';
import ProductCard from './ProductCard/ProductCard';
import ProductView from './ProductView/ProductView';

class Products extends Component{
    render(){
        return(
            <div className='Products'>
                <h1>PRODUCTOS</h1>
                <div className='ProductList'>
                    <a href='#'><ProductCard srcImg='img/tabaco.png' title='TABACO'/></a>
                    <a href='#'><ProductCard srcImg='img/encendedores.png' title='ENCENDEDORES'/></a>
                    <a href='#'><ProductCard srcImg='img/filtrossedas.png' title="FILTROS & SEDAS"/></a>
                </div>
                <ProductView 
                    productImgUrl='img/tabaco.png'
                    productTitle='TOBACO'/>
            </div>
        );
    }
}

export default Products;