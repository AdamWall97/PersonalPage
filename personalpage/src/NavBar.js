import React from 'react'
import Nav from 'react-bootstrap/Nav'

function NavBar () {
  return (
        <div id="NavBar">

            <h1 onClick="location.href='/'" id="NameLogo">
               Adam Wall <img src="./Images/TreeLogoGreen.svg" id="Logo"> </img>
            </h1>

            <Nav>
                <Nav.Link href="/Aboutme">About me</Nav.Link>
                <Nav.Link href="/Contactme">Contact Me</Nav.Link>
            </Nav>
        </div>
  )
}

export default NavBar
