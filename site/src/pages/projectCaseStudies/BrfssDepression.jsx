import React from "react";
import projectCaseStudies from "../../data/projectCaseStudies";
import CaseStudyPage from "./CaseStudyPage";

export default function BrfssDepression() {
  return <CaseStudyPage study={projectCaseStudies["brfss-depression-index"]} />;
}
