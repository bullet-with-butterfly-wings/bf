import { useState, useEffect } from 'react'
import Intro from './components/Intro'
import Base from './components/Base'
import NewPr from './components/NewPr'

import { BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/base" element={<Base />} />
        <Route path="/new-pr" element={<NewPr />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
