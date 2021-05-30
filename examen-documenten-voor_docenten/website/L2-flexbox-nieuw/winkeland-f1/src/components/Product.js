import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props; //onAdd is de property van props (de array van de modellen)
  return (
    <div class="menuRegel">
     
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>${product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}> Voeg Toe aan winkelmand</button>
        {/* <button onClick={()=>onRemove(item)}>Verwijder van winkelmand</button> */}
      </div>
    </div>
  );
}
