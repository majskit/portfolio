export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  links: {
    demo?: string;
    github?: string;
    live?: string;
  };
  image: string;
  status: "completed" | "in-progress" | "planned";
  category: "frontend" | "backend" | "fullstack" | "mobile";
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools" | "soft";
  level: "beginner" | "intermediate" | "advanced" | "expert";
  icon?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}
