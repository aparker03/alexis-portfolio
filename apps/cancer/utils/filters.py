import streamlit as st

def get_filter_controls(df):
    st.markdown("### 🎛️ Filter Your View")

    # Unique values for filters
    all_years = sorted(df["year"].dropna().unique())
    all_surgeries = sorted(df["surgery"].dropna().unique())
    all_counties = sorted(df["county"].dropna().unique())

    # Filters - inline layout with columns
    col1, col2, col3 = st.columns(3)

    with col1:
        years = st.multiselect(
            "Select Year(s)",
            options=all_years,
            default=all_years,
            help="Select one or more years to explore"
        )

    with col2:
        surgeries = st.multiselect(
            "Select Surgery Type(s)",
            options=all_surgeries,
            default=["Breast", "Colon", "Prostate", "Esophagus", "Pancreas", "Stomach"],
            help="Select one or more types of cancer surgeries"
        )

    with col3:
        county = st.selectbox(
            "Select County",
            options=["Los Angeles"] + [c for c in all_counties if c != "Los Angeles"],
            index=0,
            help="Default is Los Angeles County"
        )

    # Return filters as a dict
    return {
        "years": years,
        "surgeries": surgeries,
        "county": county
    }
