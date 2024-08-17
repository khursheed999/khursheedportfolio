// src/App.js
import React from 'react';
import ParticlesBackground from './Components/BackgroundAnimation/ParticlesBackground';
import './App.css';
import NavBar from './Components/Header/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App ">
      <ParticlesBackground />
      <NavBar/>
      <div className="content py-0 mt-20 w-full w-100">
       <Home/>
       <About/>
       <Skills/>
       <Projects/>
       <Contact/>
       <Footer/>

      </div>
    </div>
  );
}

export default App;
