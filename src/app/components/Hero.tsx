'use client';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import { useRef } from 'react';

const Hero3D = () => {
    // const meshRef = useRef<any>();
    const meshRef = useRef<any | null>(null); // Add the type explicitly


    return (
        <Canvas className="w-full h-screen" camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Float speed={2}>
                <mesh ref={meshRef}>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial color="#3B82F6" />
                </mesh>
                <Text
                    position={[0, 0, 0]}
                    fontSize={0.5}
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                >
                    John Doe
                </Text>
            </Float>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500 text-white overflow-hidden">
            <Hero3D />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="absolute z-10 text-center px-4"
            >
                <h1 className="text-6xl md:text-8xl font-bold mb-4">
                    Hi, I’m [Your Name],
                    <br />
                    a Frontend Developer
                </h1>
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-xl cursor-pointer"
                >
                    Scroll Down
                    <span className="ml-2">↓</span>
                </motion.div>
            </motion.div>
        </section>
    );
}
