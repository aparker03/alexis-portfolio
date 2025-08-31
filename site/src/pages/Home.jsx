// site/src/pages/Home.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/layout/Hero";

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
