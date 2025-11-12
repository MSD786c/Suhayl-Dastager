export const personalInfo = {
  name: "Suhayl Dastager",
  preferredName: "Suhayl",
  title: "Data Science & AI Consultant • Analytics, Strategy & Automation",
  headline: "Turning complex data into intelligent systems that think, automate, and deliver impact.",
  email: "dastagersuhayl@gmail.com",
  linkedin: "https://www.linkedin.com/in/suhayl-dastager/",
  github: "https://github.com/MSD786c",
  profileImage: "/linkedin-profile.jpg",
  location: "Dubai, United Arab Emirates",
  resume: "/Suhayl_Dastager_Resume.pdf"
};

export const aboutMe = `I'm an analytical AI graduate who bridges business strategy and technical execution. I thrive on turning ambiguity into structure by scoping data problems, designing measurable experiments, and deploying automation, models, and dashboards that empower leaders to act with clarity. Whether it's architecting analytics stacks, advising on AI onboarding flows, or coaching teams on KPI storytelling, I combine a consultant's mindset with an engineer's toolkit (Python, SQL, React/Next.js, Flask, Supabase, Power BI, GPT-4, Gemini) to move ideas from whiteboard to adoption fast. My work centers on data science, AI consulting, data automation, and strategy-driven analytics where insight meets impact.`;

export const skills = {
  "Data Science & Analytics": [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "scikit-learn",
    "TensorFlow",
    "XGBoost",
    "LSTM Forecasting",
    "Experiment Design",
    "Cohort & Funnel Analysis"
  ],
  "Data Engineering & Automation": [
    "Flask",
    "FastAPI",
    "Supabase",
    "Firebase",
    "REST APIs",
    "ETL & Orchestration",
    "CI/CD",
    "Docker",
    "n8n",
    "Twilio",
    "Zoho CRM"
  ],
  "Business Intelligence & Storytelling": [
    "Power BI",
    "Tableau",
    "Advanced Excel",
    "Matplotlib",
    "Seaborn",
    "Executive Dashboards",
    "Data Visualization",
    "Narrative Design"
  ],
  "Programming & Product Engineering": [
    "JavaScript (React, Next.js)",
    "TypeScript",
    "Java",
    "Dart (Flutter)",
    "HTML/CSS",
    "Git/GitLab",
    "Test Automation"
  ],
  "Cloud & Platforms": [
    "Oracle Cloud Infrastructure",
    "Azure",
    "Supabase",
    "Render",
    "PostgreSQL",
    "GitHub/GitLab CI",
    "Cloud Deployments"
  ],
  "Consulting & Strategy": [
    "Workflow Automation",
    "Process Optimization",
    "Stakeholder Workshops",
    "Consultative Discovery",
    "Roadmapping",
    "Executive Storytelling",
    "Change Enablement"
  ]
};

export const experiences = [
  {
    company: "Halliday Forfaiting Services",
    position: "Data Automation & Analytics Lead",
    duration: "Oct 2024 – Sep 2025",
    location: "Dubai, UAE",
    tag: "Automation Lead",
    description: [
      "Partnered with COO/CFO stakeholders to translate onboarding pain points into a roadmap for AI + automation fixes and measurable KPIs.",
      "Automated Zoho–Twilio reporting via n8n + Flask, reducing turnaround time by 35% and improving cross-team visibility.",
      "Built Document-Flow Automator, an AI onboarding platform that validates and summarizes documentation with GPT, enabling 40% faster QA cycles and 25% less manual work.",
      "Unified financial operations data with REST APIs + PostgreSQL, delivering live dashboards and tighter compliance tracking."
    ],
    metrics: ["35% faster reporting", "40% quicker QA", "25% less manual work"]
  },
  {
    company: "Loop Media",
    position: "Data Insights & Analytics Associate",
    duration: "Jan 2025 – Oct 2025",
    location: "Dubai, UAE",
    tag: "Growth Analytics",
    description: [
      "Advised the marketing leadership pod on experimentation cadence, creative bets, and success metrics across short-form video programs.",
      "Designed cohort trackers and creative testing dashboards that lifted video view rates by 50% and follower growth by 30% across TikTok & Instagram.",
      "Delivered weekly data stories that optimized hooks, pacing, and posting windows—driving an 18% increase in CTR.",
      "Engineered trend-detection pipelines to surface viral opportunities in <24 hours, resulting in seven 1M+ view videos."
    ],
    metrics: ["50% higher views", "30% follower lift", "18% CTR gain"]
  },
  {
    company: "RelphaCare Technologies",
    position: "Marketing Data Intern",
    duration: "Jun 2024 – Sep 2024",
    location: "Dubai, UAE",
    tag: "Growth Experiments",
    description: [
      "Conducted discovery with founders to prioritize analytics asks, then scoped experiment roadmaps aligned to revenue targets.",
      "Designed and ran A/B experiments across paid channels to reduce CPA by 12% and lift impressions 20%.",
      "Automated Excel-based funnel dashboards, shrinking reporting cycles from two days to two hours.",
      "Partnered with marketing & product to convert audience research into actionable launch plans."
    ],
    metrics: ["12% lower CPA", "20% more impressions", "2h reporting cadence"]
  },
  {
    company: "Chicking Global",
    position: "Digital Marketing Specialist",
    duration: "Dec 2022 – Jun 2023",
    location: "Dubai, UAE",
    tag: "Content & GTM",
    description: [
      "Advised franchise leadership on data-informed GTM sprints for new menu launches across the UAE.",
      "Scaled engagement by 40% through consistent content calendars, interactive formats, and real-time community management.",
      "Produced TikTok/IG Reels that boosted brand awareness and repeat impressions across UAE audiences.",
      "Executed targeted ads + influencer partnerships that lifted CTR by 18%."
    ],
    metrics: ["40% engagement lift", "18% CTR gain"]
  }
];

