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
  git,
  threejs,
  freelancer,
  blitzpools,
  netlify,
  firebase,
  iphone,
  finder,
  amazon,
  beer,
  shobhra,
 orcawise,
  trade
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "JavaScript Developer",
    icon: backend,
  },
  {
    title: "Freelancer",
    icon: creator,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name:"Netlify",
    icon:netlify
  },
  {
    name:"Firebase",
    icon: firebase
  }
];

const experiences = [
    {
    title: "Frontend Developer",
    company_name: "Orcawise",
    icon: orcawise,
    iconBg: "#383E56",
    date: "January 2025 - Present",
    points: [
      "Developed various GenAI-powered chatbots using Reactjs, OpenAI(gpt-3.5, gpt 4, gpt 4o, embedding models), Llama models, LangGraph framework showcasing proficiency in natural languagae processing, generativeAI .",
      "Develop and integrate OpenAI-powered chatbot solutions (raims.chat) to enhance user engagement and provide intelligent customer support",
      "Led POC developments to automate process in the Networks industry, utilizing cutting-edge technologies such as RAG, Langchain and Generative AI.",
      "Optimize front-end performance and implement CI/CD using GitLab and Docker, improving deployment efficiency by 35%.",
      "Applied analytics and A/B testing methods to refine UX and boost retention metrics."
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#383E56",
    date: "January 2019 - December 2024",
    points: [
      "Enhanced customer experience, increased improved UI rendering by 40% in just 5 weeks, utilizing web pages.",
      "Web Performance optimization by 20% using React library, allowing alignment with the business requirements.",
      "Reduced error rate by 90% in 2 weeks through implementing, React leading to improved digital transformation.",
      "Improved web applications using lazy loading and reduce size, resulting in 30% faster loading time in 2 weeks.",
      "Implement codebase review resulting in 20% increase in loading speed, leading to improved user satisfaction "
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Blitzpools",
    icon: blitzpools,
    iconBg: "#E6DEDD",
    date: "July 2021 - July 2022",
    points: [
      "Proficiency in frontend development experience resulting in a 40% increase in user engagement within 5 weeks.",
      "Implemented commissioning  cross-platform tooling, resulting in a 25% enhancement in scalable and accelerated speed to market for app development initiatives within 5 week period, Technical requirements: React, Webpack.",
      "Simplified 50% of the test case suite, resulting improvements in unit testing strategy efficiency within 2 quarters.",
      "Maintaining code by writing clean, code review, resulting in 60% increase in new product development .",
      "Streamlined UI development with data consideration, confidential 15% increase in information management"
    ],
  },
];


const projects = [
  {
    name: "Maxima Apple IPhone",
    description:
      "Developed improved version of Apple iPhone website using three js and GSAP, resulting in TTFB of 176 ms, boosting user experience and site performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "three.js",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/febin123/maxima-phone",
  },
  {
    name: "Infinity Finder",
    description:
      "Developed improved version of official Google engine using react js and tailwind css, resulting 15% increase in boosting user experience and site performance.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "context-api",
        color: "red-text-gradient",
      },
    ],
    image: finder,
    source_code_link: "https://github.com/febin123/infinityfinder.git",
  },
  {
    name: "Prime World",
    description:
      "Utilized tech stack like Reactjs, and firebase as user authentication  to implement Single Page Application, resulting in 400 ms reduction in website loading time.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "context-api",
        color: "pink-text-gradient",
      },
    ],
    image: amazon,
    source_code_link: "https://github.com/febin123/prime-world.git",
  },
  {
    name: "BeerBiceps",
    description:
      "Achieved a 30% increase in website load speed, leading to improved user experience.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "jquery",
        color: "pink-text-gradient",
      },
      {
        name: "json",
        color: "red-text-gradient",
      },
      {
        name: "html5/css3",
        color: "green-text-gradient",
      },
    ],
    image: beer,
    source_code_link: "https://github.com/febin123/BeerBiceps.git",
  },
  {
    name: "TradeZero",
    description:
      "Reduced initial loading time significantly by minimizing the bundle size, resulting in a 20% increase in website load speed.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "JavaScript",
        color: "red-text-gradient",
      },
      
    ],
    image: trade,
    source_code_link: "https://github.com/febin123/TradeZero.git",
  },
  {
    name: "Shobhra",
    description:
      "Improved user experience, resulting in 10% increase in website loading speed.",
    tags: [
      {
        name: "React.js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "red-text-gradient",
      },
      
    ],
    image: shobhra,
    source_code_link: "https://github.com/febin123/shobhra.git",
  }
];

export { services, technologies, experiences, projects };
