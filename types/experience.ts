export type ExperienceStat = { value: string; label: string };

export type FeaturedExperience = {
  company: string;
  role: string;
  period: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  stack: string[];
  stats: ExperienceStat[];
};

export type SecondaryExperience = {
  company: string;
  role: string;
  duration: string;
  description: string;
  skills: string[];
};

export type ExperienceSummaryStat = { label: string; value: string };
