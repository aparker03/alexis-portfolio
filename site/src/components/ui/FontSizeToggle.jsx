// src/components/FontSizeToggle.jsx
import React, { useId } from 'react';
import { useFontSize } from "../../context/FontSizeContext";


function FontSizeToggle({ selectTabIndex }) {
  const { fontSize, changeFontSize } = useFontSize();
  const selectId = useId();

  return (
    <div className="flex items-center gap-2 text-sm">
      <label className="text-gray-600" htmlFor={selectId}>
        Font<span className="sr-only"> size</span>
      </label>
      <select
        id={selectId}
        value={fontSize}
        onChange={(e) => changeFontSize(e.target.value)}
        tabIndex={selectTabIndex}
        className="border border-gray-300 rounded px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
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
