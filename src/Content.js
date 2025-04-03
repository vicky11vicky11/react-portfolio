// import images
import Hero_person from "./assets/images/Hero/person.png";

import api from "./assets/images/Skills/api.svg";
import cloudinary from "./assets/images/Skills/cloudinary.svg";
import css from "./assets/images/Skills/css.svg";
import docker from "./assets/images/Skills/docker.svg";
import expressjs from "./assets/images/Skills/expressjs.svg";
import framermotion from "./assets/images/Skills/framer-motion.svg";
import git from "./assets/images/Skills/git.svg";
import github from "./assets/images/Skills/github.svg";
import hibernate from "./assets/images/Skills/hibernate.svg";
import hoppscotch from "./assets/images/Skills/hoppscotch.svg";
import html from "./assets/images/Skills/html.svg";
import intellij from "./assets/images/Skills/intellij-idea.svg";
import java from "./assets/images/Skills/java.svg";
import javascript from "./assets/images/Skills/javascript.svg";
import json from "./assets/images/Skills/json.svg";
import jwt from "./assets/images/Skills/jwt.svg";
import mongodb from "./assets/images/Skills/mongodb.svg";
import mysql from "./assets/images/Skills/mysql.svg";
import nodejs from "./assets/images/Skills/nodejs.svg";
import postgresql from "./assets/images/Skills/postgresql.svg";
import postman from "./assets/images/Skills/postman.svg";
import reactquery from "./assets/images/Skills/react-query.svg";
import reactrouter from "./assets/images/Skills/react-router.svg";
import reactjs from "./assets/images/Skills/react.svg";
import redux from "./assets/images/Skills/redux.svg";
import spring from "./assets/images/Skills/spring-boot.svg";
import tailwindcss from "./assets/images/Skills/tailwindcss.svg";
import vscode from "./assets/images/Skills/vs-code.svg";
import swagger from "./assets/images/Skills/swagger.svg";
import materialui from "./assets/images/Skills/material-ui.svg";
import kafka from "./assets/images/Skills/kafka.svg";
import kubernetes from "./assets/images/Skills/kubernetes.svg";
import webflow from "./assets/images/Skills/webflow.svg";

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
				para: "Proficient in styling web pages with modern layout techniques using CSS.",
				logo: css,
				details: [
					"Proficient in using Flexbox and Grid for advanced layout design.",
					"Experience in CSS preprocessors like Sass for enhanced maintainability.",
					"Skilled in creating smooth animations and transitions for better UI/UX.",
					"Adept at ensuring cross-browser compatibility and responsiveness.",
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
				name: "Redux",
				para: "Experience in state management using Redux and Redux Toolkit.",
				logo: redux,
				details: [
					"Proficient in managing complex application state using Redux.",
					"Experience in integrating Redux Toolkit (RTK) for optimized state management.",
					"Skilled in using Redux Thunk and RTK Query for handling asynchronous actions.",
					"Adept at structuring Redux stores, reducers, and actions for scalability.",
				],
			},
			{
				name: "Material UI",
				para: "Experienced in building modern and responsive UIs with Material UI.",
				logo: materialui,
				details: [
					"Proficient in using Material UI components to create sleek and consistent user interfaces.",
					"Skilled in customizing Material UI themes and styles for brand consistency.",
					"Experienced in integrating Material UI with React applications for faster development.",
					"Familiar with optimizing performance by using Material UI's server-side rendering (SSR) and tree-shaking features.",
				],
			},
			{
				name: "Framer Motion",
				para: "Experience in creating smooth animations and transitions using Framer Motion.",
				logo: framermotion,
				details: [
					"Proficient in animating components with `motion` API for engaging UI interactions.",
					"Skilled in implementing page transitions, variants, and gesture-based animations.",
					"Experience in optimizing animation performance using `useReducedMotion` and `layoutId`.",
					"Adept at integrating Framer Motion with React components and conditional rendering.",
				],
			},

			{
				name: "React Router",
				para: "Experience in client-side routing with React Router for seamless navigation.",
				logo: reactrouter,
				details: [
					"Proficient in implementing dynamic routing with `useRoutes` and `Route` components.",
					"Experience in handling nested routes and route parameters.",
					"Skilled in optimizing performance with `React.lazy` and `Suspense`.",
					"Adept at managing protected routes, authentication, and redirection.",
				],
			},
			{
				name: "React Query (RTK Query)",
				para: "Proficient in fetching and caching data efficiently using RTK Query.",
				logo: reactquery,
				details: [
					"Experience in handling API requests and state management using RTK Query.",
					"Proficient in caching, revalidation, and background data fetching.",
					"Skilled in using `useQuery` and `useMutation` hooks for CRUD operations.",
					"Adept at implementing optimistic updates and handling errors gracefully.",
				],
			},
			{
				name: "Node.js",
				para: "Experienced in backend development and server-side scripting with Node.js.",
				logo: nodejs,
				details: [
					"Proficient in building scalable server-side applications using Node.js.",
					"Skilled in event-driven programming and non-blocking I/O for high-performance apps.",
					"Experienced in integrating databases like MongoDB, MySQL, and PostgreSQL with Node.js.",
					"Familiar with asynchronous programming using Promises, async/await, and callbacks.",
				],
			},
			{
				name: "Express.js",
				para: "Experienced in building web applications and APIs with Express.js.",
				logo: expressjs,
				details: [
					"Proficient in creating RESTful APIs using Express.js with structured routing.",
					"Skilled in handling middleware, request validation, and error handling.",
					"Experienced in implementing authentication with JWT, OAuth, and session-based auth.",
					"Familiar with CORS, security best practices, and performance optimizations in Express.",
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
				name: "Spring Boot",
				para: "Experience in ORM (Object-Relational Mapping) frameworks like Hibernate.",
				logo: spring,
				details: [
					"Proficient in mapping Java objects to relational database tables using Hibernate.",
					"Skilled in writing SQL queries for data retrieval, manipulation, and reporting.",
					"Adept at optimizing database performance through indexing, query optimization, and normalization.",
					"Familiar with backup and recovery strategies to ensure data integrity and availability.",
				],
			},
			{
				name: "Swagger UI",
				para: "Experienced in API documentation and testing using Swagger UI.",
				logo: swagger,
				details: [
					"Proficient in creating and maintaining API documentation with Swagger UI.",
					"Skilled in testing RESTful APIs through interactive Swagger-generated interfaces.",
					"Experienced in integrating Swagger with Node.js, Express, and Java Spring Boot applications.",
					"Familiar with defining API schemas using OpenAPI Specification (OAS) for clarity and standardization.",
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
			{
				name: "PostgreSQL",
				para: "Skilled in managing and optimizing relational databases with PostgreSQL.",
				logo: postgresql,
				details: [
					"Proficient in designing and implementing database schemas and relationships.",
					"Experienced in writing complex SQL queries, stored procedures, and triggers.",
					"Adept at optimizing database performance using indexing and query optimization.",
					"Familiar with backup, recovery strategies, and database replication techniques.",
				],
			},
			{
				name: "MongoDB",
				para: "Experienced in managing scalable NoSQL databases with MongoDB.",
				logo: mongodb,
				details: [
					"Proficient in designing schemas and managing data in MongoDB collections.",
					"Skilled in CRUD operations using MongoDB queries and aggregation pipelines.",
					"Experienced in indexing and optimizing queries for better performance.",
					"Familiar with MongoDB Atlas, replication, and sharding for scalability.",
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
				name: "JWT",
				para: "Experienced in implementing authentication and authorization using JWT.",
				logo: jwt,
				details: [
					"Proficient in generating, signing, and verifying JWTs for secure authentication.",
					"Skilled in implementing role-based access control (RBAC) using JWT claims.",
					"Experienced in integrating JWT authentication with Node.js, Express.js, and React.",
					"Familiar with securing JWTs using best practices like token expiration and refresh tokens.",
				],
			},
			{
				name: "REST API",
				para: "Experienced in building and using RESTful APIs for web apps.",
				logo: api,
				details: [
					"Proficient in developing RESTful APIs using Java (Spring Boot) and Node.js (Express.js).",
					"Experienced in handling HTTP methods (GET, POST, PUT, DELETE) for CRUD operations.",
					"Skilled in implementing authentication and authorization using JWT and OAuth.",
					"Adept at optimizing API performance with caching, pagination, and rate limiting.",
				],
			},
			{
				name: "Postman",
				para: "Experienced in API testing, automation, and debugging with Postman.",
				logo: postman,
				details: [
					"Proficient in testing RESTful APIs using Postman with various HTTP methods.",
					"Skilled in automating API tests using Postman Collections and test scripts.",
					"Experienced in handling authentication mechanisms like JWT, OAuth, and API keys.",
					"Familiar with monitoring and debugging API responses for performance optimization.",
				],
			},
			{
				name: "Hoppscotch",
				para: "Experienced in API testing and debugging using Hoppscotch.",
				logo: hoppscotch,
				details: [
					"Proficient in sending and inspecting API requests and responses using Hoppscotch.",
					"Skilled in testing RESTful and GraphQL APIs with various authentication methods.",
					"Experienced in organizing and managing API collections for efficient development workflows.",
					"Familiar with using Hoppscotch for WebSocket and real-time API testing.",
				],
			},
			{
				name: "JSON",
				para: "Experienced in data exchange and API communication using JSON.",
				logo: json,
				details: [
					"Proficient in structuring and parsing JSON data for web applications.",
					"Skilled in using JSON for API requests and responses in RESTful services.",
					"Experienced in working with JSON in JavaScript, Node.js, and databases like MongoDB.",
					"Familiar with JSON schema validation and optimization for efficient data transmission.",
				],
			},
			{
				name: "Docker",
				para: "Experienced in containerization and application deployment using Docker.",
				logo: docker,
				details: [
					"Proficient in creating and managing Docker containers for application deployment.",
					"Skilled in writing Dockerfiles to containerize applications efficiently.",
					"Experienced in using Docker Compose for multi-container applications.",
					"Familiar with optimizing container performance and managing images, volumes, and networks.",
				],
			},
			{
				name: "Kubernetes",
				para: "Experienced in container orchestration and deployment using Kubernetes.",
				logo: kubernetes,
				details: [
					"Proficient in deploying, managing, and scaling applications using Kubernetes.",
					"Skilled in configuring Kubernetes clusters, namespaces, and pods for efficient resource management.",
					"Experienced in setting up Kubernetes services, ingress controllers, and networking.",
					"Familiar with Helm charts, ConfigMaps, and secrets for managing Kubernetes configurations.",
				],
			},
			{
				name: "Kafka",
				para: "Experienced in event-driven architecture and messaging using Kafka.",
				logo: kafka,
				details: [
					"Proficient in setting up and managing Kafka brokers, topics, and partitions.",
					"Skilled in producing and consuming messages efficiently using Kafka clients.",
					"Experienced in integrating Kafka with microservices for real-time data streaming.",
					"Familiar with Kafka Streams and KSQL for processing and analyzing event-driven data.",
				],
			},
			{
				name: "Cloudinary",
				para: "Experienced in media storage and optimization using Cloudinary.",
				logo: cloudinary,
				details: [
					"Proficient in uploading, managing, and delivering images and videos using Cloudinary.",
					"Skilled in optimizing media files for web performance with transformations and compression.",
					"Experienced in integrating Cloudinary with React, Node.js, and other frameworks.",
					"Familiar with Cloudinary's API for dynamic media manipulation and CDN delivery.",
				],
			},
			{
				name: "Webflow",
				para: "Experienced in building and designing websites using Webflow.",
				logo: webflow,
				details: [
					"Proficient in creating visually appealing and responsive websites using Webflow’s no-code tools.",
					"Skilled in customizing Webflow CMS for dynamic content and structured data management.",
					"Experienced in optimizing Webflow sites for SEO, performance, and accessibility.",
					"Familiar with integrating custom interactions, animations, and external APIs within Webflow.",
				],
			},
			{
				name: "Git",
				para: "Skilled in managing and optimizing relational databases using MySQL.",
				logo: git,
				details: [
					"Proficient in designing and implementing database schemas and relationships.",
					"Experience in writing complex SQL queries for data retrieval, manipulation, and reporting.",
					"Adept at optimizing database performance through indexing, query optimization, and normalization.",
					"Familiar with backup and recovery strategies to ensure data integrity and availability.",
					"Knowledge of using MySQL with various frameworks and programming languages, including Java and Node.js.",
				],
			},
			{
				name: "GitHub",
				para: "Experienced in version control and collaboration using GitHub.",
				logo: github,
				details: [
					"Proficient in using GitHub for version control, code management, and collaboration.",
					"Skilled in creating and managing repositories, branches, and pull requests.",
					"Experienced in handling merge conflicts and maintaining clean commit histories.",
					"Familiar with GitHub Actions for CI/CD automation and workflow management.",
				],
			},
			{
				name: "VS Code",
				para: "Skilled in managing and optimizing relational databases using MySQL.",
				logo: vscode,
				details: [
					"Proficient in designing and implementing database schemas and relationships.",
					"Experience in writing complex SQL queries for data retrieval, manipulation, and reporting.",
					"Adept at optimizing database performance through indexing, query optimization, and normalization.",
					"Familiar with backup and recovery strategies to ensure data integrity and availability.",
					"Knowledge of using MySQL with various frameworks and programming languages, including Java and Node.js.",
				],
			},
			{
				name: "IntelliJ IDEA",
				para: "Skilled in managing and optimizing relational databases using MySQL.",
				logo: intellij,
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
				title: "React.js Development",
				para: "Building dynamic, responsive, and interactive UIs using React.js. Utilizing Redux for state management, React Router for navigation, and styling with Tailwind CSS and Material UI. Implementing smooth animations with Framer Motion and optimizing data fetching with RTK Query.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "Java Full-Stack Development (Java FSD)",
				para: "Developing full-stack applications with React.js for the front end and Spring Boot with Hibernate for the back end. Building RESTful APIs, integrating MySQL and PostgreSQL databases, and implementing JWT authentication for security.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "MERN Full-Stack Development (MERN FSD)",
				para: "Developing scalable applications with React.js, Redux, Tailwind CSS, and Material UI on the front end. Building RESTful APIs with Node.js and Express.js, integrating MongoDB, MySQL, and PostgreSQL, and implementing JWT authentication for security.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "No-Code Development",
				para: "Creating visually appealing, responsive websites using Webflow without writing code. Customizing Webflow CMS for dynamic content management and SEO optimization.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "Database Management",
				para: "Designing, optimizing, and managing relational databases like MySQL and PostgreSQL. Implementing MongoDB schema design, CRUD operations, query optimization, and scaling with MongoDB Atlas.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "API Development & Testing",
				para: "Developing RESTful APIs using Node.js (Express.js) and Java (Spring Boot). Testing APIs with Postman and Hoppscotch, ensuring security with JWT authentication.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "Authentication & Security",
				para: "Implementing secure authentication systems with JWT. Enforcing role-based access control (RBAC) and other security measures to protect applications.",
				logo: services_logo1, // Replace with appropriate logo
			},
			{
				title: "Containerization & Orchestration",
				para: "Containerizing applications with Docker, orchestrating with Kubernetes, and implementing event-driven architecture using Kafka for real-time data streaming.",
				logo: services_logo1, // Replace with appropriate logo
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
