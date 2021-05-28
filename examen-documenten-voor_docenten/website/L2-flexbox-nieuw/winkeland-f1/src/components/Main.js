import React from 'react';

import Product from './Product';
// import '../js/javaScript.js';
/*
export de functie die properties accepteerd
De naam van de functie moet in dit geval altijd de naam zijn van het bestand aldus Header:
*/
export default function Main(props){
 //en return een div element.
 const { products } = props;
 return (
 <main className="block col-2">
  <h2>Producten</h2>

  <div>
   { products.map((product) =>(
    <Product key={product.id} product={product}></Product>
   )) }
  </div>
 </main>

 );
};
