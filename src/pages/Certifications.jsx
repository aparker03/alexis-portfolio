// Certifications.jsx

import React, { useState } from "react";
import certifications from "../data/certifications";
import "../components/Certifications/Certifications.css";

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");

  const categories = ["All", ...new Set(certifications.map(cert => cert.category).filter(Boolean))];
  const types = ["All", ...new Set(certifications.map(cert => cert.type))];

  const filteredCerts = certifications.filter(cert => {
    const matchCategory = selectedCategory === "All" || cert.category === selectedCategory;
    const matchType = selectedType === "All" || cert.type === selectedType;
    return matchCategory && matchType;
  });

  return (
    <div className="certifications-container">
      <h1 className="certifications-title">Certifications</h1>

      <div className="certifications-filters" role="region" aria-label="Certification Filters">
        <label>
          Category:
          <select
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>

        <label>
          Type:
          <select
            value={selectedType}
            onChange={e => setSelectedType(e.target.value)}
            aria-label="Filter by type"
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="certifications-grid">
        {filteredCerts.map((cert, index) => (
          <article key={index} className={`cert-card ${cert.type.toLowerCase()}`}>
            <header className="cert-header">
              <h2 className="cert-title">{cert.title}</h2>
              <p className="cert-provider">{cert.provider}</p>
            </header>

            <ul className="cert-meta">
              <li><strong>Type:</strong> {cert.type}</li>
              {cert.specialization && (
                <li><strong>Part of:</strong> {cert.specialization}</li>
              )}
              {cert.category && (
                <li><strong>Category:</strong> {cert.category}</li>
              )}
            </ul>

            <a
              href={cert.link}
              className="cert-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View certificate for ${cert.title}`}
            >
              View Certificate
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
