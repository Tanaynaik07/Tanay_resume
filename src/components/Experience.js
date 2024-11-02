// src/components/Experience.js
import React from 'react';
import '../styles/Experience.css';

const experience = [
    { title: 'Vortex 360 Hackathon', year: '2024', role: 'Frontend Developer' },
    { title: 'Robo-VITics Club', year: '2024', role: 'Senior Core Member' }
];

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <div className="timeline">
                {experience.map((exp, index) => (
                    <div className="timeline-item" key={index}>
                        <h3>{exp.title}</h3>
                        <p>{exp.role} - {exp.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
