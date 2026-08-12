import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ProjectMetrics } from "../../components/ui/ProjectMetric";
import "../../components/sections/CaseStudy/CaseStudy.css";

function CaseSection({ id, section }) {
  const hasParagraphs = section?.paragraphs?.length > 0;
  const hasItems = section?.items?.length > 0;

  if (!section?.title || (!hasParagraphs && !hasItems)) return null;

  return (
    <section className="case-section" id={id} data-case-section>
      <h2>{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.items?.length > 0 && (
        <ul className="case-list">
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

function Workflow({ id, title, steps }) {
  if (!steps?.length) return null;

  return (
    <section
      className="case-section case-workflow-section"
      id={id}
      data-case-section
    >
      <h2>{title || "Analysis workflow"}</h2>
      <ol
        className="case-workflow"
        aria-label={`${title || "Analysis workflow"} steps`}
      >
        {steps.map((step) => (
          <li key={step}>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Materials({ id, materials }) {
  if (!materials?.length) return null;

  return (
    <section className="case-section case-materials" id={id} data-case-section>
      <h2>Links and source material</h2>
      <div className="case-actions">
        {materials.map((material) => (
          <a
            key={material.href}
            href={material.href}
            {...(material.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {material.label} →
          </a>
        ))}
      </div>
    </section>
  );
}

function CaseStudyPage({ study }) {
  const navigationItems = useMemo(() => {
    const items = (study.sections || []).map((section, index) => ({
      id: `${study.slug}-section-${index + 1}`,
      label: section.title,
    }));

    if (study.workflow?.length) {
      items.push({
        id: `${study.slug}-workflow`,
        label: study.workflowTitle || "Analysis workflow",
      });
    }

    if (study.boundaries?.length) {
      items.push({
        id: `${study.slug}-limitations`,
        label: "Limitations and boundaries",
      });
    }

    if (study.materials?.length) {
      items.push({
        id: `${study.slug}-materials`,
        label: "Links and source material",
      });
    }

    return items;
  }, [study]);

  const [activeSection, setActiveSection] = useState(
    navigationItems[0]?.id || ""
  );

  useEffect(() => {
    let frameId = 0;

    const updateActiveSection = () => {
      frameId = 0;
      const sections = navigationItems
        .map(({ id }) => document.getElementById(id))
        .filter(Boolean);

      if (!sections.length) return;

      const atPageEnd =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 4;
      if (atPageEnd) {
        setActiveSection(sections.at(-1).id);
        return;
      }

      const readingLine = Math.min(220, window.innerHeight * 0.32);
      const hashId = window.location.hash.slice(1);
      const hashSection = sections.find((section) => section.id === hashId);

      if (hashSection) {
        const hashRect = hashSection.getBoundingClientRect();
        const stickyOffset = 80;
        const isMeaningfullyVisible =
          hashRect.top <= readingLine && hashRect.bottom > stickyOffset;

        if (isMeaningfullyVisible) {
          setActiveSection(hashSection.id);
          return;
        }
      }

      const passedSections = sections.filter(
        (section) => section.getBoundingClientRect().top <= readingLine
      );
      const current = passedSections.at(-1) || sections[0];
      setActiveSection(current.id);
    };

    const scheduleUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, [navigationItems]);

  return (
    <article className="case-study-page">
      <div className="case-study-shell">
        <header className="case-hero">
          <div className="case-hero-inner">
            <div className="case-hero-copy">
              <Link to="/projects" className="case-back-link">
                ← Back to Projects
              </Link>
              <p className="case-eyebrow">Case study</p>
              <h1>{study.title}</h1>
              <p className="case-summary">{study.summary}</p>
            </div>

            <aside className="case-hero-details" aria-label="Project details">
              <ProjectMetrics
                metrics={study.facts}
                className="case-quick-facts"
              />
              {study.tools?.length > 0 && (
                <p className="case-tools case-tools-panel">
                  <strong>Tools</strong>
                  <span>{study.tools.join(", ")}</span>
                </p>
              )}
            </aside>
          </div>
        </header>

        <div className="case-main-layout">
          <nav className="case-section-nav" aria-label="Case study sections">
            <p>On this page</p>
            <ol>
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={
                      activeSection === item.id ? "location" : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
            <Link to="/projects" className="case-nav-return">
              View all projects →
            </Link>
          </nav>

          <div className="case-content">
            {study.heroImage && (
              <figure
                className={`case-media${
                  study.secondaryImage ? " case-media--paired" : ""
                }`}
              >
                <img
                  src={study.heroImage}
                  alt={`${study.title} application preview`}
                  decoding="async"
                />
                {study.secondaryImage && (
                  <img
                    src={study.secondaryImage}
                    alt={`${study.title} supporting visualization`}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </figure>
            )}

            <div className="case-sections-grid">
              {study.sections?.map((section, index) => (
                <CaseSection
                  key={section.title}
                  id={`${study.slug}-section-${index + 1}`}
                  section={section}
                />
              ))}

              <Workflow
                id={`${study.slug}-workflow`}
                title={study.workflowTitle}
                steps={study.workflow}
              />

              {study.boundaries?.length > 0 && (
                <section
                  className="case-section case-boundaries"
                  id={`${study.slug}-limitations`}
                  data-case-section
                >
                  <h2>Limitations and boundaries</h2>
                  <ul className="case-list">
                    {study.boundaries.map((boundary) => (
                      <li key={boundary}>{boundary}</li>
                    ))}
                  </ul>
                </section>
              )}

              <Materials
                id={`${study.slug}-materials`}
                materials={study.materials}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CaseStudyPage;
