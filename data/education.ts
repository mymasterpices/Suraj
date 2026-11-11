export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  year: string;
  location: string;
  details: string;
  icon: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  icon: string;
}

export const educationList: EducationItem[] = [
  {
    id: "bcom-du",
    degree: "Bachelor of Commerce (B.Com)",
    institution: "University of Delhi",
    period: "Graduated 2017",
    year: "2017",
    location: "New Delhi, India",
    details: "Commercial foundations, business logic, quantitative methods, and operational principles.",
    icon: "GraduationCap",
  },
  {
    id: "tech-vision",
    degree: "Professional Diploma in Web Designing & Development",
    institution: "Tech Vision Institute",
    period: "Completed Professional Training",
    year: "2017 - 2018",
    location: "New Delhi, India",
    details: "Intensive training in modern web architecture, JavaScript, PHP, MySQL, CSS3, and responsive UI slicing.",
    icon: "Code",
  },
  {
    id: "cbse-12",
    degree: "Senior Secondary Certificate (12th Grade - CBSE)",
    institution: "Central Board of Secondary Education",
    period: "Passed 2014",
    year: "2014",
    location: "New Delhi, India",
    details: "Commerce with Computer Applications, Mathematics, and Business Studies.",
    icon: "BookOpen",
  },
  {
    id: "cbse-10",
    degree: "Secondary School Certificate (10th Grade - CBSE)",
    institution: "Central Board of Secondary Education",
    period: "Passed 2012",
    year: "2012",
    location: "New Delhi, India",
    details: "Core STEM foundations, English, and Social Sciences.",
    icon: "Award",
  },
];

export const achievements: AchievementItem[] = [
  {
    id: "client-comforter",
    title: "Client Comforter Award",
    organization: "Matrix Web Studio",
    year: "2018",
    description: "Awarded by company leadership for outstanding customer communication, deep empathy, and reassuring client guidance through technical launches.",
    badge: "Client Excellence",
    icon: "HeartHandshake",
  },
  {
    id: "mr-regular",
    title: "Mr. Regular Award",
    organization: "Matrix Web Studio",
    year: "2018",
    description: "Conferred in recognition of flawless punctuality, 100% dependable commitment, and tireless dedication to team deadlines.",
    badge: "Reliability & Dedication",
    icon: "Trophy",
  },
];
