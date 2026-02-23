// src/data/constants.js
// Content + links for Serhii Opanasenko
// Tech icons are served from /public/tech/*.svg (see patch pack)


// === BIO / LINKS ===
export const Bio = {
  name: "Serhii Opanasenko",
  roles: [
    "Mobile App Developer",
    "FullStack Developer",
    "DevOps Engineer",
    "Vibe Coder",
  ],
  description:
    "Mobile + Full‑Stack developer from Kyiv, Ukraine. I build production‑ready apps and systems: OSINT analytics platforms, modern web apps, Telegram mini apps, and Flutter mobile products. Strong focus on clean architecture, performance, and shipping end‑to‑end (from code → infra → deploy).",
  github: "https://github.com/23Serhii",
  linkedin: "https://www.linkedin.com/in/serhii-opanasenko-8a6394329/",
  email: "opanasenkoserhii@gmail.com",
  telegram: "@c3rh11",
  location: "Ukraine, Kyiv",
  resume: "/resume/Serhii_Opanasenko_Resume.pdf",
};

// helper for tech icons
// === SKILLS ===
export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "TypeScript", icon: "devicon-typescript-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "SQL", icon: "devicon-postgresql-plain colored" }, // devicon не має “sql” іконки — ставимо DB-символ
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Vite", icon: "devicon-vitejs-plain colored" },
      { name: "Next.js", icon: "devicon-nextjs-original" }, // без colored виглядає краще на темному
      { name: "Angular", icon: "devicon-angularjs-plain colored" },
      { name: "Three.js", icon: "devicon-threejs-original" },
      { name: "Leaflet / Maps", svg: "/tech/leaflet.svg" },
      { name: "Redux Toolkit", icon: "devicon-redux-original colored" },
      { name: "React Query", icon: "devicon-react-original colored" }, // у devicon нема окремої, ставимо React як асоціацію
      { name: "MUI", icon: "devicon-materialui-plain colored" },
      { name: "Framer Motion", icon: "devicon-react-original colored" }, // fallback
      { name: "GSAP", icon: "devicon-javascript-plain colored" }, // fallback
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
      { name: "Riverpod", icon: "devicon-dart-plain colored" }, // fallback
      { name: "GoRouter", icon: "devicon-dart-plain colored" }, // fallback
      { name: "Clean Architecture", icon: "devicon-android-plain colored" }, // fallback
      { name: "Android / iOS", icon: "devicon-android-plain colored" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "NestJS", icon: "devicon-nestjs-plain colored" },
      { name: "Express", icon: "devicon-express-original" },
      { name: "FastAPI", icon: "devicon-fastapi-plain" },
      { name: "REST API", icon: "devicon-nodejs-plain colored" }, // fallback
      { name: "gRPC", icon: "devicon-go-plain colored" }, // fallback
      { name: "Telegram API / Mini Apps", svg: "https://cdn.jsdelivr.net/npm/simple-icons@14.11.0/icons/telegram.svg" },    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "PostGIS", icon: "devicon-postgresql-plain colored" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" },
      { name: "MySQL Server", icon: "devicon-mysql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Qdrant (Vector DB)", svg: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/qdrant.svg" }, // fallback (або python)
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain colored" },
      { name: "Terraform", icon: "devicon-terraform-plain colored" },
      { name: "Vagrant", icon: "devicon-vagrant-plain colored" },
      { name: "Ansible", icon: "devicon-ansible-plain colored" },
      { name: "Jenkins", icon: "devicon-jenkins-line colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "CI/CD", icon: "devicon-githubactions-plain colored" },
    ],
  },
  {
    title: "AI / Automation",
    skills: [
      { name: "LLM Integration", svg: "https://unpkg.com/@lobehub/icons-static-svg@1.78.0/icons/openai.svg" },
      { name: "Ollama", svg: "https://unpkg.com/@lobehub/icons-static-svg@1.78.0/icons/ollama.svg" },
      { name: "Dify", svg: "/tech/dify.svg" },
      { name: "n8n", svg: "/tech/n8n.svg" },
      { name: "Vector Search / RAG", svg: "/tech/rag.svg" },
    ],
  },
];
// === EXPERIENCE ===
export const experiences = [
  {
    id: 0,
    img: "/experience/ox.png",
    role: "Web Developer",
    company: "OX Company",
    date: "February 2023 — February 2024",
    desc: "Managed Firebase infrastructure including authentication, Firestore database operations, and cloud functions. Developed and maintained React.js web applications and Python-based Telegram bots with focus on API integrations and automation workflows.",
    skills: [
      "React.js",
      "Firebase",
      "Firestore",
      "Python",
      "Telegram Bot API",
      "REST API",
      "Cloud Functions"
    ],
  },
  {
    id: 1,
    img: "/experience/lvl99.png",
    role: "Flutter Developer",
    company: "Level99 Company",
    date: "February 2024 — November 2025",
    desc: "Developed cross-platform mobile games using Flutter and Dart. Implemented game logic, UI/UX systems, animations, and internal service integrations. Focused on performance optimization and building scalable interactive mobile applications.",
    skills: [
      "Flutter",
      "Dart",
      "Game Logic",
      "Animations",
      "UI/UX",
      "State Management",
      "Performance Optimization"
    ],
  },
  {
    id: 2,
    img: "/experience/institute.png",
    role: "Full Stack Developer",
    company: "MITIT (Bachelor Project)",
    date: "February 2024 — June 2024",
    desc: "Developed the POW Search Subsystem — a MERN-stack web application for tracking and identifying prisoners of war. Implemented secure authentication, search request modules, admin panel, and MongoDB database architecture. Designed scalable backend APIs and ensured system usability.",
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "JWT",
      "Passport",
      "Admin Panel",
      "Full Stack Development"
    ],
  },
  {
    id: 3,
    img: "/experience/avesint.svg",
    role: "Full Stack / AI Systems Developer",
    company: "AVESINT.AI",
    date: "September 2025 — December 2025",
    desc: "Designed and developed AVESINT.AI — a military-oriented OSINT analytics platform for real-time event monitoring, verification, and AI-assisted classification. Built scalable backend architecture using NestJS and PostgreSQL, integrated Qdrant vector database for semantic search, and implemented LLM-based processing with Ollama. Developed interactive React frontend with map-based visualization (Leaflet) and containerized infrastructure with Docker.",
    skills: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Qdrant",
      "Ollama",
      "React",
      "Leaflet",
      "Docker",
      "Vector Search",
      "AI Integration"
    ],
    github: "https://github.com/23Serhii/avesint-platform"
  },
];

