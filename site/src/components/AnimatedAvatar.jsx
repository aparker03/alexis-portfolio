// src/components/AnimatedAvatar.jsx
import React from 'react';

const avatarMap = {
  home: '/assets/avatars/avatar-cherry.png',
  projects: '/assets/avatars/avatar-blue.png',
  resume: '/assets/avatars/avatar-blue.png',
  certifications: '/assets/avatars/avatar-cherry.png',
  contact: '/assets/avatars/avatar-blue.png',
};

function AnimatedAvatar({ variant = 'home', size = 160 }) {
  const src = avatarMap[variant] || avatarMap.home;

  return (
    <img
      src={src}
      alt={`Alexis avatar - ${variant}`}
      className="rounded-full shadow-xl"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transition: 'transform 0.3s ease',
      }}
    />
  );
}

export default AnimatedAvatar;
