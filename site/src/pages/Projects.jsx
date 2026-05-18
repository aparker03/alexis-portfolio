import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/sections/Projects/Projects.css";
import AnimatedBackgroundProjects from "../components/layout/AnimatedBackgroundProjects";
import { ProjectMetrics } from "../components/ui/ProjectMetric";

const P = process.env.PUBLIC_URL;

const plannedBuilds = [
  {
    label: "A",
    title: "Health AI Evaluation Dashboard",
    summary:
      "Evaluate health-oriented AI outputs with synthetic prompts, safety labels, evidence checks, and annotation-style scoring.",
  },
  {
    label: "B",
    title: "Clinical + Survey Text Annotation Tool",
    summary:
      "Prototype a reproducible coding workspace for synthetic notes or survey text with labels, agreement checks, and exportable datasets.",
  },
  {
    label: "C",
    title: "Wearable Recovery Analytics",
    summary:
      "Extend Movement-Mapped into recovery-focused time-series views for activity load, sleep context, heart-rate trends, and anomalies.",
  },
  {
    label: "D",
    title: "Public Health Equity Explorer",
    summary:
      "Combine public health and Census-style indicators into maps, models, and plain-language explanations of geographic differences.",
  },
  {
    label: "E",
    title: "Reproducibility Scorecards",
    summary:
      "Audit portfolio projects for data-source clarity, assumptions, limitations, environment setup, ethics, and extension readiness.",
  },
];

