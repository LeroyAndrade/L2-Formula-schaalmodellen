import React from 'react'; 

export default function Product(props) {
 const {product} = props;
 return (
  <article>
   <img className="afbeelding-fit" src={products.image} alt={products.name}></img>
   <h3>{products.name}</h3>
   <div>€{products.price}</div>
   <div><button>Voeg toe aan winkelmand</button></div>
  </article>
 )
}  
