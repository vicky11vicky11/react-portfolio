// import images
import Hero_person from "./assets/images/Hero/person.png";


import figma from "./assets/images/Skills/figma.png";
import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import tailwindcss from "./assets/images/Skills/tailwindcss.png";
import javascript from "./assets/images/Skills/javascript.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import mongodb from "./assets/images/Skills/mongodb.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";

import project1 from "./assets/images/Projects/img1.png";
import project2 from "./assets/images/Projects/img2.png";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
    nav: [
        {
            link: "#home",
            icon: TbSmartHome,
        },
        {
            link: "#skills",
            icon: BiUser,
        },
        {
            link: "#services",
            icon: RiServiceLine,
        },
        {
            link: "#projects",
            icon: RiProjectorLine,
        },
        {
            link: "#contact",
            icon: MdOutlinePermContactCalendar,
        },
    ],
    hero: {
        title: "Full Stack Developer",
        firstName: "VIGNESH",
        LastName: "M",
        btnText: "Hire Me",
        image: Hero_person,
        hero_content: [
            {
                count: "2+",
                text: "Internships attended in Web development",
            },
            {
                count: "20+",
                text: "Projects Worked in Web development",
            },
        ],
    },
    skills: {
        title: "Skills",
        subtitle: "MY TOP SKILLS",
        skills_content: [
            {
                name: "Figma",
                para: "Proficient in designing user interfaces and prototypes using Figma",
                logo: figma,
                details: [
                    "Experienced in creating high-fidelity designs for web and mobile applications.",
                    "Familiar with creating interactive prototypes to demonstrate UI/UX flows.",
                    "Knowledgeable in utilizing Figma plugins to enhance design workflows.",
                    "Adept at organizing design assets and maintaining design systems in Figma projects.",
                ],
            },
            {
                name: "HTML",
                para: "Proficient in creating structured and semantic web pages using HTML5",
                logo: html,
                details: [
                    "Expertise in writing clean and semantic HTML markup for web pages.",
                    "Skilled in implementing accessibility features to ensure compliance with WCAG standards.",
                    "Experience in optimizing HTML code for improved performance and SEO.",
                    "Knowledgeable about responsive web design principles and mobile-first development practices.",
                ],
            },
            {
                name: "CSS",
                para: "Skilled in styling web pages using CSS3",
                logo: css,
                details: [
                    "Proficient in writing CSS code to style web pages with modern layout techniques.",
                    "Experienced in using CSS preprocessors like Sass to enhance development workflows.",
                    "Familiar with CSS animation techniques to create interactive user interfaces.",
                    "Adept at troubleshooting cross-browser compatibility issues and applying CSS fixes.",
                ],
            },
            {
                name: "Tailwind CSS",
                para: "Experience in building responsive and modern UIs with Tailwind CSS",
                logo: tailwindcss,
                details: [
                    "Proficient in utilizing Tailwind CSS utility classes to rapidly build custom UI components.",
                    "Experienced in configuring Tailwind CSS with custom themes and plugins to match design requirements.",
                    "Familiar with Tailwind CSS JIT mode for optimizing CSS bundle sizes and improving build times.",
                    "Knowledgeable about Tailwind CSS best practices for structuring utility classes and organizing styles.",
                ],
            },
            {
                name: "JavaScript",
                para: "Strong understanding of JavaScript for both client-side and server-side development",
                logo: javascript,
                details: [
                    "Expertise in writing clean and modular JavaScript code for both frontend and backend applications.",
                    "Skilled in using modern JavaScript features such as ES6+ syntax, arrow functions, and destructuring.",
                    "Familiar with JavaScript frameworks/libraries such as React.js, Vue.js, and Express.js.",
                    "Experience in asynchronous programming using Promises, async/await, and handling callback functions.",
                ],
            },
            {
                name: "React js",
                para: "Experience in building dynamic and interactive user interfaces with React.js",
                logo: reactjs,
                details: [
                    "Expertise in building RESTful APIs and web servers using Node.js and Express.js framework.",
                    "Experience in database integration with MongoDB, MySQL, or PostgreSQL using Node.js drivers or ORMs.",
                    "Familiar with asynchronous programming in Node.js and handling I/O operations efficiently.",
                    "Adept at deploying and managing Node.js applications on platforms like Heroku, AWS, or Google Cloud.",
                ],
            },
            {
                name: "Node js",
                para: "Proficient in building scalable and efficient server-side applications using Node.js",
                logo: nodejs,
                details: [
                    "Expertise in building RESTful APIs and web servers using Node.js and Express.js framework.",
                    "Experience in database integration with MongoDB, MySQL, or PostgreSQL using Node.js drivers or ORMs.",
                    "Familiar with asynchronous programming in Node.js and handling I/O operations efficiently.",
                    "Adept at deploying and managing Node.js applications on platforms like Heroku, AWS, or Google Cloud.",
                ],
            },
            {
                name: "MongoDB",
                para: "Familiar with MongoDB for storing and managing data in NoSQL databases",
                logo: mongodb,
                details: [
                    "Experience in designing schemaless data models and collections in MongoDB for flexible data storage.",
                    "Familiar with MongoDB Atlas for cloud-based database management and deployment.",
                    "Knowledgeable about MongoDB indexes and performance tuning techniques for optimizing query execution.",
                    "Adept at integrating MongoDB with Node.js applications using Mongoose ODM for data modeling and validation.",
                ],
            },
        ],
        icon: MdArrowForward,
    },
    services: {
        title: "Services",
        subtitle: "WHAT I KNOW",
        service_content: [
            {
                title: "Web Development",
                para: "Crafting dynamic and responsive web experiences using the MERN (MongoDB, Express.js, React.js, Node.js) stack, merging robust back-end functionality with sleek front-end designs for seamless user interactions",
                logo: services_logo1,
            },
            {
                title: "Web Desigin",
                para: "Skilled in creating visually appealing and user-centric designs for web interfaces and prototypes using Figma, utilizing its collaborative features and intuitive design tools to streamline the design process",
                logo: services_logo2,
            },
        ],
    },
    Projects: {
        title: "Projects",
        subtitle: "MY CREATION",
        image: person_project,
        project_content: [
            {
                title: "Gym Website",
                image: project1,
                url: "https://vignesh-fitclub.netlify.app/",
            },
            {
                title: "Nike Website",
                image: project2,
                url: "https://vignesh-nike-site.netlify.app/",
            },
            {
                title: "OmniFood",
                image: project3,
                url: "https://omnifood-vignesh.netlify.app/",
            },
        ],
    },
    Hireme: {
        title: "Hire Me",
        subtitle: "FOR YOUR PROJECTS",
        image1: Hireme_person,
        image2: Hireme_person2,
        para: "\"Unlock the power of MERN stack with my expertise! Skilled in MongoDB, Express.js, React, and Node.js, I craft seamless web solutions. Let's collaborate to elevate your projects and drive success!\"",
        btnText: "Hire Me",
    },
    Contact: {
        title: "Contect Me",
        subtitle: "GET IN TOUCH",
        social_media: [
            {
                text: "Vignesh M",
                icon: FaRegUser,
                link: "http://vignesh-website.netlify.app/",
            },
            {
                text: "vickyvignesh430329@gmail.com",
                icon: GrMail,
                link: "mailto:vickyvignesh430329@gmail.com",
            },
            {
                text: "+91 63695 31042",
                icon: FaWhatsapp,
                link: "https://wa.me/+916369531042",
            },
            {
                text: "Vignesh M",
                icon: BsInstagram,
                link: "https://www.instagram.com/vk_vicky_official___/",
            },
            {
                text: "vicky11vicky11",
                icon: GrGithub,
                link: "https://www.github.com/vicky11vicky11/",
            },
        ],
    },
    Footer: {
        text: "All © Copy Right Reserved 2022",
    },
};
