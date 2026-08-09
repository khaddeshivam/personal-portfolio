import { BriefcaseBusiness, Code2, FolderKanban, Home, Mail, Sparkles, UserRound } from "lucide-react";
import type { NavItem } from "@/types/portfolio";

export const profile = {
  name: "Shivam Khadde", initials: "SK", role: "Backend Engineer", location: "Pune, India",
  email: "khaddeshivam@gmail.com", phone: "+91 77092 20688", github: "https://github.com/khaddeshivam", linkedin: "https://www.linkedin.com/in/khaddeshivam",
  leetcode: "https://leetcode.com/u/khaddeshivam/", // placeholder — replace with your real LeetCode profile URL
  availability: "Open to backend & full-stack roles",
  photo: "/profile-photo.jpg",
  tagline: "Building scalable software with Java, AI, and modern web technologies.",
  hero: { lead: "Building Systems That", accent: "Stay Reliable", tail: "Under Pressure", description: "I’m Shivam — a backend-focused Computer Engineering student who builds secure, well-architected applications. From JWT authentication to concurrent booking, I ship software designed to hold up." }
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home", icon: Home }, { label: "Projects", href: "#featured-projects", icon: FolderKanban }, { label: "Story", href: "#story", icon: UserRound }, { label: "Experience", href: "#experience", icon: BriefcaseBusiness }, { label: "Skills", href: "#skills", icon: Code2 }, { label: "Contact", href: "#contact", icon: Mail }
];
export const footerLinks = [
  { label: "Projects", href: "#featured-projects" }, { label: "Experience", href: "#experience" }, { label: "Technology Stack", href: "#skills" }, { label: "Achievements", href: "#achievements" }, { label: "Resume", href: "#resume" }, { label: "Contact", href: "#contact" }
];
export const coreStack = ["Java", "Spring Boot", "PostgreSQL", "React", "Docker", "MongoDB"];
export const floatingTech = [
  { label: "Java", className: "tech-java [--angle:0deg] [--radius:220px] [--duration:25s]" }, { label: "PostgreSQL", className: "tech-postgres [--angle:90deg] [--radius:220px] [--duration:25s]" }, { label: "React", className: "tech-react [--angle:180deg] [--radius:220px] [--duration:25s]" }, { label: "Spring Boot", className: "tech-spring [--angle:270deg] [--radius:220px] [--duration:25s]" },
  { label: "Docker", className: "tech-docker [--angle:20deg] [--radius:390px] [--duration:35s]" }, { label: "MongoDB", className: "tech-mongodb [--angle:80deg] [--radius:390px] [--duration:35s]" }, { label: "C++", className: "tech-cpp [--angle:140deg] [--radius:390px] [--duration:35s]" }, { label: "Python", className: "tech-python [--angle:200deg] [--radius:390px] [--duration:35s]" }, { label: "Redis", className: "tech-redis [--angle:260deg] [--radius:390px] [--duration:35s]" }, { label: "AWS", className: "tech-aws [--angle:320deg] [--radius:390px] [--duration:35s]" },
  { label: "Kubernetes", className: "tech-kubernetes [--angle:45deg] [--radius:580px] [--duration:45s]" }, { label: "Git", className: "tech-git [--angle:135deg] [--radius:580px] [--duration:45s]" }, { label: "JWT", className: "tech-jwt [--angle:225deg] [--radius:580px] [--duration:45s]" }, { label: "TypeScript", className: "tech-typescript [--angle:315deg] [--radius:580px] [--duration:45s]" }
];
export const stats = [{ value: "8.62", label: "CGPA in Computer Engineering" }, { value: "1,000+", label: "Users served across shipped apps" }, { value: "120+", label: "DSA problems solved" }, { value: "60%", label: "Crash-rate reduction achieved" }];
export const story = ["Hey, I’m Shivam — final-year Computer Engineering student at PES Modern College of Engineering, Pune (8.62 CGPA), and backend is where I actually like spending my time. Not the flashy stuff — the layered, secure APIs that keep working when things get messy.", "My first real test of that was at Blue Planet InfoSolutions, shipping Android apps used by 1,000+ people. It sharpened my product instincts, but Spring Boot and PostgreSQL are still where I do my strongest work.", "When I’m not in class, I’m usually deep in a side project, grinding DSA problems, or exploring RAG pipelines and LLM integrations — the part of engineering I can’t stop poking at."];
export const achievements = [{ icon: "🏆", title: "Semi-finalist", detail: "JGASOM Next Gen Minds Hackathon" }, { icon: "☁️", title: "AWS Cloud Foundations", detail: "Amazon" }, { icon: "🎓", title: "OCI Data Science", detail: "Oracle University, 2025" }, { icon: "🌐", title: "JNCIA-Cloud", detail: "Juniper Networks" }];
export const sectionMeta = { story: { eyebrow: "// Engineering story", title: "Engineer first, always shipping." }, projects: { eyebrow: "// Selected work", title: "Things I’ve built.", description: "A mix of backend architecture, full-stack systems, and AI-powered tools." }, achievements: { eyebrow: "// Proof", title: "Recognition along the way.", description: "Certifications and results that back up the work above." }, contact: { title: "Let’s build something", accent: "solid.", description: "Open to backend, full-stack, and internship opportunities. I usually reply within a day." } };
export const resume = { href: "/shivam-khadde-resume.pdf", label: "Download resume", icon: Code2, badgeIcon: Sparkles };
