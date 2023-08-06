import {
  mdiLanguageTypescript,
  mdiLanguagePhp,
  mdiTailwind,
  mdiGraphql,
} from "@mdi/js";

import sdPerfumery from "../assets/images/sd-perfumery.png";
import wellnessLifeTravelPNG from "../assets/images/wellness-life-travel.png";
import restaurant from "../assets/images/restaurant.png";
import eBike from "../assets/images/e-bike.png";
import Shopping from "../assets/images/shopping-website.png";

const devTypes = [
  {
    id: "01",
    type: "FRONT-END",
    color: "bg-my-green",
    text: "text-my-green",
  },
  {
    id: "02",
    type: "BACK-END",
    color: "bg-my-skyblue",
    text: "text-my-skyblue",
  },
  {
    id: "03",
    type: "FULL-STACK",
    color: "bg-my-yellow",
    text: "text-my-yellow",
  },
];

const skills = [
  {
    id: 1,
    type: "Languages",
    items: [
      {
        name: "TypeScript",
        type: "mdi",
        icon: mdiLanguageTypescript,
      },
      { name: "PHP", type: "mdi", icon: mdiLanguagePhp },
      { name: "HTML", type: "fa", icon: "fa-brands fa-html5" },
      { name: "CSS", type: "fa", icon: "fa-brands fa-css3-alt" },
      { name: "SASS", type: "fa", icon: "fa-brands fa-sass" },
    ],
    style: "row-span-2 col-span-2",
  },
  {
    id: 2,
    type: "Front-end",
    items: [
      { name: "React", type: "fa", icon: "fa-brands fa-react" },
      { name: "Vue", type: "fa", icon: "fa-brands fa-vuejs" },
    ],
  },
  {
    id: 3,
    type: "Back-end",
    items: [
      { name: "Node", type: "fa", icon: "fa-brands fa-node-js" },
      { name: "Laravel", type: "fa", icon: "fa-brands fa-laravel" },
    ],
  },
  {
    id: 4,
    type: "CSS Frameworks",
    items: [
      { name: "Bootstrap", type: "fa", icon: "fa-brands fa-bootstrap" },
      { name: "Tailwind CSS", type: "mdi", icon: mdiTailwind },
    ],
    style:
      "col-span-2 h-[4.1rem] xs:h-[5rem] sm:h-[7.5rem] md:h-[8.5rem] lg:h-[8.5rem] xl:h-[8.5rem] 3xl:h-[11rem]",
  },
  {
    id: 5,
    type: "Cloud Services",
    items: [
      { name: "AWS", type: "fa", icon: "fa-brands fa-aws" },
      { name: "Firebase", type: "lni", icon: "lni lni-firebase" },
    ],
    style: "col-span-2",
  },
  {
    id: 6,
    type: "Databases",
    items: [
      { name: "MySQL", type: "lni", icon: "lni lni-mysql" },
      { name: "MongoDB", type: "lni", icon: "lni lni-mongodb" },
    ],
  },
  {
    id: 7,
    type: "Design Tools",
    items: [{ name: "Figma", type: "fa", icon: "fa-brands fa-figma" }],
    style: "row-span-2",
  },

  {
    id: 8,
    type: "Version Control",
    items: [
      { name: "GitHub", type: "fa", icon: "fa-brands fa-github" },
      { name: "GitLab", type: "fa", icon: "fa-brands fa-gitlab" },
    ],
    style: "col-span-2",
  },
  {
    id: 9,
    type: "APIs",
    items: [{ name: "GraphQL", type: "mdi", icon: mdiGraphql }],
  },
];

const projects = [
  {
    id: 0,
    name: "Prduct List Website",
    image: Shopping,
    ext_link: [
      {
        url: "https://github.com/apikritch/React-GraphQL-Apollo-MongoDB",
        icon: "fa-brands fa-github",
        size: "xl",
      },
      {
        url: "https://portfolio.apikritch.com/project/1",
        icon: "fa-solid fa-link",
      },
    ],

    description:
      "A product list website with a search function and authentication system for the admin to add, categorize, and review products.",
    frameworks: ["React.js", "Tailwind CSS", "GraphQL", "MongoDB"],
  },
  {
    id: 1,
    name: "SD Perfumery",
    image: sdPerfumery,
    ext_link: [
      {
        url: "https://github.com/apikritch/sd-perfumery",
        icon: "fa-brands fa-github",
        size: "xl",
      },
      {
        url: "https://portfolio.apikritch.com/project/2",
        icon: "fa-solid fa-link",
      },
      {
        url: "https://portfolio.apikritch.com/project/2/admin",
        icon: "fa-solid fa-user",
        size: "lg",
      },
      {
        url: "https://apikritch.s3.ap-southeast-2.amazonaws.com/Login+Credentials.txt",
        icon: "fa-solid fa-key",
      },
    ],
    description:
      "A fully functional online fragrance shopping website for a retailer in Sri Lanka. On the front, customers can explore a product catalog, add items to their cart, search for products, and register for personalized experiences. At the backend, the website offers systems for efficient product, order, user, and content management, ensuring seamless operations and customer satisfaction.",
    frameworks: ["Vue.js", "Bootstrap", "Laravel"],
  },
  {
    id: 2,
    name: "Wellness Life Travel",
    image: wellnessLifeTravelPNG,
    ext_link: [
      {
        url: "https://github.com/apikritch/travel-agent",
        icon: "fa-brands fa-github",
        size: "xl",
      },
      {
        url: "https://portfolio.apikritch.com/project/3",
        icon: "fa-solid fa-link",
      },
    ],

    description:
      "A user-friendly travel agency website that presents tours to customers. The admin has the flexibility to easily update website content and create new tour details to showcase to their customers.",
    frameworks: ["Vue.js", "Tailwind CSS", "Firebase"],
  },
  {
    id: 3,
    name: "Restaurant Website",
    image: restaurant,
    ext_link: [
      {
        url: "https://github.com/apikritch/restaurant",
        icon: "fa-brands fa-github",
        size: "xl",
      },
      {
        url: "https://portfolio.apikritch.com/project/4",
        icon: "fa-solid fa-link",
      },
    ],

    description:
      "A single-page restaurant website showcasing their menu and featuring a convenient table booking option. View the full menu, and easily reserve a table for a dining experience.",
    frameworks: ["Node.Js", "Bootstrap", "DynamoDB"],
  },
  {
    id: 4,
    name: "E-Bike Website",
    image: eBike,
    ext_link: [
      {
        url: "https://github.com/apikritch/ebike-shop",
        icon: "fa-brands fa-github",
        size: "xl",
      },
      {
        url: "http://www.apikritch.com:8084/",
        icon: "fa-solid fa-link",
      },
    ],

    description:
      "An e-bike shop website where customers can find a selection of e-bike kits and parts. The website provides detailed information about products and services. Customers can use the contact form on the website to get in touch with the shop.",
    frameworks: ["Pug.Js", "Bootstrap", "Node.Js"],
  },
];

const contact = [
  {
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/apikritch",
  },
  {
    name: "Linkedin",
    icon: "fa-brands fa-linkedin-in",
    url: "https://www.linkedin.com/in/apikritchrattanapisankul/",
  },
  {
    name: "Email",
    icon: "fa-solid fa-envelope",
    url: "apikritch.r@gmail.com",
  },
  { name: "Phone", icon: "fa-solid fa-phone", url: "+61423243070" },
];

export { devTypes, skills, projects, contact };
