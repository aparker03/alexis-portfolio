const publicUrl =
  process.env.PUBLIC_URL === "." ? "" : process.env.PUBLIC_URL || "";
const asset = (path) => `${publicUrl}${path}`;

const projectCaseStudies = {
  "eeg-nhis": {
    slug: "eeg-nhis",
    title: "EEG + NHIS Explorer",
    subtitle:
      "Comparing lab-based sleep signals with population survey sleep measures.",
    role: "Graduate Researcher",
    timeframe: "June 2025 to August 2025",
    heroImage: asset("/images/projects/eeg/eeg-app-preview.png"),
    secondaryImage: asset("/images/projects/eeg/eeg-electrodes-preview.png"),
    metrics: [
      { label: "Dataset", value: "OpenNeuro EEG + 32k NHIS respondents" },
      { label: "Output", value: "Live Streamlit + Plotly dashboard" },
      { label: "Methods", value: "MNE-Python, band power, PVT summaries" },
    ],
    overview:
      "This project makes sleep measurement differences easier to inspect by placing cleaned EEG-derived signals next to self-reported national survey sleep measures.",
    question:
      "How can lab-based indicators of sleep loss and population-level self-reports be presented side by side without implying that one source directly diagnoses the other?",
    dataset: [
      "OpenNeuro EEG recordings processed into cleaned epochs and band-power summaries.",
      "Psychomotor Vigilance Task reaction-time distributions and lapse-rate summaries.",
      "2024 NHIS sleep survey measures from roughly 32,000 respondents.",
    ],
    methods: [
      "Processed EEG files with NumPy, SciPy, and MNE-Python.",
      "Extracted alpha, theta, and beta band-power summaries from cleaned epochs.",
      "Built Plotly views for scalp maps, PVT violin plots, and national sleep histograms.",
      "Designed Streamlit controls that keep the app educational and non-diagnostic.",
    ],
    features: [
      "Side-by-side lab and survey panels.",
      "Electrode montage context for regional signal interpretation.",
      "Reaction-time distribution views for sleep-loss performance outcomes.",
      "Clear warnings that the app is educational only and not diagnostic.",
    ],
    results: [
      "Created a transparent comparison workflow for two very different measurement contexts.",
      "Made assumptions visible through notebooks, app controls, and explanatory copy.",
      "Produced a project that can support future sleep, performance, and measurement-validity case studies.",
    ],
    limitations: [
      "EEG and NHIS measures are not matched participant-level observations.",
      "Band-power summaries are sensitive to preprocessing choices and artifact handling.",
      "Survey self-reports and lab measures answer related but non-identical questions.",
    ],
    ethicalNotes: [
      "The app avoids diagnostic claims and frames results as measurement exploration.",
      "Interpretation emphasizes context, uncertainty, and limits of comparability.",
    ],
    pipeline: [
      "OpenNeuro EEG files",
      "MNE-Python preprocessing",
      "Epoch cleaning",
      "Band-power extraction",
      "PVT reaction-time summaries",
      "NHIS sleep survey comparison",
      "Streamlit + Plotly app",
    ],
    techStack: [
      "Python",
      "NumPy",
      "SciPy",
      "MNE-Python",
      "Pandas",
      "Plotly",
      "Streamlit",
    ],
    improveNext: [
      "Add a downloadable method appendix for preprocessing choices.",
      "Add sensitivity notes for band definitions and artifact exclusions.",
      "Create a public reproducibility checklist for the full pipeline.",
    ],
    links: {
      app: "https://eeg-nhis-app.streamlit.app/",
      github: "https://github.com/aparker03/eeg-nhis-app",
    },
  },
  "brfss-depression-index": {
    slug: "brfss-depression-index",
    title: "BRFSS Depression Index Study",
    subtitle:
      "A research-informed, exploratory index for regional variation in self-reported mental health symptoms.",
    role: "Graduate Researcher",
    timeframe: "January 2025 to March 2025",
    heroImage: asset("/images/projects/brfss/brfss-app-preview.png"),
    metrics: [
      { label: "Dataset", value: "400k+ BRFSS responses" },
      { label: "Output", value: "Live app + 3 notebooks" },
      { label: "Methods", value: "Imputation, scoring, choropleths" },
    ],
    overview:
      "This project turns selected BRFSS self-report measures into an exploratory Depression Index while keeping data cleaning and assumption choices visible.",
    question:
      "How can large-scale public health survey responses be summarized into an interpretable regional mental-health exploration without presenting the score as a clinical diagnosis?",
    dataset: [
      "CDC BRFSS survey responses with more than 400,000 observations.",
      "Self-reported mental health, physical health, life satisfaction, social support, stress, isolation, and depression diagnosis variables.",
      "State-level geography for regional summaries and choropleths.",
    ],
    methods: [
      "Selected variables based on mental-health relevance and interpretability.",
      "Reviewed missingness and exposed imputation choices inside the app.",
      "Constructed an exploratory index inspired by PHQ-style symptom reasoning, not a clinical instrument.",
      "Visualized state and regional patterns with Plotly and Streamlit.",
    ],
    features: [
      "State-level choropleths and summary views.",
      "In-app imputation controls that flow through charts and summaries.",
      "Three linked notebooks documenting download, EDA, and index construction.",
      "Plain-language framing for non-diagnostic interpretation.",
    ],
    results: [
      "Found Western states scoring about 15–20% lower than the Midwest and South in the exploratory index.",
      "Created a public workflow that documents assumptions before showing regional conclusions.",
      "Built a bridge between public-health research questions and interactive exploratory analytics.",
    ],
    limitations: [
      "The index is exploratory and not an official BRFSS or clinical score.",
      "Self-reported measures are sensitive to response bias and context.",
      "Cross-sectional regional summaries cannot establish causal relationships.",
    ],
    ethicalNotes: [
      "The project avoids individual-level risk claims and focuses on aggregate exploration.",
      "Copy explicitly states that the score is not diagnostic.",
    ],
    pipeline: [
      "Raw BRFSS survey",
      "Variable selection",
      "Missingness review",
      "Imputation choice",
      "Depression-index construction",
      "State-level summaries",
      "Notebook + Streamlit app",
    ],
    techStack: [
      "Python",
      "Pandas",
      "Plotly",
      "scikit-learn",
      "Streamlit",
      "Jupyter",
    ],
    improveNext: [
      "Add uncertainty intervals around state-level summaries.",
      "Separate sensitivity views for each imputation strategy.",
      "Publish a cleaned reproducibility repository for app and notebook code.",
    ],
    links: {
      app: "https://state-of-mind.streamlit.app/",
      notebooks: [
        {
          label: "Download notebook",
          href: asset("/notebooks/brfss/download.html"),
        },
        { label: "EDA notebook", href: asset("/notebooks/brfss/eda.html") },
        {
          label: "Index notebook",
          href: asset("/notebooks/brfss/depression_index_analysis.html"),
        },
      ],
      codeNote: "Code cleanup planned for a public reproducibility repository.",
    },
  },
  "strava-wearables": {
    slug: "strava-wearables",
    title: "Strava Wearable Metrics",
    subtitle: "Training-pattern exploration from personal activity exports.",
    role: "Independent Researcher",
    timeframe: "2025",
    heroImage: asset("/images/projects/strava/strava-app-preview.png"),
    metrics: [
      { label: "Dataset", value: "Personal Strava export" },
      { label: "Output", value: "Notebook + Streamlit app" },
      { label: "Methods", value: "Cadence, pace, HR-zone trends" },
    ],
    overview:
      "This project explores wearable activity records as time-series evidence of training patterns that are easy to miss in single-run summaries.",
    question:
      "How can personal wearable exports be transformed into interpretable views of cadence, pace stability, and heart-rate patterns over time?",
    dataset: [
      "Personal Strava activity export.",
      "Run-level and session-level metrics for pace, cadence, heart rate, and time periods.",
    ],
    methods: [
      "Parsed exported activity files into analysis-ready tables.",
      "Created distributions and density views for cadence and pace stability.",
      "Grouped activities into periods and sessions for trend comparison.",
      "Documented assumptions and cleaning choices in a companion notebook.",
    ],
    features: [
      "Interactive filters for periods and sessions.",
      "Density plots that summarize repeated training patterns.",
      "Notebook-backed explanation of transformations and assumptions.",
    ],
    results: [
      "Surfaced week-over-week training changes that single-run dashboards can hide.",
      "Created a base for a future recovery and sleep analytics extension.",
    ],
    limitations: [
      "Personal export results should not be generalized to broader populations.",
      "Wearable sensor readings can vary by device and recording context.",
      "The current project does not yet include sleep or recovery data.",
    ],
    ethicalNotes: [
      "The project uses personal data intentionally and avoids exposing sensitive raw traces.",
      "Future shared examples should use synthetic or anonymized activity records.",
    ],
    pipeline: [
      "Strava export",
      "Activity parsing",
      "Cleaning and session grouping",
      "Cadence and pace features",
      "Distribution and density views",
      "Streamlit exploration",
    ],
    techStack: [
      "Python",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Streamlit",
      "Jupyter",
    ],
    improveNext: [
      "Add recovery-oriented features such as rolling fatigue and anomaly flags.",
      "Create synthetic sample data so the workflow can be fully public.",
      "Add a reproducibility scorecard for personal-data handling choices.",
    ],
    links: {
      app: "https://movement-mapped.streamlit.app/",
      notebooks: [
        {
          label: "View notebook",
          href: asset("/notebooks/strava/strava-analysis.html"),
        },
      ],
      codeNote: "Code cleanup planned for a shareable reproducibility version.",
    },
  },
  "surgical-scope": {
    slug: "surgical-scope",
    title: "Surgical Scope: Cancer Procedure Trends",
    subtitle:
      "California hospital surgery-volume trends across procedure categories, regions, and years.",
    role: "Graduate Researcher",
    timeframe: "2025",
    heroImage: asset("/images/projects/cancer/cancer-app-preview.png"),
    metrics: [
      { label: "Coverage", value: "California hospitals, 2013–2022" },
      { label: "Output", value: "Map + trend app + notebook" },
      { label: "Methods", value: "IQR outliers, KDE, choropleths" },
    ],
    overview:
      "This project makes statewide cancer-procedure volume patterns easier to explore across hospitals, counties, regions, procedure sites, and years.",
    question:
      "How can procedure-volume trends and outliers be shown in a way that supports exploration without hiding statewide context?",
    dataset: [
      "California HCAI hospital surgery volumes from 2013 to 2022.",
      "Cancer procedure groupings spanning common and rarer procedure sites.",
      "County, hospital, region, and year attributes for mapping and filtering.",
    ],
    methods: [
      "Cleaned and harmonized procedure labels across the ICD-9 to ICD-10 transition.",
      "Compared high-volume and rarer procedures using KDE trends.",
      "Used IQR outlier-aware views while keeping a separate California-wide roll-up.",
      "Built county-level and hospital-level visuals with Pydeck and Streamlit.",
    ],
    features: [
      "Procedure, region, hospital, and year filters.",
      "County-level choropleths and hospital-level map views.",
      "Outlier-aware totals alongside unfiltered statewide context.",
    ],
    results: [
      "Created a navigable statewide view of procedure-volume variation.",
      "Made rare and common procedure categories easier to compare without losing outlier context.",
    ],
    limitations: [
      "Procedure volumes do not measure patient outcomes or quality of care.",
      "Coding transitions can introduce comparability challenges across years.",
      "County and hospital summaries should be interpreted with local context.",
    ],
    ethicalNotes: [
      "The dashboard avoids ranking hospitals as better or worse based only on volume.",
      "Interpretation emphasizes descriptive exploration instead of clinical recommendations.",
    ],
    pipeline: [
      "HCAI surgery volumes",
      "Procedure cleaning",
      "ICD transition review",
      "IQR outlier handling",
      "KDE and statewide trends",
      "County/hospital maps",
      "Streamlit app",
    ],
    techStack: [
      "Python",
      "Pandas",
      "Seaborn",
      "Pydeck",
      "Streamlit",
      "Jupyter",
    ],
    improveNext: [
      "Add clearer data-dictionary notes for procedure categories.",
      "Create a reproducibility repository with environment setup.",
      "Add companion context about what procedure volume can and cannot indicate.",
    ],
    links: {
      app: "https://surgical-scope.streamlit.app/",
      notebooks: [
        {
          label: "View notebook",
          href: asset("/notebooks/cancer/cancer-analysis.html"),
        },
      ],
      codeNote: "Code cleanup planned for a public reproducibility repository.",
    },
  },
  "nhanes-depression-risk": {
    slug: "nhanes-depression-risk",
    title: "Depression Risk Modeling: NHANES",
    subtitle:
      "Modeling depression severity with cleaned NHANES modules, clustering features, and explainability checks.",
    role: "Graduate Researcher",
    timeframe: "May 2025 to June 2025",
    metrics: [
      { label: "Dataset", value: "~12k records across 7 modules" },
      { label: "Models", value: "LogReg, Random Forest, SVM" },
      { label: "Interpretation", value: "SHAP, confusion matrices, ROC-AUC" },
    ],
    overview:
      "This project merged NHANES modules to study depression severity prediction while comparing supervised models and interpretable feature contributions.",
    question:
      "Which survey, health, and socioeconomic features help predict depression severity in NHANES, and how can model behavior be explained responsibly?",
    dataset: [
      "Seven NHANES modules merged into approximately 12,000 records.",
      "Depression severity labels and health, demographic, and socioeconomic predictors.",
      "Engineered socioeconomic predictors from Census-style context.",
    ],
    methods: [
      "Cleaned and merged NHANES modules into a modeling table.",
      "Generated unsupervised structure features with KMeans, PCA, and DBSCAN.",
      "Trained Logistic Regression, Random Forest, and SVM models with hyperparameter tuning.",
      "Evaluated outputs with SHAP, confusion matrices, and ROC-AUC.",
    ],
    features: [
      "Clear split between clustering-derived features and supervised prediction.",
      "Model comparison across linear, ensemble, and margin-based approaches.",
      "Explainability review for feature contributions and error patterns.",
    ],
    results: [
      "Created an end-to-end depression risk modeling workflow from module merge to interpretation.",
      "Used SHAP and evaluation plots to keep performance discussion tied to feature behavior.",
    ],
    limitations: [
      "Survey-based modeling cannot establish clinical diagnosis or causality.",
      "Performance depends on missing-data and module-merge decisions.",
      "Predictive models must be interpreted with fairness and deployment caution.",
    ],
    ethicalNotes: [
      "The project is exploratory and should not be used for individual diagnosis.",
      "Model interpretation is framed around patterns and limitations rather than automated decision-making.",
    ],
    pipeline: [
      "NHANES modules",
      "Merge and cleaning",
      "Feature engineering",
      "KMeans/PCA/DBSCAN features",
      "Model tuning",
      "SHAP + ROC-AUC review",
      "Research summary",
    ],
    techStack: [
      "Python",
      "Pandas",
      "scikit-learn",
      "SHAP",
      "Matplotlib",
      "Seaborn",
    ],
    improveNext: [
      "Add fairness-oriented subgroup evaluation.",
      "Publish a synthetic-data demo of the modeling workflow.",
      "Turn the analysis into a full interactive model-card case study.",
    ],
    links: {
      codeNote: "Code cleanup planned before public release.",
    },
  },
};

export default projectCaseStudies;
