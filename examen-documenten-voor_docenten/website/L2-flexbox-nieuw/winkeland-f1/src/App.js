import Header from './components/Header';
import Main from './components/Main';
import MenuOpen from './components/classes/MenuOpen';
import Winkelmand from './components/Winkelmand';
import data from './voertuigModellen.js';



//Importeer useState om het te gebruiken voor winkelmand
import react, { useState } from 'react';
import FunctionClick from './components/classes/FunctionClick';
import Navbar from './components/Navbar';


// import './js/javaScript.js';


function App() {
 //Roep de objecten producten op
 const { products } = data;

 //hook implementeer een UseState in een functioneel component voor de winkelmand inhoud
 const [winkelmandItems, setWinkelmandItems] = useState([]);

 //toevoegen aan winkelmandje
 const onAdd = (product) => {
  const itemBestaat = winkelmandItems.find((x) => x.id === product.id);

  if (itemBestaat){
     setWinkelmandItems(
     winkelmandItems.map((x) => 
     x.id === product.id 
  ?  {...itemBestaat, qty: itemBestaat.qty +1 } 
  : x ));
 }
 else {
      setWinkelmandItems([...winkelmandItems, {...product, qty: 1}])
      }
 };

 //Verwijder item van winkelmandje
 const onRemove = (product) => {
  const itemBestaat = winkelmandItems.find((x) => x.id === product.id);

  if   (itemBestaat.qty === 1)
       {
                                       //return boolean die de id vergelijkt met de product.id
       setWinkelmandItems(winkelmandItems.filter((x) => x.id !== product.id));
       }
  else {
       setWinkelmandItems(
       winkelmandItems.map((x) => 
       x.id === product.id 
       ?  {...itemBestaat, qty: itemBestaat.qty -1 } 
       : x ));
       }
 };

  return (
   
   <div className="App">
    {/* useState */}
    <Navbar></Navbar>
    
    {/*Menu REACT object*/}
  
    <Header telWinkelmandItems={winkelmandItems.length}></Header>

    {/* function eventhandlers */}
    <FunctionClick> </FunctionClick>
    <MenuOpen></MenuOpen>

    {/*Winkelmand Main object en geef de functie onAdd door*/}
    <div className="row">
    <Main onAdd={onAdd} products={products}></Main>



    </div>
       {/*Winkelmand REACT object*/}
       <Winkelmand winkelmandItems={winkelmandItems} onAdd={onAdd} onRemove={onRemove}></Winkelmand>

   </div>
   
  );
}
export default App;

