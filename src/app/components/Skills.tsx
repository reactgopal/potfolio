'use client';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
// import { ReactIcon, ThreeIcon, GsapIcon, TailwindIcon } from 'lucide-react'; // Use lucide or custom icons
import { Code, Box, Activity, Zap } from 'lucide-react';

const skills = [
    { name: 'React', level: 95, icon: Code },
    { name: 'Three.js', level: 85, icon: Box },
    { name: 'GSAP', level: 90, icon: Activity },
    { name: 'Tailwind', level: 95, icon: Zap },
];

export default function Skills() {
    const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        skillRefs.current.forEach((ref, index) => {
            if (ref) {
                gsap.fromTo(
                    ref.querySelector('.progress-circle'),
                    { strokeDasharray: 300, strokeDashoffset: 300 },
                    {
                        strokeDashoffset: 300 - (skills[index].level / 100) * 300,
                        duration: 1.5,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: ref,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse',
                        },
                    }
                );
            }
        });
    }, []);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills</h2>
                <div className="grid md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <motion.div
                                key={index}
                                ref={(el) => (skillRefs.current[index] = el)}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="text-center"
                            >
                                <div className="w-20 h-20 mx-auto mb-4">
                                    <Icon className="w-full h-full text-blue-500" />
                                </div>
                                <h3 className="text-lg font-semibold mb-4">{skill.name}</h3>
                                <svg className="w-16 h-16 mx-auto" viewBox="0 0 36 36">
                                    <path
                                        className="progress-circle"
                                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#3B82F6"
                                        strokeWidth="2"
                                        strokeDasharray="300"
                                        strokeDashoffset="300"
                                    />
                                    <text x="18" y="20.5" className="text-sm font-bold text-gray-800" textAnchor="middle">
                                        {skill.level}%
                                    </text>
                                </svg>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
