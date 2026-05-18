import React from "react";

function ProjectMetric({ label, value }) {
  return (
    <span className="project-metric">
      <strong>{label}</strong>
      <span>{value}</span>
    </span>
  );
}

function ProjectMetrics({ metrics = [], className = "" }) {
  if (!metrics.length) return null;

  return (
    <div className={`project-meta-grid ${className}`.trim()}>
      {metrics.map((metric) => (
        <ProjectMetric key={`${metric.label}-${metric.value}`} {...metric} />
      ))}
    </div>
  );
}

export { ProjectMetric, ProjectMetrics };
export default ProjectMetric;
