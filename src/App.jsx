import { useState } from 'react'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Work from './components/Work'
import { GlobalStyle } from './styles/Global.styled'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Sidebar from './components/Sidebar'

import './App.css'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }


  return (
    <>
    {/* <Sidebar 
      isOpen  = {isOpen}
      toggle = {toggle}
    /> */}
    <Header 
      toggle = {toggle}
    />
    <HomePage />
    <About/>
    <Work />
    <Contact />
    <Footer />
    <GlobalStyle />
      
    </>
  )
}

export default App
