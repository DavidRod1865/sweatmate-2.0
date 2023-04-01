import { useState } from 'react'
import './App.css'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Components/Home'

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Footer />
    </div>
  )
}
