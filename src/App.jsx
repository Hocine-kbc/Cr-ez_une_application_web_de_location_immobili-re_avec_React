import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Property from './pages/Property/Property'
import Error404 from './pages/Error404'
import Layout from './components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Toutes les pages imbriquées utiliseront Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<Property />} />
          <Route path="*" element={<Error404 />} />
        </Route>        
      </Routes>

    </BrowserRouter>
  )
}

export default App