// === EDUCATION ===
export const education = [
  {
    id: 0,
    img: "/education/school.png",
    school: "Secondary School",
    date: "2009 — 2020",
    degree: "General Secondary Education",
    level: "school",
    desc: "Completed 11 grades of secondary education. Early interest in programming and technology. Experimented with Lua scripting for SA:MP, explored basic software concepts, developed communication and teamwork skills. Also engaged in music and creative activities.",
    highlights: [],
    badges: [],
  },
  {
    id: 1,
    img: "/education/institute.png",
    school: "Military Institute of Telecommunications and Information Technologies",
    date: "2020 — 2024",
    degree: "Bachelor’s Degree",
    desc: "Bachelor’s studies focused on information technologies and cybersecurity. Participated in the International Conference on Cyber Security Infrastructure Management. Served as a military translator during an official assignment to the United Kingdom (October 2022 — December 2022).",
  },
  {
    id: 2,
    img: "/education/institute.png",
    school: "Military Institute of Telecommunications and Information Technologies",
    date: "2024 — 2025",
    degree: "Master’s Degree",
    desc: "Master’s degree studies with a focus on advanced information systems, cybersecurity, and applied technologies. Continued professional and academic development in parallel with practical projects.",
  },
];

// === PROJECTS ===
export const projects = [
  {
    id: 0,
    title: "AVESINT.AI",
    subtitle: "Military OSINT Platform (Real-Time Analytics)",
    date: "Sep 2025 — Dec 2025",
    description:
        "OSINT platform for real-time event monitoring, verification, and AI-assisted classification.",
    fullDescription:
        "AVESINT.AI is a military-oriented OSINT analytics platform built as a monorepo with a React SPA client, a NestJS API backend, and an asynchronous worker for background tasks. It provides an event feed (including AI-stream), map-based exploration, verification workflows, analytics dashboards, role-based access control, and real-time updates via WebSockets. The system is designed for scalable ingestion/processing and fast investigation workflows.",
    video: "/projects/avesint.mp4",
    poster: "/projects/avesint-preview.png",
    tags: ["NestJS","TypeScript","PostgreSQL","Qdrant","Ollama","React","Leaflet","Docker","pnpm"],
    category: "web app",
    github: "https://github.com/23Serhii/avesint-platform",
    webapp: "",
    features: [
      { title: "Event Feed + AI Stream", description: "Aggregated OSINT/News items with filtering by time/type/status/source." },
      { title: "Interactive Map", description: "Geo-visualization with side panel navigation and item details." },
      { title: "Verification Workflow", description: "Confirm/deny flows with statuses and audit-friendly changes." },
      { title: "Analytics Dashboard", description: "Charts and distributions to observe trends across events." },
      { title: "Auth & Roles", description: "JWT auth with protected routes and role guards." },
      { title: "Realtime Updates", description: "Instant updates using Socket.IO WebSockets." },
      { title: "Background Worker", description: "Separate worker service for async parsing/OSINT tasks and queues." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["React 19", "Vite 7", "TypeScript", "Tailwind CSS", "shadcn/ui"] },
      { category: "Backend API", technologies: ["NestJS 11", "TypeORM", "PostgreSQL", "Socket.IO", "class-validator"] },
      { category: "Worker", technologies: ["Node.js", "TypeScript", "Background jobs / parsing"] },
      { category: "Infra", technologies: ["Docker Compose", "PostgreSQL"] },
    ],
    challenges: [
      "Designing a modular architecture (client + API + worker) for long-term scaling.",
      "Keeping real-time UX smooth with WebSocket updates and filterable event feeds.",
      "Building verification/status flows that are clear and auditable.",
    ],
    outcomes: [
      "Delivered an end-to-end OSINT analytics platform with realtime feed + map + dashboard.",
      "Implemented role-protected flows and realtime event updates via Socket.IO.",
      "Established a monorepo structure that supports future ingestion pipelines and AI processing.",
    ],
    featured: true,
    metrics: [
      { label: "Services", value: 3, suffix: "" },
      { label: "Realtime", value: 1, suffix: " WebSocket" },
      { label: "Databases", value: 2, suffix: " (SQL+Vector)" },
      { label: "Core Modules", value: 8, suffix: "+" },
    ],
    architecture: {
      nodes: [
        { title: "React Client", desc: "SPA (Vite) · UI · Map · Dashboards" },
        { title: "NestJS API", desc: "REST · Auth · RBAC · Validation" },
        { title: "Worker", desc: "Async jobs · Parsing · Enrichment" },
        { title: "PostgreSQL", desc: "Events · Users · Roles · Audit" },
        { title: "Qdrant", desc: "Vector search · Similarity · RAG" },
        { title: "Ollama", desc: "LLM classification · NLP" },
        { title: "WebSocket", desc: "Realtime updates (Socket.IO)" },
        { title: "Docker", desc: "Compose · Local prod-like infra" },
      ],
      flows: [
        "Ingestion → Worker enrichment → DB storage",
        "Client ↔ API (REST) for CRUD & filtering",
        "Client ↔ API (WebSocket) for realtime feed updates",
        "Semantic search via Qdrant for similarity/RAG workflows",
      ],
    }
  },
  {
    id: 1,
    title: "IThingy Labs",
    subtitle: "Full-Stack Startup Platform",
    date: "2025",
    description:
        "Production-ready startup website with full backend API, secure authentication, and scalable deployment.",
    fullDescription:
        "IThingy Labs is a full-stack startup platform built with a React frontend and a Node.js backend. The system includes dynamic content management, authentication flows, REST API integration, and a production-ready deployment pipeline. The platform is structured for scalability and fast iteration, serving as a base for startup operations and service presentation.",
    video: "/projects/IThingyLabs.mp4",
    tags: ["React","TypeScript","Node.js","REST API","JWT","PostgreSQL","Vercel","Docker"],
    category: "web app",
    github: "https://github.com/23Serhii/IThingy-Labs",
    webapp: "https://www.ithingy.dev/",
    features: [
      {
        title: "Authentication & Authorization",
        description:
            "Secure JWT-based authentication system with protected routes and user session management."
      },
      {
        title: "RESTful API Layer",
        description:
            "Structured backend API with modular controllers and scalable service architecture."
      },
      {
        title: "Dynamic Content Rendering",
        description:
            "Reusable UI components and dynamic content blocks for rapid feature deployment."
      },
      {
        title: "Deployment Pipeline",
        description:
            "Live deployment on Vercel with version control and continuous delivery workflow."
      }
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "TypeScript", "Component Architecture"] },
      { category: "Backend", technologies: ["Node.js", "Express/Nest structure", "JWT"] },
      { category: "Database", technologies: ["PostgreSQL"] },
      { category: "Infrastructure", technologies: ["Vercel", "Docker"] }
    ],
    challenges: [
      "Designing a scalable architecture suitable for future startup expansion.",
      "Balancing SEO, performance, and modern UI patterns.",
      "Structuring backend modules for maintainability and growth."
    ],
    outcomes: [
      "Delivered a production-ready full-stack startup platform.",
      "Implemented scalable authentication and modular API architecture.",
      "Established a foundation for future SaaS expansion."
    ]
  },
  {
    id: 2,
    title: "Dropsquad",
    subtitle: "Ukrainian Crypto Community & Course Platform",
    date: "2025",
    description:
        "Crypto community platform with gated content, payments, authentication, and Kubernetes-based deployment.",
    fullDescription:
        "Dropsquad is a full-scale crypto community platform built with Angular and FastAPI. The system includes course access control, subscription/payment logic, JWT authentication, optional 2FA security layer, and PostgreSQL-based persistence. Deployed in containerized infrastructure using Docker and Kubernetes for reliability and scalability.",
    video: "/projects/dropsquad.mp4",
    poster: "/projects/dropsquad-preview.png",
    tags: ["Angular","FastAPI","PostgreSQL","JWT","2FA","Kubernetes","Docker"],
    category: "web app",
    github: "",
    webapp: "",
    features: [
      {
        title: "Secure Authentication",
        description:
            "JWT-based auth with optional two-factor authentication for enhanced account security."
      },
      {
        title: "Course & Content Gating",
        description:
            "Role-based access control system for paid courses and restricted community materials."
      },
      {
        title: "Payment Integration",
        description:
            "Subscription/payment flow enabling controlled access to premium content."
      },
      {
        title: "Admin Management Panel",
        description:
            "Administrative interface for managing users, roles, and content."
      },
      {
        title: "Scalable Deployment",
        description:
            "Containerized services deployed via Kubernetes for horizontal scaling and resilience."
      }
    ],
    techStack: [
      { category: "Frontend", technologies: ["Angular", "TypeScript"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "REST API"] },
      { category: "Database", technologies: ["PostgreSQL"] },
      { category: "Security", technologies: ["JWT", "2FA", "Role-based Access"] },
      { category: "Infrastructure", technologies: ["Docker", "Kubernetes"] }
    ],
    challenges: [
      "Implementing secure content gating logic with subscription flows.",
      "Designing a stable JWT lifecycle with optional 2FA integration.",
      "Ensuring Kubernetes services remain stateless and scalable."
    ],
    outcomes: [
      "Delivered a secure crypto education/community platform.",
      "Implemented robust auth and gated content system.",
      "Built scalable infrastructure ready for production load."
    ],
    metrics: [
      { label: "Auth", value: 2, suffix: " (JWT+2FA)" },
      { label: "Deploy", value: 1, suffix: " Kubernetes" },
      { label: "DB", value: 1, suffix: " PostgreSQL" },
      { label: "Modules", value: 6, suffix: "+" },
    ],
  },
  {
    id: 3,
    title: "Tonsai Web App",
    subtitle: "Telegram Mini App + Web3 + Payment Integration",
    date: "2025",
    description:
        "Telegram mini app with Web3 integrations, secure authentication, payments, and interactive 3D UI.",
    fullDescription:
        "Tonsai is a Telegram Mini App built with React and modern state management, integrating Web3 logic and payment workflows. The platform supports secure authentication, smart contract interactions, real-time updates, and animated 3D UI elements. Designed to provide a seamless blockchain-integrated user experience inside Telegram.",
    image: "/projects/tonsai.gif",
    poster: "/projects/tonsai-preview.png",
    tags: ["React","TypeScript","Telegram Mini Apps","Web3","TON","Redux Toolkit","Three.js","GSAP","Payments"],
    category: "web app",
    github: "https://github.com/23Serhii/front-end-tg-game",
    webapp: "",
    features: [
      {
        title: "Telegram Mini App Integration",
        description:
            "Deep integration with Telegram SDK for authentication and in-app interactions."
      },
      {
        title: "Web3 & Blockchain Logic",
        description:
            "Integration with TON/Web3 libraries for wallet interactions and blockchain communication."
      },
      {
        title: "Payment Processing",
        description:
            "Secure payment flows enabling in-app transactions and premium feature access."
      },
      {
        title: "3D & Animated UI",
        description:
            "Interactive UI using Three.js and GSAP/Framer Motion animations."
      },
      {
        title: "State Management",
        description:
            "Robust client-side architecture using Redux Toolkit and React Query."
      }
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "TypeScript", "Redux Toolkit", "React Query"] },
      { category: "Web3", technologies: ["TON", "ethers.js", "Wallet Integration"] },
      { category: "UI", technologies: ["Three.js", "GSAP", "Framer Motion"] },
      { category: "Auth & Payments", technologies: ["Telegram SDK", "Payment APIs"] }
    ],
    challenges: [
      "Handling secure wallet integration within Telegram environment.",
      "Managing async blockchain interactions and UI state synchronization.",
      "Optimizing animations without degrading performance."
    ],
    outcomes: [
      "Delivered a fully functional Telegram Web3 application.",
      "Implemented blockchain wallet flows and payment logic.",
      "Created high-performance animated UI with real-time interaction."
    ],
    metrics: [
      { label: "Web3", value: 1, suffix: " TON" },
      { label: "Payments", value: 1, suffix: " flow" },
      { label: "UI", value: 3, suffix: "D/Anim" },
      { label: "SDK", value: 1, suffix: " Telegram" },
    ],
  },
  {
    id: 4,
    title: "Shop App",
    subtitle: "Flutter E-commerce Demo (Clean UI + Cart + Favorites)",
    date: "2025",
    description:
        "Lightweight shopping demo built with Flutter: catalog, details, favorites and cart with clean navigation.",
    fullDescription:
        "Shop Test is a lightweight e-commerce demo that demonstrates clean UI structure, predictable navigation, and a maintainable feature-based architecture. The app includes a product catalog, product details, favorites, and a cart experience with quantity control and totals. It’s designed as a solid base for a coding test or as a starter template for a real mobile shop.",
    image: "/projects/shop-preview.png",
    tags: ["Flutter","Dart","Clean Architecture","Riverpod","GoRouter","Freezed","REST"],
    category: "mobile app",
    github: "https://github.com/23Serhii/shop-test-flutter",
    webapp: "",
    features: [
      { title: "Product Catalog", description: "Grid/list catalog with images, prices, and quick actions." },
      { title: "Product Details", description: "Details screen with description + add to cart / favorites actions." },
      { title: "Favorites", description: "Shortlist system for liked items." },
      { title: "Cart", description: "Add/remove items, adjust quantities, and view totals." },
      { title: "Bottom Navigation", description: "Fast switching between main app sections." },
      { title: "Consistent Navigation", description: "Tapping any item opens the Details screen reliably." },
    ],
    techStack: [
      { category: "Mobile", technologies: ["Flutter (3.x)", "Dart (3.x)"] },
      { category: "Platforms", technologies: ["Android", "iOS", "Web", "Desktop targets"] },
      { category: "Architecture", technologies: ["Feature-based structure", "Reusable UI components"] },
    ],
    challenges: [
      "Keeping state predictable across catalog → details → favorites → cart flows.",
      "Building reusable UI that stays consistent across screens and navigation paths.",
      "Designing a clean structure that can later be connected to a real backend/API.",
    ],
    outcomes: [
      "Delivered a clean, test-friendly e-commerce template with core shopping flows.",
      "Demonstrated maintainable project organization and navigation patterns.",
    ],
    metrics: [
      { label: "Platforms", value: 2, suffix: " (iOS/Android)" },
      { label: "Architecture", value: 1, suffix: " Clean" },
      { label: "State", value: 1, suffix: " Riverpod" },
      { label: "Core Screens", value: 5, suffix: "+" },
    ],
  },
  {
    id: 5,
    title: "POW Search Subsystem",
    subtitle: "MERN Search & Identification System",
    date: "2024",
    description:
        "MERN subsystem for tracking and identifying POW-related records with user auth, admin panel, and MongoDB-powered search.",
    fullDescription:
        "POW Search Subsystem is a web system designed to help families and authorized users submit search requests and identify prisoners of war. The platform provides a structured intake form, personal user cabinet, and an administrative workflow for processing requests. It focuses on usability, secure access, and fast retrieval of relevant information through a MongoDB-backed search layer.",
    image: "/projects/svitanok-preview.png",
    tags: ["MongoDB","Express","React","Node.js","JWT","Passport","Socket.io"],
    category: "web app",
    github: "https://github.com/23Serhii/POW-Search-Subsystem",
    webapp: "",
    features: [
      {
        title: "Registration & Authentication",
        description:
            "User registration/login flow with identity data capture and secure access controls to protect sensitive requests.",
      },
      {
        title: "Personal Cabinet",
        description:
            "Profile management, password change, and a dedicated area to track and manage submitted search requests.",
      },
      {
        title: "POW Search Request Form",
        description:
            "A structured form to submit personal data, contact details, and relationship info for a search request.",
      },
      {
        title: "Admin Panel Workflow",
        description:
            "Admin dashboard to review requests, inspect details, and manage user/request lifecycle.",
      },
      {
        title: "Search & Identification Layer",
        description:
            "Fast lookup of records based on submitted parameters, optimized for accuracy and quick navigation through results.",
      },
      {
        title: "Mobile-Responsive UI",
        description:
            "Adaptive layout for phones/tablets so users can access the full flow from any device.",
      },
    ],
    techStack: [
      { category: "Frontend", technologies: ["React", "React Router", "Redux/Thunk (if used)", "Responsive UI"] },
      { category: "Backend", technologies: ["Node.js", "Express", "REST API"] },
      { category: "Auth", technologies: ["JWT", "Passport (OAuth strategies if enabled)"] },
      { category: "Database", technologies: ["MongoDB", "Mongoose"] },
      { category: "Realtime / Infra", technologies: ["Socket.io", "Docker Compose"] },
    ],
    challenges: [
      "Designing a clear request flow that collects enough data without overwhelming the user.",
      "Separating user and admin permissions securely (auth + role-based access patterns).",
      "Structuring MongoDB collections for searchability and future scaling.",
      "Keeping the UI mobile-friendly while preserving an admin-grade interface.",
    ],
    outcomes: [
      "Delivered a complete end-to-end MERN product: auth → requests → admin processing → search.",
      "Built a scalable foundation that can be extended with richer search strategies and verification workflows.",
      "Implemented a user-friendly interface to reduce friction for non-technical users.",
    ],
    metrics: [
      { label: "Roles", value: 2, suffix: " (User/Admin)" },
      { label: "Auth", value: 1, suffix: " JWT" },
      { label: "DB", value: 1, suffix: " MongoDB" },
      { label: "Modules", value: 5, suffix: "+" },
    ],
  }
];