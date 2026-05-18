import React from "react";
import projectCaseStudies from "../../data/projectCaseStudies";
import CaseStudyPage from "./CaseStudyPage";

export default function EegNhis() {
  return <CaseStudyPage study={projectCaseStudies["eeg-nhis"]} />;
}
