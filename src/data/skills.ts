export interface Skill {
  name: string;
  level?: number;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    categoryKey: "programming",
    iconName: "Code2",
    description: "Core algorithmic foundations and software engineering syntax",
    skills: [
      { name: "Python", level: 92, featured: true },
      { name: "Java", level: 85, },
      { name: "C", level: 80 }
    ]
  },
  {
    title: "Frontend Development",
    categoryKey: "frontend",
    iconName: "Layout",
    description: "Building responsive, modern, dynamic web applications & interfaces",
    skills: [
      { name: "React", level: 90, featured: true },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90, featured: true },
      { name: "HTML5", level: 95, featured: true  },
      { name: "CSS3 / Modules", level: 92, featured: true  }
    ]
  },
  {
    title: "Data & Analytics",
    categoryKey: "data",
    iconName: "BarChart3",
    description: "Data cleaning, statistical modeling, exploratory analysis & BI visualization",
    skills: [
      { name: "Python", level: 92, featured: true },
      { name: "Pandas", level: 90, featured: true },
      { name: "NumPy", level: 88, featured: true },
      { name: "Matplotlib", level: 85, featured: true },
      { name: "Seaborn", level: 85, featured: true },
      { name: "SQL", level: 90, featured: true },
      { name: "Power BI", level: 82, featured: true  },
      { name: "Excel Analytics", level: 85 }
    ]
  },
  {
    title: "Artificial Intelligence & ML",
    categoryKey: "aiml",
    iconName: "Brain",
    description: "Predictive analytics, deep neural networks & Retrieval-Augmented Generation",
    skills: [
      { name: "Scikit-learn", level: 88, featured: true },
      { name: "TensorFlow", level: 82, featured: true },
      { name: "Keras", level: 82 },
      { name: "Machine Learning", level: 90, featured: true },
      { name: "Deep Learning", level: 84 },
      { name: "RAG Architecture", level: 86, featured: true },
      { name: "Hugging Face", level: 85 }
    ]
  },
  {
    title: "Databases & Storage",
    categoryKey: "databases",
    iconName: "Database",
    description: "Relational modeling, document stores & key-value caching systems",
    skills: [
      { name: "MySQL", level: 88, featured: true },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Redis", level: 75 }
    ]
  },
  {
    title: "Developer Tools & DevOps",
    categoryKey: "tools",
    iconName: "Wrench",
    description: "Version control, containerization, IDE environments & visual prototyping",
    skills: [
      { name: "Git", level: 90, featured: true },
      { name: "GitHub", level: 90, featured: true },
      { name: "Docker", level: 78, },
      { name: "VS Code", level: 95, featured: true },
      { name: "Google Colab", level: 90, featured: true  },
      { name: "Figma", level: 82 }
    ]
  }
];
