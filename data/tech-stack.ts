export type TechItem = { name: string; icon: string };

const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const techStackCopy = { eyebrow: "// Technology stack", title: "Tools I build with." };

export const techRowOne: TechItem[] = [
  { name: "Java", icon: devicon("java/java-original.svg") },
  { name: "Spring Boot", icon: devicon("spring/spring-original.svg") },
  { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
  { name: "MySQL", icon: devicon("mysql/mysql-original.svg") },
  { name: "Docker", icon: devicon("docker/docker-original.svg") },
  { name: "Kubernetes", icon: devicon("kubernetes/kubernetes-plain.svg") },
  { name: "Redis", icon: devicon("redis/redis-original.svg") },
  { name: "AWS", icon: devicon("amazonwebservices/amazonwebservices-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") }
];

export const techRowTwo: TechItem[] = [
  { name: "Python", icon: devicon("python/python-original.svg") },
  { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
  { name: "TypeScript", icon: devicon("typescript/typescript-original.svg") },
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "C++", icon: devicon("cplusplus/cplusplus-original.svg") },
  { name: "JWT", icon: devicon("jsonwebtokens/jsonwebtokens-original.svg") },
  { name: "Postman", icon: devicon("postman/postman-original.svg") },
  { name: "IntelliJ IDEA", icon: devicon("intellij/intellij-original.svg") },
  { name: "Maven", icon: devicon("maven/maven-original.svg") },
  { name: "Firebase", icon: devicon("firebase/firebase-plain.svg") }
];
