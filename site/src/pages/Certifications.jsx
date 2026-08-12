// site/src/pages/Certifications.jsx
import React, { useEffect, useMemo, useState } from "react";
import certifications from "../data/certifications";
import "../components/sections/Certifications/Certifications.css";

const P = process.env.PUBLIC_URL;

const focusAreas = [
  {
    title: "Health data and medical AI",
    categories: ["Healthcare + Neuro"],
    summary:
      "Genomic data science, neuroscience and neuroimaging, and AI for medical diagnosis, prognosis, and treatment.",
  },
  {
    title: "Applied data science",
    categories: [
      "Data Science",
      "Visualization",
      "Databases",
      "R Programming",
    ],
    summary:
      "Data preparation, exploratory analysis, visualization, databases, and data products across Python and R coursework.",
  },
  {
    title: "Machine learning and deep learning",
    categories: ["AI/ML", "Math for Data Science"],
    summary:
      "Machine learning, neural networks, convolutional networks, sequence models, optimization, and supporting mathematics.",
  },
  {
    title: "Programming and software engineering",
    categories: ["Programming", "Software Engineering"],
    summary:
      "Python and Java programming, data structures, web data, and software-engineering fundamentals.",
  },
  {
    title: "Statistics, cognitive science, and social research",
    categories: [
      "Statistics + Math",
      "Cognitive Science + AI",
      "Social Science + Ethics",
    ],
    summary:
      "Statistical inference, regression, cognitive science, computational social science, social-network analysis, and ethics.",
  },
];

const defaultUi = {
  category: "All",
  type: "All",
  query: "",
  sortBy: "Title A–Z",
  groupByCategory: false,
};

