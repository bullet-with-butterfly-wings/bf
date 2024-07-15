import { useState, useEffect } from 'react'
import './App.css'
import Intro from './components/Intro'
import Base from './components/Base'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/base" element={<Base />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