export const projects = [
  {
    name: "Crypto Market Health & Sentiment Command Center",
    description: "Full crypto intelligence workspace combining a concurrent ETL pipeline, ACL-grade audit layer, and Streamlit dashboard so risk and trading teams can see how volatility, liquidity, and sentiment shape investor confidence in real time.",
    technologies: ["Python", "Streamlit", "SQLite", "yfinance", "Alt.me API", "ETL", "Data Quality"],
    impact: "Automates data refresh + governance and ships an executive dashboard that surfaces market health, momentum radar, and audit alerts from a single control room.",
    category: "AI & Automation",
    year: "2025",
    github: "https://github.com/MSD786c/Crypto-Analysis-Dashboard",
    demo: null,
    image: "/project-pictures/Crypto-ETL.png"
  },
  {
    name: "DPH Classifieds – UAE Car Marketplace",
    description: "Built a full-stack UAE car marketplace with dynamic search, automated data sync, and dashboards that monitor funnels, ad performance, and user behavior in real time.",
    technologies: ["React", "Flask", "REST APIs", "Python", "Supabase", "Vercel", "Railway"],
    impact: "Improved inquiry conversion rate by 16% through behavioral analytics optimization and smarter ad targeting.",
    category: "Product & Platforms",
    year: "2025",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/DPH-Classifieds.png"
  },
  {
    name: "Olist E-Commerce Analytics Dashboard | Tableau + Python",
    description: "Designed interactive Tableau dashboards for 100K+ Olist orders (2016–2018) after cleaning/modeling data in Python to surface GMV, AOV, delivery SLAs, payment mix, and review trends.",
    technologies: ["Python", "Pandas", "Google Colab", "Tableau", "Data Visualization"],
    impact: "Enabled exec stakeholders to track sales growth, delivery performance, and payment mix for data-backed decisions.",
    category: "Analytics & BI",
    year: "2025",
    github: "https://github.com/MSD786c/Olist-Ecommerce-Analytics-Dashboard",
    demo: null,
    image: "/project-pictures/Olist-ecom-dash.png"
  },
  {
    name: "📊 Mini Project: Nutrition Analysis",
    description: "Analyzed 551 foods with 35+ nutrients using Python notebooks, highlighting calorie bands, protein density leaders, sugar-heavy outliers, and a nutrient correlation heatmap.",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    impact: "Packaged reproducible EDA that helps nutrition teams pinpoint healthy swaps and identify nutrient-dense categories fast.",
    category: "Analytics & BI",
    year: "2025",
    github: "https://github.com/MSD786c/Mini-Project-Nutrition-Analysis",
    demo: null,
    image: "/project-pictures/Nutrition-EDA.png"
  },
  {
    name: "☕ Coffee Ratings EDA Project",
    description: "Explored the Coffee Quality Institute dataset to benchmark Arabica beans, correlating sensory scores, surfacing top-producing countries, and spotting distribution outliers.",
    technologies: ["Python", "Pandas", "Seaborn", "Matplotlib", "Data Analytics"],
    impact: "Delivered actionable visuals for sourcing teams to align purchasing with aroma, flavor, and acidity preferences.",
    category: "Analytics & BI",
    year: "2025",
    github: "https://github.com/MSD786c/Coffee-Ratings-Mini-Project",
    demo: null,
    image: "/project-pictures/Coffee-EDA.png"
  },
  {
    name: "Workora",
    description: "Built a mobile-first React site with bold hero messaging, industry service tiles, contact + newsletter capture, and live deployment at workora.ae to validate manpower demand.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    impact: "Captured inbound interest for manpower services with production-ready UX and instant credibility.",
    category: "Product & Platforms",
    year: "2025",
    github: "https://github.com/MSD786c",
    demo: "https://www.workora.ae",
    image: "/project-pictures/Workora.png"
  },
  {
    name: "MoneyMentor",
    description: "Cross-platform Flutter + Flask personal finance app combining budgeting, AI literacy content, Gemini 1.5 RAG chat, and TensorFlow/Prophet forecasting with GDPR-compliant Firebase storage.",
    technologies: ["Flutter", "Flask", "Firebase", "Python", "TensorFlow", "Prophet", "Gemini 1.5", "RAG"],
    impact: "Delivered 87%+ accurate predictions and AI guidance so users can automate budgeting with confidence.",
    category: "AI & Automation",
    year: "2025",
    github: "https://github.com/MSD786c/MoneyMentor",
    demo: null,
    image: "/project-pictures/MoneyMentor.png"
  },
  {
    name: "FemmeVenture",
    description: "Women-focused travel platform featuring destination safety indices, solo traveler community tooling, and itinerary helpers to make trips safer and more social.",
    technologies: ["Django REST Framework", "React", "Azure SQL", "GitLab", "AI Services"],
    impact: "Helped solo female travelers evaluate destinations and find trusted companions through built-in safety signals.",
    category: "Product & Platforms",
    year: "2024",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/FemmeVenture.png"
  },
  {
    name: "VirtualED",
    description: "VR-first education platform that lets universities deliver immersive lectures, 3D collaboration, and instructor-led workshops in persistent virtual classrooms.",
    technologies: ["Unity", "VR Development", "Collaboration Tools", "Project Management"],
    impact: "Bridged physical and digital classrooms by boosting engagement and retention for remote learners.",
    category: "Product & Platforms",
    year: "2023",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/Virtual-ED.png"
  },
  {
    name: "Semantic Embedding",
    description: "Built a question-answering system on top of a Distributional Semantic Model (DSM) file, powering semantic retrieval and response ranking.",
    technologies: ["Python", "TensorFlow", "Semantic Search", "Vector Databases"],
    impact: "Enabled high-recall knowledge lookups for academic QA experiments.",
    category: "AI & Automation",
    year: "2022",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/semantic.png"
  },
  {
    name: "Web Stock Predictor",
    description: "Created a web app that ingests Yahoo Finance data, visualizes price trends, and runs ML classifiers/regressors to predict directional movement.",
    technologies: ["Python", "Flask", "TensorFlow", "scikit-learn", "Plotly"],
    impact: "Gave retail traders interpretable charts plus machine learning signals on demand.",
    category: "Analytics & BI",
    year: "2022",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/Web-Stock-Predictor.png"
  },
  {
    name: "Penguin Attribute Analysis",
    description: "Developed scripts that auto-select bar or scatter charts based on dataset schema to highlight feature relationships in penguin studies.",
    technologies: ["Python", "Data Visualization", "Analytics Automation"],
    impact: "Accelerated exploratory workflows by auto-generating the right chart for each attribute pair.",
    category: "Analytics & BI",
    year: "2021",
    github: "https://github.com/MSD786c",
    demo: null,
    image: "/project-pictures/Penguin.png"
  }
];

