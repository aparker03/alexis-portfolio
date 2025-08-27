// src/components/FontSizeToggle.jsx
import React from 'react';
import { useFontSize } from '../context/FontSizeContext';

function FontSizeToggle() {
  const { fontSize, changeFontSize } = useFontSize();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-600">Font</span>
      <select
        value={fontSize}
        onChange={(e) => changeFontSize(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="base">Default</option>
        <option value="lg">Large</option>
        <option value="xl">Extra</option>
        <option value="2xl">XX-Large</option>
      </select>
    </div>
  );
}

export default FontSizeToggle;
