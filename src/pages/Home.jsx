import Hero from '../components/Hero';

function Home() {
  return (
    <>
      <Hero />

      {/* 3-Block Overview */}
      <section className="py-section-y px-6 bg-white font-body text-text">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-heading text-primary mb-3">Data Science</h3>
            <p className="text-gray-700">
              Exploratory analysis, machine learning, and model interpretation across domains.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-heading text-primary mb-3">Research</h3>
            <p className="text-gray-700">
              Background in behavioral psychology, neuroscience, and public health data.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-heading text-primary mb-3">Communication</h3>
            <p className="text-gray-700">
              Translating complex data into insights that inform, clarify, and challenge assumptions.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-accent py-section-y px-6 font-body text-text">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading text-primary mb-8 text-center">
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-base">
            {[
              'Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL',
              'Tableau', 'Altair', 'TensorFlow', 'R', 'Jupyter', 'Git', 'Tailwind CSS',
            ].map((tool) => (
              <span key={tool} className="bg-white border px-4 py-2 rounded-lg">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-section-y px-6 font-body text-text">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading text-primary mb-6">Contact</h2>
          <p className="text-gray-800 mb-6">
            Whether you're interested in working together or just want to connect, feel free to reach out.
          </p>
          <div className="flex justify-center gap-6 text-blue-700">
            <a href="mailto:aparker0917@gmail.com" className="hover:underline">Email</a>
            <a
              href="https://www.linkedin.com/in/alexis-parker-732b9a165"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/aparker03"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
