import type { Skill } from "../types";

export const skills: Skill[] = [
  // Backend Development
  { name: "Node.js", category: "backend", level: "advanced", icon: "nodejs" },
  { name: "Express", category: "backend", level: "advanced", icon: "express" },
  { name: "RESTful APIs", category: "backend", level: "advanced", icon: "api" },

  // Frontend Development
  { name: "HTML5", category: "frontend", level: "expert", icon: "html5" },
  { name: "CSS3", category: "frontend", level: "expert", icon: "css3" },
  { name: "SASS", category: "frontend", level: "advanced", icon: "sass" },
  {
    name: "JavaScript",
    category: "frontend",
    level: "advanced",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    category: "frontend",
    level: "advanced",
    icon: "typescript",
  },
  { name: "Next.js", category: "frontend", level: "advanced", icon: "nextjs" },
  { name: "React", category: "frontend", level: "advanced", icon: "react" },
  {
    name: "Redux Toolkit",
    category: "frontend",
    level: "intermediate",
    icon: "redux",
  },
  {
    name: "Responsive Design",
    category: "frontend",
    level: "expert",
    icon: "responsive",
  },

  // Databases
  {
    name: "MongoDB",
    category: "database",
    level: "intermediate",
    icon: "mongodb",
  },
  {
    name: "Mongoose",
    category: "database",
    level: "intermediate",
    icon: "mongoose",
  },
  { name: "MySQL", category: "database", level: "intermediate", icon: "mysql" },
  {
    name: "PostgreSQL",
    category: "database",
    level: "intermediate",
    icon: "postgresql",
  },
  {
    name: "Prisma",
    category: "database",
    level: "intermediate",
    icon: "prisma",
  },

  // Tools and Technologies
  { name: "Git", category: "tools", level: "advanced", icon: "git" },
  { name: "Postman", category: "tools", level: "intermediate", icon: "postman" },
  {
    name: "Swagger",
    category: "tools",
    level: "intermediate",
    icon: "swagger",
  },

  // Soft Skills
  {
    name: "Attention to detail",
    category: "soft",
    level: "expert",
    icon: "detail",
  },
  {
    name: "Quick learner",
    category: "soft",
    level: "expert",
    icon: "learning",
  },
  {
    name: "Problem-Solving",
    category: "soft",
    level: "advanced",
    icon: "problem",
  },
  {
    name: "Team collaboration",
    category: "soft",
    level: "advanced",
    icon: "team",
  },
  {
    name: "Good communication",
    category: "soft",
    level: "advanced",
    icon: "communication",
  },
];
