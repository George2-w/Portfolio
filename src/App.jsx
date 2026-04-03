import { useState } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <> 
    <BrowserRouter basename="/PortfolioDocs/">
    <Routes>
      <Route index element={<Home/>}/> 
    </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
