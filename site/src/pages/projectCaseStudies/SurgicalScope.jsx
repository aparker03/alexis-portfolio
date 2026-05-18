import React from "react";
import projectCaseStudies from "../../data/projectCaseStudies";
import CaseStudyPage from "./CaseStudyPage";

export default function SurgicalScope() {
  return <CaseStudyPage study={projectCaseStudies["surgical-scope"]} />;
}
