import React from 'react';
import '../opmaak/template.css';

import MenuOpen from './classes/MenuOpen.js';

// import '../js/javaScript.js';   import './index.css';
/*
export de functie die properties accepteerd
De naam van de functie moet in dit geval altijd de naam zijn van het bestand aldus Header:
*/

export default function Header(props){
 const {telWinkelmandItems} = props;
 return (
<aside>

<section id="topMenuContainer">
 <i class="gesloten zwart" id="hamburger" onClick={MenuOpen}> &#8801; </i>

 <i class="geopend zwart verberg" id="kruisje"> &#10007; </i>

{/* todo: handmatig toevoegen aan Flexbox template */}
 <a href ="#/totaal">
  Mandje { '' } 
     {/* is er een item in winkelmandje? true:  laat ze zien */}
  { telWinkelmandItems ? (
   <button className="vulMijIn">{telWinkelmandItems}</button>
      // false toon niets
  ) : ( ' ' )} 
 </a>

 <h1>
 <span id="autovet" class="zwart">Auto&#45;vet</span>
 </h1>
</section>


<section class="vulling">
  <section id="wrapperNavMenu">
  <h2 class="verberg">Formule 1</h2>
  <nav id="menu">
<section id="menuNav">
            


   <article class="menuRegel">
    <span class="logo"><img src="https://www.firesofdestruction.nl/bewijzenmap/l2/kid/p4/export-img/wit-persoon.png" alt="wit-persoon icoon" /></span>  
    <a href="./index.html" class="naamMenu wit">Login</a>  
   </article>


 <article class="menuRegel">
 <span class="logo"><img src="https://www.firesofdestruction.nl/bewijzenmap/l2/kid/p4/export-img/wit-afbeelding.png" alt="wit afbeelding" /></span>  
  <a href="./modellen.html" class="naamMenu wit">Modellen</a>  
  <button id="bergjeGesloten"  class="logo degDraai180"><img src="https://www.firesofdestruction.nl/bewijzenmap/l2/kid/p4/export-img/wit-bergje.png" alt="wit bergje" /></button>  
  <button id="bergjeGeopend" class="logo verberg"><img src="https://www.firesofdestruction.nl/bewijzenmap/l2/kid/p4/export-img/wit-bergje.png" alt="wit bergje" /></button>  
 </article>





  </section>  
   </nav>  
   </section>
   {/* {https://www.firesofdestruction.nl/bewijzenmap/l2/kid/p4/export-img/} */}
        <img id="senna-voertuig" src=".././export-img/Senna.png" alt="Ayrton Senna" /> 
  
  </section>

 </aside>


 );
};
