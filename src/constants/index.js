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
  nextjs,
  php,
  laravel,
  redux,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  thebeautifulyangon,
  todoapp,
  onlinemarketplace,
  theshopmobile,
  thefoodmobile,
  devoverflow,
  theshoponline,
  recipesApp,
  laragigs,
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
    title: "Full stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
    name: "Next JS",
    icon: nextjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Next.js",
    icon: nextjs,
    iconBg: "#E6DEDD",
    points: [
      "Developing and maintaining web applications with Next.js and React.",
      "Ensuring a seamless integration of design and development elements.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Adopting effective project management and organization for development.",
    ],
  },
  {
    title: "React",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js.",
      "Taking complete ownership of projects from conception to implementation.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Conducting thorough self-code reviews for optimal code quality.",
    ],
  },
  {
    title: "PHP",
    icon: php,
    iconBg: "#E6DEDD",
    points: [
      "Building and maintaining server-side logic using PHP.",
      "Independently crafting solutions in collaboration with design requirements.",
      "Integrating PHP with front-end technologies for seamless functionality.",
      "Writing clean, secure, and scalable code with an individual focus.",
    ],
  },
  {
    title: "Laravel",
    icon: laravel,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using the Laravel framework.",
      "Taking a solo approach to building efficient, reusable, and modular code.",
      "Integrating Laravel with front-end technologies for a cohesive user experience.",
      "Adhering to best practices in Laravel development for projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Dev Overflow",
    description:
      "A comprehensive social media platform like stack overflow. Implements magic links authentications, global/local search, filters, recommendations systems and more.",
    tags: [
      {
        name: "nextjs14",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: devoverflow,
    live_site: "https://dev-overflow-nextjs13-phyothantzin.vercel.app/",
    source_code_link: "https://github.com/phyothantzin/dev_overflow_nextjs13/",
  },
  {
    name: "The Shop Mobile-MERN",
    description:
      "Online store built with react, Authentication with http-only cookie, state management with redux and stripe payment. Admin panel for managing products and orders etc...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: theshoponline,
    live_site: "https://theshopmobile.onrender.com/",
    source_code_link: "https://github.com/phyothantzin/theshopmobile-mern/",
  },
  {
    name: "The Beautiful Yangon",
    description:
      "This is the website about Yangon in Myanmar where you can get to know about the beauty of Yangon. Built with Html, Bootstrap for styling, custom css and javascript.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: thebeautifulyangon,
    live_site: "https://thebeautifulyangon.netlify.app/",
    source_code_link: "https://github.com/phyothantzin/beautiful-yangon/",
  },
  {
    name: "The Recipes App",
    description:
      "A social media platform that allows users to share recipes or post status. Built with MERN stack and Bootstrap. User authentication with JWT and http-only cookies",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: recipesApp,
    live_site: "https://therecipesapp.onrender.com/",
    source_code_link: "https://github.com/phyothantzin/mern-recipeApp/",
  },
  {
    name: "Todo App",
    description:
      "Web-application that use vanilla javascript to manage your daily tasks. Custom Css for styling and localstorage to store data. This is also my first webapp to make",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: todoapp,
    live_site: "https://phyothantzin.github.io/todoapp-js/",
    source_code_link: "https://github.com/phyothantzin/todoapp-js/",
  },
  {
    name: "Online Marketplace",
    description:
      "A comprehensive shopping platform that allows users to buy or sell products online. Built with T3 stack, Next.js, Supabase, and Tailwindcss.",
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
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: onlinemarketplace,
    // live_site: "https://online-marketplace-t3.vercel.app/",
    source_code_link: "https://github.com/phyothantzin/online-marketplace-t3/",
  },
  {
    name: "The Shop Mobile - WP",
    description:
      "WooCommerce website built with WordPress. The site allows users to buy products online. Implemented feature products, online payments, shipping and taxes",
    tags: [
      {
        name: "wordpess",
        color: "blue-text-gradient",
      },
      {
        name: "ecommerce",
        color: "green-text-gradient",
      },
      {
        name: "woocommerce",
        color: "pink-text-gradient",
      },
    ],
    image: theshopmobile,
    live_site: "http://theshopmobile.infinityfreeapp.com/",
    source_code_link: "https://github.com/",
  },
  {
    name: "The Food Mobile",
    description:
      "A comprehensive food ordering platform that allows users to order food online. Built with php, bootstrap, and mysql. Admin Panel for managing products and orders.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: thefoodmobile,
    source_code_link:
      "https://github.com/phyothantzin/thefoodmobile.ojtstudent.com/",
  },
  {
    name: "Laragigs",
    description:
      "A Web Application where users can post jobs or apply to different IT jobs. Built with laravel, blade template and tailwindcss. User can also edit and delete their posts.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: laragigs,
    source_code_link: "https://github.com/phyothantzin/laragigs/",
  },
];

export { services, technologies, experiences, testimonials, projects };
