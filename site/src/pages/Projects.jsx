import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../components/sections/Projects/Projects.css";
import AnimatedBackgroundProjects from "../components/layout/AnimatedBackgroundProjects";
import { ProjectMetrics } from "../components/ui/ProjectMetric";

const P = process.env.PUBLIC_URL === "." ? "" : process.env.PUBLIC_URL || "";

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
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <style>{`
        .projects-section { padding-left: 0 !important; padding-right: 0 !important; }
        .projects-container { padding-left: clamp(1rem, 2.5vw, 2rem); padding-right: clamp(1rem, 2.5vw, 2rem); box-sizing: border-box; }
        .projects-hero-wrap {
          position: relative;
          height: clamp(280px, 38vh, 420px);
          overflow: visible;
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
          padding: 0.75rem 0;
          box-sizing: border-box;
        }
        .projects-avatar-hero {
          display: block;
          width: auto;
          height: auto;
          max-width: min(260px, 50vw);
          max-height: calc(100% - 76px);
          object-fit: contain;
          flex: 0 1 auto;
        }
        .projects-scroll-cue {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 9999px;
          flex: 0 0 44px;
          color: #1f2937; text-decoration: none; outline: none;
          animation: arrow-bounce 1.6s ease-in-out infinite;
        }
        .projects-scroll-cue:focus-visible { box-shadow: 0 0 0 3px rgba(37,99,235,.6); border-radius: 9999px; }
        @keyframes arrow-bounce { 0%,100%{transform:translateY(0);opacity:.85} 50%{transform:translateY(6px);opacity:1} }
        @media (prefers-reduced-motion: reduce) { .projects-scroll-cue { animation: none; } }
        .projects-layout { grid-template-columns: 1fr; }
        .project-card { width: 100%; box-sizing: border-box; }
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
          count={80}
          pauseWhenOffscreen
          pauseWhenHidden
          maxDpr={1}
          targetFps={24}
          shadowBlurLow={2}
        />
        <div className="projects-hero-foreground">
          <img
            src={`${P}/assets/avatars/avatar-projects.png`}
            alt="Projects avatar"
            className="projects-avatar-hero"
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
            <h1 className="projects-title" id="projects-heading">
              Projects
            </h1>
            <p className="projects-intro">
              I build projects that make methods, assumptions, and results
              easier to inspect. The work below spans health data, neuroscience,
              wearable data, and resource navigation.
            </p>

            <section
              className="accessfirst-feature"
              aria-labelledby="accessfirst-feature-title"
            >
              <div className="accessfirst-feature-copy">
                <p className="project-kicker">Featured project</p>
                <h2 className="project-title" id="accessfirst-feature-title">
                  AccessFirst
                </h2>
                <p>
                  AccessFirst helps people navigate mental-health resources in
                  Los Angeles County. Users can search by address, city, or ZIP
                  code and narrow results by service type, language,
                  accessibility need, and telehealth preference.
                </p>
              </div>
              <div className="accessfirst-feature-details">
                <ProjectMetrics
                  metrics={[
                    { label: "Scope", value: "Los Angeles County" },
                    {
                      label: "Filters",
                      value: "Location + service preferences",
                    },
                    { label: "Purpose", value: "Resource navigation" },
                  ]}
                />
                <p className="accessfirst-boundary">
                  It does not diagnose, recommend treatment, or book
                  appointments. Users must confirm insurance acceptance and
                  provider availability directly.
                </p>
                <div className="project-links">
                  <a
                    href="https://accessfirst.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the AccessFirst resource navigator →
                  </a>
                </div>
              </div>
            </section>

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
                  <h2 className="project-title">EEG + NHIS Explorer</h2>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "ds004902 + 6,705 NHIS records" },
                      { label: "Output", value: "Streamlit + Plotly app" },
                      { label: "Methods", value: "Stored band summaries + PVT" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      The tracked MNE code loads EEGLAB files, selects EEG
                      channels, crops ten seconds, and applies a 1–40 Hz filter.
                    </li>
                    <li className="star">
                      The application displays stored theta, alpha, and beta
                      summaries, PVT measures, and separate views of 6,705
                      cleaned 2024 NHIS records.
                    </li>
                  </ul>
                  <div className="project-footer">
                    <p className="project-tools">
                      Tools: Streamlit, MNE-Python, Plotly, Pandas, NumPy
                      <span className="project-limit">
                        {" "}
                        · Educational and non-diagnostic.
                      </span>
                    </p>
                    <div className="project-actions">
                      <div className="project-links">
                        <Link to="/projects/eeg-nhis">Case Study →</Link>
                        <a
                          href="https://github.com/aparker03/eeg-nhis-apps"
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
                  <h2 className="project-title">
                    BRFSS Depression Index Study
                  </h2>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "2022 BRFSS notebooks" },
                      { label: "Output", value: "Sampled app + 3 notebooks" },
                      { label: "Methods", value: "7-part index + imputation" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      The full-data notebooks document prepared stages above
                      400,000 records, while the Streamlit application uses a
                      sampled subset by default.
                    </li>
                    <li className="star">
                      Mean, median, mode, zero, or no-imputation choices flow
                      through Plotly views, summaries, filters, and export.
                    </li>
                  </ul>
                  <div className="project-footer">
                    <p className="project-tools">
                      Tools: Streamlit, Pandas, Plotly, scikit-learn
                      <span className="project-limit">
                        {" "}
                        · The constructed index is not a validated diagnostic
                        instrument.
                      </span>
                    </p>
                    <div className="project-actions">
                      <div className="project-links">
                        <Link to="/projects/brfss-depression-index">
                          Case Study →
                        </Link>
                        <a href={`${P}/notebooks/brfss/download.html`}>
                          Download
                        </a>
                        <a href={`${P}/notebooks/brfss/eda.html`}>EDA</a>
                        <a
                          href={`${P}/notebooks/brfss/depression_index_analysis.html`}
                        >
                          Index
                        </a>
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
                </div>
              </div>

              {/* Strava */}
              <div className="project-card card-red">
                <div className="project-media">
                  <img
                    src={`${P}/images/projects/strava/strava-app-preview.png`}
                    alt="Strava metric distribution and activity views"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h2 className="project-title">Strava Wearable Metrics</h2>
                  <ProjectMetrics
                    metrics={[
                      { label: "Dataset", value: "Uploaded CSV or sample" },
                      { label: "Output", value: "App + separate notebook" },
                      { label: "Methods", value: "Time, distributions, routes" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      The application supports date, month, time-of-day, and
                      activity filters with trends, distributions,
                      relationships, summaries, and maps when coordinates exist.
                    </li>
                    <li className="star">
                      A separate notebook analyzes Professor Chris Brooks’s
                      summer 2019 exercise data, including metric completeness,
                      IQR comparisons, and a two-component afternoon
                      heart-rate model.
                    </li>
                  </ul>
                  <div className="project-footer">
                    <p className="project-tools">
                      Tools: Streamlit, Seaborn, Pandas, Matplotlib
                    </p>
                    <div className="project-actions">
                      <div className="project-links">
                        <Link to="/projects/strava-wearables">
                          Case Study →
                        </Link>
                        <a href={`${P}/notebooks/strava/strava-analysis.html`}>
                          View Notebook →
                        </a>
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
                  <h2 className="project-title">
                    Surgical Scope: Cancer Procedure Trends
                  </h2>
                  <ProjectMetrics
                    metrics={[
                      { label: "Coverage", value: "California, 2013–2022" },
                      { label: "Output", value: "Regional app + LA notebook" },
                      { label: "Methods", value: "Trends, KDE, PyDeck maps" },
                    ]}
                  />
                  <ul className="project-points">
                    <li className="star">
                      California HCAI source data covers inpatient and
                      outpatient records statewide. The notebook filters to Los
                      Angeles County, while the application supports broader
                      regional selections.
                    </li>
                    <li className="star">
                      Application views include annual trends, year-over-year
                      change, rankings, KDE distributions, choropleths, and
                      PyDeck hospital bubbles. IQR filtering applies only to
                      distributions.
                    </li>
                  </ul>
                  <div className="project-footer">
                    <p className="project-tools">
                      Tools: Streamlit, Pydeck, Pandas, Seaborn
                    </p>
                    <div className="project-actions">
                      <div className="project-links">
                        <Link to="/projects/surgical-scope">
                          Case Study →
                        </Link>
                        <a href={`${P}/notebooks/cancer/cancer-analysis.html`}>
                          View Notebook →
                        </a>
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
              </div>
            </div>

            <section
              className="project-card project-card-text project-card-nhanes card-purple"
              aria-labelledby="nhanes-project-title"
            >
              <div className="nhanes-project-summary">
                <h2 className="project-title" id="nhanes-project-title">
                  Depression Risk Modeling: NHANES
                </h2>
                <ProjectMetrics
                  metrics={[
                    { label: "Dataset", value: "467 cleaned records" },
                    { label: "Scope", value: "7 NHANES modules" },
                    { label: "Evaluation", value: "F1 + ROC-AUC + SHAP" },
                  ]}
                />
              </div>
              <div className="nhanes-project-details">
                <ul className="project-points">
                  <li className="star">
                    Seven named NHANES modules are outer-merged on SEQN, then
                    adult, interview, examination, and valid PHQ filters produce
                    a five-category, 467-record modeling table.
                  </li>
                  <li className="star">
                    K-means, PCA, and DBSCAN are separate unsupervised analyses.
                    Nonempty supervised notebooks compare Logistic Regression,
                    Random Forest, and SVM with confusion matrices, F1,
                    ROC-AUC, and case-level SHAP.
                  </li>
                </ul>
                <div className="project-footer">
                  <p className="project-tools">
                    Tools: Python, Pandas, scikit-learn, SHAP, Matplotlib,
                    Seaborn
                  </p>
                  <div className="project-actions">
                    <div className="project-links">
                      <Link to="/projects/nhanes-depression-risk">
                        Case Study →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="publications-section"
              aria-labelledby="publications-heading"
            >
              <p className="section-eyebrow">Publication</p>
              <h2 className="exploratory-title" id="publications-heading">
                Preprint
              </h2>
              <article className="publication-card">
                <p className="publication-status">
                  arXiv preprint · version 3 · revised April 9, 2026
                </p>
                <h3>
                  A survey of generative AI adoption and perceived productivity
                  among scientists who program
                </h3>
                <p className="publication-authors">
                  Gabrielle O’Brien, Alexis Parker, Nasir Eisty, and Jeffrey
                  Carver
                </p>
                <p className="publication-citation">
                  arXiv:2512.19644 [cs.SE] · Submitted December 22, 2025
                </p>
                <a
                  href="https://arxiv.org/abs/2512.19644"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the preprint on arXiv →
                </a>
              </article>
            </section>

            <div className="next-builds" aria-labelledby="next-builds-heading">
              <p className="section-eyebrow">Current direction</p>
              <h2 className="exploratory-title" id="next-builds-heading">
                Health data systems with clear methods
              </h2>
              <p className="exploratory-intro">
                I am continuing work on health-data analysis, model evaluation,
                reproducible workflows, and interfaces that make data sources,
                assumptions, and limitations easier to inspect.
              </p>
            </div>

            <div className="exploratory-projects">
              <h2 className="exploratory-title">
                Exploratory Projects (R / RPubs)
              </h2>
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
                  <h3 className="project-subtitle">
                    Prediction App Presentation
                  </h3>
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
                  <h3 className="project-subtitle">
                    Shiny Application &amp; Pitch
                  </h3>
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
                  <h3 className="project-subtitle">
                    Creating a Map With Leaflet
                  </h3>
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
                  <h3 className="project-subtitle">Storm Data Analysis</h3>
                  <p className="exploratory-desc">
                    Course project analyzing U.S. storm impacts through clear
                    visualizations.
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
