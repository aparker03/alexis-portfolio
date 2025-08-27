// src/pages/Resume.jsx
import React from "react";
import "../components/Resume/Resume.css";

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
          src="/assets/avatars/avatar-resume.png"
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
        <header className="resume-header">
          <h2 id="resume-heading" className="resume-title">Resume</h2>

          {/* Intro */}
          <p className="resume-intro">
            I studied psychology at CSU San Bernardino and looked for better ways to understand people and health.
            Data science gave me those tools. I will finish the Master of Applied Data Science at the University of
            Michigan in August 2025. I work where research meets code. I support studies that use large language
            models, close reading of the literature, qualitative coding, and small tools that make analysis easy to
            explore. I share results with clear methods, practical visuals, and simple apps.
          </p>
        </header>

        {/* downloads */}
        <div className="resume-downloads" role="region" aria-label="Resume downloads">
          <a href="/resume.pdf" download className="btn-primary" aria-label="Download resume as PDF">
            Download PDF
          </a>
          <a href="/resume.docx" download className="btn-ghost" aria-label="Download resume as DOCX">
            Download DOCX
          </a>
        </div>

        {/* highlights (you said this is perfect) */}
        <section className="resume-section" aria-labelledby="highlights-heading">
          <h3 id="highlights-heading" className="section-title">Highlights</h3>
          <ul className="highlights-list" role="list">
            <li className="star">Questions that stay close to people and health</li>
            <li className="star">Interactive apps that let others explore findings</li>
            <li className="star">Clear writing and visuals for mixed audiences</li>
          </ul>
        </section>

        {/* skills snapshot (kept) */}
        <section className="resume-section" aria-labelledby="skills-heading">
          <h3 id="skills-heading" className="section-title">Skills snapshot</h3>
          <div className="skill-tiles">
            <article className="skill-tile">
              <h4 className="tile-title">Research and foundations</h4>
              <ul className="tile-points">
                <li className="star">Psychology and public health data</li>
                <li className="star">Study design and literature review</li>
                <li className="star">Qualitative coding and synthesis</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Data and analysis</h4>
              <ul className="tile-points">
                <li className="star">Python with Pandas and NumPy</li>
                <li className="star">Statistical modeling and evaluation</li>
                <li className="star">SQL and tidy data practices</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Applied machine learning</h4>
              <ul className="tile-points">
                <li className="star">Classification and clustering</li>
                <li className="star">Feature engineering and tuning</li>
                <li className="star">Model interpretation with SHAP</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Visualization and apps</h4>
              <ul className="tile-points">
                <li className="star">Streamlit for interactive tools</li>
                <li className="star">Plotly and Seaborn for visuals</li>
                <li className="star">Clear dashboards and reports</li>
              </ul>
            </article>
            <article className="skill-tile">
              <h4 className="tile-title">Workflow and collaboration</h4>
              <ul className="tile-points">
                <li className="star">Git and version control</li>
                <li className="star">Jupyter and reproducible notebooks</li>
                <li className="star">Readable documentation</li>
              </ul>
            </article>
          </div>
        </section>

        {/* journey timeline (unchanged structure) */}
        <section className="resume-section" aria-labelledby="timeline-heading">
          <h3 id="timeline-heading" className="section-title">Journey</h3>

          <div className="timeline" role="list">
            <div className="timeline-rail" aria-hidden="true"></div>

            {/* 2015 — CSU San Bernardino */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-card left">
                <span className="time-badge">2015</span>
                <h4 className="item-title">CSU San Bernardino</h4>
                <p className="item-sub">B.A. in Psychology</p>
                <ul className="item-points">
                  <li className="star">Explored behavior and the brain through classes and labs</li>
                  <li className="star">Learned to ask clear research questions</li>
                  <li className="star">Built habits in analysis, writing, and documentation</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>

            {/* April 2019 — Caregiver */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-spacer left" aria-hidden="true"></div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-card right">
                <span className="time-badge">April 2019 to Present</span>
                <h4 className="item-title">Caregiver with IHSS</h4>
                <p className="item-sub">Long term support role</p>
                <ul className="item-points">
                  <li className="star">Started full time caregiving while finishing school</li>
                  <li className="star">Learned planning and steady routines</li>
                  <li className="star">Keep work grounded in real needs</li>
                </ul>
              </div>
            </div>

            {/* April 2019 — Undergraduate RA */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-card left">
                <span className="time-badge">April 2019 to June 2019</span>
                <h4 className="item-title">Undergraduate Research Assistant</h4>
                <p className="item-sub">Behavioral neuroscience lab</p>
                <ul className="item-points">
                  <li className="star">Ran behavioral studies with guidance from senior researchers</li>
                  <li className="star">Turned raw lab notes into structured datasets</li>
                  <li className="star">Made protocols easier to repeat and share</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>

            {/* June 2019 — B.A. earned */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-spacer left" aria-hidden="true"></div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-card right">
                <span className="time-badge">June 2019</span>
                <h4 className="item-title">B.A. in Psychology</h4>
                <p className="item-sub">CSU San Bernardino</p>
                <ul className="item-points">
                  <li className="star">Pulled course work into final projects</li>
                  <li className="star">Wrapped the research assistant term</li>
                  <li className="star">Continued caregiving work</li>
                </ul>
              </div>
            </div>

            {/* August 2022 — Independent work */}
            <div className="timeline-item t-gap-lg" role="listitem">
              <div className="timeline-card left">
                <span className="time-badge">August 2022 to Present</span>
                <h4 className="item-title">Independent research and projects</h4>
                <p className="item-sub">Public health and behavioral data</p>
                <ul className="item-points">
                  <li className="star">Built portfolio apps and visual notebooks</li>
                  <li className="star">Worked with BRFSS, Strava, and cancer surgery data</li>
                  <li className="star">Focused on reproducible and open methods</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>

            {/* August 2024–August 2025 — MADS */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-spacer left" aria-hidden="true"></div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-card right">
                <span className="time-badge">August 2024 to August 2025</span>
                <h4 className="item-title">Master of Applied Data Science</h4>
                <p className="item-sub">University of Michigan</p>
                <ul className="item-points">
                  <li className="star">Designed supervised and unsupervised pipelines</li>
                  <li className="star">Practiced careful evaluation and interpretation</li>
                  <li className="star">Shared results with visuals and small tools</li>
                </ul>
              </div>
            </div>

            {/* 2025–Present — Graduate RA */}
            <div className="timeline-item" role="listitem">
              <div className="timeline-card left">
                <span className="time-badge">2025 to Present</span>
                <h4 className="item-title">Graduate Research Assistant</h4>
                <p className="item-sub">University of Michigan</p>
                <ul className="item-points">
                  <li className="star">Support studies that use large language models</li>
                  <li className="star">Do literature review and qualitative coding</li>
                  <li className="star">Build small research tools that help teams work</li>
                </ul>
              </div>
              <span className="timeline-node" aria-hidden="true"></span>
              <div className="timeline-spacer right" aria-hidden="true"></div>
            </div>
          </div>
        </section>

        {/* projects CTA — upgraded copy */}
        <section className="resume-section" aria-labelledby="work-heading">
          <h3 id="work-heading" className="section-title">Explore the work</h3>
          <p className="section-note">
            I turned Michigan coursework into interactive tools that anyone can try. You can explore the
            Depression Index built from BRFSS data, a Strava training analysis, and a California cancer
            surgery visualizer. Each app pairs clean methods with a simple interface.
          </p>
          <a href="/projects" className="btn-primary btn-inline" aria-label="Go to Projects page">
            See projects →
          </a>
        </section>

        {/* Featured Certifications — tightened language */}
        <section className="resume-section" aria-labelledby="certs-featured-heading">
          <h3 id="certs-featured-heading" className="section-title">Featured certifications</h3>
          <ul className="certs-list">
            <li>
              <strong>IBM Data Science Specialization</strong>: Python, SQL, machine learning, and visualization workflows.
              <a href="/certifications" className="btn-link"> View details</a>
            </li>
            <li><strong>Deep Learning Specialization</strong>: neural networks, CNNs, sequence models, and optimization.</li>
            <li><strong>Machine Learning Specialization</strong>: regression, classification, recommenders, and unsupervised learning.</li>
            <li><strong>Data Science Specialization</strong>: R programming, exploratory analysis, modeling, and reproducible research.</li>
            <li><strong>Machine Learning on Google Cloud</strong>: MLOps pipelines, TensorFlow on GCP, and production ML.</li>
            <li><strong>Neuroscience and Neuroimaging</strong>: fMRI design and analysis, and neurohacking in R.</li>
          </ul>
        </section>

        {/* Independent Learning Journey — clearer and shorter */}
        <section className="resume-section" aria-labelledby="learning-heading">
          <h3 id="learning-heading" className="section-title">Independent learning journey</h3>
          <p className="section-note">
            Between 2022 and 2024 I completed more than one hundred Coursera courses and several professional
            specializations in data science, neuroscience, and machine learning. This work deepened skills in Python,
            R, cloud platforms, and statistical thinking. It also built a steady habit of focused learning. The full
            list is on the certifications page.
          </p>
          <a href="/certifications" className="btn-ghost btn-inline" aria-label="View all certifications">
            View all certifications →
          </a>
        </section>

        {/* RPubs */}
        <section className="resume-section" aria-labelledby="rpubs-heading">
          <h3 id="rpubs-heading" className="section-title">Exploratory work in R</h3>
          <p className="section-note">
            Early on I made small tools and visual notebooks with Shiny, Leaflet, and R Markdown. Those projects
            mark the start of my path into applied data science and visualization.
          </p>
          <a
            href="https://rpubs.com/alex23"
            target="_blank"
            rel="noreferrer"
            className="btn-link btn-inline"
            aria-label="Open RPubs profile in a new tab"
          >
            View full RPubs profile →
          </a>
        </section>
      </div>
    </section>
  );
}

export default Resume;
