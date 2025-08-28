// site/src/pages/Projects.jsx
import React from "react";
import "../components/Projects/Projects.css";

const P = process.env.PUBLIC_URL;

function Projects() {
  return (
    <section className="projects-section min-h-screen">
      <div className="projects-container">
        <div className="projects-layout">
          {/* Left column - text and projects */}
          <div className="projects-main">
            <h2 className="projects-title">Projects</h2>
            <p className="projects-intro">
              These projects reflect interests in behavioral data, mental health, and applied data storytelling.
              Each one is grounded in real data and uses clear methods, reproducible code, and accessible visuals.
            </p>

            {/* Main Projects Grid */}
            <div className="projects-grid">
              {/* EEG + NHIS */}
              <div className="project-card card-gold">
                <img
                  src={`${P}/images/projects/eeg/eeg-app-preview.png`}
                  alt="EEG + NHIS Explorer with EEG band power, reaction time, and NHIS survey panels"
                  className="project-image"
                  loading="lazy"
                />
                {/* New complementary image */}
                <img
                  src={`${P}/images/projects/eeg/eeg-electrodes-preview.png`}
                  alt="10-20 EEG electrode montage highlighting frontal, central, parietal, and occipital regions"
                  className="project-image"
                  loading="lazy"
                />
                <h3 className="project-title">EEG + NHIS Explorer</h3>
                <ul className="project-points">
                  <li className="star">
                    Processed OpenNeuro EEG recordings with MNE-Python and NumPy, extracting theta, alpha, and beta band power from cleaned epochs.
                  </li>
                  <li className="star">
                    Implemented a Psychomotor Vigilance Task panel that visualizes reaction-time distributions and lapse rates under sleep loss.
                  </li>
                  <li className="star">
                    Combined PANAS mood changes from a sleep-deprivation lab study with 2024 NHIS indicators including hours slept, restfulness, and sleep-aid use.
                  </li>
                  <li className="star">
                    Built an interactive Streamlit app using Plotly for side-by-side exploration of lab signals and national survey patterns. Educational and not diagnostic.
                  </li>
                </ul>
                <p className="project-tools">
                  Tools: Streamlit, MNE-Python, Plotly, Pandas, NumPy
                </p>
                <div className="project-links">
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

              {/* BRFSS */}
              <div className="project-card card-blue">
                <img
                  src={`${P}/images/projects/brfss/brfss-app-preview.png`}
                  alt="BRFSS Depression Index choropleth by state"
                  className="project-image"
                  loading="lazy"
                />
                <h3 className="project-title">BRFSS Depression Index Explorer</h3>
                <ul className="project-points">
                  <li className="star">
                    Engineered a Depression Index from 2022 BRFSS mental health items with transparent scoring that maps to PHQ-9 style signals.
                  </li>
                  <li className="star">
                    Compared multiple imputation strategies inside the app and reflected choices in all downstream visuals and summaries.
                  </li>
                  <li className="star">
                    Delivered state-level choropleths and group comparisons with live filters and CSV export for reproducible analysis.
                  </li>
                  <li className="star">
                    Linked EDA and methodology notebooks so readers can trace data cleaning, assumptions, and index logic.
                  </li>
                </ul>
                <p className="project-tools">
                  Tools: Streamlit, Pandas, Plotly, scikit-learn
                </p>
                <div className="project-links">
                  <a href={`${P}/notebooks/brfss/download.html`}>Download</a>
                  <a href={`${P}/notebooks/brfss/eda.html`}>EDA</a>
                  <a href={`${P}/notebooks/brfss/depression_index_analysis.html`}>Index</a>
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

              {/* Strava */}
              <div className="project-card card-red">
                <img
                  src={`${P}/images/projects/strava/strava-app-preview.png`}
                  alt="Strava cadence density plot and training views"
                  className="project-image"
                  loading="lazy"
                />
                <h3 className="project-title">Strava Wearable Metrics</h3>
                <ul className="project-points">
                  <li className="star">
                    Parsed a personal Strava export and organized time-stamped sessions to study cadence, pace consistency, and heart-rate zones.
                  </li>
                  <li className="star">
                    Produced KDE and distribution views that surface training patterns beyond single-run summaries and averages.
                  </li>
                  <li className="star">
                    Built a Streamlit interface to filter sessions, compare periods, and review trends within and across weeks.
                  </li>
                  <li className="star">
                    Documented data assumptions and cleaning steps in a companion notebook linked from the app.
                  </li>
                </ul>
                <p className="project-tools">
                  Tools: Streamlit, Seaborn, Pandas, Matplotlib
                </p>
                <div className="project-links">
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

              {/* Cancer Surgeries */}
              <div className="project-card card-green">
                <img
                  src={`${P}/images/projects/cancer/cancer-app-preview.png`}
                  alt="Cancer surgeries density plots and map"
                  className="project-image"
                  loading="lazy"
                />
                <h3 className="project-title">Surgical Scope: Cancer Procedure Trends</h3>
                <ul className="project-points">
                  <li className="star">
                    Analyzed California HCAI hospital surgery volumes from 2013 to 2022 with attention to the 2015 ICD-9 to ICD-10 transition period.
                  </li>
                  <li className="star">
                    Compared high-volume procedures such as breast, colon, and prostate to rarer procedures including esophagus, pancreas, and stomach using KDE trends.
                  </li>
                  <li className="star">
                    Included outlier-aware views using IQR filtering and added a California (Statewide) option that is distinct from the Filtered Total.
                  </li>
                  <li className="star">
                    Added geographic exploration with county-level choropleths and hospital-level visuals with filters for site, region, and year.
                  </li>
                </ul>
                <p className="project-tools">
                  Tools: Streamlit, Pydeck, Pandas, Seaborn
                </p>
                <div className="project-links">
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

            {/* Exploratory Projects */}
            <div className="exploratory-projects">
              <h3 className="exploratory-title">Exploratory Projects (R / RPubs)</h3>
              <p className="exploratory-intro">
                These early projects used R, Shiny, and Leaflet during MOOCs and coursework. They helped build habits
                around interactivity, reproducibility, and spatial visualization.
              </p>

              <div className="exploratory-grid">
                <div className="project-card">
                  <h4 className="project-subtitle">Prediction App Presentation</h4>
                  <p className="exploratory-desc">
                    A lightweight demonstration app that accepts user inputs and renders predicted outcomes.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/658708"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Shiny Application & Pitch</h4>
                  <p className="exploratory-desc">
                    A reproducible Shiny app packaged with an interactive pitch that explains use cases and design choices.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/658269"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Creating a Map With Leaflet</h4>
                  <p className="exploratory-desc">
                    An interactive Leaflet map built in R to display geo-located data with popups and tooltips.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/658015"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>

                <div className="project-card">
                  <h4 className="project-subtitle">Storm Data Analysis</h4>
                  <p className="exploratory-desc">
                    An analysis of U.S. storm data as part of a peer-reviewed course project with impact comparisons and visualizations.
                  </p>
                  <a
                    href="https://rpubs.com/alex23/656680"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on RPubs →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - full avatar */}
          <div className="projects-avatar-side">
            <img
              src={`${P}/assets/avatars/avatar-projects.png`}
              alt="Full-body projects avatar"
              className="projects-avatar-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
