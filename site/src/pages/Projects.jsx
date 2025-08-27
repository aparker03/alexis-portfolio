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
              These projects reflect my interests in behavioral data, mental
              health, and applied data storytelling. Each one is grounded in
              real-world data and explores questions through thoughtful design
              and analysis.
            </p>

            {/* Main Projects Grid */}
            <div className="projects-grid">
              {/* BRFSS */}
              <div className="project-card card-blue">
                <img
                  src={`${P}/images/projects/brfss/brfss-app-preview.png`}
                  alt="Choropleth of Depression Index by State"
                  className="project-image"
                />
                <h3 className="project-title">BRFSS Depression Index Explorer</h3>
                <p className="project-description">
                  Built a custom Depression Index using 2022 BRFSS data. The
                  project includes data cleaning, imputation strategy
                  comparison, and geographic and demographic visualizations of
                  mental health patterns across the U.S.
                </p>
                <p className="project-tools">
                  Tools: Streamlit, Pandas, Plotly, Scikit-learn
                </p>
                <div className="project-links">
                  <a href={`${P}/notebooks/brfss/download.html`}>Download</a>
                  <a href={`${P}/notebooks/brfss/eda.html`}>EDA</a>
                  <a href={`${P}/notebooks/brfss/depression_index_analysis.html`}>
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

              {/* Strava */}
              <div className="project-card card-red">
                <img
                  src={`${P}/images/projects/strava/strava-app-preview.png`}
                  alt="Strava Cadence KDE Plot"
                  className="project-image"
                />
                <h3 className="project-title">Strava Wearable Metrics</h3>
                <p className="project-description">
                  Explored wearable activity data exported from Strava to
                  analyze cadence trends, heart rate zones, and pacing
                  consistency. Includes KDE plots, density curves, and training
                  behavior visualized through Streamlit.
                </p>
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
                  alt="Density plot of common and rare cancer surgeries"
                  className="project-image"
                />
                <h3 className="project-title">
                  Surgical Scope: Cancer Procedure Trends
                </h3>
                <p className="project-description">
                  Interactive tool for analyzing trends in cancer surgeries
                  across California hospitals from 2013 to 2022. Features KDE
                  plots, choropleth maps, hospital-level visualizations, and
                  filters for surgery type, region, and time.
                </p>
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
              <h3 className="exploratory-title">
                Exploratory Projects (R / RPubs)
              </h3>
              <p className="exploratory-intro">
                These projects were completed during early MOOCs and coursework
                using R and Shiny. While lightweight and experimental, they
                helped me explore web-based interactivity, reproducibility, and
                geographic data visualization.
              </p>

              <div className="exploratory-grid">
                <div className="project-card">
                  <h4 className="project-subtitle">
                    Prediction App Presentation
                  </h4>
                  <p className="exploratory-desc">
                    A lightweight demonstration app showcasing user prediction
                    inputs and output rendering.
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
                    A reproducible web app built with Shiny, submitted with an
                    interactive pitch and demo.
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
                    Interactive map built using Leaflet and R to display
                    geo-located data.
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
                    Analysis of U.S. storm data as part of a peer-reviewed
                    course project. Includes impact comparison and
                    visualization.
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
              alt="Projects Avatar Full"
              className="projects-avatar-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
