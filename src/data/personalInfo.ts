export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  bio: string;
  aboutIntro: string;
  degree: string;
  college: string;
  email: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  stats: {
    projectsCount: number;
    projectsSuffix: string;
    projectsLabel: string;
    internshipsCount: number;
    internshipsSuffix: string;
    internshipsLabel: string;
    aiMlCount: number;
    aiMlSuffix: string;
    aiMlLabel: string;
    awardsCount: number;
    awardsSuffix: string;
    awardsLabel: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Sobhiya M",
  initials: "SM",
  role: "COMPUTER SCIENCE GRADUATE • DEVELOPER • DATA ANALYST",
  tagline: "I build intelligent digital experiences.",
  bio: "Computer Science and Engineering graduate passionate about building modern web applications, data-driven solutions, machine learning systems, and AI-powered applications.",
  aboutIntro: "I'm a Computer Science and Engineering graduate with a strong interest in software development, data analytics, machine learning, and AI-powered applications. I enjoy transforming ideas into practical digital solutions and continuously exploring modern technologies to solve real-world problems.",
  degree: "Bachelor of Engineering – Computer Science and Engineering",
  college: "Kathir College of Engineering",
  email: "sobhiyasobhi63@gmail.com",
  location: "Tamil Nadu, India",
  github: "https://github.com/SobhiyaTech/",
  linkedin: "https://linkedin.com/in/sobhiya-m-as0903/",
  resumeUrl: "/resume/Sobhiya_Resume.pdf",
  stats: {
    projectsCount: 10,
    projectsSuffix: "+",
    projectsLabel: "Projects & Academic Work",
    internshipsCount: 3,
    internshipsSuffix: "",
    internshipsLabel: "Technical Internships",
    aiMlCount: 2,
    aiMlSuffix: "+",
    aiMlLabel: "AI & ML Projects",
    awardsCount: 1,
    awardsSuffix: "",
    awardsLabel: "Best Paper Award",
  }
};
