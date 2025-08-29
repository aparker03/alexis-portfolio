// src/pages/Resume.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../components/sections/Resume/Resume.css";

const P = process.env.PUBLIC_URL;

function Resume() {
  return (
    <section className="resume-page" aria-labelledby="resume-heading">
      {/* decorative shapes */}
      <div className="shape shape-circle" aria-hidden="true"></div>
      <div className="shape shape-triangle" aria-hidden="true"></div>
      <div className="shape shape-squiggle" aria-hidden="true"></div>

      {/* hero */}
      <div className="resume-hero">
        <img
          src={`${P}/assets/avatars/avatar-resume.png`}
          alt="Portrait of Alexis Parker"
          className="resume-hero-avatar"
        />
        <div className="scroll-cue" aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" role="img" aria-hidden="true">
            <path d="M12 16l-6-6h12z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      <div className="resume-inner">
        <header className="resume-header text-center">
          <h2 id="resume-heading" className="resume-title">Resume</h2>
          <p className="resume-intro mx-auto text-center">
            I studied psychology at CSU San Bernardino and kept looking for better ways to understand people and health.
            Data science gave me those tools. I will complete the Master of Applied Data Science at the University of
            Michigan in August 2025. My work connects behavioral science, health research, and applied machine learning.
            I build pipelines, clear visuals, and interactive apps that help people explore results.
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
        <section className="resume-section" aria-labelledby="highlights-heading">
          <h3 id="highlights-heading" className="section-title">Highlights</h3>
          <ul className="highlights-list">
            <li className="star">Analyzed health and behavioral datasets including BRFSS, NHANES, NHIS, and OpenNeuro EEG.</li>
            <li className="star">Developed interactive apps with Streamlit and Plotly that linked lab and survey findings.</li>
            <li className="star">Built reproducible pipelines with Python (Pandas, NumPy, scikit-learn) to support modeling and visualization.</li>
            <li className="star">Balanced research assistantship, graduate study, and applied projects while delivering open and accessible work.</li>
          </ul>
        </section>

        {/* skills snapshot */}
        <section className="resume-section" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="section-title">Skills snapshot</h3>
          <div className="skill-tiles">
            <article className="skill-tile">
              <h4 className="tile-title">Research and foundations</h4>
              <ul className="tile-points">
                <li className="star">Designed and evaluated studies in psychology and public health contexts.</li>
                <li className="star">Conducted literature reviews and coded qualitative data to guide projects.</li>
                <li className="star">Applied mixed methods to connect behavioral science with applied analysis.</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Data and analysis</h4>
              <ul className="tile-points">
                <li className="star">Processed datasets from CDC, NIH, and Strava with Python (Pandas, NumPy).</li>
                <li className="star">Applied exploratory, regression, and clustering methods in health analytics.</li>
                <li className="star">Used SQL and reproducible pipelines to clean and merge multi-module data.</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Applied machine learning</h4>
              <ul className="tile-points">
                <li className="star">Trained supervised models such as Logistic Regression, Random Forest, and SVM, evaluated with ROC-AUC and SHAP.</li>
                <li className="star">Applied clustering methods including KMeans, PCA, and DBSCAN to uncover structure.</li>
                <li className="star">Engineered features and tuned hyperparameters for interpretable results.</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Visualization and apps</h4>
              <ul className="tile-points">
                <li className="star">Built dashboards with EEG scalp maps, reaction-time panels, and NHIS sleep indicators.</li>
                <li className="star">Visualized performance and health trends with Seaborn, Matplotlib, and Plotly.</li>
                <li className="star">Designed Streamlit apps to make exploration of large datasets accessible.</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Workflow and collaboration</h4>
              <ul className="tile-points">
                <li className="star">Versioned work with Git and GitHub for transparent collaboration.</li>
                <li className="star">Maintained reproducible notebooks in Jupyter and R Markdown.</li>
                <li className="star">Documented pipelines and visuals for clarity and long-term use.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* journey timeline */}
        <section className="resume-section" aria-labelledby="timeline-heading">
          <h3 id="timeline-heading" className="section-title">Journey</h3>

          <div className="timeline">
            <div className="timeline-rail" aria-hidden="true"></div>

            {/* CSU */}
            <div className="timeline-item">
              <div className="timeline-card left">
                <span className="time-badge">2015–2019</span>
                <h4 className="item-title">CSU San Bernardino</h4>
                <p className="item-sub">B.A. in Psychology</p>
                <ul className="item-points">
                  <li className="star">Explored cognition, drugs and behavior, and neuroscience through labs and coursework.</li>
                  <li className="star">Served as a behavioral neuroscience RA, applying structured protocols and ANOVA to lab studies.</li>
                  <li className="star">Turned raw lab data into visualizations that supported conclusions on adolescent relapse risk.</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>

            {/* Caregiver */}
            <div className="timeline-item">
              <div className="timeline-spacer left" aria-hidden="true"></div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-card right">
                <span className="time-badge">2019–Present</span>
                <h4 className="item-title">IHSS Caregiver</h4>
                <p className="item-sub">Long-term support role</p>
                <ul className="item-points">
                  <li className="star">Provided personalized care that supported medication adherence, mobility, and independence.</li>
                  <li className="star">Monitored health changes and improved communication with providers, reducing hospitalizations.</li>
                  <li className="star">Built planning and resilience while balancing caregiving with academic and research work.</li>
                </ul>
              </div>
            </div>

            {/* Independent projects */}
            <div className="timeline-item t-gap-lg">
              <div className="timeline-card left">
                <span className="time-badge">2022–Present</span>
                <h4 className="item-title">Independent projects</h4>
                <p className="item-sub">Public health and behavioral data</p>
                <ul className="item-points">
                  <li className="star">Created Streamlit and R Shiny apps that turned survey data into interactive visuals.</li>
                  <li className="star">Practiced reproducibility and transparency through open portfolio work.</li>
                  <li className="star">Used self-directed exploration to build a foundation for later graduate projects.</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>

            {/* MADS */}
            <div className="timeline-item">
              <div className="timeline-spacer left" aria-hidden="true"></div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-card right">
                <span className="time-badge">2024–2025</span>
                <h4 className="item-title">Master of Applied Data Science</h4>
                <p className="item-sub">University of Michigan</p>
                <ul className="item-points">
                  <li className="star">Developed supervised and unsupervised models across health and behavioral datasets.</li>
                  <li className="star">Completed projects on BRFSS depression, Strava performance, and California cancer surgeries.</li>
                  <li className="star">Led a Capstone project (EEG + NHIS Explorer) merging EEG band power, reaction-time tasks, mood surveys, and NHIS sleep indicators into interactive dashboards.</li>
                </ul>
              </div>
            </div>

            {/* Graduate RA */}
            <div className="timeline-item">
              <div className="timeline-card left">
                <span className="time-badge">2025–Present</span>
                <h4 className="item-title">Graduate Research Assistant</h4>
                <p className="item-sub">University of Michigan</p>
                <ul className="item-points">
                  <li className="star">Built reproducible pipelines with Pandas and scikit-learn to support exploratory LLM studies.</li>
                  <li className="star">Conducted literature review, annotation, and qualitative coding for health and AI research.</li>
                  <li className="star">Created visualizations such as KDE plots, regressions, and time series that informed decision-making.</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        {/* projects CTA */}
        <section className="resume-section" aria-labelledby="work-heading">
          <h3 id="work-heading" className="section-title">Explore the work</h3>
          <p className="section-note">
            Projects connect classroom, research, and applied work. Highlights include:
          </p>
          <ul className="item-points">
            <li className="star">Depression Index (BRFSS) - state-level analysis of mental health risk.</li>
            <li className="star">Movement-Mapped (Strava) - performance patterns from wearable data.</li>
            <li className="star">Surgical Scope (CalHHS) - cancer: hospital case volumes across California.</li>
            <li className="star">Capstone: EEG + NHIS Explorer. Combined EEG band power, reaction-time tasks, PANAS mood, and NHIS sleep data in a Streamlit app (educational, non-diagnostic).</li>
          </ul>
          <Link to="/projects" className="btn-primary btn-inline" aria-label="Go to Projects page">
            See projects →
          </Link>
        </section>

        {/* Featured Certifications */}
        <section className="resume-section" aria-labelledby="certs-featured-heading">
          <h3 id="certs-featured-heading" className="section-title">Featured certifications</h3>
          <ul className="certs-list">
            <li><strong>IBM Data Science Specialization</strong>: Python, SQL, ML, and visualization workflows.<Link to="/certifications" className="btn-link">View details</Link></li>
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
            Between 2022 and 2024, I completed over one hundred Coursera courses and multiple specializations in
            data science, neuroscience, and machine learning. This self-directed work built strong habits in evaluation,
            reproducibility, and applied analysis that carried into my graduate projects.
          </p>
          <Link to="/certifications" className="btn-primary btn-inline" aria-label="View all certifications">
            View all certifications →
          </Link>
        </section>

        {/* RPubs */}
        <section className="resume-section" aria-labelledby="rpubs-heading">
          <h3 id="rpubs-heading" className="section-title">Exploratory work in R</h3>
          <p className="section-note">
            Early exploratory projects used R Shiny, Leaflet, and R Markdown to turn survey and spatial data into interactive visuals. They formed the foundation for my later work in data science.
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
