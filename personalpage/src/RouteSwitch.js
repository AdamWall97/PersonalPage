import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import AboutMe from './AboutMe'
import ContactMe from './ContactMe'
import React from 'react'

const RouteSwitch = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/ContactMe" element={<ContactMe />} />
        </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
