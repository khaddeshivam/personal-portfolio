import type { ExperienceSummaryStat, FeaturedExperience, SecondaryExperience } from "@/types/experience";

export const experienceCopy = {
  eyebrow: "// Professional experience",
  title: "Building real-world software.",
  description: "From learning the fundamentals to shipping production Android apps, enterprise systems, and backend services — here's where that happened."
};

export const featuredExperience: FeaturedExperience = {
  company: "Blue Planet InfoSolutions",
  role: "Android Developer Intern",
  period: "Jan 2025 — Sep 2025",
  location: "Pune, India",
  status: "Completed",
  description: "Worked on production Android applications, collaborating with backend APIs and modern Android architecture to ship features real users depended on.",
  highlights: ["Production Android apps", "REST API integration", "Firebase Authentication", "Bluetooth communication", "MVVM architecture", "Performance optimization"],
  stack: ["Java", "Kotlin", "Android", "Firebase", "SQLite", "MVVM", "REST APIs", "Git", "Gradle"],
  stats: [{ value: "1,000+", label: "Users served" }, { value: "10+", label: "Major features" }, { value: "95%", label: "Crash-free sessions" }]
};

export const experienceSummary: ExperienceSummaryStat[] = [
  { label: "Programs completed", value: "5" },
  { label: "Domains covered", value: "Mobile · Cloud · Full-stack" },
  { label: "Current focus", value: "Backend systems" }
];

export const secondaryExperiences: SecondaryExperience[] = [
  { company: "IBM SkillsBuild", role: "Software Development Intern", duration: "6 weeks", description: "Worked on software engineering projects while learning modern development practices and collaborative workflows.", skills: ["Java", "Git", "Problem Solving", "Software Engineering"] },
  { company: "Edunet Foundation", role: "Java Full Stack Developer Intern", duration: "Internship", description: "Built enterprise web applications using Java backend technologies and modern frontend development.", skills: ["Java", "Spring Boot", "React", "REST APIs", "PostgreSQL"] },
  { company: "AWS Cloud Virtual Internship", role: "Cloud Developer", duration: "Virtual internship", description: "Learned cloud infrastructure, IAM, deployment, storage services, and cloud architecture fundamentals.", skills: ["AWS", "EC2", "S3", "IAM", "Cloud Computing"] },
  { company: "Google Android Developer Virtual Internship", role: "Android Developer", duration: "Virtual internship", description: "Worked with Android development fundamentals, Firebase integration, UI design, and application architecture.", skills: ["Java", "Kotlin", "Firebase", "Material Design", "Android"] }
];
