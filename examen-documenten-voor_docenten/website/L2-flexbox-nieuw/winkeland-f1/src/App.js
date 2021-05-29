import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';
import { useState } from 'react';



function App() {
 //Roep de objecten producten op
 const { products } = data;

 //hook implementeer een state in een functioneel component
  return (
   <div className="App">
    {/*Menu REACT object*/}
    <Header></Header>

    {/*Winkelmand REACT object*/}
    <Basket ></Basket>

    {/*Winkelmand Main object*/}
    <div className="row">
    <Main products={products}></Main>
    </div>
   </div>
  );
}

export default App;

