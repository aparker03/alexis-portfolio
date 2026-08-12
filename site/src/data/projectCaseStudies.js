const publicUrl =
  process.env.PUBLIC_URL === "." ? "" : process.env.PUBLIC_URL || "";
const asset = (path) => `${publicUrl}${path}`;

const projectCaseStudies = {
  "eeg-nhis": {
    slug: "eeg-nhis",
    title: "EEG + NHIS Explorer",
    summary:
      "An educational application that presents OpenNeuro sleep-study measures and 2024 NHIS sleep responses in separate, source-specific views.",
    heroImage: asset("/images/projects/eeg/eeg-app-preview.png"),
    secondaryImage: asset("/images/projects/eeg/eeg-electrodes-preview.png"),
    facts: [
      { label: "Data", value: "OpenNeuro ds004902 and 2024 NHIS" },
      { label: "NHIS", value: "6,705 cleaned application records" },
      { label: "Output", value: "Streamlit and Plotly application" },
    ],
    sections: [
      {
        title: "Data sources and scope",
        items: [
          "The laboratory source is OpenNeuro dataset ds004902, which includes sleep-deprivation EEG and Psychomotor Vigilance Task data.",
          "The application loads 6,705 cleaned records from the 2024 National Health Interview Survey for population-level sleep views.",
          "The OpenNeuro and NHIS datasets remain separate and are not participant-matched.",
        ],
      },
      {
        title: "EEG file preparation",
        paragraphs: [
          "The tracked preparation code uses MNE-Python, software for EEG analysis, to load EEGLAB files, select EEG channels, crop a ten-second segment, and apply a 1–40 Hz filter. The application displays stored theta, alpha, and beta summaries. The public repository does not include the processing code that produced those summaries.",
        ],
      },
      {
        title: "Measures shown in the application",
        items: [
          "EEG views display stored theta, alpha, and beta band summaries with channel and electrode context.",
          "PVT views include lapse measures, median reaction time, and reaction-time variability.",
          "NHIS views use Plotly distributions and summaries for the separate survey records.",
        ],
      },
      {
        title: "Laboratory and survey views",
        paragraphs: [
          "Streamlit controls keep the laboratory measures and national survey responses in distinct views. The interface provides comparison context without treating the sources as linked observations or converting them into an individual assessment.",
        ],
      },
    ],
    boundaries: [
      "The EEG and NHIS sources do not describe the same participants.",
      "The stored band summaries cannot be independently regenerated from the code currently tracked in the repository.",
      "Laboratory measures and survey responses answer different questions and should be interpreted within their original contexts.",
      "The application is educational and non-diagnostic.",
    ],
    tools: [
      "Python",
      "NumPy",
      "SciPy",
      "MNE-Python",
      "Pandas",
      "Plotly",
      "Streamlit",
    ],
    materials: [
      {
        label: "Open the EEG + NHIS application",
        href: "https://eeg-nhis-app.streamlit.app/",
        external: true,
      },
      {
        label: "View the EEG + NHIS repository",
        href: "https://github.com/aparker03/eeg-nhis-apps",
        external: true,
      },
    ],
  },
  "brfss-depression-index": {
    slug: "brfss-depression-index",
    title: "BRFSS Depression Index Study",
    summary:
      "An exploratory analysis of 2022 BRFSS responses, a seven-component index, imputation choices, and state-level variation.",
    heroImage: asset("/images/projects/brfss/brfss-app-preview.png"),
    facts: [
      { label: "Source", value: "CDC BRFSS 2022" },
      { label: "Full analysis", value: "Prepared stages above 400,000 records" },
      { label: "Application", value: "Sampled subset by default" },
    ],
    sections: [
      {
        title: "Data source and preparation",
        items: [
          "The download notebook retrieves the CDC 2022 BRFSS archive, extracts the SAS transport file, and converts it to CSV.",
          "The full-data notebooks document prepared stages above 400,000 records. The deployed application loads a sampled subset by default.",
          "Special response codes are separated from valid values. For MENTHLTH and POORHLTH, the response code for no poor-health days is mapped to zero.",
        ],
      },
      {
        title: "Seven-component index",
        paragraphs: [
          "The exploratory index combines poor mental-health days, poor physical-health days, life satisfaction, emotional support, social isolation, stress frequency, and reported depression diagnosis. The notebooks compare mean, median, mode, zero, and no-imputation options.",
        ],
      },
      {
        title: "Imputation controls and export",
        paragraphs: [
          "Imputation fills missing responses with a selected replacement value. That choice flows through the application's Plotly charts, filtered summaries, state views, and exported data, so the missing-data decision remains visible.",
        ],
      },
      {
        title: "State and demographic views",
        items: [
          "State-level charts and maps show index summaries and within-state variation.",
          "Filters support comparisons across available demographic groups.",
          "A no-imputation analysis checks the constructed index against mental-health days and reported depression diagnosis.",
        ],
      },
    ],
    boundaries: [
      "The constructed index is not a validated diagnostic instrument.",
      "Self-reported responses are affected by recall, interpretation, and nonresponse.",
      "Imputation and component choices change the resulting score.",
      "State summaries mask individual and subgroup differences and do not establish causes.",
    ],
    tools: ["Python", "Pandas", "Plotly", "scikit-learn", "Streamlit", "Jupyter"],
    materials: [
      {
        label: "Open the BRFSS application",
        href: "https://state-of-mind.streamlit.app/",
        external: true,
      },
      {
        label: "Read the data-download notebook",
        href: asset("/notebooks/brfss/download.html"),
      },
      {
        label: "Read the EDA notebook",
        href: asset("/notebooks/brfss/eda.html"),
      },
      {
        label: "Read the index-analysis notebook",
        href: asset("/notebooks/brfss/depression_index_analysis.html"),
      },
    ],
  },
  "strava-wearables": {
    slug: "strava-wearables",
    title: "Strava Wearable Metrics",
    summary:
      "A Streamlit activity explorer and a separate notebook analysis of summer 2019 exercise records.",
    heroImage: asset("/images/projects/strava/strava-app-preview.png"),
    facts: [
      { label: "Notebook", value: "Professor Chris Brooks, summer 2019" },
      { label: "Application", value: "Uploaded CSV or bundled sample" },
      { label: "Views", value: "Time, distributions, relationships, routes" },
    ],
    sections: [
      {
        title: "Notebook data and preparation",
        items: [
          "The notebook identifies its source as exercise data collected by Professor Chris Brooks in summer 2019.",
          "Records are grouped by month and time of day. August supports the notebook's complete-measure comparisons, while cadence and heart rate have broader coverage.",
          "Selected comparisons use calculated 1.5-IQR bounds to exclude values outside those bounds from the selected filtered distribution view. Paired views show the unfiltered and filtered observations.",
        ],
      },
      {
        title: "Completeness, distributions, and outliers",
        items: [
          "Box, violin, boxen, density, and histogram views compare available exercise measures across morning, afternoon, evening, and night.",
          "The notebook fits a two-component Gaussian Mixture Model to represent the afternoon heart-rate distribution with two estimated components. The fit is descriptive and does not independently establish bimodality.",
          "Paired views show how outlier handling changes the visible distributions.",
        ],
      },
      {
        title: "Application uploads, filters, and views",
        paragraphs: [
          "The Streamlit application accepts an uploaded activity CSV or its bundled sample. Date, month, time-of-day, and activity-type filters feed raw, daily-average, and weekly-average trends, distributions, relationships, activity summaries, and maps when coordinates are available.",
        ],
      },
      {
        title: "Time-of-day and heart-rate findings",
        paragraphs: [
          "The notebook describes the afternoon heart-rate distribution as visually bimodal in its KDE view and reports time-of-day differences in distance and several August-only measures. These descriptive patterns do not establish physiological causes.",
        ],
      },
    ],
    boundaries: [
      "The notebook and application use separately documented inputs. The bundled application's sample is not identified as the notebook dataset.",
      "The available records do not support population-level conclusions.",
      "Several notebook measures are complete only for August.",
      "Device, activity, environment, and recording conditions can affect wearable measurements.",
    ],
    tools: [
      "Python",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "scikit-learn",
      "Streamlit",
      "Jupyter",
    ],
    materials: [
      {
        label: "Open the activity application",
        href: "https://movement-mapped.streamlit.app/",
        external: true,
      },
      {
        label: "Read the summer 2019 exercise notebook",
        href: asset("/notebooks/strava/strava-analysis.html"),
      },
    ],
  },
  "surgical-scope": {
    slug: "surgical-scope",
    title: "Surgical Scope: Cancer Procedure Trends",
    summary:
      "A California hospital-procedure application and a Los Angeles County notebook using HCAI data from 2013 through 2022.",
    heroImage: asset("/images/projects/cancer/cancer-app-preview.png"),
    facts: [
      { label: "Source", value: "California HCAI, 2013–2022" },
      { label: "Notebook", value: "Los Angeles County" },
      { label: "Application", value: "Statewide and regional views" },
    ],
    sections: [
      {
        title: "Source, notebook, and application scope",
        items: [
          "The source files cover California inpatient and outpatient settings from 2013 through 2022.",
          "The notebook filters the data to Los Angeles County.",
          "The application supports Los Angeles County, statewide, all-region, and custom regional selections.",
        ],
      },
      {
        title: "Application trends and maps",
        paragraphs: [
          "The Streamlit application includes annual trends, year-over-year change, rankings, KDE plots that provide smoothed views of distributions, choropleth maps that use color to show differences by area, and a PyDeck hospital bubble map. Its optional 1.5-IQR control excludes values outside the calculated bounds from the selected filtered distribution view. It does not change trends or maps.",
        ],
      },
      {
        title: "Los Angeles County distribution analysis",
        paragraphs: [
          "The notebook compares Los Angeles County procedure volumes with KDE plots, which provide smoothed views of the distributions. Paired views show all observations alongside a version that removes values outside the 1.5 IQR bounds, making the influence of extreme values visible.",
        ],
      },
      {
        title: "Procedure-volume findings",
        paragraphs: [
          "The notebook identifies breast, colon, and prostate surgery categories as its highest-volume group and esophagus, pancreas, and stomach categories as less common. These statements describe procedure volume, not outcomes or quality of care.",
        ],
      },
    ],
    boundaries: [
      "Procedure volume does not measure patient outcomes or quality of care.",
      "A 2015 coding change can affect comparisons across years.",
      "Outlier removal changes only the selected distribution views and must be interpreted alongside the unfiltered version.",
      "The notebook reports Los Angeles County results, while the application supports broader California selections.",
    ],
    tools: [
      "Python",
      "Pandas",
      "Seaborn",
      "Matplotlib",
      "Streamlit",
      "PyDeck",
      "Jupyter",
    ],
    materials: [
      {
        label: "Open the Surgical Scope application",
        href: "https://surgical-scope.streamlit.app/",
        external: true,
      },
      {
        label: "Read the Los Angeles County notebook",
        href: asset("/notebooks/cancer/cancer-analysis.html"),
      },
    ],
  },
  "nhanes-depression-risk": {
    slug: "nhanes-depression-risk",
    title: "Depression Risk Modeling: NHANES",
    summary:
      "An exploratory analysis of a 467-record NHANES modeling table, unsupervised methods, three supervised model families, and case-level SHAP explanations.",
    facts: [
      { label: "Data", value: "467 cleaned records, seven modules" },
      { label: "Models", value: "Logistic Regression, Random Forest, SVM" },
      { label: "Evaluation", value: "Weighted F1, macro ROC-AUC, SHAP" },
    ],
    sections: [
      {
        title: "Seven-module data preparation",
        items: [
          "The workflow outer-merges Demographics, Depression Screener, Body Measures, Blood Pressure, Physical Activity, Alcohol Use, and Smoking data on SEQN.",
          "Adult age, interview status, physical-examination status, and valid PHQ response filters produce a 467-record cleaned modeling table.",
          "The target contains five PHQ depression-severity categories.",
        ],
      },
      {
        title: "Unsupervised analyses",
        paragraphs: [
          "The notebooks document three separate unsupervised approaches. K-means groups similar records, principal component analysis summarizes variation in fewer dimensions, and DBSCAN identifies dense groups and sparse points. K-means and principal component analysis have documented supervised paths, while DBSCAN appears only as an unsupervised analysis.",
        ],
      },
      {
        title: "Supervised model comparisons",
        paragraphs: [
          "The nonempty K-means-to-supervised and principal-component-to-supervised notebooks compare Logistic Regression, Random Forest, and Support Vector Machine models. The K-means path uses GridSearchCV to test parameter combinations across five stratified folds that preserve the outcome-category proportions.",
        ],
      },
      {
        title: "Evaluation results",
        paragraphs: [
          "The notebooks report confusion matrices, weighted F1, macro ROC-AUC, and case-level SHAP explanations that show how recorded features contribute to an examined prediction. The results also show class imbalance, meaning some outcome categories contain far fewer records than others. Adjacent severity categories are often confused, and severe cases are detected poorly.",
        ],
      },
    ],
    boundaries: [
      "The source does not document subgroup fairness evaluation.",
      "The unsupervised approaches are separate analyses and do not all feed a complete supervised pipeline.",
      "Survey-based modeling does not establish diagnosis or causality.",
      "The analysis is exploratory and is not intended for individual clinical decisions.",
    ],
    tools: ["Python", "Pandas", "scikit-learn", "SHAP", "Matplotlib", "Seaborn"],
    materials: [],
  },
};

export default projectCaseStudies;
