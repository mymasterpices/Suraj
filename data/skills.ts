export interface SkillCategory {
  category: string;
  description: string;
  iconName: string;
  gradient: string;
  skills: {
    name: string;
    level: string; // "Expert" | "Advanced" | "Proficient" | "Emerging"
    tag?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Full Stack / MEAN Stack",
    description: "Robust JavaScript & TypeScript architectures, RESTful APIs, and full-stack systems.",
    iconName: "Layers",
    gradient: "from-blue-500 to-indigo-600",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Angular", level: "Proficient" },
      { name: "MongoDB", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
    ],
  },
  {
    category: "Languages & Frameworks",
    description: "Core web languages driving both modern SPAs and enterprise backend engines.",
    iconName: "Code2",
    gradient: "from-indigo-500 to-purple-600",
    skills: [
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "PHP", level: "Expert" },
      { name: "Remix (Shopify Apps)", level: "Advanced" },
      { name: "React / Next.js", level: "Advanced" },
    ],
  },
  {
    category: "Front-End & UI Design",
    description: "Pixel-perfect, accessible, mobile-first responsive interfaces and fluid interactions.",
    iconName: "Palette",
    gradient: "from-cyan-500 to-blue-600",
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Expert" },
      { name: "CSS3 & SASS", level: "Expert" },
      { name: "Responsive Web Design", level: "Expert" },
      { name: "Bootstrap 4/5", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "jQuery", level: "Expert" },
    ],
  },
  {
    category: "CMS & E-Commerce",
    description: "High-volume storefronts, bespoke Shopify apps, and enterprise WordPress builds.",
    iconName: "ShoppingBag",
    gradient: "from-emerald-500 to-teal-600",
    skills: [
      { name: "Shopify (Liquid Themes)", level: "Expert" },
      { name: "Shopify Custom Apps (Remix)", level: "Advanced" },
      { name: "WordPress Custom Themes", level: "Expert" },
      { name: "WordPress Plugin Development", level: "Advanced" },
      { name: "WooCommerce", level: "Expert" },
    ],
  },
  {
    category: "Databases & Storage",
    description: "Scalable data modeling, query optimization, indexing, and persistent storage.",
    iconName: "Database",
    gradient: "from-amber-500 to-orange-600",
    skills: [
      { name: "MySQL", level: "Expert" },
      { name: "MongoDB / Mongoose", level: "Advanced" },
      { name: "Nextcloud / Cloud Storage", level: "Advanced" },
      { name: "Data Migration & Modernization", level: "Advanced" },
    ],
  },
  {
    category: "Emerging: AI Agents & Automation",
    description: "Pioneering intelligent automation, agent workflows, and AI-assisted tooling.",
    iconName: "Bot",
    gradient: "from-violet-500 to-fuchsia-600",
    skills: [
      { name: "AI Agent Development", level: "Emerging", tag: "New Frontier" },
      { name: "Workflow Automation", level: "Advanced" },
      { name: "LLM API Integrations", level: "Proficient" },
      { name: "CRM Tool Automations", level: "Advanced" },
    ],
  },
  {
    category: "Engineering Practices",
    description: "Discipline, user-centric thinking, and reliable cross-browser delivery.",
    iconName: "CheckCircle2",
    gradient: "from-sky-500 to-indigo-600",
    skills: [
      { name: "Design Thinking", level: "Core" },
      { name: "Problem Solving", level: "Core" },
      { name: "Cross-Browser Compatibility", level: "Expert" },
      { name: "Performance Optimization", level: "Advanced" },
      { name: "Security & Input Sanitization", level: "Advanced" },
    ],
  },
];
