// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/App.css';
import TestThree from './components/TestThree'; // Correct import
import Contact from './components/Contact';
const App = () => {
    return (
        <div>
           {/* <TestThree />  */}
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
             <Contact/>
            <Footer />
        </div>
    );
};

export default App;


 