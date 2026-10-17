export const portfolioData = {
  personal: {
    name: "Karamjit Singh",
    nickname: "karampb02",
    roleTitles: [
      "B.Tech CSE Undergraduate @ GNDU",
      "Google Student Ambassador (GSA Diamond #159)",
      "IBM SkillsBuild Student Ambassador",
      "GeeksforGeeks Campus Ambassador",
      "HackOWASP 8.0 Finalist & PEC Hacks Builder"
    ],
    tagline: "Computer Science Undergraduate at Guru Nanak Dev University (GNDU), GSA 2026 Diamond Tier (#159 National Rank), IBM SkillsBuild Ambassador, and builder of AI & campus-scale software solutions.",
    bio: "I am a Computer Science & Engineering undergraduate at Guru Nanak Dev University (GNDU), Amritsar. As a Google Student Ambassador (GSA 2026 Diamond Level, Rank #159 in India out of 12,000+ peers) and IBM SkillsBuild Ambassador, I bridge the gap between generative AI tooling and campus developer empowerment. I have participated in 6+ hackathons—building solutions like SupremeClassroom (PEC Hacks 3.0), GNDU Trade campus marketplace, and reaching the finals of HackOWASP 8.0 with Team Liquid. Beyond software engineering, I am a GNDU Hockey Gold Medalist and MUN Delegate.",
    availability: "Open for Software Engineering Internships, AI/Cloud Roles & Hackathon Collaborations",
    location: "Amritsar, Punjab, India",
    email: "karampb02@gmail.com",
    phone: "+91 6283500082",
    github: "https://github.com/karampb02",
    linkedin: "https://www.linkedin.com/in/karampb02/",
    devfolio: "https://devfolio.co/@karampb02",
    unstop: "https://unstop.com/u/karamsan18287",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
    resumeUrl: "#resume"
  },
  
  stats: [
    { value: "#159", label: "National Rank (GSA Diamond Tier)", icon: "Activity" },
    { value: "6+", label: "Hackathons Attended (Devfolio)", icon: "Rocket" },
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
      title: "Hackathon Builder (HackOWASP & PEC Hacks)",
      desc: "Finalist at HackOWASP 8.0 with Team Liquid; engineered SupremeClassroom at PEC Hacks 3.0 for AI peer learning and automated attendance.",
      icon: "Cpu"
    },
    {
      title: "Campus Ecosystem Developer (GNDU Trade)",
      desc: "Built GNDU Trade, a dedicated digital campus marketplace allowing university students to buy, sell, and exchange academic resources.",
      icon: "Cloud"
    },
    {
      title: "Certified AI & Cloud Practitioner",
      desc: "Holds official certifications including Anthropic Claude 101, NDMA Disaster Management, and Telecom Sector IoT certification.",
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
        name: "Languages & Core CS",
        icon: "Terminal",
        items: [
          { name: "Python", level: 92 },
          { name: "C / C++", level: 86 },
          { name: "Data Structures & Algorithms (DSA)", level: 88 },
          { name: "Object-Oriented Programming (OOP)", level: 90 }
        ]
      },
      {
        id: "ai_genai",
        name: "Generative AI & LLM Tools",
        icon: "Brain",
        items: [
          { name: "Anthropic Claude 101 Certified", level: 95 },
          { name: "Google Gemini APIs & Prompt Tuning", level: 94 },
          { name: "IBM SkillsBuild GenAI in Action", level: 92 },
          { name: "CrispLogic AI Architecture", level: 88 }
        ]
      },
      {
        id: "web_cloud",
        name: "Web & Cloud Architecture",
        icon: "Cloud",
        items: [
          { name: "HTML5 / Modern CSS3 & Vanilla JS", level: 90 },
          { name: "React & Component Systems", level: 84 },
          { name: "AWS Cloud (EC2, S3, IAM)", level: 82 },
          { name: "Git / GitHub / Devfolio Workflows", level: 92 }
        ]
      },
      {
        id: "hackathons",
        name: "Hackathon Engineering",
        icon: "Cpu",
        items: [
          { name: "Rapid MVP Prototyping", level: 95 },
          { name: "Peer Learning Platforms", level: 92 },
          { name: "Community Marketplace Architecture", level: 88 },
          { name: "IoT & Embedded Fundamentals", level: 80 }
        ]
      },
      {
        id: "leadership",
        name: "Leadership & Communication",
        icon: "GitFork",
        items: [
          { name: "Campus Community Evangelism (Google/IBM)", level: 96 },
          { name: "Model United Nations (Diplomacy & Public Speaking)", level: 90 },
          { name: "Collegiate Hockey Team Captaincy (Gold Medalist)", level: 94 },
          { name: "Digital Audience Strategy (100k+ YouTube)", level: 95 }
        ]
      }
    ]
  },

  projects: [
    {
      id: "supreme-classroom",
      title: "SupremeClassroom - AI Peer Learning & Attendance",
      category: "Full Stack",
      featured: true,
      description: "An AI-powered classroom ecosystem engineered at PEC Hacks 3.0 by Team Tech Nerds. Combines intelligent peer-learning doubt resolution with automated facial and biometric attendance tracking for students.",
      tags: ["Python", "AI/ML", "Computer Vision", "PEC Hacks 3.0", "Devfolio"],
      metrics: "Built at PEC Hacks 3.0 • Team Tech Nerds • Live on Devfolio",
      github: "https://github.com/karampb02/SupremeClassroom",
      demo: "https://devfolio.co/@karampb02",
      highlights: [
        "Constructed automated classroom attendance algorithm reducing roll-call overhead by 90%.",
        "Engineered an interactive student study portal facilitating peer knowledge exchange.",
        "Demonstrated working prototype in competitive 36-hour hackathon environment."
      ]
    },
    {
      id: "gndu-trade",
      title: "GNDU Trade - Campus Resource & Commerce Exchange",
      category: "Full Stack",
      featured: true,
      description: "A centralized digital marketplace built specifically for Guru Nanak Dev University students to securely trade textbooks, engineering lab gear, electronics, and study notes within verified campus circles.",
      tags: ["JavaScript", "HTML5", "CSS3", "Campus Tech", "Marketplace"],
      metrics: "Live for GNDU Campus • Verified student network",
      github: "https://github.com/karampb02/GNDU-Trade",
      demo: "https://github.com/karampb02",
      highlights: [
        "Architected categorized product listing with search filtering for textbooks and calculators.",
        "Implemented secure direct contact bridges between student buyers and sellers.",
        "Published and shared across campus student cohorts on LinkedIn and social channels."
      ]
    },
    {
      id: "hackowasp-liquid",
      title: "Team Liquid - HackOWASP 8.0 Finalist Solution",
      category: "AI & Systems",
      featured: true,
      description: "A high-impact hackathon project that qualified as a National Finalist at HackOWASP 8.0, integrating advanced software architecture and distributed problem solving under tight timelines.",
      tags: ["HackOWASP 8.0", "Python", "Systems", "Problem Solving", "Finalist"],
      metrics: "National Finalist @ HackOWASP 8.0 • Team Liquid",
      github: "https://github.com/karampb02",
      demo: "https://devfolio.co/@karampb02",
      highlights: [
        "Collaborated with team developers through multi-round technical judging and live pitching.",
        "Engineered reliable backend endpoints and tested resilience under stress testing.",
        "Selected into the grand finale of one of India's prominent student hackathons."
      ]
    },
    {
      id: "python-learning",
      title: "Python Algorithmic Foundations Repository",
      category: "Systems & Backend",
      featured: false,
      description: "An organized open-source collection of Python data structure implementations, algorithmic problem solutions, and modular utilities developed during B.Tech coursework.",
      tags: ["Python", "DSA", "Open Source", "Algorithms", "GitHub"],
      metrics: "Active GitHub Repository • Core DSA Problem Solutions",
      github: "https://github.com/karampb02/Python-learning",
      demo: "https://github.com/karampb02/Python-learning",
      highlights: [
        "Implemented foundational algorithms (searching, sorting, linked lists, recursion).",
        "Structured clean documentation and test cases for each mathematical module.",
        "Serves as study reference for peers preparing for technical coding evaluations."
      ]
    },
    {
      id: "mr-harpreet-creative",
      title: "MR. HARPREET YouTube Creative Engine (100k+ Subs)",
      category: "Frontend",
      featured: false,
      description: "Scriptwriting, narrative pacing, and audience growth analytics for the 'MR. HARPREET' YouTube channel, culminating in the YouTube Silver Creator Award with over 100,000 subscribers.",
      tags: ["Scriptwriting", "Audience Analytics", "Media Strategy", "Growth"],
      metrics: "100k+ Subscribers • YouTube Silver Play Button Award",
      github: "https://youtube.com",
      demo: "https://youtube.com",
      highlights: [
        "Crafted high-retention video scripts optimizing average view duration (AVD).",
        "Utilized data analytics to test video concepts and maximize viral reach.",
        "Successfully crossed the 100,000 subscriber benchmark."
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
      company: "Devfolio Community (6+ Hackathons)",
      period: "2024 - Present",
      type: "Competitive Engineering",
      description: "Active hackathon builder on Devfolio. Reached finals at HackOWASP 8.0 with Team Liquid and built SupremeClassroom at PEC Hacks 3.0.",
      points: [
        "Finalist at HackOWASP 8.0 after rigorous evaluation rounds and technical pitching.",
        "Engineered SupremeClassroom (AI peer study + automated attendance) at PEC Hacks 3.0.",
        "Maintains active verified builder profile on Devfolio (devfolio.co/@karampb02)."
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
        "Python Programming",
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
    skills: "Languages: Python, C/C++, DSA | AI: Claude 101, Gemini Prompting, GenAI in Action | Cloud/Web: AWS, React, HTML5/CSS3 | Hackathons: PEC Hacks, HackOWASP",
    projects: "1. SupremeClassroom (PEC Hacks 3.0) | 2. GNDU Trade (Campus Marketplace) | 3. HackOWASP Liquid Solution | 4. Python-learning repo",
    leadership: "Google Ambassador (Diamond Tier #159) • IBM SkillsBuild Ambassador • CESS GNDU (Node 2.0) • GNDU Hockey Gold Medalist • MUN Delegate",
    certifications: "Anthropic Claude 101 • IBM GenAI in Action • NDMA Disaster Management • HCL GUVI IIT Zonal • TSSC IoT",
    stats: "#159 National Rank GSA • 6+ Hackathons on Devfolio • 2K+ LinkedIn Network • 100k+ YouTube Silver Creator",
    contact: "Email: karampb02@gmail.com | Phone: +91 6283500082 | GitHub: github.com/karampb02 | LinkedIn: linkedin.com/in/karampb02/ | Devfolio: devfolio.co/@karampb02 | Unstop: unstop.com/u/karamsan18287",
    "sudo hire": "🎉 ACCESS GRANTED! You are connecting with Karamjit Singh — GSA Diamond Tier #159, IBM SkillsBuild Ambassador, and GNDU Software Engineer. Let's create something extraordinary together! Reach out at karampb02@gmail.com or call +91 6283500082."
  }
};
