import React from "react";
import projectCaseStudies from "../../data/projectCaseStudies";
import CaseStudyPage from "./CaseStudyPage";

export default function NhanesDepressionRisk() {
  return <CaseStudyPage study={projectCaseStudies["nhanes-depression-risk"]} />;
}
