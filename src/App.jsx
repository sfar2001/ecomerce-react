import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/compos/Navbar'
import Footer from './compos/Footer';
import Men from './pages/Men'
import Welcome from './pages/Welcome';
import Women from './pages/Women';
import Electronics from './pages/Electronics';
export default function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Welcome" element={<Welcome />} />


        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  )
}
