'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useInView } from 'framer-motion'; // Or use GSAP for scroll
import { useRef, useEffect } from 'react';

const Avatar3D = () => {
    const { scene } = useGLTF('/models/Desk.glb'); // Replace with your GLTF model
    return <primitive object={scene} scale={1} />;
};

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            // Animate with Framer or GSAP here
        }
    }, [inView]);

    return (
        <section ref={ref} className="h-screen flex items-center justify-center py-20 bg-white">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
                    <p className="text-lg text-gray-600">
                        I'm a passionate Frontend Developer with 5+ years of experience in building interactive web experiences. Skilled in React, Three.js, and animations. Background in UI/UX design.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full h-64"
                >
                    <Canvas camera={{ position: [0, 0, 5] }}>
                        <ambientLight intensity={0.5} />
                        <Avatar3D />
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </motion.div>
            </div>
        </section>
    );
}
