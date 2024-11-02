// src/pages/Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
            <Footer />
        </>
    );
};

export default Home;
