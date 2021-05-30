import React from 'react';

export default function Basket(props) {
 const {winkelmandItems, onAdd, onRemove} = props;//onAdd is de property van props (de array van de modellen)

 const winkelmandPrijs = winkelmandItems.reduce((a,b ) => a + b.price * b.qty, 0);
 const BTW = winkelmandPrijs + 11;
 const verzendKosten = winkelmandPrijs > 50 ? 0 : 10;
 const totaalPrijs = winkelmandPrijs + BTW + verzendKosten;

  return (
    <aside className="">
      <h2>Cart Items</h2>
      {/* {if winkelmandItems lengte === 0 dan toon je} */}
      <div>{winkelmandItems.length === 0 && <div>Winkelmand aantallen: {winkelmandItems.length} </div>}</div>
     {winkelmandItems.map((item) =>(
      //render een div
      
      <article key={item.id} className="row">
       <div>{winkelmandItems.name}</div>
      
      <div> 
        <img src={item.image}></img>
        <button onClick={() => onAdd(item)}    className="add">   &#43; voeg meer toe</button>
        <button onClick={() => onRemove(item)} className="remove">&#45; verwijder</button>
        {item.qty} x &euro{item.price.toFixed(2)}
       </div>

      </article>
     ))}

      {winkelmandItems.length !== 0 &&(
      <>
       <hr></hr>
       <article className="vulMijIn">
        <div className="vulMijIn">Artikel prijs</div>
        <div className="vulMijIn">&euro; {winkelmandPrijs.toFixed(2)}</div>
       </article>

       <article className="vulMijIn">
        <div className="vulMijIn">BTW</div>
        <div className="vulMijIn">&euro; {BTW.toFixed(2)}</div>
       </article>

       <article className="vulMijIn">
        <div className="vulMijIn">Verzendkosten</div>
        <div className="vulMijIn">&euro; {verzendKosten.toFixed(2)}</div>
       </article>

       <article className="vulMijIn">
        <div className="vulMijIn"><b>Totaal prijs</b></div>
        <div className="vulMijIn">&euro; {totaalPrijs.toFixed(2)}</div>
       </article>
          <div className="vulMijIN"></div>
      </>
      )}

    </aside>
  );
}
