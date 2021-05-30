import React from 'react';

import Product from './Product';
// import '../js/javaScript.js';
/*
export de functie die properties accepteerd
De naam van de functie moet in dit geval altijd de naam zijn van het bestand aldus Header:
*/
export default function Main(props){
 //en return een div element.

 //Producten krijg je van props en dat is de voertuigenModellen array
 // plaats die array in een variabel
 const { products, onAdd,onRemove } = props; //onAdd is de property van props (de array van de modellen)
 return (
 <main className="">
  <h2>Producten</h2>
{/*en roep vervolgens de inhoud op
Om een item te renderen van de array
type de naam van de array en gebruik de   .map methode  van de array  zoals in PHP alleen zonder de foreach: producten as product etc.

voor de map function moet je een key plaatsen om een fatal duplicate error te voorkomen in de error log*/}

  <div className="row">
   {products.map((product) => (
     <Product key={product.id} product={product} onAdd={onAdd}></Product>
   ))}
  </div>
 </main>

 );
};
