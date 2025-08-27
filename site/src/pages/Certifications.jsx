// site/src/pages/Certifications.jsx
import React, { useMemo, useState, useEffect } from "react";
import certifications from "../data/certifications";
import "../components/Certifications/Certifications.css";

const P = process.env.PUBLIC_URL;

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("Title A–Z");
  const [groupByCategory, setGroupByCategory] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("certs-ui") || "{}");
    if (saved.category) setSelectedCategory(saved.category);
    if (saved.type) setSelectedType(saved.type);
    if (saved.query !== undefined) setQuery(saved.query);
    if (saved.sortBy) setSortBy(saved.sortBy);
    if (saved.groupByCategory !== undefined) setGroupByCategory(saved.groupByCategory);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "certs-ui",
      JSON.stringify({
        category: selectedCategory,
        type: selectedType,
        query,
        sortBy,
        groupByCategory,
      })
    );
  }, [selectedCategory, selectedType, query, sortBy, groupByCategory]);

  const categories = ["All", ...new Set(certifications.map(c => c.category).filter(Boolean))];
  const types = ["All", ...new Set(certifications.map(c => c.type).filter(Boolean))];
  const sorters = ["Title A–Z", "Title Z–A", "Provider A–Z"];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = certifications.filter(c => {
      const matchCategory = selectedCategory === "All" || c.category === selectedCategory;
      const matchType = selectedType === "All" || c.type === selectedType;
      const text = [c.title, c.provider, c.specialization, c.category, c.type]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      const matchQuery = !q || text.includes(q);
      return matchCategory && matchType && matchQuery;
    });

    const sorted = [...base].sort((a, b) => {
      const ta = (a.title || "").toLowerCase();
      const tb = (b.title || "").toLowerCase();
      const pa = (a.provider || "").toLowerCase();
      const pb = (b.provider || "").toLowerCase();
      if (sortBy === "Title Z–A") return tb.localeCompare(ta);
      if (sortBy === "Provider A–Z") return pa.localeCompare(pb) || ta.localeCompare(tb);
      return ta.localeCompare(tb);
    });

    return sorted;
  }, [selectedCategory, selectedType, query, sortBy]);

  const grouped = useMemo(() => {
    if (!groupByCategory) return { All: filtered };
    const map = new Map();
    filtered.forEach(c => {
      const key = c.category || "Other";
      if (!map.has(key)) map.set(key, []);
      map.get(key).push(c);
    });
    return Object.fromEntries([...map.entries()].sort(([a], [b]) => a.localeCompare(b)));
  }, [filtered, groupByCategory]);

  const totalCount = filtered.length;

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <section className="cert-hero" aria-label="Certifications header">
          <div className="cert-hero__avatar">
            <img
              src={`${P}/assets/avatars/avatar-certs.png`}
              alt="Alexis avatar for Certifications"
              width="300"
              height="300"
              loading="eager"
            />
          </div>
          <div className="cert-hero__text">
            <h1 className="certifications-title">Certifications</h1>
            <p className="cert-hero__subtitle">
              Curated coursework, specializations, and credentials with quick filters and verified links.
            </p>
          </div>
        </section>

        <div className="certifications-toolbar" role="region" aria-label="Certification controls">
          <div className="toolbar-row">
            <label className="control">
              <span>Category</span>
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

            <label className="control">
              <span>Type</span>
              <select
                value={selectedType}
                onChange={e => setSelectedType(e.target.value)}
                aria-label="Filter by type"
              >
                {types.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </label>

            <label className="control control--grow">
              <span>Search</span>
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Title, provider, specialization…"
                aria-label="Search certifications"
              />
            </label>

            <label className="control">
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                aria-label="Sort certifications"
              >
                {sorters.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </label>

            <label className="toggle">
              <input
                type="checkbox"
                checked={groupByCategory}
                onChange={e => setGroupByCategory(e.target.checked)}
                aria-label="Group by category"
              />
              <span>Group by category</span>
            </label>
          </div>

          <div className="toolbar-meta" aria-live="polite">
            Showing <strong>{totalCount}</strong> {totalCount === 1 ? "item" : "items"}
          </div>
        </div>

        {Object.entries(grouped).map(([group, items]) => (
          <section key={group} className="cert-group">
            {groupByCategory && <h2 className="cert-group__title">{group}</h2>}
            <div className="certifications-grid">
              {items.map((cert, idx) => (
                <article key={`${cert.title}-${idx}`} className={`cert-card ${String(cert.type || "").toLowerCase()}`}>
                  <header className="cert-header">
                    <h3 className="cert-title">{cert.title}</h3>
                    {cert.provider && <p className="cert-provider">{cert.provider}</p>}
                  </header>

                  <ul className="cert-meta">
                    {cert.type && <li><strong>Type:</strong> {cert.type}</li>}
                    {cert.specialization && <li><strong>Part of:</strong> {cert.specialization}</li>}
                    {cert.category && <li><strong>Category:</strong> {cert.category}</li>}
                  </ul>

                  <div className="cert-actions">
                    {cert.link && (
                      <a
                        href={cert.link}
                        className="cert-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open certificate for ${cert.title}`}
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
