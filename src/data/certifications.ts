export interface Award {
  id: string;
  title: string;
  conference: string;
  paperTitle: string;
  year: string;
  description: string;
  badge: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "AI & ML" | "Cloud" | "Web Dev" | "Internship";
  credentialUrl?: string;
}

export const bestPaperAward: Award = {
  id: "award-icside26",
  title: "Best Paper Award",
  conference: "1st International Conference on Smart Intelligence and Data Engineering (ICSIDE'26)",
  paperTitle: "ACAD Assist: An AI-Based Knowledge Reasoning System for Academic Assistance",
  year: "2026",
  description: "Recognized for outstanding research, algorithmic novelty, and practical impact in developing a Retrieval-Augmented Generation (RAG) system tailored for engineering academic reasoning.",
  badge: "🏆 1st International Conference Award",
  featured: true
};

export const certificationsList: Certification[] = [
  {
    id: "cert-nptel-ml",
    title: "NPTEL Machine Learning Certification",
    issuer: "NPTEL / IIT",
    date: "2025",
    category: "AI & ML"
  },
  {
    id: "cert-nptel-py",
    title: "NPTEL Python Certification",
    issuer: "NPTEL / IIT",
    date: "2025",
    category: "AI & ML"
  },
  {
    id: "cert-ai",
    title: "Artificial Intelligence Certification",
    issuer: "ICT Academy",
    date: "2025",
    category: "AI & ML"
  },
  {
    id: "cert-fullstack",
    title: "Full Stack Development Masterclass Certificate",
    issuer: "Smart Yugam",
    date: "2025",
    category: "Web Dev"
  },
  {
    id: "cert-cognifyz",
    title: "Front-End Development Internship Certificate",
    issuer: "Cognifyz Technologies",
    date: "Dec 2024",
    category: "Internship"
  },
  {
    id: "cert-emglitz",
    title: "AI & IoT Engineering Internship Certificate",
    issuer: "Emglitz Technologies",
    date: "2025",
    category: "Internship"
  }
];
