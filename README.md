# Alexis Parker - Portfolio

🔗 [View the live portfolio](https://aparker03.github.io/alexis-portfolio)

I am Alexis Parker, a data scientist and graduate researcher at the University of Michigan.  
This portfolio highlights projects that bring together my technical work, research, and creative problem solving in ways that are approachable for a wide audience.  

The site includes interactive apps, data analyses, and notebooks that show not only results but also the process behind them.

---

## Overview

The portfolio includes three parts:

- A React and Tailwind site that serves as the main hub  
- Interactive apps built with Streamlit and deployed separately  
- Jupyter notebooks that provide analysis and generate HTML for embedding on the site  

## Repository Structure

```text
alexis-portfolio/
├── site/             # React + Tailwind portfolio site
├── notebooks/        # Jupyter notebooks with analysis and HTML exports
└── ...
```

- `site/` is the main website built with React and Tailwind  
- `notebooks/` contains Jupyter notebooks used for analysis and HTML exports that appear on the site  
- `apps/` holds local app prototypes; production deployments live in separate repositories  

## Running Locally

Steps for running the portfolio site on your machine:

```bash
cd site
npm install
npm start   # Create React App
# or
npm run dev # Vite
```

The site will be available at:  
- http://localhost:3000 for Create React App  
- http://localhost:5173 for Vite  

## Projects

- **State of Mind (BRFSS):** interactive app on depression index and survey data  
- **Movement-Mapped (Strava):** app visualizing running and cycling activity  
- **Surgical Scope (Cancer Surgeries):** app showing cancer procedure volumes across California  

Each project includes notebooks for analysis and a deployed Streamlit app.
