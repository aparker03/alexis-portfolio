// site/src/components/layout/Hero.jsx
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

        <h1 className="font-extrabold font-heading mb-2">
          Data with context. Questions with purpose.
        </h1>

        {/* Name + title, then one clean line about the portfolio focus */}
        <p className="mt-1 text-sm uppercase tracking-wider text-gray-300">
          Alexis Parker · Data Scientist
        </p>

        <p className="max-w-xl text-gray-300 leading-relaxed mt-4">
          I build interpretable analyses and tools across neuroscience datasets, national health surveys, and wearable signals.
        </p>

        {/* Jump link to About section */}
        <a href="#about" aria-label="Scroll to About section">
          <FaChevronDown className="mt-12 animate-bounce text-gray-400" />
        </a>
      </div>
    </section>
  );
}

export default Hero;
