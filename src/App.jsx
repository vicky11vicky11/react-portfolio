// import components
import { useEffect } from "react";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Hireme from "./components/Hireme";
import Projects from "./components/Projects";
import Service from "./components/Services";
import Skills from "./components/Skills";
import Navbar from "./Layouts/Navbar";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
	useEffect(() => {
		Aos.init({
			duration: 1500,
			offset: 100,
			disable: "mobile",
		});
	}, []);
	const year = new Date().getFullYear();
	return (
		<div className="">
			<Navbar />
			<Hero />
			<Skills />
			<Service />
			<Projects />
			<Hireme />
			<Contact />
			<footer className="p-3 text-center">
				<h6 className="mb-3">VIGNESH MUTHUSAMY</h6>
				<p>Vignesh © All CopyRights Reserved {year}</p>
			</footer>
		</div>
	);
};

export default App;
