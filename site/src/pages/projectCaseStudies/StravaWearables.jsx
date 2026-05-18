import React from "react";
import projectCaseStudies from "../../data/projectCaseStudies";
import CaseStudyPage from "./CaseStudyPage";

export default function StravaWearables() {
  return <CaseStudyPage study={projectCaseStudies["strava-wearables"]} />;
}
