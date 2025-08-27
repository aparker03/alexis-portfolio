// src/components/FontSizeToggle.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState('base'); // default

  useEffect(() => {
    const saved = localStorage.getItem('fontSize');
    if (saved) setFontSize(saved);
  }, []);

  const changeFontSize = (size) => {
    setFontSize(size);
    localStorage.setItem('fontSize', size);
  };

  return (
    <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
      <div className={`text-${fontSize}`}>{children}</div>
    </FontSizeContext.Provider>
  );
};

export const useFontSize = () => useContext(FontSizeContext);

export const FontSizeSelector = () => {
  const { fontSize, changeFontSize } = useFontSize();

  return (
    <select
      value={fontSize}
      onChange={(e) => changeFontSize(e.target.value)}
      className="border px-2 py-1 rounded text-sm"
      aria-label="Toggle font size"
    >
      <option value="base">A</option>
      <option value="lg">A+</option>
      <option value="xl">A++</option>
      <option value="2xl">A+++</option>
    </select>
  );
};
