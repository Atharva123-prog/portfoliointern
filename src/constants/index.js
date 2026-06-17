import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  pythonnn,
  scikit,
  sql,
  career,
  backbench,
  excalidraw,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Aritficial Intelligence and Machine Learning Intern",
    icon: meta,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Data Science ",
    icon: starbucks,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Python",
    icon: pythonnn,
  },
  {
    name: "Scikit-Learn",
    icon: scikit,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Positions of Responsibility",
    company_name: "KNIT Sultanpur & GDG",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Executive Member, Programming and Tech Skills Club (PTSC), KNIT Sultanpur.",
      "Member, Career Development Cell (CDC), KNIT Sultanpur.",
      "Core Member (AI/ML), Google Developer Groups (GDG) on Campus, KNIT Sultanpur.",
    ],
  },
  {
    title: "Achievements & Certifications",
    company_name: "Various Platforms",
    icon: figma,
    iconBg: "#E6DEDD",
    date: "2024 - 2025",
    points: [
      "Winner of 'Hack The Web' organized by PTSC.",
      "LeetCode: Reached a Top Rating of 1658. Solved 1,000+ problems across platforms.",
      "CodeChef: 2-Star Coder with a highest rating of 1486, ranked 450 in Starters 143 Div. 3.",
      "Certifications: HP LIFE 2025 Certified Generative AI Professional, SCALAR Masterclass, SkillELEVARE.",
      "Frontend Internship Completion Certificate at Sprite Era Solutions Pvt. Ltd.",
    ],
  },
  {
    title: "AI Developer",
    company_name: "Agentic World LLC.COM",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Present",
    points: [
      "Working in the Artificial Intelligence field to build and deploy advanced AI models.",
      "Developing AI automation tools and related technologies to solve complex problems.",
      "Collaborating with cross-functional teams to integrate AI capabilities into modern applications.",
      "Conducting research and staying updated with the latest trends in the AI industry.",
    ],
  },
  {
    title: "Google developer group executive in AI ML domain",
    company_name: "Google Developer Group",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Nov 2025 - Sep 2028",
    points: [
      "Developing and maintaining web applications along with the AI automation tools and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Sprite Era Pvt Ltd Solution",
    icon: git,
    iconBg: "#383E56",
    date: "January 2026 - April 2026",
    points: [
      "Developed and deployed dynamic web applications using React.js and Tailwind CSS, improving UI performance and responsiveness.",
      "Integrated REST APIs and handled state management to ensure smooth data flow across components.",
      "Optimized components and reduced load time by implementing lazy loading and reusable component structures.",
      "Collaborated with designers and backend developers to deliver scalable and user-friendly features under tight deadlines.",
    ],
  },
  {
    title: "Effulgence Tech Fest Website Developer",
    company_name: "KNIT Sultanpur",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2026 - March 2026",
    points: [
      "Designed and developed the official Tech Fest website using React.js, ensuring a modern and engaging UI.",
      "Implemented responsive layouts and interactive sections to enhance user experience across devices.",
      "Managed event data, schedules, and registration flows for multiple fest activities.",
      "Worked closely with the organizing team to deliver updates, fix bugs, and deploy features before deadlines.",
    ],
  },
];



const projects = [
  {
    name: "Autonomous Career Platform",
    description:
      "Autonomous AI agent that generates personalized learning roadmaps, detects skill gaps, builds ATS-optimized resumes, and automates job applications. Includes WhatsApp OTP, facial recognition login, and an AI-driven English debate module.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "ai/ml",
        color: "pink-text-gradient",
      },
    ],
    image: career,
    source_code_link: "https://github.com/Atharva123-prog",
  },
  {
    name: "BACKBENCH",
    description:
      "Anonymous campus community platform where verified students can connect, share opinions, and have real conversations in a safe environment.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "frameworks",
        color: "green-text-gradient",
      },
      {
        name: "community",
        color: "pink-text-gradient",
      },
    ],
    image: backbench,
    source_code_link: "https://github.com/Atharva123-prog",
  },
  {
    name: "Excalidraw Clone",
    description:
      "Built a full-featured web-based whiteboard application replicating core Excalidraw functionalities. Utilized Flask for robust backend state management and efficient, real-time drawing rendering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "canvas",
        color: "pink-text-gradient",
      },
    ],
    image: excalidraw,
    source_code_link: "https://github.com/Atharva123-prog",
  },
];

export { services, technologies, experiences, projects };
