// src/components/Skills.js
import React from 'react';
import { FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma } from 'react-icons/fa';
import { SiCplusplus, SiUnity, SiDocker, SiKubernetes, SiC, SiMysql, SiPostgresql, SiMongodb, SiFirebase, SiGithub, SiVisualstudiocode, SiIntellijidea, SiJira, SiTrello, SiExpress } from 'react-icons/si';
import '../styles/Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation';


const skillCategories = [
    {
        category: 'Languages',
        skills: [
            { name: 'Python', icon: <FaPython /> },
            { name: 'Java', icon: <FaJava /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'C', icon: <SiC /> },
            { name: 'JavaScript', icon: <FaJs /> },
        ],
    },
    {
        category: 'Web Development',
        skills: [
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Node.js', icon: <FaNodeJs /> },
            { name: 'Express.js', icon: <SiExpress /> },
        ],
    },
    {
        category: 'Database Management',
        skills: [
            { name: 'SQL (MySQL)', icon: <SiMysql /> },
            { name: 'NoSQL (Firebase)', icon: <SiFirebase /> },
        ],
    },
    {
        category: 'Game Development',
        skills: [
            { name: 'Unity', icon: <SiUnity /> },
        ],
    },
    {
        category: 'DevOps & Cloud Technologies',
        skills: [
            { name: 'Docker', icon: <SiDocker /> },
        ],
    },
    {
        category: 'Tools & Software',
        skills: [
            { name: 'Version Control (Git)', icon: <SiGithub /> },
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'IDEs (Visual Studio Code)', icon: <SiVisualstudiocode /> },
            { name: 'Figma', icon: <FaFigma /> },
        ],
    },
];

const Skills = () => {
    const ref = useScrollAnimation('slide-in-right');
    return (
        <section ref={ref} className="skills hidden" id="skills">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skillCategories.map((category, index) => (
                    <div key={index} className="skills-card">
                        <h3>{category.category}</h3>
                        <div className="skills-list">
                            {category.skills.map((skill, skillIndex) => (
                                <div key={skillIndex} className="skill-item">
                                    <div className="icon">{skill.icon}</div>
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
