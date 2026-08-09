import type { FeaturedProject } from "@/types/project";

export const featuredProjects: FeaturedProject[] = [
  // Fill in githubUrl / liveUrl below with real links. Leave a field out entirely
  // (or undefined) and its button simply won't render — never fabricate a URL here.
  { category: "AI + FinTech", name: "FinPilot", description: "AI-powered finance platform for expenses, salary planning, budgets, analytics, and financial goals.", tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Redis", "Docker", "JWT", "AWS"], theme: "violet", githubUrl: undefined, liveUrl: undefined },
  { category: "Enterprise Application", name: "Employee Management System", description: "Role-based employee platform with authentication, dashboards, CRUD operations, REST APIs, search, and pagination.", tech: ["Spring Boot", "React", "JWT", "PostgreSQL"], theme: "blue", githubUrl: "https://github.com/khaddeshivam/Employee-Management-System", liveUrl: "https://employee-management-system-theta-seven.vercel.app/login" },
  { category: "Backend System", name: "Railway Reservation System", description: "Secure reservation backend with authentication, train search, concurrent booking, cancellation, and layered architecture.", tech: ["Java", "Spring Boot", "JPA", "PostgreSQL", "Swagger"], theme: "orange", githubUrl: "https://github.com/khaddeshivam/railway-reservation-backend", liveUrl: undefined },
  { category: "Artificial Intelligence", name: "AI Document Chat", description: "RAG-based document assistant for semantic search and context-aware document conversations.", tech: ["Python", "LangChain", "FAISS", "Gemini", "Streamlit"], theme: "emerald", githubUrl: "https://github.com/khaddeshivam/rag-chatbot", liveUrl: undefined }
];

export const projectsCopy = { eyebrow: "Featured projects", firstLine: "Things I’ve", secondLine: "Built", description: "I build systems with clear foundations: dependable APIs, deliberate interfaces, and practical intelligence where it creates real value." };
