import streamlit as st
import seaborn as sns
import matplotlib.pyplot as plt
import altair as alt
import pandas as pd
from utils.prep import get_common_surgeries, is_plot_ready

def plot_kde_by_surgery(df, surgery_group="most", remove_outliers=False, top_n=3):
    """
    Plots KDE for selected surgery group with or without outliers.
    Skips any group that doesn't meet variance/size thresholds.
    """
    most_common, least_common = get_common_surgeries(df, top_n=top_n)

    if surgery_group == "most":
        selected = most_common
        title = "Most Common Surgeries"
    else:
        selected = least_common
        title = "Least Common Surgeries"

    df_group = df[df["surgery"].isin(selected)].copy()
    avg_df = df_group.groupby(["year", "surgery"])["cases"].mean().reset_index()

    if remove_outliers:
        avg_df = _remove_outliers(avg_df, "cases")

    fig, ax = plt.subplots(figsize=(10, 6))
    palette = sns.color_palette("magma", len(selected))

    for (surgery, color) in zip(selected, palette):
        subset = avg_df[avg_df["surgery"] == surgery]
        if not subset.empty and is_plot_ready(subset["cases"]):
            sns.kdeplot(
                data=subset,
                x="cases",
                fill=True,
                color=color,
                alpha=0.6,
                label=surgery,
                ax=ax
            )

    ax.set_title(f"{title} (KDE Plot)", fontsize=16)
    ax.set_xlabel("Average # of Cases")
    ax.set_ylabel("Density")
    ax.grid(True, linestyle='--', alpha=0.5)

    handles, labels = ax.get_legend_handles_labels()
    if handles:
        ax.legend(title="Surgery Type")

    st.pyplot(fig)

def _remove_outliers(df, column):
    """
    Removes outliers from a column using the IQR method.
    """
    Q1 = df[column].quantile(0.25)
    Q3 = df[column].quantile(0.75)
    IQR = Q3 - Q1
    lower = Q1 - 1.5 * IQR
    upper = Q3 + 1.5 * IQR
    return df[(df[column] >= lower) & (df[column] <= upper)]

def plot_surgery_trends(df, selected_surgeries, include_total=True):
    if df.empty:
        st.warning("No data available to display.")
        return

    combined = pd.DataFrame()

    if selected_surgeries:
        type_trends = (
            df[df["surgery"].isin(selected_surgeries)]
            .groupby(["year", "surgery"])["cases"]
            .sum()
            .reset_index()
        )
        combined = pd.concat([combined, type_trends], ignore_index=True)

    if include_total or not selected_surgeries:
        total_trends = df.groupby("year")["cases"].sum().reset_index()
        total_trends["surgery"] = "Total"
        combined = pd.concat([combined, total_trends], ignore_index=True)

    if combined.empty:
        st.warning("Nothing to plot.")
        return

    chart = alt.Chart(combined).mark_line(point=True).encode(
        x=alt.X("year:O", title="Year"),
        y=alt.Y("cases:Q", title="Total Cases"),
        color=alt.Color("surgery:N", title="Surgery Type"),
        tooltip=["year", "surgery", "cases"]
    ).properties(
        title="Surgery Volumes Over Time",
        width=750,
        height=400
    ).configure_title(anchor="start")

    st.altair_chart(chart, use_container_width=True)

def plot_hospital_map(df):
    """
    Plots a map of hospital locations using latitude and longitude.
    Filters out rows with missing coordinates.
    """
    location_df = df.dropna(subset=["latitude", "longitude"])[["latitude", "longitude"]]

    if location_df.empty:
        st.warning("No hospital locations available to map.")
        return

    st.map(location_df.rename(columns={"latitude": "lat", "longitude": "lon"}))
