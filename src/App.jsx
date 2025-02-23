import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import Contact from './Component/Contact/Contact';
import About from './Component/About/About';
import Use from './Component/Use/Use';

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Use/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