function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const handleJump = (e) => {
    e.preventDefault();
    const target = document.getElementById("projects-content");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="projects-section min-h-screen"
      aria-labelledby="projects-heading"
    >
      <style>{`
        .projects-section { padding-left: 0 !important; padding-right: 0 !important; }
        .projects-container { padding-left: 2rem; padding-right: 2rem; }
        .projects-hero-wrap {
          position: relative;
          height: 54vh;
          min-height: 340px;
          max-height: 560px;
          overflow: hidden;
          background: linear-gradient(180deg, #81AFB4 0%, #9FC5AF 100%);
          margin-bottom: 1.75rem;
        }
        .projects-hero-foreground {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          height: 100%;
          padding: 1rem 0;
        }
        .projects-avatar-hero { width: min(260px, 50vw); height: auto; }
        .projects-scroll-cue {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 9999px;
          color: #1f2937; text-decoration: none; outline: none;
          animation: arrow-bounce 1.6s ease-in-out infinite;
        }
        .projects-scroll-cue:focus-visible { box-shadow: 0 0 0 3px rgba(37,99,235,.6); border-radius: 9999px; }
        @keyframes arrow-bounce { 0%,100%{transform:translateY(0);opacity:.85} 50%{transform:translateY(6px);opacity:1} }
        @media (prefers-reduced-motion: reduce) { .projects-scroll-cue { animation: none; } }
        .projects-layout { grid-template-columns: 1fr; }
        .projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; align-items: stretch; }
        @media (max-width: 1600px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1000px) { .projects-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }
        .project-card { max-width: 1400px; width: 100%; box-sizing: border-box; margin: 0 auto; }
        .projects-title { text-align: center; margin: 0.5rem auto 1rem; }
        .projects-intro  { text-align: center; margin: 0 auto 2rem; max-width: 980px; color: #374151; }
        .project-title { text-align: center; }
        @media (max-width: 1600px) {
          .project-points { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="projects-hero-wrap">
        <AnimatedBackgroundProjects
          fixed={false}
          zIndex={1}
          backgroundTint="rgba(129, 175, 180, 0.08)"
          colors={[
            "rgba(224, 222, 153, 1.0)",
            "rgba(159, 195, 173, 0.95)",
            "rgba(126, 173, 179, 0.95)",
          ]}
          count={140}
          pauseWhenOffscreen
          pauseWhenHidden
          maxDpr={1.5}
          targetFps={45}
        />
        <div className="projects-hero-foreground">
          <img
            src={`${P}/assets/avatars/avatar-projects.png`}
            alt="Projects avatar"
            className="projects-avatar-hero"
            loading="lazy"
            decoding="async"
          />
          <a
            href="#projects-content"
            className="projects-scroll-cue"
            aria-label="Jump to projects"
            onClick={handleJump}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M12 16l-6-6h12z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="projects-container" id="projects-content">
        <div className="projects-layout">
          <div className="projects-main">
            <h2 className="projects-title" id="projects-heading">
              Projects
            </h2>
            <p className="projects-intro">
              I design projects as tools people can use. That means clear
              pipelines you can follow, notebooks that show decisions, and
              interfaces that invite exploration. Below are a sleep measurement
              comparison using EEG and NHIS self-reports, a research-informed
              BRFSS depression index study, NHANES depression risk modeling,
              Strava wearables that surface training patterns, and statewide
              surgery volumes you can navigate without guesswork.
            </p>

            <div className="projects-grid">
              {/* EEG + NHIS */}
              <div className="project-card card-gold">
                <div className="project-media">
                  <img
                    src={`${P}/images/projects/eeg/eeg-app-preview.png`}
                    alt="EEG + NHIS Explorer with EEG band power, reaction time, and NHIS survey panels"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src={`${P}/images/projects/eeg/eeg-electrodes-preview.png`}
                    alt="10 20 EEG electrode montage highlighting frontal, central, parietal, and occipital regions"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">EEG + NHIS Explorer</h3>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "OpenNeuro EEG + 32k NHIS" },
                      { label: "Output", value: "Live app + case study" },
                      { label: "Methods", value: "MNE, band power, PVT" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      Processed OpenNeuro EEG recordings with MNE-Python and
                      NumPy, extracting theta, alpha, and beta band power from
                      cleaned epochs.
                    </li>
                    <li className="star">
                      Visualized Psychomotor Vigilance Task reaction-time
                      distributions and lapse rates under sleep loss.
                    </li>
                    <li className="star">
                      Built a comparative view that places lab-based sleep
                      signals beside NHIS self-reported sleep measures to
                      examine measurement differences.
                    </li>
                    <li className="star">
                      Interactive Streamlit app with Plotly for side-by-side
                      exploration of lab and survey measures. Educational only
                      and not diagnostic.
                    </li>
                  </ul>
                  <p className="project-tools">
                    Tools: Streamlit, MNE-Python, Plotly, Pandas, NumPy
                  </p>
                  <div className="project-links">
                    <Link to="/projects/eeg-nhis">Case Study →</Link>
                    <a
                      href="https://github.com/aparker03/eeg-nhis-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Repo →
                    </a>
                  </div>
                  <a
                    href="https://eeg-nhis-app.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-launch-btn"
                  >
                    Launch App →
                  </a>
                </div>
              </div>

              {/* BRFSS */}
              <div className="project-card card-blue">
                <div className="project-media">
                  <img
                    src={`${P}/images/projects/brfss/brfss-app-preview.png`}
                    alt="BRFSS Depression Index choropleth by state"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">
                    BRFSS Depression Index Study
                  </h3>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "400k+ BRFSS responses" },
                      { label: "Output", value: "3 notebooks + app" },
                      { label: "Methods", value: "Imputation + choropleths" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      Built a research-informed composite score to capture
                      self-reported mental health distress using BRFSS survey
                      items. This is exploratory and not an official clinical
                      index.
                    </li>
                    <li className="star">
                      Included survey measures on days of poor mental and
                      physical health, life satisfaction, emotional support,
                      stress, social isolation, and depression diagnosis.
                    </li>
                    <li className="star">
                      In-app imputation choices carry through to all visuals and
                      summaries. Linked notebooks make cleaning steps and
                      assumptions clear.
                    </li>
                  </ul>
                  <p className="project-tools">
                    Tools: Streamlit, Pandas, Plotly, scikit-learn
                  </p>
                  <div className="project-links">
                    <Link to="/projects/brfss-depression-index">
                      Case Study →
                    </Link>
                    <a href={`${P}/notebooks/brfss/download.html`}>Download</a>
                    <a href={`${P}/notebooks/brfss/eda.html`}>EDA</a>
                    <a
                      href={`${P}/notebooks/brfss/depression_index_analysis.html`}
                    >
                      Index
                    </a>
                    <span className="project-link-note">
                      Code cleanup planned
                    </span>
                  </div>
                  <a
                    href="https://state-of-mind.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-launch-btn"
                  >
                    Launch App →
                  </a>
                </div>
              </div>

              {/* NHANES */}
              <div className="project-card card-purple">
                <div className="project-card-content">
                  <h3 className="project-title">
                    Depression Risk Modeling: NHANES
                  </h3>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "~12k records" },
                      { label: "Scope", value: "7 NHANES modules" },
                      { label: "Evaluation", value: "SHAP + ROC-AUC" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      Merged and cleaned demographic, socioeconomic, health, and
                      depression-related NHANES modules for severity prediction.
                    </li>
                    <li className="star">
                      Used KMeans, PCA, and DBSCAN to explore structure and
                      generate modeling features with scikit-learn.
                    </li>
                    <li className="star">
                      Trained Logistic Regression, Random Forest, and SVM models
                      with hyperparameter tuning and confusion-matrix review.
                    </li>
                    <li className="star">
                      Interpreted model behavior with SHAP and engineered
                      socioeconomic predictors from Census-style context.
                    </li>
                  </ul>
                  <p className="project-tools">
                    Tools: Python, Pandas, scikit-learn, SHAP, Matplotlib,
                    Seaborn
                  </p>
                  <div className="project-links">
                    <Link to="/projects/nhanes-depression-risk">
                      Case Study →
                    </Link>
                    <span className="project-link-note">
                      Code cleanup planned
                    </span>
                  </div>
                </div>
              </div>

              {/* Strava */}
              <div className="project-card card-red">
                <div className="project-media">
                  <img
                    src={`${P}/images/projects/strava/strava-app-preview.png`}
                    alt="Strava cadence density plot and training views"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">Strava Wearable Metrics</h3>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "Personal Strava export" },
                      { label: "Output", value: "Notebook + app" },
                      { label: "Methods", value: "Cadence, pace, HR zones" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      Parsed a personal Strava export to study cadence, pace
                      stability, and heart-rate zones across runs.
                    </li>
                    <li className="star">
                      Distribution and density views reveal training patterns
                      that single-run summaries miss.
                    </li>
                    <li className="star">
                      Filters for periods and sessions make week-over-week
                      trends easy to compare.
                    </li>
                    <li className="star">
                      Companion notebook documents assumptions and cleaning
                      decisions.
                    </li>
                  </ul>
                  <p className="project-tools">
                    Tools: Streamlit, Seaborn, Pandas, Matplotlib
                  </p>
                  <div className="project-links">
                    <Link to="/projects/strava-wearables">Case Study →</Link>
                    <a href={`${P}/notebooks/strava/strava-analysis.html`}>
                      View Notebook →
                    </a>
                    <span className="project-link-note">
                      Code cleanup planned
                    </span>
                  </div>
                  <a
                    href="https://movement-mapped.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-launch-btn"
                  >
                    Launch App →
                  </a>
                </div>
              </div>

              {/* Cancer Surgeries */}
              <div className="project-card card-green">
                <div className="project-media">
                  <img
                    src={`${P}/images/projects/cancer/cancer-app-preview.png`}
                    alt="Cancer surgeries density plots and map"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">
                    Surgical Scope: Cancer Procedure Trends
                  </h3>
                  <ProjectMetrics
                    metrics={[
                      { label: "Coverage", value: "CA hospitals, 2013–2022" },
                      { label: "Output", value: "Map + trend app" },
                      { label: "Methods", value: "IQR, KDE, choropleths" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      Analyzed California HCAI hospital surgery volumes from
                      2013 to 2022 across the ICD-9 to ICD-10 transition.
                    </li>
                    <li className="star">
                      Compared high-volume procedures such as breast, colon, and
                      prostate to rarer ones such as esophagus, pancreas, and
                      stomach using KDE trends.
                    </li>
                    <li className="star">
                      Outlier-aware views using IQR and a California-wide
                      roll-up separate from filtered totals.
                    </li>
                    <li className="star">
                      County-level choropleths and hospital-level visuals with
                      filters for site, region, and year.
                    </li>
                  </ul>
                  <p className="project-tools">
                    Tools: Streamlit, Pydeck, Pandas, Seaborn
                  </p>
                  <div className="project-links">
                    <Link to="/projects/surgical-scope">Case Study →</Link>
                    <a href={`${P}/notebooks/cancer/cancer-analysis.html`}>
                      View Notebook →
                    </a>
                    <span className="project-link-note">
                      Code cleanup planned
                    </span>
                  </div>
                  <a
                    href="https://surgical-scope.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-launch-btn"
                  >
                    Launch App →
                  </a>
                </div>
              </div>
            </div>

            <div className="next-builds" aria-labelledby="next-builds-heading">
              <p className="section-eyebrow">Next portfolio builds</p>
              <h3 className="exploratory-title" id="next-builds-heading">
                Roadmap from A to E
              </h3>
              <p className="exploratory-intro">
                I like all five directions, so I am keeping them visible as a
                build queue: health AI evaluation, annotation tooling,
                wearables, public health equity, and reproducibility.
              </p>

              <div className="next-builds-grid">
                {plannedBuilds.map((build) => (
                  <article className="next-build-card" key={build.label}>
                    <span className="next-build-label" aria-hidden="true">
                      {build.label}
                    </span>
                    <h4>{build.title}</h4>
                    <p>{build.summary}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="exploratory-projects">
              <h3 className="exploratory-title">
                Exploratory Projects (R / RPubs)
              </h3>
              <p
                className="exploratory-intro"
                style={{
                  textAlign: "center",
                  maxWidth: 980,
                  margin: "0 auto 2rem",
                }}
              >
                Early work using R, Shiny, and Leaflet that built habits around
                interactivity, reproducibility, and spatial visualization.
              </p>

              <div className="exploratory-grid">
                <div className="project-card">
                  <h4 className="project-subtitle">
                    Prediction App Presentation
                  </h4>
                  <p className="exploratory-desc">
                    A lightweight demo app that accepts user inputs and renders
                    predicted outcomes.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/998041"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">
                    Shiny Application &amp; Pitch
                  </h4>
                  <p className="exploratory-desc">
                    A reproducible Shiny app with an interactive pitch covering
                    use cases and design choices.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/993970"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">
                    Creating a Map With Leaflet
                  </h4>
                  <p className="exploratory-desc">
                    Interactive Leaflet map in R to display geo-located data
                    with popups and tooltips.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/991877"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Storm Data Analysis</h4>
                  <p className="exploratory-desc">
                    Peer-reviewed course project analyzing U.S. storm impacts
                    with clear visualizations.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/981558"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
