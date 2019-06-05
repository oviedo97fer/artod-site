import React from 'react';
import './App.css';

import Menu from './Components/Menu/Menu';
import Home from './Components/Home/Home';
import Banner from './Components/Banner/Banner';
import Products from './Components/Products/Products';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
      <Home/>
      <Banner/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
