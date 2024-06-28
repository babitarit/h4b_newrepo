import React from 'react';

export default function Hero() {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center bg-[#8BABF1] p-4">
            <img 
                src="https://res.cloudinary.com/dafdencvh/image/upload/v1719174721/hero_section_jkfu0i.png" 
                alt="Person with disability" 
                className="w-1/2 md:w-1/3 lg:w-1/4 mb-8" 
            />
            <h1 className="text-2xl md:text-4xl font-bold text-center mb-6 text-white">Enhance your learning with accessibility</h1>
            <a href="#features">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">Explore</button>
            </a>
        </section>
    );
}
