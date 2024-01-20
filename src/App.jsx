import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import './App.css'

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
  <Router>
    <nav className='nav'>
      <h1><Link to='/'>Mandalart Planner</Link></h1>
      <h3><Link to='/about'>about</Link></h3>
    </nav>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
  </Router>
   

  
  
  
  )
}

export default App
