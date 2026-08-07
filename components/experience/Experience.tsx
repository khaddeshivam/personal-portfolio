import { ExperienceHeader } from "./ExperienceHeader";
import { FeaturedExperience } from "./FeaturedExperience";
import { ExperienceSummary } from "./ExperienceSummary";
import { ExperienceGrid } from "./ExperienceGrid";

export function Experience() { return <section id="experience" className="section-shell pt-0"><ExperienceHeader /><div className="grid grid-cols-1 gap-5 lg:grid-cols-[3fr_2fr]"><FeaturedExperience /><ExperienceSummary /></div><ExperienceGrid /></section>; }
