import React, { useEffect } from "react";
import "../components/sections/Projects/Projects.css";
import AnimatedBackgroundProjects from "../components/layout/AnimatedBackgroundProjects";

const P = process.env.PUBLIC_URL;

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
    <section className="projects-section min-h-screen" aria-labelledby="projects-heading">
      <style>{`
        /* Full-bleed hero (no left/right gap); restore padding for the rest */
        .projects-section { padding-left: 0 !important; padding-right: 0 !important; }
        .projects-container { padding-left: 2rem; padding-right: 2rem; }

        /* HERO */
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

        /* Layout */
        .projects-layout { grid-template-columns: 1fr; }

        /* Grid: 2×2 only when really wide; side-by-side (≤1600px) is single column */
        .projects-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2.5rem; align-items: stretch; }
        @media (max-width: 1600px) { .projects-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 1000px) { .projects-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }

        /* Keep cards roomy at large fonts; don’t let them spill */
        .project-card { max-width: 1400px; width: 100%; box-sizing: border-box; margin: 0 auto; }

        /* Center page heading + intro */
        .projects-title { text-align: center; margin: 0.5rem auto 1rem; }
        .projects-intro  { text-align: center; margin: 0 auto 2rem; max-width: 980px; color: #374151; }

        /* Center the four project titles */
        .project-title { text-align: center; }

        /* Bullet layout fix for side-by-side: force single column to avoid overlap */
        @media (max-width: 1600px) {
          .project-points { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO with bounded animation (trimmed for smoother scroll near top) */}
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
          /* Perf: pause and cap work to kill micro-jank on scroll/resize */
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
            <svg width="30" height="30" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 16l-6-6h12z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="projects-container" id="projects-content">
        <div className="projects-layout">
          <div className="projects-main">
            <h2 className="projects-title" id="projects-heading">Projects</h2>
            <p className="projects-intro">
              I build small, trustworthy tools: clean pipelines you can audit, notebooks that explain decisions, and interfaces that invite exploration.
              Below are EEG with reaction-time lapses connected to NHIS sleep, a transparent BRFSS depression index, Strava wearables that surface training patterns,
              and statewide surgery volumes you can navigate without guesswork.
            </p>

            {/* Main Projects Grid */}
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
                    alt="10-20 EEG electrode montage highlighting frontal, central, parietal, and occipital regions"
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="project-card-content">
                  <h3 className="project-title">EEG + NHIS Explorer</h3>
                  <ul className="project-points">
                    <li className="star">
                      Processed OpenNeuro EEG recordings with MNE-Python and NumPy, extracting theta, alpha, and beta band power from cleaned epochs.
                    </li>
                    <li className="star">
                      Visualized Psychomotor Vigilance Task reaction-time distributions and lapse rates under sleep loss.
                    </li>
                    <li className="star">
                      Combined PANAS mood changes from a sleep-deprivation study with 2024 NHIS indicators (hours slept, restfulness, sleep-aid use).
                    </li>
                    <li className="star">
                      Interactive Streamlit app with Plotly for side-by-side exploration of lab signals and national survey patterns (educational, not diagnostic).
                    </li>
                  </ul>
                  <p className="project-tools">Tools: Streamlit, MNE-Python, Plotly, Pandas, NumPy</p>
                  <div className="project-links">
                    <a href="https://github.com/aparker03/eeg-nhis-app" target="_blank" rel="noopener noreferrer">GitHub Repo →</a>
                  </div>
                  <a href="https://eeg-nhis-app.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-launch-btn">Launch App →</a>
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
                  <h3 className="project-title">BRFSS Depression Index Explorer</h3>
                  <ul className="project-points">
                    <li className="star">Engineered a Depression Index from 2022 BRFSS items with transparent scoring aligned to PHQ-style signals.</li>
                    <li className="star">Compared imputation strategies in-app; choices propagate to all visuals and summaries.</li>
                    <li className="star">State-level choropleths, group comparisons, live filters, and CSV export for reproducible analysis.</li>
                    <li className="star">Linked EDA/methodology notebooks so readers can trace cleaning steps and assumptions.</li>
                  </ul>
                  <p className="project-tools">Tools: Streamlit, Pandas, Plotly, scikit-learn</p>
                  <div className="project-links">
                    <a href={`${P}/notebooks/brfss/download.html`}>Download</a>
                    <a href={`${P}/notebooks/brfss/eda.html`}>EDA</a>
                    <a href={`${P}/notebooks/brfss/depression_index_analysis.html`}>Index</a>
                  </div>
                  <a href="https://state-of-mind.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-launch-btn">Launch App →</a>
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
                  <ul className="project-points">
                    <li className="star">Parsed a personal Strava export to study cadence, pace stability, and heart-rate zones across runs.</li>
                    <li className="star">Distribution/KDE views reveal training patterns that single-run summaries miss.</li>
                    <li className="star">Filters for periods and sessions make week-over-week trends easy to compare.</li>
                    <li className="star">Companion notebook documents assumptions and cleaning decisions.</li>
                  </ul>
                  <p className="project-tools">Tools: Streamlit, Seaborn, Pandas, Matplotlib</p>
                  <div className="project-links">
                    <a href={`${P}/notebooks/strava/strava-analysis.html`}>View Notebook →</a>
                  </div>
                  <a href="https://movement-mapped.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-launch-btn">Launch App →</a>
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
                  <h3 className="project-title">Surgical Scope: Cancer Procedure Trends</h3>
                  <ul className="project-points">
                    <li className="star">Analyzed California HCAI hospital surgery volumes (2013–2022) across the ICD-9 to ICD-10 transition.</li>
                    <li className="star">Compared high-volume procedures (breast, colon, prostate) to rarer ones (esophagus, pancreas, stomach) using KDE trends.</li>
                    <li className="star">Outlier-aware views (IQR) and a California-wide roll-up separate from filtered totals.</li>
                    <li className="star">County-level choropleths and hospital-level visuals with filters for site, region, and year.</li>
                  </ul>
                  <p className="project-tools">Tools: Streamlit, Pydeck, Pandas, Seaborn</p>
                  <div className="project-links">
                    <a href={`${P}/notebooks/cancer/cancer-analysis.html`}>View Notebook →</a>
                  </div>
                  <a href="https://surgical-scope.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-launch-btn">Launch App →</a>
                </div>
              </div>
            </div>

            {/* Exploratory Projects */}
            <div className="exploratory-projects">
              <h3 className="exploratory-title">Exploratory Projects (R / RPubs)</h3>
              <p className="exploratory-intro" style={{ textAlign: "center", maxWidth: 980, margin: "0 auto 2rem" }}>
                Early work using R, Shiny, and Leaflet that built habits around interactivity, reproducibility, and spatial visualization.
              </p>

              <div className="exploratory-grid">
                <div className="project-card">
                  <h4 className="project-subtitle">Prediction App Presentation</h4>
                  <p className="exploratory-desc">A lightweight demo app that accepts user inputs and renders predicted outcomes.</p>
                  <a href="https://rpubs.com/alex23/998041" target="_blank" rel="noreferrer">View on RPubs →</a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Shiny Application &amp; Pitch</h4>
                  <p className="exploratory-desc">A reproducible Shiny app with an interactive pitch covering use cases and design choices.</p>
                  <a href="https://rpubs.com/alex23/993970" target="_blank" rel="noreferrer">View on RPubs →</a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Creating a Map With Leaflet</h4>
                  <p className="exploratory-desc">Interactive Leaflet map in R to display geo-located data with popups and tooltips.</p>
                  <a href="https://rpubs.com/alex23/991877" target="_blank" rel="noreferrer">View on RPubs →</a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Storm Data Analysis</h4>
                  <p className="exploratory-desc">Peer-reviewed course project analyzing U.S. storm impacts with clear visualizations.</p>
                  <a href="https://rpubs.com/alex23/981558" target="_blank" rel="noreferrer">View on RPubs →</a>
                </div>
              </div>
            </div>
          </div>
        </div>{/* /.projects-layout */}
      </div>{/* /.projects-container */}
    </section>
  );
}

export default Projects;
