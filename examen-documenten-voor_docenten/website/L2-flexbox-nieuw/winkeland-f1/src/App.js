//import logo from './logo.svg';
import React from 'react';
import './Header.css';
// import './js/javaScript.js';

import Header from './components/Header';
import Main from './components/Main';
import Winkelmand from './components/Winkelmand';
import data from './data';
import { useState } from 'react';
//import Winkelmand from './components/winkelmand';

function App() {
 //Roep de objecten producten op
 const { products } = data;

 //hook implementeer een state in een functioneel component
                                  //useState winkelmand is default leeg
 const [cartItems] = useState([]);
 
  return (
   <div className="App">
    {/*Menu REACT object*/}
    <Header></Header>

    {/*Winkelmand REACT object*/}
    <Winkelmand>cartItems = {cartItems} </Winkelmand>

    {/*Winkelmand Main object*/}
    <div className="row">
     <Main> products = {products} </Main>
    </div>
   </div>
  );
}

export default App;
