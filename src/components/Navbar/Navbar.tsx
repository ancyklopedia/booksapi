import React from 'react'
import "./Navbar.css"
import logo3 from "./logo3.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar1">
      <img src={logo3} width="200rem"/>
      <div className="quote">
        <div> Każdy, kto czyta, staje się dziwakiem. Czytanie daje wiedzę, a ponieważ wokół dominuje raczej ignorancja, wiedza oznacza dziwactwo.</div>
        <div className="author">José Carlos Somoza, "Klucz do otchłani"</div>
      </div>

      
    
      {/* <a  href="/audiobooki">
            <button className="navbar-button"> Audiobooki </button>
      </a> */}
    </div>      
    <div className="titlenav"> Free Audiobooks </div>
    </>
  )
}

export default Navbar