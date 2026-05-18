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
      <main
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
          className="py-section-y px-6 bg-white scroll-mt-24"
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
        <section className="py-section-y px-6 bg-white">
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
        <section className="bg-accent py-section-y px-6">
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

        {/* Current Research Focus */}
        <section
          className="py-section-y px-6 bg-gray-50"
          aria-labelledby="research-focus-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-center uppercase tracking-[0.18em] text-sm font-bold text-[#365f5c] mb-3">
              Current research focus
            </p>
            <h2
              id="research-focus-heading"
              className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center"
            >
              Health, LLM evaluation, and reproducible research workflows
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Evaluation and annotation
                </h3>
                <p className="text-[#374151] font-medium">
                  Designing rubrics, qualitative coding workflows, and
                  annotation structures for health and LLM-based research
                  questions.
                </p>
              </article>
              <article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Reproducible pipelines
                </h3>
                <p className="text-[#374151] font-medium">
                  Building Python workflows with clear assumptions, visual
                  checks, and documented data transformations.
                </p>
              </article>
              <article className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[#111827] mb-2">
                  Responsible interpretation
                </h3>
                <p className="text-[#374151] font-medium">
                  Using synthetic examples, method notes, and limitations
                  sections when private research data cannot be shared directly.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section
          className="py-section-y px-6 bg-white"
          aria-labelledby="featured-work-heading"
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-center uppercase tracking-[0.18em] text-sm font-bold text-[#365f5c] mb-3">
              Featured work
            </p>
            <h2
              id="featured-work-heading"
              className="text-2xl md:text-3xl font-semibold text-[#111827] mb-6 text-center"
            >
              Health data projects with transparent methods
            </h2>
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] items-stretch">
              <article className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-6 shadow-sm">
                <img
                  src={`${process.env.PUBLIC_URL}/images/projects/eeg/eeg-app-preview.png`}
                  alt="EEG + NHIS Explorer dashboard preview"
                  className="mb-5 w-full rounded-xl bg-white object-contain shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  EEG + NHIS Explorer
                </h3>
                <p className="text-[#374151] font-medium mb-4">
                  A graduate project that connects lab-based sleep signals with
                  national survey measures, using MNE-Python, NumPy, Plotly, and
                  Streamlit to make assumptions and measurement differences
                  visible.
                </p>
                <ul className="grid gap-3 text-[#374151] font-medium mb-5">
                  <li>
                    • OpenNeuro EEG band-power extraction with alpha, theta, and
                    beta summaries.
                  </li>
                  <li>
                    • PVT reaction-time views and NHIS sleep distributions for
                    population context.
                  </li>
                  <li>
                    • Educational, non-diagnostic dashboard designed for clear
                    comparison.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/projects/eeg-nhis"
                    className="inline-flex rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                  >
                    Read case study →
                  </Link>
                  <a
                    href="https://eeg-nhis-app.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex rounded-lg border border-blue-600 px-4 py-2 font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    Launch app →
                  </a>
                </div>
              </article>

              <aside className="bg-[#e9e3b0] border border-[#d9cf8a] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#111827] mb-3">
                  Next build queue
                </h3>
                <p className="text-[#374151] font-medium mb-4">
                  I am keeping all five portfolio directions active so the next
                  updates can show both depth and range.
                </p>
                <ol className="grid gap-2 text-[#1f2937] font-semibold">
                  <li>A. Health AI evaluation dashboard</li>
                  <li>B. Clinical / survey text annotation tool</li>
                  <li>C. Wearable recovery analytics</li>
                  <li>D. Public health equity explorer</li>
                  <li>E. Reproducibility scorecards</li>
                </ol>
              </aside>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-gray-50 py-section-y px-6 scroll-mt-24"
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
            <div className="flex justify-center gap-6 text-blue-700">
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
      </main>
    </>
  );
}

export default Home;
