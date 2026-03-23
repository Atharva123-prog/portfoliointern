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
 
];

const experiences = [
 
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
  title: "Web Developer",
  company_name: "Sprite Era Private Limited",
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
  title: "Data Science and Machine Learning Intern",
  company_name: "Zaalima Development Private Limited",
  icon: shopify,
  iconBg: "#383E56",
  date: "25 March 2025 - 25 May 2025",
  points: [
    "Worked on data preprocessing, cleaning, and feature engineering using Python libraries like Pandas and NumPy.",
    "Built and evaluated machine learning models for prediction tasks using Scikit-learn.",
    "Visualized insights using Matplotlib and Seaborn to support data-driven decision making.",
    "Collaborated with the team to optimize model accuracy and presented findings with clear documentation.",
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
    name: "Mind Ease",
    description:
      "Web-based platform that allows users to search, book, and manage mental health resources and services, providing a convenient and efficient solution for well-being needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Atharva123-prog",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
