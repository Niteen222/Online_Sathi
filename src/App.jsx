import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Use from './Component/Use/Use';
import Partners from './Component/Partners/Partners';
import Saathi from './Component/Sathi/Saathi';

function App() {

  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='partner' element={<Partners/>} />
          <Route path='sathi' element={<Saathi/>} />
          <Route path='contact' element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
