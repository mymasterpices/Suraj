export interface PersonalInfo {
  name: string;
  firstName: string;
  title: string;
  headline: string;
  location: string;
  phone: string;
  phoneRaw: string;
  linkedin: string;
  github: string;
  experienceYears: string;
  summary: string;
  typingRoles: string[];
  stats: {
    label: string;
    value: string;
    suffix?: string;
    description: string;
  }[];
  socials: {
    name: string;
    url: string;
    icon: string;
    ariaLabel: string;
  }[];
}

export const personalInfo: PersonalInfo = {
  name: "Suraj Sharma",
  firstName: "Suraj",
  title: "Full Stack / MEAN Stack Developer",
  headline: "Crafting scalable web apps, high-converting e-commerce, and modern automation tools with 8.5+ years of production experience.",
  location: "New Delhi, India",
  phone: "+91-9205532748",
  phoneRaw: "+919205532748",
  linkedin: "https://www.linkedin.com/in/suraj-sharma-076588178/",
  github: "https://github.com/mymasterpices",
  experienceYears: "8.5+",
  summary:
    "Full Stack Web Developer with 8.5+ years of experience designing, building and maintaining dynamic web applications and e-commerce platforms. Strong front-end foundation in HTML5, CSS3, JavaScript, jQuery and Bootstrap, with robust full-stack capability in Node.js, TypeScript and the MEAN stack. Delivered 30+ production websites across WordPress, custom PHP/MySQL systems and Shopify (theme customization and custom app development on Remix). Currently expanding into AI agent development to build intelligent, automation-driven web applications.",
  typingRoles: [
    "Full Stack Developer",
    "MEAN Stack Developer",
    "Shopify & WordPress Expert",
    "AI Agent Explorer",
  ],
  stats: [
    {
      label: "Experience",
      value: "8.5+",
      description: "Years engineering dynamic web apps & e-commerce",
    },
    {
      label: "Projects Delivered",
      value: "30+",
      description: "Live production websites & custom platforms",
    },
    {
      label: "Core Ecosystems",
      value: "3",
      description: "MEAN Stack, Shopify (Remix), WordPress",
    },
    {
      label: "Client Awards",
      value: "2",
      description: "Client Comforter & Mr. Regular recognitions",
    },
  ],
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mymasterpices",
      icon: "Github",
      ariaLabel: "View Suraj Sharma on GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/suraj-sharma-076588178/",
      icon: "Linkedin",
      ariaLabel: "Connect with Suraj Sharma on LinkedIn",
    },
    {
      name: "Phone",
      url: "tel:+919205532748",
      icon: "Phone",
      ariaLabel: "Call Suraj Sharma",
    },
  ],
};
