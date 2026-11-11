module.exports = [
"[project]/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/personal.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name} | ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].title} (8.5+ Yrs Exp)`,
    description: 'Full Stack Web Developer with 8.5+ years of experience in Node.js, TypeScript, MEAN stack, Shopify (Remix), WordPress, and AI agent integration. Delivered 30+ production websites.',
    keywords: [
        'Suraj Sharma',
        'Full Stack Developer',
        'MEAN Stack Developer',
        'Node.js Developer',
        'Angular Developer',
        'Shopify Developer',
        'Remix Apps',
        'WordPress Developer',
        'AI Agent Developer',
        'Web Developer New Delhi',
        'E-commerce Developer India'
    ],
    authors: [
        {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name,
            url: 'https://surajsharma.dev'
        }
    ],
    creator: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name,
    metadataBase: new URL('https://surajsharma.dev'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        type: 'profile',
        firstName: 'Suraj',
        lastName: 'Sharma',
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name} - ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].title}`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].headline,
        url: 'https://surajsharma.dev',
        siteName: 'Suraj Sharma Portfolio',
        locale: 'en_US',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name} - Full Stack Developer`
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: `${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name} | ${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].title}`,
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].headline,
        creator: '@surajsharma'
    },
    icons: {
        icon: '/favicon.svg',
        shortcut: '/favicon.svg',
        apple: '/favicon.svg'
    }
};
function RootLayout({ children }) {
    // Structured JSON-LD schema for Person & Developer
    const personJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].name,
        jobTitle: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].title,
        telephone: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].phone,
        email: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'New Delhi',
            addressCountry: 'IN'
        },
        description: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].summary,
        url: 'https://surajsharma.dev',
        sameAs: [
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].linkedin,
            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$personal$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["personalInfo"].github,
            'https://crm.jools.in'
        ],
        knowsAbout: [
            'Full Stack Development',
            'MEAN Stack',
            'Node.js',
            'Express.js',
            'Angular',
            'MongoDB',
            'TypeScript',
            'Shopify Liquid & Remix',
            'WordPress & WooCommerce',
            'AI Agent Automation'
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        className: "dark scroll-smooth",
        suppressHydrationWarning: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: {
                            __html: JSON.stringify(personJsonLd)
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                        dangerouslySetInnerHTML: {
                            __html: `
              (function() {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/layout.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "bg-slate-50 text-slate-900 dark:bg-[#080c14] dark:text-slate-100 antialiased selection:bg-blue-600 selection:text-white",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/layout.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/layout.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/data/personal.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "personalInfo",
    ()=>personalInfo
]);
const personalInfo = {
    name: "Suraj Sharma",
    firstName: "Suraj",
    title: "Full Stack / MEAN Stack Developer",
    headline: "Crafting scalable web apps, high-converting e-commerce, and modern automation tools with 8.5+ years of production experience.",
    location: "New Delhi, India",
    phone: "+91-9205532748",
    phoneRaw: "+919205532748",
    email: "sooraj.sharma222@gmail.com",
    linkedin: "https://www.linkedin.com/in/suraj-sharma-076588178/",
    github: "https://github.com/mymasterpices",
    experienceYears: "8.5+",
    summary: "Full Stack Web Developer with 8.5+ years of experience designing, building and maintaining dynamic web applications and e-commerce platforms. Strong front-end foundation in HTML5, CSS3, JavaScript, jQuery and Bootstrap, with robust full-stack capability in Node.js, TypeScript and the MEAN stack. Delivered 30+ production websites across WordPress, custom PHP/MySQL systems and Shopify (theme customization and custom app development on Remix). Currently expanding into AI agent development to build intelligent, automation-driven web applications.",
    typingRoles: [
        "Full Stack Developer",
        "MEAN Stack Developer",
        "Shopify & WordPress Expert",
        "AI Agent Explorer"
    ],
    stats: [
        {
            label: "Experience",
            value: "8.5+",
            description: "Years engineering dynamic web apps & e-commerce"
        },
        {
            label: "Projects Delivered",
            value: "30+",
            description: "Live production websites & custom platforms"
        },
        {
            label: "Core Ecosystems",
            value: "3",
            description: "MEAN Stack, Shopify (Remix), WordPress"
        },
        {
            label: "Client Awards",
            value: "2",
            description: "Client Comforter & Mr. Regular recognitions"
        }
    ],
    socials: [
        {
            name: "GitHub",
            url: "https://github.com/mymasterpices",
            icon: "Github",
            ariaLabel: "View Suraj Sharma on GitHub"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/suraj-sharma-076588178/",
            icon: "Linkedin",
            ariaLabel: "Connect with Suraj Sharma on LinkedIn"
        },
        {
            name: "Email",
            url: "mailto:sooraj.sharma222@gmail.com",
            icon: "Mail",
            ariaLabel: "Send email to Suraj Sharma"
        },
        {
            name: "Phone",
            url: "tel:+919205532748",
            icon: "Phone",
            ariaLabel: "Call Suraj Sharma"
        }
    ]
};
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_1ai2_cx._.js.map