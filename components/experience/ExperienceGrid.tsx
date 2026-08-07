import { secondaryExperiences } from "@/data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function ExperienceGrid() { return <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">{secondaryExperiences.map((item, index) => <ExperienceCard item={item} index={index} key={item.company} />)}</div>; }
