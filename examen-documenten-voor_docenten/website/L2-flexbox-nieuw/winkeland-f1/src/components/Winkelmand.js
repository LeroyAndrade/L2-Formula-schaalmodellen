import React from 'react';

/*
export de functie die properties accepteerd
De naam van de functie moet in dit geval altijd de naam zijn van het bestand aldus Header:
*/
export default function Winkelmand(props){
 const cartItems = props;
 //en return een div element.
 return <aside className="block col-1"> Winkelmand 
 <h2>Winkelmand items</h2>
 <span>
  {/*if statement*/}
  {cartItems.length === 0 && <div>Winkelmand is leeg</div>}
 </span>
 </aside>;
};