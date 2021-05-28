
//menu
const hamburger = document.getElementById("hamburger");
const kruisje = document.getElementById("kruisje");

//menu dropdown
const wrapperNavMenu = document.getElementById("wrapperNavMenu");
const dropdownContainer = document.getElementById("dropdownContainer");

const bergjeGeopend = document.getElementById("bergjeGeopend");
const bergjeGesloten = document.getElementById("bergjeGesloten");

//F1 afbeelding na menu 
let sennavoertuig = document.getElementById("senna-voertuig");




//Hamburger menu button gesloten
hamburger.addEventListener('click', function(){

  wrapperNavMenu.style.display = "block";
  hamburger.style.display = "none";
  kruisje.style.display = "inline-block";
  console.log('klik op hamburger');
  


//Hamburger menu button geopend
  kruisje.addEventListener('click', function(){
   wrapperNavMenu.style.display = "none";
   kruisje.style.display = "none";
   hamburger.style.display = "inline-block";
   console.log('Klik op kruisje');
 
   dropdownContainer.style.display = "none";
   sennavoertuig.style.display = "none";

 });
 


  /*default waarde voor de modellen dropdown*/
  dropdownContainer.style.display = "none"; 
  bergjeGesloten.style.display = "inline-block";
  bergjeGeopend.style.display = "none";
  sennavoertuig.style.display = "block";
  
 });


 /*Modellen dropdown gesloten*/ 
 bergjeGesloten.addEventListener('click', function(){
  console.log('dropdown is open geklikt');
  //toon de Formule 1: Ferrari, Mercedes, Redbull
   dropdownContainer.style.display = "block";
   bergjeGesloten.style.display = "none";
   bergjeGeopend.style.display = "inline-block";
 
 });


/*Dropdown modellen driehoekje klik*/ 
 /*Modellen dropdown geopend*/ 
 bergjeGeopend.addEventListener('click', function(){
  console.log('dropdown is gesloten');
    //verberg de Formule 1: Ferrari, Mercedes, Redbull
   dropdownContainer.style.display = "none";
   bergjeGesloten.style.display = "inline-block";
   bergjeGeopend.style.display = "none";
 });

