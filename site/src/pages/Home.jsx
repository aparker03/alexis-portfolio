// site/src/pages/Home.jsx
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../components/layout/Hero";

const P = process.env.PUBLIC_URL === "." ? "" : process.env.PUBLIC_URL || "";

/**
 * Smoothly scroll to a hash target when the hash changes (or on initial mount).
 * Also moves focus for accessibility.
 */
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.startsWith("#") ? hash.slice(1) : hash;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const heading = el.querySelector("h2, h3, h1");
      (heading || el).setAttribute("tabindex", "-1");
      (heading || el).focus({ preventScroll: true });
    }
  }, [hash]);
}

function Home() {
  useScrollToHash();

  return (
    <>
      <style>{`
        .home-hover-card {
          transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
          border-color: #6b7280 !important;
        }
        .home-hover-card:hover,
        .home-hover-card:focus-within {
          background: #143c3a !important;
          border-color: #e9e3b0 !important;
          color: #f8fafc !important;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22) !important;
          transform: translateY(-2px);
        }
        .home-hover-card:hover h3,
        .home-hover-card:focus-within h3 { color: #f8fafc !important; }
        .home-hover-card:hover p,
        .home-hover-card:focus-within p,
        .home-hover-card:hover li,
        .home-hover-card:focus-within li { color: #e5e7eb !important; }
        .home-hover-card:hover img,
        .home-hover-card:focus-within img { background: #fff !important; }
        .home-primary-link { border: 2px solid transparent; }
        .home-hover-card:hover .home-primary-link,
        .home-hover-card:focus-within .home-primary-link { background: #1d4ed8 !important; border-color: #dbeafe !important; color: #fff !important; }
        .home-hover-card:hover .home-secondary-link,
        .home-hover-card:focus-within .home-secondary-link { background: rgba(255, 255, 255, 0.92) !important; border-color: #e9e3b0 !important; color: #143c3a !important; }
        .home-content-section {
          padding-top: clamp(3rem, 4vw, 4rem) !important;
          padding-bottom: clamp(3rem, 4vw, 4rem) !important;
        }
        .home-feature-grid { align-items: start; }
        .home-hover-card { min-width: 0; max-width: 100%; overflow-wrap: anywhere; }
        .home-hover-card a { white-space: normal; overflow-wrap: anywhere; }
        @media (prefers-reduced-motion: reduce) {
          .home-hover-card { transition: none; }
          .home-hover-card:hover,
          .home-hover-card:focus-within { transform: none; }
        }
      `}</style>
      <div
        style={{
          fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
          color: "#1f2937",
          lineHeight: 1.6,
        }}
      >
        <Hero />

        {/* About Me - distinct from Hero */}
        <section
          id="about"
          className="home-content-section py-section-y px-6 bg-white scroll-mt-24"
          aria-labelledby="about-heading"
        >
          <div className="max-w-3xl mx-auto">
            <h2
              id="about-heading"
              className="text-3xl font-semibold text-[#111827] mb-6"
            >
              About Me
            </h2>
            <p className="text-[#1f2937] mb-5">
              I began in psychology, fascinated by how people think, learn, and
              change. That curiosity carried me into data science, where I found
              the methods to explore questions at scale. Since then, I have
              worked with EEG recordings, large federal surveys, and wearable
              data, building analyses that are rigorous yet approachable.
            </p>
            <p className="text-[#1f2937]">
              What drives me is turning raw data into knowledge that people can
              trust and apply. I enjoy finding the bridge between technical
              precision and real-world meaning. Whether modeling depression
              risk, examining how sleep relates to performance, or designing
              dashboards that make research more open, my goal is to produce
              work that is transparent, reproducible, and accessible to diverse
              audiences.
            </p>
          </div>
        </section>

        {/* 3-Block Overview */}
        <section className="home-content-section py-section-y px-6 bg-white">
          <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                Modeling and Analysis
              </h3>
              <p className="text-[#374151] font-medium">
                Exploratory analysis, machine learning, and thoughtful model
                interpretation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                Research Practice
              </h3>
              <p className="text-[#374151] font-medium">
                Foundations in psychology with hands-on work across neuroscience
                and public health data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#111827] mb-3">
                Communication
              </h3>
              <p className="text-[#374151] font-medium">
                Turning complex results into clear stories, visuals, and usable
                tools.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="home-content-section bg-accent py-section-y px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#111827] mb-8 text-center">
              Tools &amp; Technologies
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-base">
              {[
                "Python",
                "R",
                "SQL",
                "Pandas",
                "NumPy",
                "SciPy",
                "scikit-learn",
                "TensorFlow",
                "PyTorch",
                "Plotly",
                "Matplotlib",
                "Seaborn",
                "Altair",
                "Streamlit",
                "MNE-Python",
                "Pydeck",
                "Jupyter",
                "VS Code",
                "Git/GitHub",
                "Google Cloud Platform",
                "Tailwind CSS",
                "Tableau",
              ].map((tool) => (
                <span
                  key={tool}
                  className="bg-white border px-4 py-2 rounded-lg"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Current Work */}
        <section
          className="home-content-section py-section-y px-6 bg-gray-50"
          aria-labelledby="research-focus-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-center uppercase tracking-[0.18em] text-sm font-bold text-[#365f5c] mb-3">
              Current work
            </p>
            <h2
              id="research-focus-heading"
              className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center"
            >
              AI systems, health research, and reproducible data products
            </h2>
            <div className="grid gap-5 md:grid-cols-3 items-start">
              <article className="home-hover-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  RAG and source grounding
                </h3>
                <p className="text-[#374151] font-medium">
                  Through the AI Squared Student Builder Program, I support
                  Project Cerebellum / HISPI by testing document ingestion,
                  retrieval, and generated responses against source material.
                </p>
              </article>
              <article className="home-hover-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Health and behavioral research
                </h3>
                <p className="text-[#374151] font-medium">
                  I analyze public-use health surveys and behavioral data with
                  attention to study design, uncertainty, and the limits of what
                  the data can support.
                </p>
              </article>
              <article className="home-hover-card bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Research data products
                </h3>
                <p className="text-[#374151] font-medium">
                  I build Python analyses, interactive applications, and
                  documented workflows with clear methods, assumptions, and
                  data transformations.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Research Outputs Preview */}
        <section
          className="home-content-section py-section-y px-6 bg-white"
          aria-labelledby="publications-preview-heading"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-center uppercase tracking-[0.18em] text-sm font-bold text-[#365f5c] mb-3">
              Research outputs
            </p>
            <h2
              id="publications-preview-heading"
              className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center"
            >
              Publication and scheduled presentation
            </h2>
            <div className="grid gap-6">
              <article className="home-hover-card min-w-0 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#365f5c] mb-2">
                  arXiv preprint · version 3 · revised April 9, 2026
                </p>
                <h3 className="text-xl font-bold leading-snug text-[#111827] mb-3 break-words">
                  A survey of generative AI adoption and perceived productivity
                  among scientists who program
                </h3>
                <p className="text-[#374151] font-medium mb-4 break-words">
                  Gabrielle O’Brien, Alexis Parker, Nasir Eisty, and Jeffrey
                  Carver · arXiv:2512.19644
                </p>
                <a
                  href="https://arxiv.org/abs/2512.19644"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-secondary-link inline-flex max-w-full rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 break-words"
                >
                  Read the preprint on arXiv →
                </a>
              </article>

              <article className="home-hover-card min-w-0 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#365f5c] mb-2">
                  Scheduled co-presenter · 2026 NACIS Annual Meeting · October
                  2026
                </p>
                <h3 className="text-xl font-bold leading-snug text-[#111827] mb-3 break-words">
                  Communicating Healthcare Affordability Through Maps: A Visual
                  Analytics Framework Using NHIS and MEPS Data
                </h3>
                <p className="text-[#374151] font-medium mb-3 break-words">
                  Sandipta Khare, Alexis Parker, and Prof. Hengwei Zhang
                </p>
                <p className="text-[#374151] font-medium mb-4">
                  The study uses 2023 NHIS and MEPS public-use data to examine
                  cost-related barriers to mental health counseling and annual
                  healthcare expenditure burden through regional mapping and
                  uncertainty-aware cartographic design.
                </p>
                <a
                  href="https://nacis.org/annual-meeting/current-meeting/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-secondary-link inline-flex max-w-full rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 break-words"
                >
                  View NACIS 2026 meeting details →
                </a>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section
          className="home-content-section py-section-y px-6 bg-white"
          aria-labelledby="featured-work-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-center uppercase tracking-[0.18em] text-sm font-bold text-[#365f5c] mb-3">
              Projects
            </p>
            <h2
              id="featured-work-heading"
              className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center"
            >
              Featured work
            </h2>
            <div className="home-feature-grid grid gap-6 lg:grid-cols-2 items-start">
              <article className="home-hover-card min-w-0 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#365f5c] mb-2">
                  Current project
                </p>
                <h3 className="text-xl font-bold text-[#111827] mb-3 break-words">
                  AccessFirst
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.12em] text-[#365f5c] mb-3">
                  Second Prize, 2026 China-U.S. Young Maker Competition
                </p>
                <p className="text-[#374151] font-medium mb-5">
                  AccessFirst helps people navigate mental-health resources in
                  Los Angeles County. Users can search by address, city, or ZIP
                  code and narrow results by service type, language,
                  accessibility need, and telehealth preference. It does not
                  diagnose, recommend treatment, or book appointments. Users
                  must confirm insurance acceptance and provider availability
                  directly.
                </p>
                <a
                  href="https://accessfirst.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-primary-link inline-flex max-w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 break-words"
                >
                  Open the AccessFirst resource navigator →
                </a>
              </article>

              <article className="home-hover-card min-w-0 bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm">
                <img
                  src={`${P}/images/projects/eeg/eeg-app-preview.png`}
                  alt="EEG + NHIS Explorer dashboard preview"
                  className="mb-5 w-full rounded-xl bg-white object-contain shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  EEG + NHIS Explorer
                </h3>
                <p className="text-[#374151] font-medium mb-4">
                  An educational Streamlit and Plotly application that presents
                  OpenNeuro ds004902 sleep-study measures beside 6,705 cleaned
                  2024 NHIS sleep records. The datasets are separate and not
                  participant-matched.
                </p>
                <ul className="grid gap-3 list-disc pl-5 text-[#374151] font-medium mb-5">
                  <li>
                    Stored theta, alpha, and beta summaries with channel and
                    electrode context.
                  </li>
                  <li>PVT lapse, median reaction-time, and variability views.</li>
                  <li>Separate NHIS sleep distributions for population context.</li>
                  <li>
                    Educational, non-diagnostic dashboard designed for clear
                    comparison.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/projects/eeg-nhis"
                    className="home-primary-link inline-flex rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    Read case study →
                  </Link>
                  <a
                    href="https://eeg-nhis-app.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="home-secondary-link inline-flex rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
                  >
                    Launch app →
                  </a>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="home-content-section bg-gray-50 py-section-y px-6 scroll-mt-24"
          aria-labelledby="contact-heading"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="contact-heading"
              className="text-3xl font-semibold text-[#111827] mb-6"
            >
              Contact
            </h2>
            <p className="text-[#1f2937] mb-6 font-medium">
              Whether you are interested in working together or just want to
              connect, feel free to reach out.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-blue-700">
              <a
                href="mailto:aparker0917@gmail.com"
                className="hover:underline font-semibold"
              >
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/alexis-parker-732b9a165"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-semibold"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/aparker03"
                target="_blank"
                rel="noreferrer"
                className="hover:underline font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
