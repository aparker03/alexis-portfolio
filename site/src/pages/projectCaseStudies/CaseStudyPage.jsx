import React from "react";
import { Link } from "react-router-dom";
import { ProjectMetrics } from "../../components/ui/ProjectMetric";
import "../../components/sections/CaseStudy/CaseStudy.css";

function TextList({ title, items }) {
  if (!items?.length) return null;

  return (
    <section className="case-panel">
      <h2>{title}</h2>
      <ul className="case-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Pipeline({ steps }) {
  if (!steps?.length) return null;

  return (
    <section className="case-panel case-panel--wide">
      <h2>Architecture / pipeline</h2>
      <ol className="case-pipeline" aria-label="Project pipeline steps">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

function CaseStudyPage({ study }) {
  const hasLinks = Boolean(
    study.links?.app || study.links?.github || study.links?.notebooks?.length
  );

  return (
    <article className="case-study-page">
      <header className="case-hero">
        <Link to="/projects" className="case-back-link">
          ← Back to projects
        </Link>
        <p className="case-eyebrow">Project case study</p>
        <h1>{study.title}</h1>
        <p className="case-subtitle">{study.subtitle}</p>
        <ProjectMetrics metrics={study.metrics} className="case-metrics" />
      </header>

      <section className="case-overview-grid">
        <div className="case-panel case-panel--wide">
          <h2>Overview</h2>
          <p>{study.overview}</p>
        </div>
        <div className="case-panel">
          <h2>Question</h2>
          <p>{study.question}</p>
        </div>
        <div className="case-panel">
          <h2>Role</h2>
          <p>{study.role}</p>
          <p className="case-muted">{study.timeframe}</p>
        </div>
      </section>

      {study.heroImage && (
        <section
          className="case-screenshot"
          aria-label={`${study.title} screenshots`}
        >
          <img
            src={study.heroImage}
            alt={`${study.title} app preview`}
            loading="lazy"
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
        </section>
      )}

      <Pipeline steps={study.pipeline} />

      <div className="case-grid">
        <TextList title="Dataset" items={study.dataset} />
        <TextList title="Methods" items={study.methods} />
        <TextList title="Key features" items={study.features} />
        <TextList title="Results / insights" items={study.results} />
        <TextList title="Limitations" items={study.limitations} />
        <TextList title="Ethical notes" items={study.ethicalNotes} />
        <TextList title="What I would improve next" items={study.improveNext} />
        <section className="case-panel">
          <h2>Tech stack</h2>
          <div className="case-tags">
            {study.techStack.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
      </div>

      {hasLinks && (
        <section className="case-panel case-panel--wide case-links">
          <h2>Links</h2>
          <div className="case-actions">
            {study.links?.app && (
              <a
                href={study.links.app}
                target="_blank"
                rel="noopener noreferrer"
                className="case-button case-button--primary"
              >
                Launch app →
              </a>
            )}
            {study.links?.github && (
              <a
                href={study.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="case-button"
              >
                GitHub repo →
              </a>
            )}
            {study.links?.notebooks?.map((notebook) => (
              <a key={notebook.href} href={notebook.href} className="case-button">
                {notebook.label} →
              </a>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

export default CaseStudyPage;
