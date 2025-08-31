// src/pages/Resume.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../components/sections/Resume/Resume.css";
import AnimatedBackgroundResume from "../components/layout/AnimatedBackgroundResume";

const P = process.env.PUBLIC_URL;
const TIMELINE_KEY = "timelineMode"; // 'vertical' | 'horizontal'

function getInitialTimelineMode() {
  try {
    const usp = new URLSearchParams(window.location.search);
    const q = usp.get("timeline");
    if (q === "horizontal" || q === "vertical") return q;
    const saved = localStorage.getItem(TIMELINE_KEY);
    if (saved === "horizontal" || saved === "vertical") return saved;
  } catch {}
  return "vertical";
}

function Resume() {
  const [timelineMode, setTimelineMode] = useState(getInitialTimelineMode);
  const isHorizontal = timelineMode === "horizontal";

  const trackRef = useRef(null);
  const firstItemRef = useRef(null);

  // Persist preference
  useEffect(() => {
    try { localStorage.setItem(TIMELINE_KEY, timelineMode); } catch {}
  }, [timelineMode]);

  // When switching to horizontal, ensure the first card is visible
  useEffect(() => {
    if (!isHorizontal || !trackRef.current || !firstItemRef.current) return;
    trackRef.current.scrollTo({ left: 0, top: 0, behavior: "auto" });
  }, [isHorizontal]);

  // Precise jump to Highlights
  const handleScrollToHighlights = (e) => {
    e.preventDefault();
    const heading = document.getElementById("highlights-heading");
    if (!heading) return;

    const section = heading.closest(".resume-section") || heading;
    const vw = window.innerWidth;
    const isMobile = vw <= 600;
    const isFullscreen = vw >= 1400;
    const OFFSET = isMobile ? 80 : isFullscreen ? 150 : 110;

    const rect = section.getBoundingClientRect();
    const y = rect.top + window.pageYOffset - OFFSET;

    window.scrollTo({ top: y, behavior: "smooth" });

    try { window.history.replaceState(null, "", "#highlights-heading"); } catch {}

    try {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    } catch {}
  };

  return (
    <section className="resume-page" aria-labelledby="resume-heading">
      {/* decorative shapes */}
      <div className="shape shape-circle" aria-hidden="true"></div>
      <div className="shape shape-triangle" aria-hidden="true"></div>
      <div className="shape shape-squiggle" aria-hidden="true"></div>

      {/* hero with scoped animated background */}
      <div
        className="resume-hero-wrap"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <AnimatedBackgroundResume zIndex={1} />

        <div className="resume-hero" style={{ position: "relative", zIndex: 2 }}>
          <img
            src={`${P}/assets/avatars/avatar-resume.png`}
            alt="Portrait of Alexis Parker"
            className="resume-hero-avatar"
          />
          <a
            className="scroll-cue"
            href="#highlights-heading"
            aria-label="Jump to highlights"
            onClick={handleScrollToHighlights}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 16l-6-6h12z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="resume-inner">
        <header className="resume-header text-center">
          <h2 id="resume-heading" className="resume-title">Resume</h2>
          <p className="resume-intro mx-auto text-center">
            I started in psychology, where questions about health and behavior first took shape.
            Over time those questions grew into data science, giving me tools to explore patterns at scale and share them clearly.

            I completed the Master of Applied Data Science at the University of Michigan in August 2025.
            My work blends rigor with creativity, turning raw information into visuals, pipelines, and interactive tools that make results both trustworthy and engaging.
          </p>

        </header>

        {/* downloads */}
        <div className="resume-downloads" role="region" aria-label="Resume downloads">
          <a href={`${P}/downloads/resume.pdf`} download className="btn-primary" aria-label="Download resume as PDF">
            Download PDF
          </a>
          <a href={`${P}/downloads/resume.docx`} download className="btn-ghost" aria-label="Download resume as DOCX">
            Download DOCX
          </a>
        </div>

        {/* highlights */}
        <section
          className="resume-section"
          aria-labelledby="highlights-heading"
          style={{ scrollMarginTop: "150px" }}
        >
          <h3 id="highlights-heading" className="section-title">Highlights</h3>
          <ul className="highlights-list">
            <li className="star">Work spans federal surveys, neuroscience signals, and wearable data with attention to data quality and interpretation.</li>
            <li className="star">Shaped results into interactive apps that explain choices and make exploration straightforward.</li>
            <li className="star">Built reproducible Python workflows for cleaning, modeling, and communication.</li>
            <li className="star">Comfortable presenting to technical and general audiences and adapting methods to new domains.</li>
          </ul>
        </section>

        {/* skills snapshot */}
        <section className="resume-section" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="section-title">Skills snapshot</h3>
          <div className="skill-tiles">
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Research and foundations</h4>
              <ul className="tile-points">
                <li className="star">Designed and evaluated studies in psychology and public health contexts.</li>
                <li className="star">Synthesized literature and qualitative notes to frame questions and decisions.</li>
                <li className="star">Applied mixed methods to connect behavioral insight with applied modeling.</li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Data and analysis</h4>
              <ul className="tile-points">
                <li className="star">Processed CDC and NIH surveys and sensor data with Pandas and NumPy.</li>
                <li className="star">Used exploratory analysis, regression, and clustering where appropriate.</li>
                <li className="star">Wrote SQL and built stepwise pipelines that preserve provenance.</li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Applied machine learning</h4>
              <ul className="tile-points">
                <li className="star">Trained models such as Logistic Regression, Random Forest, and SVM with ROC AUC and SHAP for interpretation.</li>
                <li className="star">Applied KMeans, PCA, and DBSCAN for structure discovery and segmentation.</li>
                <li className="star">Engineered features and tuned hyperparameters for stable results.</li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Visualization and apps</h4>
              <ul className="tile-points">
                <li className="star">Built dashboards that organize signals, survey measures, and performance outcomes.</li>
                <li className="star">Created visuals with Seaborn, Matplotlib, and Plotly for clear communication.</li>
                <li className="star">Developed Streamlit apps that bring methods and results into one place.</li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Workflow and collaboration</h4>
              <ul className="tile-points">
                <li className="star">Used Git and GitHub for versioning and review.</li>
                <li className="star">Maintained reproducible notebooks in Jupyter and R Markdown.</li>
                <li className="star">Documented choices so others can repeat or extend the work.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* journey timeline */}
        <section className="resume-section" aria-labelledby="timeline-heading">
          <div className="timeline-header-row">
            <h3 id="timeline-heading" className="section-title">Journey</h3>

            {/* Layout toggle */}
            <div className="timeline-controls" role="group" aria-label="Timeline layout">
              <label className={`segmented ${!isHorizontal ? "is-active" : ""}`}>
                <input
                  type="radio"
                  name="timeline-layout"
                  value="vertical"
                  checked={!isHorizontal}
                  onChange={() => setTimelineMode("vertical")}
                />
                Vertical
              </label>
              <label className={`segmented ${isHorizontal ? "is-active" : ""}`}>
                <input
                  type="radio"
                  name="timeline-layout"
                  value="horizontal"
                  checked={isHorizontal}
                  onChange={() => setTimelineMode("horizontal")}
                />
                Horizontal
              </label>
            </div>
          </div>

          <div className={`timeline ${isHorizontal ? "is-horizontal" : ""}`}>
            <div className="timeline-rail" aria-hidden="true"></div>

            <div className="timeline-track" ref={trackRef}>
              {/* CSU */}
              <div className="timeline-item">
                <div className="timeline-card hover-card left" ref={firstItemRef}>
                  <span className="time-badge">2015 to 2019</span>
                  <h4 className="item-title">CSU San Bernardino</h4>
                  <p className="item-sub">B.A. in Psychology</p>
                  <ul className="item-points">
                    <li className="star">Explored cognition, drugs and behavior, and neuroscience through labs and coursework.</li>
                    <li className="star">Served as a behavioral neuroscience RA using structured protocols and ANOVA in lab studies.</li>
                    <li className="star">Turned lab data into visuals that supported conclusions on adolescent relapse risk.</li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>

              {/* Caregiver */}
              <div className="timeline-item">
                <div className="timeline-spacer left" aria-hidden="true"></div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-card hover-card right">
                  <span className="time-badge">2019 to Present</span>
                  <h4 className="item-title">IHSS Caregiver</h4>
                  <p className="item-sub">Long-term support role</p>
                  <ul className="item-points">
                    <li className="star">Supported medication routines, mobility, and independence.</li>
                    <li className="star">Monitored health changes and improved communication with providers.</li>
                    <li className="star">Balanced caregiving with research and school while keeping commitments.</li>
                  </ul>
                </div>
              </div>

              {/* Independent projects */}
              <div className="timeline-item t-gap-lg">
                <div className="timeline-card hover-card left">
                  <span className="time-badge">2022 to Present</span>
                  <h4 className="item-title">Independent projects</h4>
                  <p className="item-sub">Public health and behavioral data</p>
                  <ul className="item-points">
                    <li className="star">Created Streamlit and R Shiny apps that turned survey data into interactive visuals.</li>
                    <li className="star">Practiced reproducibility and transparency through public portfolio work.</li>
                    <li className="star">Built a base that supported later graduate projects.</li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>

              {/* MADS */}
              <div className="timeline-item">
                <div className="timeline-spacer left" aria-hidden="true"></div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-card hover-card right">
                  <span className="time-badge">2024 to 2025</span>
                  <h4 className="item-title">Master of Applied Data Science</h4>
                  <p className="item-sub">University of Michigan</p>
                  <ul className="item-points">
                    <li className="star">Completed the program in August 2025 with a focus on transparent, interpretable analysis.</li>
                    <li className="star">Projects included a depression index from BRFSS self-reports, training pattern views from Strava, and statewide surgery trend exploration.</li>
                    <li className="star">Built an educational app that presents lab measures and survey measures side by side for sleep and performance exploration.</li>
                  </ul>
                </div>
              </div>

              {/* Graduate RA */}
              <div className="timeline-item">
                <div className="timeline-card hover-card left">
                  <span className="time-badge">2025 to Present</span>
                  <h4 className="item-title">Graduate Research Assistant</h4>
                  <p className="item-sub">University of Michigan</p>
                  <ul className="item-points">
                    <li className="star">Built Python pipelines to support exploratory LLM and health projects.</li>
                    <li className="star">Completed literature reviews, annotation, and qualitative coding to guide analysis.</li>
                    <li className="star">Created KDE plots, regressions, and time series that informed study decisions.</li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </section>

        {/* projects CTA */}
        <section className="resume-section" aria-labelledby="work-heading">
          <h3 id="work-heading" className="section-title">Explore the work</h3>
          <p className="section-note">
            See examples of methods, decisions, and outcomes in context.
          </p>
          <ul className="item-points">
            <li className="star">Depression Index study from BRFSS self-reports.</li>
            <li className="star">Movement-Mapped from Strava activity data.</li>
            <li className="star">Surgical Scope using California HCAI surgery volumes.</li>
            <li className="star">EEG and NHIS Explorer for sleep and performance measures. Educational and not diagnostic.</li>
          </ul>
          <Link to="/projects" className="btn-primary btn-inline" aria-label="Go to Projects page">
            See projects →
          </Link>
        </section>

        {/* Featured Certifications */}
        <section className="resume-section" aria-labelledby="certs-featured-heading">
          <h3 id="certs-featured-heading" className="section-title">Featured certifications</h3>
          <ul className="certs-list">
            <li><strong>IBM Data Science Specialization</strong>: Python, SQL, ML, and visualization workflows. <Link to="/certifications" className="btn-link">View details</Link></li>
            <li><strong>Deep Learning Specialization</strong>: CNNs, RNNs, GANs, and optimization strategies.</li>
            <li><strong>Machine Learning Specialization</strong>: regression, classification, clustering, and recommenders.</li>
            <li><strong>Data Science Specialization</strong>: R programming, reproducible workflows, and exploratory analysis.</li>
            <li><strong>Machine Learning on Google Cloud</strong>: TensorFlow on GCP and MLOps pipelines.</li>
            <li><strong>Neuroscience and Neuroimaging</strong>: fMRI design, analysis, and neurohacking in R.</li>
          </ul>
        </section>

        {/* Independent Learning */}
        <section className="resume-section" aria-labelledby="learning-heading">
          <h3 id="learning-heading" className="section-title">Independent learning journey</h3>
          <p className="section-note">
            From 2022 to 2024, I completed over one hundred courses and multiple specializations in data science, neuroscience, and machine learning. This practice shaped habits in evaluation, reproducibility, and applied analysis.
          </p>
          <Link to="/certifications" className="btn-primary btn-inline" aria-label="View all certifications">
            View all certifications →
          </Link>
        </section>

        {/* RPubs */}
        <section className="resume-section" aria-labelledby="rpubs-heading">
          <h3 id="rpubs-heading" className="section-title">Exploratory work in R</h3>
          <p className="section-note">
            Early projects with R Shiny, Leaflet, and R Markdown introduced interactivity and spatial views and informed later work in Python.
          </p>
          <a
            href="https://rpubs.com/alex23"
            target="_blank"
            rel="noreferrer"
            className="btn-link btn-inline"
          >
            View full RPubs profile →
          </a>
        </section>
      </div>
    </section>
  );
}

export default Resume;
