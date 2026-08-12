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
    try {
      localStorage.setItem(TIMELINE_KEY, timelineMode);
    } catch {}
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

    try {
      window.history.replaceState(null, "", "#highlights-heading");
    } catch {}

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
        <div
          className="resume-hero"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="resume-hero-visual">
            <AnimatedBackgroundResume zIndex={1} />
            <img
              src={`${P}/assets/avatars/avatar-resume.png`}
              alt="Portrait of Alexis Parker"
              className="resume-hero-avatar"
            />
          </div>
          <a
            className="scroll-cue"
            href="#highlights-heading"
            aria-label="Jump to highlights"
            onClick={handleScrollToHighlights}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
            >
              <path d="M12 16l-6-6h12z" fill="currentColor"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="resume-inner">
        <header className="resume-header text-center">
          <h2 id="resume-heading" className="resume-title">
            Resume
          </h2>
          <p className="resume-intro mx-auto text-center">
            I started in psychology, where questions about health and behavior
            first took shape. Over time those questions grew into data science,
            giving me tools to explore patterns at scale and share them clearly.
            I completed the Master of Applied Data Science at the University of
            Michigan in August 2025 and am pursuing a PhD in Information Systems
            &amp; Technology with a Data Science &amp; Analytics concentration
            at Claremont Graduate University. My work blends rigor with
            creativity, turning raw information into visuals, pipelines, and
            interactive tools that make results both trustworthy and engaging.
          </p>
        </header>

        {/* downloads */}
        <div
          className="resume-downloads"
          role="region"
          aria-label="Resume downloads"
        >
          <a
            href={`${P}/downloads/resume.pdf`}
            download
            className="btn-primary"
            aria-label="Download resume as PDF"
          >
            Download PDF
          </a>
          <a
            href={`${P}/downloads/resume.docx`}
            download
            className="btn-ghost"
            aria-label="Download resume as DOCX"
          >
            Download DOCX
          </a>
        </div>

        {/* highlights */}
        <section
          className="resume-section"
          aria-labelledby="highlights-heading"
          style={{ scrollMarginTop: "150px" }}
        >
          <h3 id="highlights-heading" className="section-title">
            Highlights
          </h3>
          <ul className="highlights-list">
            <li className="star">
              PhD student in Information Systems &amp; Technology focused on
              Data Science &amp; Analytics.
            </li>
            <li className="star">
              Work spans federal surveys, neuroscience signals, wearable data,
              health analytics, and AI interfaces for drug-design workflows.
            </li>
            <li className="star">
              Built reproducible Python workflows for cleaning, modeling,
              visualization, qualitative coding, annotation, and research
              communication.
            </li>
            <li className="star">
              Shaped results into interactive apps that explain choices and make
              exploration straightforward for technical and general audiences.
            </li>
          </ul>
        </section>

        {/* skills snapshot */}
        <section className="resume-section" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="section-title">
            Skills snapshot
          </h3>
          <div className="skill-tiles">
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Research and foundations</h4>
              <ul className="tile-points">
                <li className="star">
                  Designed and evaluated studies in psychology, public health,
                  and health-data contexts.
                </li>
                <li className="star">
                  Synthesized literature, qualitative notes, and annotations to
                  frame questions and decisions.
                </li>
                <li className="star">
                  Applied mixed methods to connect behavioral insight with
                  applied modeling and LLM-based research methods.
                </li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Data and analysis</h4>
              <ul className="tile-points">
                <li className="star">
                  Processed CDC and NIH surveys and sensor data with Pandas and
                  NumPy.
                </li>
                <li className="star">
                  Used exploratory analysis, regression, and clustering where
                  appropriate.
                </li>
                <li className="star">
                  Wrote SQL and built stepwise pipelines that preserve
                  provenance.
                </li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Applied machine learning</h4>
              <ul className="tile-points">
                <li className="star">
                  Trained models such as Logistic Regression, Random Forest, and
                  SVM with ROC AUC and SHAP for interpretation.
                </li>
                <li className="star">
                  Applied KMeans, PCA, and DBSCAN for structure discovery and
                  segmentation.
                </li>
                <li className="star">
                  Compared model configurations and tuned hyperparameters with
                  cross-validation.
                </li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Visualization and apps</h4>
              <ul className="tile-points">
                <li className="star">
                  Built dashboards that organize signals, survey measures, and
                  performance outcomes.
                </li>
                <li className="star">
                  Created visuals with Seaborn, Matplotlib, and Plotly,
                  including KDE plots, time series, regressions, and dashboards.
                </li>
                <li className="star">
                  Developed Streamlit apps that bring methods and results into
                  one place.
                </li>
              </ul>
            </article>
            <article className="skill-tile hover-card">
              <h4 className="tile-title">Workflow and collaboration</h4>
              <ul className="tile-points">
                <li className="star">
                  Used Git and GitHub for versioning and review.
                </li>
                <li className="star">
                  Maintained reproducible notebooks in Jupyter and R Markdown.
                </li>
                <li className="star">
                  Documented choices so others can repeat or extend the work.
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* journey timeline */}
        <section className="resume-section" aria-labelledby="timeline-heading">
          <div className="timeline-header-row">
            <h3 id="timeline-heading" className="section-title">
              Journey
            </h3>

            {/* Layout toggle */}
            <div
              className="timeline-controls"
              role="group"
              aria-label="Timeline layout"
            >
              <label
                className={`segmented ${!isHorizontal ? "is-active" : ""}`}
              >
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
                <div
                  className="timeline-card hover-card left"
                  ref={firstItemRef}
                >
                  <span className="time-badge">2015 to June 2019</span>
                  <h4 className="item-title">CSU San Bernardino</h4>
                  <p className="item-sub">B.A. in Psychology</p>
                  <ul className="item-points">
                    <li className="star">
                      Built foundations in experimental psychology, biological
                      psychology, drugs and behavior, and research methods.
                    </li>
                    <li className="star">
                      Connected behavioral questions with structured study
                      design and statistical analysis.
                    </li>
                    <li className="star">
                      Developed the research interests that later shaped health,
                      neuroscience, and data science projects.
                    </li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>

              {/* Behavioral neuroscience RA */}
              <div className="timeline-item">
                <div className="timeline-spacer left" aria-hidden="true"></div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-card hover-card right">
                  <span className="time-badge">April to June 2019</span>
                  <h4 className="item-title">
                    Behavioral Neuroscience Research Assistant
                  </h4>
                  <p className="item-sub">
                    California State University, San Bernardino
                  </p>
                  <ul className="item-points">
                    <li className="star">
                      Conducted a behavioral study on substance-related
                      conditioned preference in adolescent rats.
                    </li>
                    <li className="star">
                      Followed structured research protocols and analyzed
                      responses with three-way ANOVA.
                    </li>
                    <li className="star">
                      Documented laboratory observations and analyzed study
                      results using a three-way ANOVA.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Caregiver */}
              <div className="timeline-item t-gap-lg">
                <div className="timeline-card hover-card left">
                  <span className="time-badge">April 2019 to Present</span>
                  <h4 className="item-title">IHSS Caregiver</h4>
                  <p className="item-sub">IHSS Public Authority</p>
                  <ul className="item-points">
                    <li className="star">
                      Provided long-term, personalized support for elderly and
                      disabled clients.
                    </li>
                    <li className="star">
                      Coordinated daily care around mobility, hygiene, routines,
                      and independence.
                    </li>
                    <li className="star">
                      Balanced caregiving responsibilities with research,
                      graduate study, and applied data projects.
                    </li>
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
                  <span className="time-badge">2024 to August 2025</span>
                  <h4 className="item-title">Master of Applied Data Science</h4>
                  <p className="item-sub">
                    University of Michigan School of Information
                  </p>
                  <ul className="item-points">
                    <li className="star">
                      Focused on experimental design, deep learning, Bayesian
                      inference, health data analysis, EDA, public health
                      research, and LLM-based research methods.
                    </li>
                    <li className="star">
                      Applied GANs, RNNs, scikit-learn workflows, and
                      interpretable analysis across graduate projects.
                    </li>
                    <li className="star">
                      Completed the program in August 2025 with an emphasis on
                      transparent, reproducible, and explainable data products.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Graduate projects */}
              <div className="timeline-item">
                <div className="timeline-card hover-card left">
                  <span className="time-badge">January to August 2025</span>
                  <h4 className="item-title">Graduate Project Portfolio</h4>
                  <p className="item-sub">
                    Health surveys, EEG, and population-level analytics
                  </p>
                  <ul className="item-points">
                    <li className="star">
                      Used full-data 2022 BRFSS notebooks with prepared stages
                      above 400,000 records to construct an exploratory index
                      and examine regional variation.
                    </li>
                    <li className="star">
                      Outer-merged seven NHANES modules and applied adult,
                      interview, examination, and PHQ validity filters to create
                      a 467-record depression-severity modeling table.
                    </li>
                    <li className="star">
                      Built a Streamlit and Plotly explorer with separate views
                      for stored OpenNeuro ds004902 band summaries, PVT
                      measures, and 6,705 cleaned 2024 NHIS records.
                    </li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>

              {/* Graduate Student Researcher */}
              <div className="timeline-item">
                <div className="timeline-spacer left" aria-hidden="true"></div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-card hover-card right">
                  <span className="time-badge">
                    January 2025 to January 2026
                  </span>
                  <h4 className="item-title">Graduate Student Researcher</h4>
                  <p className="item-sub">
                    University of Michigan School of Information
                  </p>
                  <ul className="item-points">
                    <li className="star">
                      Built reproducible data pipelines with Pandas, Seaborn,
                      and scikit-learn to support exploratory analysis and
                      research decision-making.
                    </li>
                    <li className="star">
                      Created KDE plots, time series graphs, and regression
                      charts for technical review and communication.
                    </li>
                    <li className="star">
                      Completed literature reviews, qualitative coding,
                      annotation, and comparative method documentation for
                      health and LLM-based research.
                    </li>
                  </ul>
                </div>
              </div>

              {/* AlphaRose */}
              <div className="timeline-item">
                <div className="timeline-card hover-card left">
                  <span className="time-badge">
                    November 2025 to February 2026
                  </span>
                  <h4 className="item-title">
                    Data Science Intern, AI Interfaces
                  </h4>
                  <p className="item-sub">AlphaRose Therapeutics</p>
                  <ul className="item-points">
                    <li className="star">
                      Developed tokenization and embedding methods for
                      nucleotide sequences, protein sequences, SMILES strings,
                      and PDB files.
                    </li>
                    <li className="star">
                      Used RDKit, molecular graph structures, and
                      chemoinformatic syntax to support multi-modal,
                      structurally aware drug-design modeling.
                    </li>
                    <li className="star">
                      Debugged sequence encoders and intramolecular torsion
                      calculation workflows with RDKit, Snakemake, and
                      chemoinformatic tooling to improve model readiness.
                    </li>
                  </ul>
                </div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-spacer right" aria-hidden="true"></div>
              </div>

              {/* PhD */}
              <div className="timeline-item">
                <div className="timeline-spacer left" aria-hidden="true"></div>
                <span className="timeline-node" aria-hidden="true"></span>
                <div className="timeline-card hover-card right">
                  <span className="time-badge">2026 to May 2030</span>
                  <h4 className="item-title">
                    PhD in Information Systems &amp; Technology
                  </h4>
                  <p className="item-sub">
                    Claremont Graduate University · Data Science &amp; Analytics
                  </p>
                  <ul className="item-points">
                    <li className="star">
                      Continuing doctoral training in information systems, data
                      science, analytics, and research methods.
                    </li>
                    <li className="star">
                      Building on prior work in public health, neuroscience, AI
                      interfaces, and reproducible data products.
                    </li>
                    <li className="star">
                      Interested in projects that combine health AI evaluation,
                      annotation workflows, equity analytics, wearable data, and
                      reproducibility scorecards.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Publication */}
        <section
          className="resume-section publication-resume-section"
          aria-labelledby="publication-heading"
        >
          <h3 id="publication-heading" className="section-title">
            Publication
          </h3>
          <p className="publication-resume-status">
            arXiv preprint · version 3 · revised April 9, 2026
          </p>
          <p className="publication-resume-title">
            A survey of generative AI adoption and perceived productivity among
            scientists who program
          </p>
          <p className="section-note">
            Gabrielle O’Brien, Alexis Parker, Nasir Eisty, and Jeffrey Carver
            · arXiv:2512.19644 [cs.SE]
          </p>
          <a
            href="https://arxiv.org/abs/2512.19644"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link btn-inline"
          >
            Read the preprint on arXiv →
          </a>
        </section>

        {/* projects CTA */}
        <section className="resume-section" aria-labelledby="work-heading">
          <h3 id="work-heading" className="section-title">
            Explore the work
          </h3>
          <p className="section-note">
            See examples of methods, decisions, and outcomes in context.
          </p>
          <ul className="item-points">
            <li className="star">
              BRFSS Depression Index study with full-data notebook stages above
              400,000 records and a sampled application view.
            </li>
            <li className="star">
              NHANES depression-severity modeling from a 467-record table, with
              separate unsupervised analyses, supervised comparisons, and SHAP.
            </li>
            <li className="star">Movement-Mapped from Strava activity data.</li>
            <li className="star">
              Surgical Scope using California HCAI surgery volumes.
            </li>
            <li className="star">
              EEG and NHIS Explorer with separate OpenNeuro laboratory views
              and 6,705 cleaned 2024 NHIS records. Educational and
              non-diagnostic.
            </li>
          </ul>
          <Link
            to="/projects"
            className="btn-primary btn-inline"
            aria-label="Go to Projects page"
          >
            See projects →
          </Link>
        </section>

        {/* Featured Certifications */}
        <section
          className="resume-section"
          aria-labelledby="certs-featured-heading"
        >
          <h3 id="certs-featured-heading" className="section-title">
            Featured certifications
          </h3>
          <ul className="certs-list">
            <li>
              <strong>IBM Data Science Specialization</strong>: Python, SQL, ML,
              and visualization workflows.{" "}
              <Link to="/certifications" className="btn-link">
                View details
              </Link>
            </li>
            <li>
              <strong>Deep Learning Specialization</strong>: CNNs, RNNs, GANs,
              and optimization strategies.
            </li>
            <li>
              <strong>Machine Learning Specialization</strong>: regression,
              classification, clustering, and recommenders.
            </li>
            <li>
              <strong>Data Science Specialization</strong>: R programming,
              reproducible workflows, and exploratory analysis.
            </li>
            <li>
              <strong>Machine Learning on Google Cloud</strong>: TensorFlow on
              GCP and MLOps pipelines.
            </li>
            <li>
              <strong>Neuroscience and Neuroimaging</strong>: fMRI design,
              analysis, and neurohacking in R.
            </li>
          </ul>
        </section>

        {/* Independent Learning */}
        <section className="resume-section" aria-labelledby="learning-heading">
          <h3 id="learning-heading" className="section-title">
            Independent learning journey
          </h3>
          <p className="section-note">
            From 2022 to 2024, I completed over one hundred courses and multiple
            specializations in data science, neuroscience, and machine learning.
            This practice shaped habits in evaluation, reproducibility, and
            applied analysis.
          </p>
          <Link
            to="/certifications"
            className="btn-primary btn-inline"
            aria-label="View all certifications"
          >
            View all certifications →
          </Link>
        </section>

        {/* RPubs */}
        <section className="resume-section" aria-labelledby="rpubs-heading">
          <h3 id="rpubs-heading" className="section-title">
            Exploratory work in R
          </h3>
          <p className="section-note">
            Early projects with R Shiny, Leaflet, and R Markdown introduced
            interactivity and spatial views and informed later work in Python.
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