export const education = [
  {
    degree: "BSc (Hons) Artificial Intelligence & Computer Science",
    institution: "University of Birmingham Dubai",
    duration: "Sep 2021 – Jul 2025",
    major: "Artificial Intelligence",
    status: "Completed",
    highlights: ["Chancellor's Academic Merit Scholarship", "The Birmingham Award"]
  },
  {
    degree: "Engineering & Physical Sciences Foundation Year",
    institution: "University of Birmingham",
    duration: "Sep 2020 – Jul 2021",
    status: "Completed"
  }
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure Data Science Professional",
    issuer: "Oracle",
    date: "2025",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  },
  {
    name: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2025",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  },
  {
    name: "NVIDIA Deep Learning",
    issuer: "NVIDIA",
    date: "2024",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  },
  {
    name: "SAP LLM Fundamentals",
    issuer: "SAP",
    date: "2024",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  },
  {
    name: "Kaggle Badges: Python • Pandas • Advanced SQL • Visualization",
    issuer: "Kaggle",
    date: "2025",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  },
  {
    name: "Dubai Police Cybersecurity Workshop",
    issuer: "Dubai Police",
    date: "2025",
    link: "https://www.linkedin.com/in/suhayl-dastager/details/certifications/"
  }
];

export const techStack = [
  "Python",
  "SQL",
  "React",
  "Next.js",
  "TypeScript",
  "Flutter",
  "Flask",
  "FastAPI",
  "Supabase",
  "Firebase",
  "PostgreSQL",
  "Power BI",
  "Tableau",
  "TensorFlow",
  "XGBoost",
  "LLMs (GPT-4, Gemini)",
  "Docker",
  "CI/CD",
  "n8n",
  "Twilio",
  "Zoho",
  "Oracle Cloud",
  "Azure",
  "Data Storytelling",
  "Automation"
];
