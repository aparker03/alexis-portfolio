# Alexis Parker – Portfolio

[View the live site](https://alexis-parker.com)

This repository hosts my personal portfolio.  
It highlights AccessFirst, research publications, and projects across neuroscience signals, national health surveys, and wearable data.
The goal is to make technical methods transparent and results accessible to both technical and non-technical audiences.

---

## What’s Inside

- React + Tailwind website (`/site/`) – the main hub with Home, Projects, Resume, and Certifications pages. About, Publication, and Contact are sections within those pages
- Streamlit apps – interactive dashboards for deeper exploration (deployed separately)  
- Jupyter notebooks – step-by-step cleaning and analysis, exported as HTML and linked from the site  

---

## Featured Projects

- [AccessFirst](https://accessfirst.vercel.app/)
  Mental-health resource navigation for Los Angeles County with address, city, and ZIP code search plus service type, language, accessibility need, and telehealth preference filters. The tool does not diagnose, recommend treatment, or book appointments. Users must confirm insurance acceptance and provider availability directly.

- [EEG + NHIS Explorer](https://eeg-nhis-app.streamlit.app/)
  Separate views for stored OpenNeuro ds004902 EEG band summaries, PVT measures, and 6,705 cleaned 2024 NHIS sleep records. The sources are not participant-matched. Educational only, not diagnostic.

- [State of Mind (BRFSS)](https://state-of-mind.streamlit.app/)
  Exploratory seven-component index using 2022 BRFSS data. Full-data notebooks document prepared stages above 400,000 records, while the deployed app uses a sampled subset by default and carries imputation choices through its views and export. The constructed index is not a validated diagnostic instrument.

- [Movement-Mapped (Strava)](https://movement-mapped.streamlit.app/)
  A Streamlit explorer for uploaded activity CSVs or a bundled sample, with filters, trends, distributions, relationships, summaries, and coordinate-based maps. A separate notebook analyzes Professor Chris Brooks’s summer 2019 exercise data.

- [Surgical Scope (Cancer Surgeries)](https://surgical-scope.streamlit.app/)
  California HCAI inpatient and outpatient procedure data from 2013–2022. The application supports statewide and regional views, while the notebook reports Los Angeles County analysis. Optional IQR handling applies to application distribution views, not trends or maps.

- Depression Risk Modeling: NHANES
  Seven NHANES modules are outer-merged and filtered into a 467-record, five-category modeling table. K-means, PCA, and DBSCAN are separate unsupervised analyses, while nonempty supervised notebooks compare Logistic Regression, Random Forest, and SVM with confusion matrices, F1, ROC-AUC, and case-level SHAP.

Project links point to the application, notebooks, or repository materials available for that project.

## Publication

- Gabrielle O’Brien, Alexis Parker, Nasir Eisty, and Jeffrey Carver. [A survey of generative AI adoption and perceived productivity among scientists who program](https://arxiv.org/abs/2512.19644). arXiv:2512.19644 [cs.SE], version 3, revised April 9, 2026.

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
npm start
```

The Create React App development server runs at http://localhost:3000.

---

## Notes

- Health-focused applications are exploratory, educational, or navigation tools and do not provide diagnosis or individual clinical decisions.
- Emphasis throughout is on clarity, reproducibility, and open explanation.  
- Certifications and exploratory R work are included to show breadth of learning.

---

## Contact

- Email: aparker0917@gmail.com  
- LinkedIn: [linkedin.com/in/alexis-parker-732b9a165](https://www.linkedin.com/in/alexis-parker-732b9a165)  
- GitHub: [aparker03](https://github.com/aparker03)
