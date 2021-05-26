import React from 'react';
import '.././js/javaScript.js';
/*
export de functie die properties accepteerd
De naam van de functie moet in dit geval altijd de naam zijn van het bestand aldus Header:
*/
export default function Header(props){
 //en return een div element.
 return (
<aside>

<section id="topMenuContainer">
 <i class="gesloten zwart" id="hamburger"> &#8801; </i>

 <i class="geopend zwart verberg" id="kruisje"> &#10007; </i>

 <div></div>

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
    <span class="logo"><img src="./export-img/wit-persoon.png" alt="wit-persoon icoon" /></span>  
    <a href="./index.html" class="naamMenu wit">Login</a>  
   </article>


 <article class="menuRegel">
 <span class="logo"><img src="./export-img/wit-afbeelding.png" alt="wit afbeelding" /></span>  
  <a href="./modellen.html" class="naamMenu wit">Modellen</a>  
  <button id="bergjeGesloten"  class="logo degDraai180"><img src="./export-img/wit-bergje.png" alt="wit bergje" /></button>  
  <button id="bergjeGeopend" class="logo verberg"><img src="./export-img/wit-bergje.png" alt="wit bergje" /></button>  
 </article>


  <section id="dropdownContainer">

  <article id="dropdownSectie">
   <span class="logo"><img src="./export-img/zwart-auto.png" alt="wit auto afbeelding 1" /></span>  
   <a href="#" class="naamMenu rood">Ferrari</a>                       
  </article>

  <article >
   <span class="logo"><img src="./export-img/zwart-auto.png" alt="wit auto afbeelding 2" /></span>  
   <a href="#" class="naamMenu zwart">Mercedes</a>                        
  </article>

  <article >
   <span class="logo"><img src="./export-img/zwart-auto.png" alt="wit auto afbeelding 3" /></span>  
   <a href="#" class="naamMenu blauw">Redbull</a>               
  </article>
  </section>






  <article class="menuRegel">
   <span class="logo"><img src="./export-img/wit-upload.png" alt="wit upload icoon" /></span>  
   <a href="./upload.html" class="naamMenu wit">Upload</a>   
 </article>


 <article class="menuRegel">
 <span class="logo"><img src="./export-img/wit-registreer.png" alt="wit registreer icon" /></span>  
 <a href="./registreer.html" class="naamMenu wit">Registreer</a>  
</article>




<article class="menuRegel">
 <span class="logo"><img src="./export-img/wit-munt.png" alt="wit spaar icon" /></span>  
 <a href="./munten.html" class="naamMenu wit">Sparen</a>  
</article>


  </section>  
   </nav>  
   </section>

   <img id="senna-voertuig" src="./export-img/Senna.png" alt="Ayrton Senna" />
  </section>

 </aside>


 );
};