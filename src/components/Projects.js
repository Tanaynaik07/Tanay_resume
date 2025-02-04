// src/components/Projects.js
import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';

import legal from "../assest/imgs/legal.jpeg";
import vortex from '../assest/imgs/Vortex_360_logo.png';
import tic from "../assest/imgs/tic.png";
import robo from "../assest/imgs/robo.png"
import book from '../assest/imgs/book.png';
import shoe from '../assest/imgs/shoe.jpg';
import finance from "../assest/imgs/finance.png";
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [

    {
        title: 'Finance-manager',
        description: 'Full stack web app to manage your finance, your savings and expenses',
        imgSrc:finance ,
        tools: ['EJS','ExpressJS', 'Node.js'],
        link: 'https://github.com/Tanaynaik07/finance-management',
        demo: 'https://finance-management-54yr.onrender.com/',
         
    },
    {
        title: 'Legally',
        description: 'A front-end website to connect clients with correct lawyers',
        imgSrc:legal ,
        tools: ['NextJs', 'CSS', 'Node.js'],
        link: 'https://github.com/Tanaynaik07/Legally',
        demo: 'https://legally-three.vercel.app/',
         
    },
    {
        title: 'Vortex 360',
        description: 'Hack-e-Thone website',
        imgSrc: vortex,
        tools: ['JS', 'CSS', 'HTML','ReactJs','ThreeJs'],
        link: 'https://github.com/Tanaynaik07/Vortex-360-Event-2024/tree/main',
        demo: 'https://enchanting-swan-8e8d4b.netlify.app/',
        
    },

    {
        title: 'Tic-Tac-Toe game',
        description: 'Tic Tac Toe with some twists',
        imgSrc:  tic,
        tools: ['JS', 'CSS', 'HTML'],
        link: 'https://github.com/Tanaynaik07/TicTocToe',
        demo: "https://tic-toc-toe-nine.vercel.app/",
        
    },
    {
        title: 'Robowars',
        description: 'Event Website: Robowars',
        imgSrc:  robo,
        tools: ['JS', 'CSS', 'HTML','React'],
        link: 'https://github.com/Tanaynaik07/Vortex-360-Event-2024',
        demo: 'https://robo-war-clone.vercel.app/',
        
    },
    {
        title: 'Shoe Store',
        description: 'Check out our shoe e-com with basic features',
        imgSrc:  shoe,
        tools: ['JS', 'CSS', 'HTML'],
        link: 'https://github.com/Tanaynaik07/Shoe_store',
        demo: 'https://shoe-store-six-puce.vercel.app/',
        
    },
    
];

const Jelly = ({ position }) => {
    return (
        <div className="jelly" style={{ left: position.x, top: position.y }} />
    );
};

const Projects = () => {
    const [jellies, setJellies] = useState([]);
    const [isHovered, setIsHovered] = useState(false); // New state for hover effect
    const ref = useScrollAnimation('slide-in-left');
    useEffect(() => {
        const numJellies = 10;
        const initialJellies = Array.from({ length: numJellies }).map(() => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
        }));
        setJellies(initialJellies);

        const interval = setInterval(() => {
            setJellies(prevJellies => prevJellies.map(jelly => ({
                x: jelly.x + (Math.random() - 0.5) * 2000,
                y: jelly.y + (Math.random() - 0.5) * 2000,
            })));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`projects     `} id="projects" >
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card"
                         onMouseEnter={() => setIsHovered(true)} 
                         onMouseLeave={() => setIsHovered(false)} 
                    >
                        <img src={project.imgSrc} alt={`${project.title} screenshot`} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="tools">
                            {project.tools.map((tool, idx) => (
                                <span key={idx} className="tool">{tool}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">GitHub</a>
                            <br></br>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-demo">Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {/* Render jellies in the background */}
            {jellies.map((jelly, index) => (
                <Jelly key={index} position={jelly} />
            ))}
            <div className="github-link" style={{ marginTop: '2rem', textAlign: 'center' }}>
                <p>Check out more of my projects on my <a href="https://github.com/Tanaynaik07" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
            </div>
        </section>
    );
    
};

export default Projects;
