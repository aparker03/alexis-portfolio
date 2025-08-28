import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import AnimatedBackground from './AnimatedBackground';

const P = process.env.PUBLIC_URL;

function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-black">
      {/* Stars animation */}
      <AnimatedBackground />

      {/* Optional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/20 z-0 pointer-events-none" />

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 text-white">
        <img
          src={`${P}/assets/avatars/avatar-cherry.png`}
          alt="Avatar of Alexis"
          className="w-40 h-auto mb-6 object-contain drop-shadow-xl"
        />

        <h1 className="font-extrabold font-heading mb-4">
          Data with context. Questions with purpose.
        </h1>

        <p className="max-w-xl text-gray-300 leading-relaxed">
          I'm Alexis - a data scientist, researcher, and creative thinker. I work at
          the intersection of behavior, health, and machine learning, blending structure with story.
        </p>

        <FaChevronDown className="mt-12 animate-bounce text-gray-400" />
      </div>
    </section>
  );
}

export default Hero;
