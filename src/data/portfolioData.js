export const portfolioData = {
  personal: {
    name: "Karamjit Singh",
    nickname: "karampb02",
    roleTitles: [
      "B.Tech CSE Undergraduate @ GNDU",
      "Google Student Ambassador (GSA Diamond #159)",
      "IBM SkillsBuild Student Ambassador",
      "AI & Full-Stack Builder (SafeBox AI, TalentAI)",
      "HackOWASP 8.0 Finalist & PEC Hacks Builder"
    ],
    tagline: "Computer Science Undergraduate at Guru Nanak Dev University (GNDU), GSA 2026 Diamond Tier (#159 National Rank), IBM SkillsBuild Ambassador, and builder of AI security & campus-scale software solutions.",
    bio: "I am a Computer Science & Engineering undergraduate at Guru Nanak Dev University (GNDU), Amritsar. As a Google Student Ambassador (GSA 2026 Diamond Level, Rank #159 across India out of 12,000+ peers) and IBM SkillsBuild Ambassador, I bridge the gap between generative AI tooling and campus developer empowerment. My project portfolio features SafeBox AI (full-stack phishing threat analyzer deployed on Vercel), TalentAI (Google Solution Challenge recruitment dashboard in Next.js 16), CarboTracer, and NodeForSpeed 3.0. Beyond engineering, I am a GNDU Hockey Gold Medalist and MUN Delegate.",
    availability: "Open for Software Engineering Internships, AI/Cloud Roles & Hackathon Collaborations",
    location: "Amritsar, Punjab, India",
    email: "karampb02@gmail.com",
    phone: "+91 6283500082",
    github: "https://github.com/karampb02",
    linkedin: "https://www.linkedin.com/in/karampb02/",
    devfolio: "https://devfolio.co/@karampb02",
    unstop: "https://unstop.com/u/karamsan18287",
    youtube: "https://youtube.com",
    resumeUrl: "#contact"
  },
  
  stats: [
    { value: "#159", label: "National Rank (GSA Diamond Tier)", icon: "Activity" },
    { value: "6+", label: "Hackathons Attended (Devfolio & Unstop)", icon: "Rocket" },
    { value: "2K+", label: "LinkedIn Professional Network", icon: "Clock" },
    { value: "100k+", label: "YouTube Silver Creator Impact", icon: "Code2" }
  ],

  strengths: [
    {
      title: "Google Student Ambassador (Diamond #159)",
      desc: "Ranked #159 nationally with 3,910 points across India (GID: 4279). Led campus showcases for Gemini AI and built prototypes like CrispLogic.",
      icon: "Brain"
    },
    {
      title: "IBM SkillsBuild Ambassador",
      desc: "Earned the verified 'Generative AI in Action' credential on Credly, evangelizing enterprise AI literacy and cloud skills across university cohorts.",
      icon: "Layers"
    },
    {
      title: "AI Security & Full-Stack Architecture",
      desc: "Engineered SafeBox AI featuring dual-tier phishing detection using FastAPI, TypeScript, React, Docker, and deployed on Vercel.",
      icon: "Cpu"
    },
    {
      title: "Solution Challenge & Sustainability Tech",
      desc: "Developed TalentAI for the Google Solution Challenge using Next.js 16 and CarboTracer for carbon footprint tracking using TanStack Start & Supabase.",
      icon: "Cloud"
    },
    {
      title: "Hackathon Competitor & Community Leader",
      desc: "Finalist at HackOWASP 8.0, PEC Hacks 3.0 builder, Omnikon 2026 participant, and core organizer for GNDU Node 2.0 Hackathon.",
      icon: "Database"
    },
    {
      title: "Disciplined Leadership & Athletics",
      desc: "Gold Medalist in Hockey at GNDU, Model United Nations (MUN) Delegate, and trained National Cadet Corps (NCC) volunteer cadet.",
      icon: "GitBranch"
    }
  ],

  skills: {
    categories: [
      {
        id: "languages",
        name: "Languages & Frameworks",
        icon: "Terminal",
        items: [
          { name: "TypeScript / JavaScript (ES6+)", level: 92 },
          { name: "Python / FastAPI", level: 90 },
          { name: "React / Next.js 16 (Turbopack)", level: 88 },
          { name: "C / C++ & DSA", level: 85 }
        ]
      },
      {
        id: "ai_genai",
        name: "AI & Security Engineering",
        icon: "Brain",
        items: [
          { name: "SafeBox AI URL Threat Detection", level: 94 },
          { name: "Anthropic Claude 101 Certified", level: 95 },
          { name: "Google Gemini APIs & Prompt Tuning", level: 94 },
          { name: "IBM SkillsBuild GenAI in Action", level: 92 }
        ]
      },
      {
        id: "cloud_db",
        name: "Cloud & Database Systems",
        icon: "Cloud",
        items: [
          { name: "Supabase & PostgreSQL (Prisma/Drizzle)", level: 88 },
          { name: "Vercel Deployment & Docker", level: 90 },
          { name: "AWS Cloud (EC2, S3, IAM)", level: 82 },
          { name: "Git / GitHub Version Control", level: 92 }
        ]
      },
      {
        id: "hackathons",
        name: "Hackathon & Rapid Prototyping",
        icon: "Cpu",
        items: [
          { name: "Rapid MVP Architecture", level: 95 },
          { name: "TanStack Start & Vite", level: 86 },
          { name: "Network Diagnostics & Performance", level: 88 },
          { name: "Tailwind CSS (v3 / v4)", level: 92 }
        ]
      },
      {
        id: "leadership",
        name: "Leadership & Communication",
        icon: "GitFork",
        items: [
          { name: "Campus Community Evangelism (Google/IBM)", level: 96 },
          { name: "Model United Nations (Diplomacy & Public Speaking)", level: 90 },
          { name: "Collegiate Hockey (Gold Medalist)", level: 94 },
          { name: "Digital Audience Strategy (100k+ YouTube)", level: 95 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "safebox-ai",
      title: "SafeBox AI - Threat Intelligence & Phishing Analysis",
      category: "AI & Systems",
      featured: true,
      description: "A full-stack cybersecurity web application that analyzes URLs and email messages for malicious phishing patterns using dual-tier heuristics and real-time AI security models.",
      tags: ["Python", "FastAPI", "TypeScript", "React", "Docker", "Vercel"],
      metrics: "Live on Vercel • Automated Dual-Tier Threat Detection",
      github: "https://github.com/karampb02/safebox-ai-project",
      demo: "https://safebox-ai-project.vercel.app",
      demoLabel: "Live App",
      highlights: [
        "Constructed dual-tier URL scanning engine with instant domain reputation scoring.",
        "Engineered responsive modern interface with real-time risk assessment breakdown.",
        "Deployed with containerized Docker workflow and Vercel edge deployment."
      ]
    },
    {
      id: "solution-challenge",
      title: "TalentAI - Google Solution Challenge Dashboard",
      category: "Full Stack",
      featured: true,
      description: "A modern talent management and recruitment analytics platform engineered for the Google Solution Challenge, delivering real-time candidate pipeline tracking and culture analytics.",
      tags: ["Next.js 16", "TypeScript 5", "Tailwind CSS 4", "Framer Motion", "Prisma"],
      metrics: "Google Solution Challenge • Built with Next.js 16 & Turbopack",
      github: "https://github.com/karampb02/solution_challange",
      demo: "https://github.com/karampb02/solution_challange",
      demoLabel: "GitHub Repo",
      highlights: [
        "Architected with Next.js 16 App Router, Turbopack, and TypeScript for instantaneous load times.",
        "Integrated interactive analytics charts using Recharts for interview funnel insights.",
        "Engineered robust schema models using Prisma ORM with relational data persistence."
      ]
    },
    {
      id: "carbotracer",
      title: "CarboTracer - Carbon Footprint & Emissions Tracker",
      category: "Full Stack",
      featured: true,
      description: "An environmental intelligence tracking application enabling users to calculate personal transportation emissions, log carbon offsets, and visualize progress toward sustainability goals.",
      tags: ["TanStack Start", "TypeScript", "Supabase", "Vite", "CSS"],
      metrics: "TanStack Start • Supabase Cloud Backend • 96.5% TypeScript",
      github: "https://github.com/karampb02/carbotracer",
      demo: "https://github.com/karampb02/carbotracer",
      demoLabel: "GitHub Repo",
      highlights: [
        "Designed clean emissions calculator evaluating vehicle fuel efficiency and transit data.",
        "Integrated Supabase backend for authenticated user data storage and cloud sync.",
        "Implemented interactive onboarding tour introducing key sustainability benchmarks."
      ]
    },
    {
      id: "nodeforspeed",
      title: "NodeForSpeed 3.0 - High-Performance Diagnostic Utility",
      category: "Frontend",
      featured: false,
      description: "A lightweight, browser-based network speed, ping, and latency diagnostic utility crafted with vanilla web technologies for instant responsiveness in hackathon environments.",
      tags: ["HTML5", "JavaScript", "CSS3", "Vercel", "Diagnostics"],
      metrics: "Live on Vercel • Zero external dependencies • Sub-second load",
      github: "https://github.com/karampb02/nodeforspeed3.0",
      demo: "https://nodeforspeed-3-0.vercel.app",
      demoLabel: "Live Utility",
      highlights: [
        "Crafted zero-dependency speed testing tool providing accurate packet latency measurements.",
        "Designed ultra-responsive retro-speedometer UI optimized for all screen form factors.",
        "Deployed on Vercel global edge for rapid global benchmark accuracy."
      ]
    },
    {
      id: "spotitube",
      title: "SpotiTube - Hybrid Audio & Video Streaming Interface",
      category: "Frontend",
      featured: false,
      description: "An experimental hybrid web application merging the discovery mechanics of Spotify with YouTube's media playback ecosystem, allowing seamless cross-platform playlist viewing.",
      tags: ["JavaScript", "HTML5", "CSS3", "Web APIs"],
      metrics: "Cross-platform playlist UI • Responsive layout",
      github: "https://github.com/karampb02/spotitube",
      demo: "https://github.com/karampb02/spotitube",
      demoLabel: "GitHub Repo",
      highlights: [
        "Constructed custom media playback controls with dynamic track switching.",
        "Integrated responsive flexbox and grid layouts for both desktop and mobile viewing.",
        "Implemented local playlist state management without heavy framework dependencies."
      ]
    }
  ],

  experience: [
    {
      role: "Google Student Ambassador (GSA 2026)",
      company: "Google / Campus Programs (GID: 4279)",
      period: "2025 - Present",
      type: "Diamond Tier Ambassador",
      description: "Awarded Diamond Level status with 3,910 points (National Rank #159 across ~12,000 students in India). Leading AI awareness sessions and showcasing Gemini AI capabilities.",
      points: [
        "Ranked #159 nationally in the Google Student Ambassador program out of 12,000+ candidates across India.",
        "Conducted campus workshops on generative AI, prompt optimization, and Gemini multi-modal reasoning.",
        "Developed and demonstrated the CrispLogic AI concept at official student showcases."
      ]
    },
    {
      role: "IBM SkillsBuild Student Ambassador",
      company: "IBM SkillsBuild / CSR Box",
      period: "2025 - Present",
      type: "Student Ambassador",
      description: "Campus ambassador advocating for enterprise AI literacy, cloud skills, and verified technical credentials among engineering students.",
      points: [
        "Earned verified 'Generative AI in Action' credential on Credly from IBM SkillsBuild.",
        "Organized peer learning drives encouraging students to complete professional certifications.",
        "Represented IBM SkillsBuild educational pathways at university events."
      ]
    },
    {
      role: "GeeksforGeeks Campus Ambassador",
      company: "GeeksforGeeks (GFG)",
      period: "2025 - Present",
      type: "Campus Leadership",
      description: "Leading algorithmic problem-solving culture, coordinating coding contests, and guiding peers in Data Structures & Algorithms learning paths at GNDU.",
      points: [
        "Evangelized GeeksforGeeks coding challenges and technical learning tracks at GNDU.",
        "Assisted peers in navigating fundamental DSA interview questions and competitive programming.",
        "Coordinated with student societies to host campus coding contests."
      ]
    },
    {
      role: "Hackathon Competitor & Builder",
      company: "Devfolio & Unstop (6+ Hackathons)",
      period: "2024 - Present",
      type: "Competitive Engineering",
      description: "Active hackathon competitor across Devfolio and Unstop. Reached finals at HackOWASP 8.0 with Team Liquid, built at PEC Hacks 3.0, and participated in Omnikon 2026.",
      points: [
        "Finalist at HackOWASP 8.0 after rigorous evaluation rounds and technical pitching.",
        "Built and demonstrated full-stack projects under tight 36-hour hackathon timelines.",
        "Maintains active profiles on Devfolio (devfolio.co/@karampb02) and Unstop (unstop.com/u/karamsan18287)."
      ]
    },
    {
      role: "Core Member - CESS GNDU",
      company: "Computer Engineering Student Society, GNDU",
      period: "2025 - Present",
      type: "Technical Society",
      description: "Core organizer for GNDU's premier computer engineering society, actively co-organizing large-scale tech hackathons like Node 2.0.",
      points: [
        "Co-organized the flagship 'Node 2.0' University Hackathon at Guru Nanak Dev University.",
        "Facilitated technical workshops and speaker sessions bridging academic syllabi with industry trends.",
        "Managed publicity, participant onboarding, and peer mentoring."
      ]
    },
    {
      role: "Content Creator & Scriptwriter",
      company: "MR. HARPREET YouTube Channel",
      period: "2023 - 2025",
      type: "Media Strategy",
      description: "Researched and drafted video scripts, directly contributing to crossing 100,000 subscribers and receiving the YouTube Silver Creator Award.",
      points: [
        "Wrote high-impact scripts with strong educational and entertainment engagement hooks.",
        "Celebrated the 100,000 subscriber milestone with the award of the official YouTube Silver Play Button."
      ]
    }
  ],

  certifications: [
    {
      title: "Claude 101 Certification",
      issuer: "Anthropic / Claude Academy",
      date: "Sep 2026",
      credentialId: "e921b2e5f09a45dcbf0a1f786e4c72e8",
      link: "https://www.linkedin.com/in/karampb02/"
    },
    {
      title: "Generative AI in Action",
      issuer: "IBM SkillsBuild (Credly Verified)",
      date: "2025",
      credentialId: "Credly Badge Verified",
      link: "https://www.linkedin.com/in/karampb02/"
    },
    {
      title: "Yuva Aapda Mitra Scheme Training",
      issuer: "National Disaster Management Authority (NDMA India)",
      date: "Jan 2026",
      credentialId: "NDMA Official Certificate",
      link: "https://www.linkedin.com/in/karampb02/"
    },
    {
      title: "Mission Upskill India - IIT Zonal Sessions",
      issuer: "HCL GUVI",
      date: "Oct 2025",
      credentialId: "10sc2NwG196xF47145",
      link: "https://www.linkedin.com/in/karampb02/"
    },
    {
      title: "Introduction to IoT",
      issuer: "Telecom Sector Skill Council (TSSC)",
      date: "Jul 2025",
      credentialId: "TSSC Government Certification",
      link: "https://www.linkedin.com/in/karampb02/"
    },
    {
      title: "Omnikon National Hackathon 2026",
      issuer: "Unstop Verified Competitions",
      date: "Sep 2026",
      credentialId: "Unstop ID: karamsan18287",
      link: "https://unstop.com/u/karamsan18287"
    },
    {
      title: "Certificate of Academic Merit",
      issuer: "Chief Khalsa Diwan Charitable Society",
      date: "Jul 2024",
      credentialId: "Academic Honors",
      link: "https://www.linkedin.com/in/karampb02/"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
      institution: "Guru Nanak Dev University (GNDU), Amritsar, Punjab",
      period: "2025 - 2029",
      grade: "Undergraduate (Year 1 - Present) • GNDU Hockey Gold Medalist",
      coursework: [
        "Data Structures & Algorithms",
        "Python & TypeScript Programming",
        "Object-Oriented Programming (OOP)",
        "Discrete Mathematics",
        "Digital Logic & Computer Organization"
      ]
    },
    {
      degree: "Higher Secondary & Secondary Education",
      institution: "Sri Guru Harkrishan Public School, Golden Temple, Amritsar",
      period: "Completed 2024",
      grade: "IELTS Academic: Band 7.0 (Fluent English Proficiency) • Academic Merit Award",
      coursework: [
        "Physics",
        "Chemistry",
        "Mathematics",
        "English Communication",
        "Computer Applications"
      ]
    }
  ],

  terminalCommands: {
    help: "Available commands: bio, skills, projects, leadership, certifications, stats, contact, clear, sudo hire",
    bio: "Karamjit Singh | B.Tech CSE @ GNDU Amritsar | Google Student Ambassador (GSA Diamond #159) | IBM SkillsBuild Ambassador | HackOWASP Finalist | 100k+ YouTube Creator",
    skills: "Languages: TypeScript, Python, C/C++, DSA | Frameworks: Next.js 16, React, FastAPI, TanStack Start | AI: SafeBox AI, Claude 101, Gemini Prompting | Cloud: Supabase, Vercel, AWS",
    projects: "1. SafeBox AI (safebox-ai-project.vercel.app) | 2. TalentAI (Solution Challenge) | 3. CarboTracer | 4. NodeForSpeed 3.0 (nodeforspeed-3-0.vercel.app) | 5. SpotiTube",
    leadership: "Google Ambassador (Diamond Tier #159) • IBM SkillsBuild Ambassador • CESS GNDU (Node 2.0) • GNDU Hockey Gold Medalist • MUN Delegate",
    certifications: "Anthropic Claude 101 • IBM GenAI in Action • NDMA Disaster Management • HCL GUVI IIT Zonal • TSSC IoT • Omnikon 2026",
    stats: "#159 National Rank GSA • 6+ Hackathons on Devfolio & Unstop • 2K+ LinkedIn Network • 100k+ YouTube Silver Creator",
    contact: "Email: karampb02@gmail.com | Phone: +91 6283500082 | GitHub: github.com/karampb02 | LinkedIn: linkedin.com/in/karampb02/ | Devfolio: devfolio.co/@karampb02 | Unstop: unstop.com/u/karamsan18287",
    "sudo hire": "🎉 ACCESS GRANTED! You are connecting with Karamjit Singh — GSA Diamond Tier #159, IBM SkillsBuild Ambassador, and GNDU Software Engineer. Let's create something extraordinary together! Reach out at karampb02@gmail.com or call +91 6283500082."
  }
};
