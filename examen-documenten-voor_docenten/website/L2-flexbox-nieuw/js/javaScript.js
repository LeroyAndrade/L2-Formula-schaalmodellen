

//menu
const hamburger = document.getElementById("hamburger");
const kruisje = document.getElementById("kruisje");

//menu dropdown
const wrapperNavMenu = document.getElementById("wrapperNavMenu");
const dropdownContainer = document.getElementById("dropdownContainer");

const bergjeGeopend = document.getElementById("bergjeGeopend");
const bergjeGesloten = document.getElementById("bergjeGesloten");

//F1 afbeelding na menu 
const sennavoertuig = document.getElementById("senna-voertuig");

sennavoertuig.style.display = "none";

//Greensock GSAP: 
var timelineMenu = gsap.timeline({repeatRefresh: true});
//Hamburger menu button gesloten
hamburger.addEventListener('dblclick', function(){});

hamburger.addEventListener('click', function xyz(){

  wrapperNavMenu.style.display = "block";
  hamburger.style.display = "none";
  kruisje.style.display = "inline-block";
  console.log('klik op hamburger');
  
// GSAP JAVASCRIPT MENU

                                //css ID   haper 0.100 sec, set positie x-axis 100px naar rechts
        timelineMenu.from('#menuA1', {stagger: .1, xPercent: -100,yPercent: 100, duration: .5}, .4);
        //set CSS opacity 0 naar 1 (visible ) en doe er 1 seconde over wanneer actief en start na 0.400 secondes met het uitvoeren
        timelineMenu.to('#menuA1', {stagger: .1, opacity: 1, duration: 1}, .4);

        timelineMenu.from('#menuA2', {stagger: .1, xPercent: 100, yPercent: 100, duration: .5}, .5);
        timelineMenu.to('#menuA2', {stagger: .1, opacity: 1, duration: 1}, .5);

        timelineMenu.from('#menuA3', {stagger: .1, xPercent: 100, yPercent: 100, duration: .5}, .6);
        timelineMenu.to('#menuA3', {stagger: .1, opacity: 1, duration: 1}, .6);

        timelineMenu.from('#menuA4', {stagger: .1, xPercent: 100, yPercent: 150, duration: .5}, .7);
        timelineMenu.to('#menuA4', {stagger: .1, opacity: 1, duration: 1}, .7);

        timelineMenu.from('#menuA5', {stagger: .1, xPercent: -50, yPercent: -50, duration: .5,}, .9);
        timelineMenu.to('#menuA5', {stagger: .1, opacity: 1, duration: 1}, .9);
        


timelineMenu.restart();

// GSAP JAVASCRIPT MENU



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
  // GSAP JAVASCRIPT MENU
       //toon de Formule 1: Ferrari, Mercedes, Redbull
       timelineMenu.from('.subMenu1', {stagger: 1, xPercent: 100, yPercent: 100, duration: 1});

       timelineMenu.to('.subMenu1', {stagger: 1, opacity: 1, duration: 1}, 2);

       timelineMenu.from('.subMenu2', {stagger: 2, xPercent: 100, yPercent: 100, duration: 2});
       timelineMenu.to('.subMenu2', {stagger: 2, opacity: 1, duration: 1}, 2.3);

       timelineMenu.from('.subMenu3', {stagger: 3, xPercent: 100, yPercent: 100, duration: 3});
       timelineMenu.to('.subMenu3', {stagger: 3, opacity: 1, duration: 1}, 2.5);
 // GSAP JAVASCRIPT MENU
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

