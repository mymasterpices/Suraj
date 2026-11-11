export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  affiliation?: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "rk-jewellers-2024",
    role: "Sr. Web Developer",
    company: "RK Jewellers",
    affiliation: "on behalf of Kaka Overseas Limited",
    period: "Apr 2024 – Present",
    startDate: "2024-04",
    endDate: "Present",
    isCurrent: true,
    location: "New Delhi, India",
    summary:
      "Rejoined in a senior leadership capacity to spearhead development across the enterprise CRM platform and high-traffic luxury e-commerce storefronts.",
    highlights: [
      "Lead development of the internal CRM platform and luxury storefronts (rkjewellers.in, prakshi.com).",
      "Apply Node.js, TypeScript, and modern MEAN stack practices to modernize existing PHP/MySQL legacy infrastructure.",
      "Develop and customize advanced Shopify solutions, including custom storefront themes and bespoke Shopify apps built on Remix.",
      "Pioneer AI agent development to bring intelligent automation into internal workflows, quotation generation, and customer assistance.",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "MEAN Stack",
      "Shopify Liquid",
      "Remix",
      "PHP/MySQL",
      "AI Agents",
    ],
  },
  {
    id: "heureux-software-2022",
    role: "Sr. Web Developer",
    company: "Heureux Software Solutions Pvt. Ltd.",
    period: "Jul 2022 – Jan 2024",
    startDate: "2022-07",
    endDate: "2024-01",
    location: "New Delhi, India",
    summary:
      "Architected dynamic, client-facing web applications, custom CMS solutions, and modernized platforms using full-stack JavaScript.",
    highlights: [
      "Engineered dynamic, mobile-first responsive web applications with HTML5, CSS3, JavaScript, jQuery, PHP, and MySQL.",
      "Architected and customized WordPress themes and Shopify solutions (Liquid + Remix custom apps) for diverse international and domestic clients.",
      "Expanded engineering stack into Node.js, Express.js, MongoDB, and Angular (MEAN) to deliver scalable full-stack applications.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Angular",
      "WordPress",
      "Shopify",
      "Remix",
      "PHP",
    ],
  },
  {
    id: "rk-jewellers-2020",
    role: "Sr. Web Developer",
    company: "RK Jewellers",
    affiliation: "on behalf of Kaka Overseas Limited",
    period: "Jul 2020 – Jun 2022",
    startDate: "2020-07",
    endDate: "2022-06",
    location: "New Delhi, India",
    summary:
      "Managed business-critical operations including internal CRM systems and the brand's flagship e-commerce presence.",
    highlights: [
      "Maintained and enhanced the internal PHP/MySQL CRM platform supporting mission-critical enterprise operations and inventory tracking.",
      "Built, maintained, and optimized the flagship e-commerce storefront (rkjewellers.in), focusing on high availability and conversion rates.",
      "Delivered bespoke front-end features, interactive product configurators, and seamless responsive layouts with HTML5, CSS3, and jQuery.",
    ],
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "jQuery",
      "HTML5/CSS3",
      "E-commerce",
      "CRM Architecture",
    ],
  },
  {
    id: "matrix-web-studio-2018",
    role: "Jr. WordPress / HTML Developer",
    company: "Matrix Web Studio",
    period: "Dec 2018 – Apr 2020",
    startDate: "2018-12",
    endDate: "2020-04",
    location: "New Delhi, India",
    summary:
      "Kicked off professional development career delivering rapid turnaround client sites and earning peer recognitions.",
    highlights: [
      "Developed client-facing WordPress websites and responsive HTML web templates within an agile front-end engineering team.",
      "Recognized by leadership with the prestigious 'Client Comforter Award' for exceptional customer empathy and satisfaction.",
      "Honored with the 'Mr. Regular Award' in recognition of outstanding dependability, punctuality, and work ethic.",
    ],
    technologies: ["WordPress", "HTML5", "CSS3", "JavaScript", "UI Slicing"],
  },
  {
    id: "consurgys-media-2018",
    role: "WordPress Designer / HTML Developer",
    company: "Consurgys Media",
    period: "Jun 2018 – Nov 2018",
    startDate: "2018-06",
    endDate: "2018-11",
    location: "New Delhi, India",
    summary:
      "Designed and coded high-converting WordPress websites, client blogs, and e-commerce portals for agency clients.",
    highlights: [
      "Designed and developed custom WordPress business, blogging, and e-commerce websites for multiple diverse clients.",
      "Hand-crafted pixel-perfect HTML/CSS layouts from design briefs and integrated them into modular WordPress themes.",
      "Ensured rigorous cross-browser compatibility and responsive performance across mobile and desktop devices.",
    ],
    technologies: [
      "WordPress",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "WooCommerce",
    ],
  },
];
