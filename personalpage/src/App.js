import logo from './logo.svg'
import './App.css'
import NavBar from './NavBar'
import React, { useState } from 'react'
import Header from './Header'

function App () {
  const [projects, setProjects] = useState([])

  return (
    <div className="Home">
      <NavBar></NavBar>
      <Header></Header>

      <Icon key={id} id={id} />

      <Projects>
Projects I've worked on

  <Project>
  ScreenSpeak
  </Project>

  <Project>
  API Focused
  </Project>

  <Project>

  </Project>

</Projects>

<Footer>

</Footer>

    </div>
  )
}

export default App