function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState(defaultUi.category);
  const [selectedType, setSelectedType] = useState(defaultUi.type);
  const [query, setQuery] = useState(defaultUi.query);
  const [sortBy, setSortBy] = useState(defaultUi.sortBy);
  const [groupByCategory, setGroupByCategory] = useState(
    defaultUi.groupByCategory,
  );

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("certs-ui") || "{}");
      if (saved.category) setSelectedCategory(saved.category);
      if (saved.type) setSelectedType(saved.type);
      if (saved.query !== undefined) setQuery(saved.query);
      if (saved.sortBy) setSortBy(saved.sortBy);
      if (saved.groupByCategory !== undefined) {
        setGroupByCategory(saved.groupByCategory);
      }
    } catch {
      localStorage.removeItem("certs-ui");
    }
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
      }),
    );
  }, [selectedCategory, selectedType, query, sortBy, groupByCategory]);

  const categories = useMemo(
    () => [
      "All",
      ...new Set(certifications.map((item) => item.category).filter(Boolean)),
    ],
    [],
  );
  const types = useMemo(
    () => [
      "All",
      ...new Set(certifications.map((item) => item.type).filter(Boolean)),
    ],
    [],
  );
  const sorters = ["Title A–Z", "Title Z–A", "Provider A–Z"];

  const focusAreaCounts = useMemo(
    () =>
      focusAreas.map((area) => ({
        ...area,
        count: certifications.filter((item) =>
          area.categories.includes(item.category),
        ).length,
      })),
    [],
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = certifications.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesType = selectedType === "All" || item.type === selectedType;
      const searchableText = [
        item.title,
        item.provider,
        item.specialization,
        item.category,
        item.type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        matchesType &&
        (!normalizedQuery || searchableText.includes(normalizedQuery))
      );
    });

    return [...matches].sort((a, b) => {
      const titleA = (a.title || "").toLowerCase();
      const titleB = (b.title || "").toLowerCase();
      const providerA = (a.provider || "").toLowerCase();
      const providerB = (b.provider || "").toLowerCase();

      if (sortBy === "Title Z–A") return titleB.localeCompare(titleA);
      if (sortBy === "Provider A–Z") {
        return providerA.localeCompare(providerB) || titleA.localeCompare(titleB);
      }
      return titleA.localeCompare(titleB);
    });
  }, [selectedCategory, selectedType, query, sortBy]);

  const grouped = useMemo(() => {
    if (!groupByCategory) return { All: filtered };

    const groups = new Map();
    filtered.forEach((item) => {
      const key = item.category || "Other";
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });

    return Object.fromEntries(
      [...groups.entries()].sort(([a], [b]) => a.localeCompare(b)),
    );
  }, [filtered, groupByCategory]);

  const hasFilters =
    selectedCategory !== "All" || selectedType !== "All" || query.trim();

  const activeFilterText = [
    selectedCategory !== "All" ? `Category: ${selectedCategory}` : null,
    selectedType !== "All" ? `Type: ${selectedType}` : null,
    query.trim() ? `Search: “${query.trim()}”` : null,
  ]
    .filter(Boolean)
    .join(" · ");

  const clearFilters = () => {
    setSelectedCategory("All");
    setSelectedType("All");
    setQuery("");
  };

  return (
    <div className="certifications-page">
      <div className="certifications-shell">
        <header className="cert-hero">
          <div className="cert-hero__copy">
            <p className="cert-eyebrow">Coursework and credentials</p>
            <h1 className="certifications-title">Certifications</h1>
            <p className="cert-hero__subtitle">
              Coursework, specializations, and credentials organized by area
              of focus, with filters for browsing the full collection.
            </p>
          </div>
          <div className="cert-hero__avatar">
            <img
              src={`${P}/assets/avatars/avatar-certs.png`}
              alt="Alexis with a certificate"
              width="300"
              height="300"
              loading="eager"
            />
          </div>
        </header>

        <section
          className="focus-areas"
          aria-labelledby="focus-areas-heading"
        >
          <div className="focus-areas__header">
            <p className="cert-eyebrow">Areas of focus</p>
            <h2 id="focus-areas-heading">
              Related coursework and credentials
            </h2>
            <p className="focus-areas__intro">
              These groupings show the main areas represented across the
              collection. The searchable list below provides the complete set
              of credentials and available links.
            </p>
          </div>

          <div className="focus-areas__list">
            {focusAreaCounts.map((area) => (
              <article className="focus-area" key={area.title}>
                <div className="focus-area__heading">
                  <h3>{area.title}</h3>
                  <p>{area.categories.join(" · ")}</p>
                </div>
                <p className="focus-area__summary">{area.summary}</p>
                <p className="focus-area__count">
                  {area.count} {area.count === 1 ? "credential" : "credentials"}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="credential-collection"
          aria-labelledby="credential-collection-heading"
        >
          <div className="credential-collection__header">
            <div>
              <p className="cert-eyebrow">Complete collection</p>
              <h2 id="credential-collection-heading">Browse all credentials</h2>
            </div>
            <p className="credential-collection__total">
              {certifications.length} unique credentials
            </p>
          </div>

          <div
            className="certifications-toolbar"
            role="region"
            aria-label="Credential browsing controls"
          >
            <div className="toolbar-row">
              <label
                className="cert-control"
                data-active={selectedCategory !== "All" || undefined}
              >
                <span>Category</span>
                <select
                  value={selectedCategory}
                  onChange={(event) => setSelectedCategory(event.target.value)}
                  aria-label="Filter credentials by category"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label
                className="cert-control"
                data-active={selectedType !== "All" || undefined}
              >
                <span>Credential type</span>
                <select
                  value={selectedType}
                  onChange={(event) => setSelectedType(event.target.value)}
                  aria-label="Filter credentials by type"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>

              <label className="cert-control">
                <span>Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  aria-label="Sort credentials"
                >
                  {sorters.map((sorter) => (
                    <option key={sorter} value={sorter}>
                      {sorter}
                    </option>
                  ))}
                </select>
              </label>

              <label
                className="cert-control cert-control--search"
                data-active={query.trim() || undefined}
              >
                <span>Search</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Title, issuer, specialization, or category"
                  aria-label="Search credentials"
                  aria-describedby="credential-results-summary"
                />
              </label>
            </div>

            <div className="toolbar-options">
              <label className="cert-toggle">
                <input
                  type="checkbox"
                  checked={groupByCategory}
                  onChange={(event) =>
                    setGroupByCategory(event.target.checked)
                  }
                />
                <span>Group results by category</span>
              </label>
              <button
                type="button"
                className="clear-filters"
                onClick={clearFilters}
                disabled={!hasFilters}
              >
                Clear filters
              </button>
            </div>

            <div
              id="credential-results-summary"
              className="toolbar-meta"
              role="status"
              aria-live="polite"
            >
              <p>
                Showing <strong>{filtered.length}</strong> of{" "}
                <strong>{certifications.length}</strong>{" "}
                {certifications.length === 1 ? "credential" : "credentials"}
              </p>
              {activeFilterText && (
                <p className="active-filters">
                  <strong>Active filters:</strong> {activeFilterText}
                </p>
              )}
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="cert-empty" role="status">
              <h3>No credentials match these filters</h3>
              <p>Try another search or clear the active filters.</p>
              <button type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="credential-results">
              {Object.entries(grouped).map(([group, items]) => (
                <section key={group} className="cert-group">
                  {groupByCategory && (
                    <div className="cert-group__heading">
                      <h3>{group}</h3>
                      <span>
                        {items.length} {items.length === 1 ? "item" : "items"}
                      </span>
                    </div>
                  )}
                  <div className="certifications-list">
                    {items.map((credential) => (
                      <article
                        key={[
                          credential.title,
                          credential.provider,
                          credential.type,
                        ].join("-")}
                        className="cert-entry"
                        data-type={credential.type?.toLowerCase()}
                      >
                        <header className="cert-entry__header">
                          <div>
                            <p className="cert-entry__type">
                              {credential.type}
                            </p>
                            <h4>{credential.title}</h4>
                          </div>
                          {credential.provider && (
                            <p className="cert-entry__provider">
                              {credential.provider}
                            </p>
                          )}
                        </header>

                        <dl className="cert-entry__meta">
                          {credential.specialization && (
                            <div>
                              <dt>Part of</dt>
                              <dd>{credential.specialization}</dd>
                            </div>
                          )}
                          {credential.category && (
                            <div>
                              <dt>Category</dt>
                              <dd>{credential.category}</dd>
                            </div>
                          )}
                        </dl>

                        <div className="cert-entry__action">
                          {credential.link ? (
                            <a
                              href={credential.link}
                              className="cert-link"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open credential for ${credential.title}`}
                            >
                              Open credential <span aria-hidden="true">↗</span>
                            </a>
                          ) : (
                            <span className="cert-link-unavailable">
                              Credential link unavailable
                            </span>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Certifications;
