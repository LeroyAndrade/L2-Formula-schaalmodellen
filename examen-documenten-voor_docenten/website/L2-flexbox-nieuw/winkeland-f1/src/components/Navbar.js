import React, { useState } from 'react';

export default function Navbar() {
 // initial waarde = false, dus gesloten dus niet actief
 const [navbarOpen, setNavbarOpen] = useState(false); 

 // Updater function
 const handleToggle = () =>{
  setNavbarOpen(prev => !prev);
 }
 return (
  <nav className="navBar">
   <i onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</i>

    <ul>...</ul>
  </nav>
 )
}

