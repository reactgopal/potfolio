import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Points } from '@react-three/drei';
import { PointMaterial } from '@react-three/drei';
const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
});

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null); // Define the type of formRef
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data); // Integrate with EmailJS or API
        alert('Message sent!');
    };

    return (
        <section className="relative h-screen flex items-center justify-center py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
            {/* Subtle 3D Particle Background */}
            <Canvas className="absolute inset-0">
                <Points>
                    <PointMaterial color="#3B82F6" size={0.02} />
                    {Array.from({ length: 1000 }).map((_, i) => (
                        <mesh key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]} />
                    ))}
                </Points>
            </Canvas>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="container mx-auto px-4 max-w-md z-10"
            >
                <h2 className="text-4xl">Contact Me</h2>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="mt-8">
                    <input type="text" {...register('name')} placeholder="Name" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
                    {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
                    <input type="email" {...register('email')} placeholder="Email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
                    {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
                    <textarea {...register('message')} placeholder="Message" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500" />
                    {errors.message && <p className="text-red-500 mt-2">{errors.message.message}</p>}
                    <button type="submit" className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Message</button>
                </form>
            </motion.div>
        </section>
    );
}