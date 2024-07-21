import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Base from './components/Base'
import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/base" element={<Base />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
