export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  iconName: string;
  highlights: string[];
}

export const educationList: EducationItem[] = [
  {
    id: "edu-be",
    degree: "Bachelor of Engineering",
    field: "Computer Science and Engineering",
    institution: "Kathir College of Engineering",
    location: "Coimbatore, Tamil Nadu",
    period: "2022 – 2026",
    status: "Graduated 2026",
    iconName: "GraduationCap",
    highlights: [
      "Specialized in software development, data science, machine learning, and AI-powered applications.",
      "Lead Researcher for Best Paper Award paper on RAG Knowledge Reasoning",
      "Participated in technical symposiums, coding hackathons, AI seminars, and research activities."
    ]
  },
  {
    id: "edu-hsc",
    degree: "Higher Secondary Certificate (HSC)",
    field: "Physics, Chemistry, Mathematics, Computer Science",
    institution: "Palaniammal Higher Secondary School",
    location: "Tirupur, Tamil Nadu",
    period: "2020 – 2022",
    status: "Completed with Distinction",
    iconName: "BookOpen",
    highlights: [
      "Secured top academic rank in Higher Secondary Board examinations",
      "Focus on Advanced Mathematics, Physics, and Computer Science fundamentals"
    ]
  },
  {
    id: "edu-sslc",
    degree: "Secondary School Leaving Certificate (SSLC)",
    field: "General Science & Mathematics",
    institution: "Shri Valli Vidhayalayya Matric School",
    location: "Tirupur, Tamil Nadu",
    period: "2019 – 2020",
    status: "Completed with High Honors",
    iconName: "School",
    highlights: [
      "Strong foundation in core science, mathematics, and logical reasoning",
      "Excellence awards in school science exhibitions and math olympiads"
    ]
  }
];
