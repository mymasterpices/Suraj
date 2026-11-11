export interface ServiceItem {
  id: string;
  title: string;
  shortTag: string;
  description: string;
  iconName: string;
  gradient: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: "custom-web-apps",
    title: "Custom Web App Development",
    shortTag: "Full Stack / MEAN",
    description: "End-to-end web applications built with modern JavaScript/TypeScript, Node.js, Express, and Angular/React. Scalable APIs, real-time sync, and rock-solid database architectures.",
    iconName: "Code2",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Modular REST APIs & microservices",
      "Angular & React dynamic Single Page Apps",
      "MongoDB & MySQL data modeling & migration",
      "Secure authentication & RBAC authorization",
    ],
  },
  {
    id: "shopify-remix",
    title: "Shopify Theme & Custom Remix Apps",
    shortTag: "Shopify / Liquid / Remix",
    description: "Bespoke Shopify storefronts coded in Liquid paired with custom embedded Shopify apps engineered on Remix to unlock custom business logic, private APIs, and checkout extensions.",
    iconName: "ShoppingBag",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "Custom Shopify Liquid theme architecture",
      "Embedded Shopify App development with Remix",
      "Shopify GraphQL & Admin API integrations",
      "Conversion rate & mobile speed optimization",
    ],
  },
  {
    id: "wordpress-dev",
    title: "WordPress Theme & Plugin Development",
    shortTag: "WordPress / PHP / WooCommerce",
    description: "Tailored WordPress ecosystems built from scratch without bloated templates. Clean PHP, custom post types, bespoke plugins, and tailored WooCommerce checkout funnels.",
    iconName: "Globe",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Bespoke lightweight theme development",
      "Custom plugin creation for client workflows",
      "WooCommerce store customization & payment gateways",
      "Strict security, caching & speed hardening",
    ],
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Stores & Marketplaces",
    shortTag: "Multi-Platform E-Com",
    description: "High-converting online shopping platforms engineered for seamless customer journeys, fluid product filtering, international currencies, and lightning-fast transactions.",
    iconName: "CreditCard",
    gradient: "from-amber-500 to-orange-600",
    features: [
      "Mobile-first responsive storefront UI",
      "Payment gateway integration (Stripe, Razorpay, etc.)",
      "Automated stock sync & order fulfillment tracking",
      "SEO, schema markup & Google Merchant readiness",
    ],
  },
  {
    id: "crm-automation",
    title: "CRM & Business Automation Tools",
    shortTag: "Enterprise Automation",
    description: "Internal business systems, dynamic quotation generators, client record management, and secure private cloud repositories tailored to your operational workflows.",
    iconName: "Cpu",
    gradient: "from-purple-500 to-indigo-600",
    features: [
      "Custom CRM platform architecture & maintenance",
      "Automated PDF quotation & invoice generation",
      "Internal file-sharing & team drive solutions",
      "Legacy system modernization (PHP to Node/TypeScript)",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agent Integration & Intelligent Workflows",
    shortTag: "Emerging AI Tech",
    description: "Empower your web applications with autonomous AI agents and LLM-driven automation. Streamline customer inquiries, automated document summaries, and internal business intelligence.",
    iconName: "Bot",
    gradient: "from-fuchsia-500 to-pink-600",
    features: [
      "LLM & AI API integrations (OpenAI, Gemini, Claude)",
      "Intelligent customer query automation",
      "AI-assisted internal workflow tooling",
      "Context-aware data extraction & processing",
    ],
  },
];
