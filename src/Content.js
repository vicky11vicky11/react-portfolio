// import images
import Hero_person from "./assets/images/Hero/person.png";

import css from "./assets/images/Skills/css.svg";
import git from "./assets/images/Skills/git.svg";
import hibernate from "./assets/images/Skills/hibernate.svg";
import html from "./assets/images/Skills/html.svg";
import java from "./assets/images/Skills/java.svg";
import javascript from "./assets/images/Skills/javascript.svg";
import mysql from "./assets/images/Skills/mysql.svg";
import reactjs from "./assets/images/Skills/react.svg";
import tailwindcss from "./assets/images/Skills/tailwindcss.svg";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/img1.jpeg";
import project2 from "./assets/images/Projects/img2.jpeg";
import project3 from "./assets/images/Projects/img3.png";
import person_project from "./assets/images/Projects/person.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { BiUser } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { FaRegUser, FaWhatsapp } from "react-icons/fa";
import { GrGithub, GrMail } from "react-icons/gr";
import { MdArrowForward, MdOutlinePermContactCalendar } from "react-icons/md";
import { RiProjectorLine, RiServiceLine } from "react-icons/ri";
import { TbSmartHome } from "react-icons/tb";

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
				count: "20+",
				text: "Projects Worked in Front End Development",
			},
			{
				count: "1+",
				text: "Projects Worked in Full Stack Development",
			},
		],
	},
	skills: {
		title: "Skills",
		subtitle: "MY TOP SKILLS",
		skills_content: [
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
				name: "Java",
				para: "Proficient in developing robust and scalable applications using Java.",
				logo: java,
				details: [
					"Expertise in building web applications using Java with frameworks like Spring Boot and Hibernate.",
					"Experience in integrating relational databases such as MySQL, PostgreSQL with Java applications.",
					"Strong knowledge of object-oriented programming (OOP) principles and design patterns.",
					"Adept in writing clean, maintainable code and performing unit testing using JUnit and Mockito.",
					"Familiar with building RESTful web services and microservices architecture using Java.",
				],
			},
			{
				name: "Hibernate",
				para: "Experience in ORM (Object-Relational Mapping) frameworks like Hibernate.",
				logo: hibernate,
				details: [
					"Proficient in mapping Java objects to relational database tables using Hibernate.",
					"Skilled in writing SQL queries for data retrieval, manipulation, and reporting.",
					"Adept at optimizing database performance through indexing, query optimization, and normalization.",
					"Familiar with backup and recovery strategies to ensure data integrity and availability.",
				],
			},
			{
				name: "MySQL",
				para: "Skilled in managing and optimizing relational databases using MySQL.",
				logo: mysql,
				details: [
					"Proficient in designing and implementing database schemas and relationships.",
					"Experience in writing complex SQL queries for data retrieval, manipulation, and reporting.",
					"Adept at optimizing database performance through indexing, query optimization, and normalization.",
					"Familiar with backup and recovery strategies to ensure data integrity and availability.",
					"Knowledge of using MySQL with various frameworks and programming languages, including Java and Node.js.",
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
				title: "Front-End Development",
				para: "Using React, HTML, CSS, JavaScript, and Tailwind CSS to create dynamic and responsive user interfaces that deliver seamless user experiences.",
				logo: services_logo1,
			},
			{
				title: "Back-End Development",
				para: "Using Java, Hibernate and Spring Boot to build scalable and efficient server-side applications, integrating with databases like MySQL and Oracle to manage data effectively.",
				logo: services_logo2,
			},
			{
				title: "Database Development",
				para: "Utilizing MySQL to design, implement, and manage relational databases, optimizing data storage and retrieval through effective schema design and complex SQL queries.",
				logo: services_logo3,
			},
		],
	},
	Projects: {
		title: "Projects",
		subtitle: "MY CREATION",
		image: person_project,
		project_content: [
            {
                title: "TastyTrack Webapp",
                image: project3,
                url: "https://github.com/vicky11vicky11/tastytrack",
            },
			{
				title: "Bakist Website",
				image: project1,
				url: "https://vignesh-bankist.netlify.app/",
			},
			{
				title: "Mapty Website",
				image: project2,
				url: "https://vignesh-mapty.netlify.app/",
			},
		],
	},
	Hireme: {
		title: "Hire Me",
		subtitle: "FOR YOUR PROJECTS",
		image1: Hireme_person,
		image2: Hireme_person2,
		para: '"Unlock the power of Java Full Stack Development with my expertise! Skilled in Java, Spring Boot, Hibernate and React, I craft seamless web solutions that combine robust back-end functionality with dynamic front-end experiences. Let\'s collaborate to elevate your projects and drive success!"',
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
				text: "Vignesh Muthusamy",
				icon: BsLinkedin,
				link: "https://www.linkedin.com/in/vignesh-muthusamy-/",
			},
			{
				text: "vicky11vicky11",
				icon: GrGithub,
				link: "https://www.github.com/vicky11vicky11/",
			},
		],
	},
	Footer: {
		text: "All © Copy Right Reserved ",
	},
};
