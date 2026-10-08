export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  gradient: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "service-web",
    number: "01",
    title: "Web Development",
    description: "Build responsive and modern web applications using React and TypeScript.",
    iconName: "Code",
    skills: ["React", "TypeScript", "Vite", "CSS Modules", "Responsive Design", "REST APIs"],
    gradient: "from-cyan to-blue"
  },
  {
    id: "service-analytics",
    number: "02",
    title: "Data Analytics",
    description: "Transform raw data into meaningful insights using Python, SQL, Excel and Power BI.",
    iconName: "PieChart",
    skills: ["Python", "Pandas", "SQL", "Power BI", "Exploratory Analysis", "Seaborn"],
    gradient: "from-teal to-cyan"
  },
  {
    id: "service-ml",
    number: "03",
    title: "Machine Learning",
    description: "Build predictive models and data-driven machine learning solutions.",
    iconName: "Cpu",
    skills: ["Scikit-Learn", "Regression & Classification", "Feature Engineering", "Model Evaluation"],
    gradient: "from-blue to-teal"
  },
  {
    id: "service-ai",
    number: "04",
    title: "AI Applications",
    description: "Develop AI-powered applications using LLMs, RAG and modern AI technologies.",
    iconName: "Sparkles",
    skills: ["RAG Architecture", "FAISS Vector Search", "Hugging Face Models", "FastAPI", "Prompt Engineering"],
    gradient: "from-cyan to-indigo"
  }
];
