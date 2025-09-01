# Alexis Parker – Portfolio

[View the live site](https://alexis-parker.com)

This repository hosts my personal portfolio.  
It highlights projects across neuroscience signals, national health surveys, and wearable data.  
The goal is to make technical methods transparent and results accessible to both technical and non-technical audiences.

---

## What’s Inside

- React + Tailwind website (`/site/`) – the main hub with pages for About, Resume, Projects, and Certifications  
- Streamlit apps – interactive dashboards for deeper exploration (deployed separately)  
- Jupyter notebooks – step-by-step cleaning and analysis, exported as HTML and linked from the site  

---

## Featured Projects

- [EEG + NHIS Explorer](https://eeg-nhis-app.streamlit.app/)  
  Compare lab EEG sleep signals with national survey measures. Educational only, not diagnostic.  

- [State of Mind (BRFSS)](https://state-of-mind.streamlit.app/)  
  Exploratory depression index from BRFSS survey items. Includes imputation options and state-level choropleths.  

- [Movement-Mapped (Strava)](https://movement-mapped.streamlit.app/)  
  Wearable metrics from Strava exports. Training patterns surfaced through cadence, pace stability, and heart rate.  

- [Surgical Scope (Cancer Surgeries)](https://surgical-scope.streamlit.app/)  
  California hospital surgery volumes (2013–2022). Trends, outlier views, and county/hospital maps.  

Each app links to companion notebooks documenting methods, assumptions, and design choices.

---

## Tech Stack

**Frontend:** React, Tailwind CSS  
**Apps:** Streamlit  
**Analysis and ML:** Python, Pandas, NumPy, scikit-learn, Seaborn, Plotly, Matplotlib  
**Specialized:** MNE-Python (EEG), Pydeck (maps)  
**Notebooks:** Jupyter, R / RPubs (early work)  

---

## Repository Structure

```
alexis-portfolio/
└── site/              # React + Tailwind portfolio site
    ├── src/pages/     # Home, Projects, Resume, Certifications
    └── public/        # Assets (avatars, images, downloads)
```

Deployed apps and notebooks are referenced from the site and may live in separate repositories.

---

## Run Locally

```bash
cd site
npm install

# Development
npm start      # if Create React App
npm run dev    # if Vite
```

Local development servers:  
- http://localhost:3000 (CRA)  
- http://localhost:5173 (Vite)  

---

## Notes

- All apps are educational and research focused, not diagnostic or clinical tools.  
- Emphasis throughout is on clarity, reproducibility, and open explanation.  
- Certifications and exploratory R work are included to show breadth of learning.

---

## Contact

- Email: aparker0917@gmail.com  
- LinkedIn: [linkedin.com/in/alexis-parker-732b9a165](https://www.linkedin.com/in/alexis-parker-732b9a165)  
- GitHub: [aparker03](https://github.com/aparker03)
