export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isCurrent?: boolean;
  projectTitle?: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
  type: "Internship" | "Training & Leadership";
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Science Intern",
    company: "QSpiders",
    location: "India",
    period: "2026",
    isCurrent: true,
    description: "Worked on data preprocessing, data cleaning, exploratory data analysis, data visualization, and machine learning model development using Python and popular data science libraries.",
    bulletPoints: [
      "Executed extensive data cleaning, feature scaling, missing value imputation, and outlier detection on complex datasets.",
      "Created statistical dashboards and interactive visual stories using Seaborn, Matplotlib, and Pandas.",
      "Engineered machine learning classification and regression pipelines using Scikit-learn algorithms."
    ],
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "SQL"],
    type: "Internship"
  },
  {
    id: "exp-2",
    role: "Front-End Development Intern",
    company: "Cognifyz Technologies",
    location: "Remote",
    period: "Nov 2024 – Dec 2024",
    isCurrent: false,
    description: "Worked on responsive frontend development and implemented modern web interfaces using HTML, CSS, and JavaScript.",
    bulletPoints: [
      "Built clean, modular, and cross-browser compatible UI web layouts matching Figma mockups.",
      "Optimized DOM rendering performance and implemented mobile-first responsive grid systems.",
      "Collaborated with senior developers to refine accessibility, semantic markup, and dynamic interactive elements."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "Figma"],
    type: "Internship"
  },
  {
    id: "exp-3",
    role: "AI & IoT Intern",
    company: "Emglitz Technologies",
    location: "Tamil Nadu, India",
    period: "2025",
    isCurrent: false,
    projectTitle: "AI–IoT Based Smart Agriculture Monitoring System",
    description: "Developed an IoT-based smart agriculture monitoring solution using ESP32, sensors, Arduino IDE, and the Blynk IoT platform for real-time environmental monitoring.",
    bulletPoints: [
      "Interfaced ESP32 microcontroller with soil moisture, humidity, temperature, and pH sensors for automated data collection.",
      "Configured real-time cloud data streaming via Blynk IoT platform and Arduino IDE C++ firmware.",
      "Engineered predictive threshold triggers for precision irrigation and automated soil moisture management."
    ],
    skills: ["ESP32", "Arduino IDE", "Blynk IoT Platform", "C++", "IoT", "Sensors"],
    type: "Internship"
  }
];
