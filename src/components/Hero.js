// src/components/Hero.js
import React, { useEffect, useRef } from 'react';
import '../styles/Hero.css';
import * as THREE from 'three';
import { ImprovedNoise } from 'three/examples/jsm/math/ImprovedNoise';
import resume from '../assest/Tanay_resume (01-02-2025).pdf'; // Adjust the path to your resume file
import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
    const heroRef = useRef();
    const ref = useScrollAnimation('slide-in-bottom');
    useEffect(() => {
        // Existing Three.js code remains unchanged
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 2;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        heroRef.current.appendChild(renderer.domElement);

        const ambientLight = new THREE.AmbientLight(0x404040, 2);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 100);
        pointLight.position.set(5, 5, 5);
        scene.add(pointLight);

        const geometry = new THREE.SphereGeometry(0.5, 64, 64);
        const material = new THREE.MeshStandardMaterial({
            color: 0x8c92ac,
            roughness: 0.3,
            metalness: 0.6,
            transparent: true,
            opacity: 0.5,
        });

        const jellyMesh = new THREE.Mesh(geometry, material);
        jellyMesh.position.x = -1.5;
        scene.add(jellyMesh);

        const noise = new ImprovedNoise();
        const vertices = jellyMesh.geometry.attributes.position.array;
        const originalPositions = new Float32Array(vertices.length);
        originalPositions.set(vertices);

        let time = 0;

        const animate = () => {
            requestAnimationFrame(animate);

            time += 0.005;

            for (let i = 0; i < vertices.length; i += 3) {
                const x = originalPositions[i];
                const y = originalPositions[i + 1];
                const z = originalPositions[i + 2];

                vertices[i] = x + 0.3 * noise.noise(x * 1.25 + time, y * 1.25, z);
                vertices[i + 1] = y + 0.3 * noise.noise(x, y * 1.25 + time, z);
                vertices[i + 2] = z + 0.3 * noise.noise(x, y, z + time * 1.25);
            }

            jellyMesh.geometry.attributes.position.needsUpdate = true;
            jellyMesh.rotation.y += 0.001;

            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            window.removeEventListener('resize', () => {});
            heroRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return (
        <section className=" hero hidden" ref={ref}>
            <div className="hero-sphere" ref={heroRef}></div>
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hello, I'm Tanay</h1>
                    <p>Welcome to my portfolio!</p>
                </div>
                <a href={resume} className="hero-button" download>Download My Resume</a>
            </div>
        </section>
    );
};

export default Hero;
