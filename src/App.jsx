import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import logo from "./assets/narutologo.png";
import Footer from "./components/Footer";
import MouseFollower from "./components/animation/mousefollower";
import { Element } from "react-scroll";
import Aurora from './components/animation/Aurora';

const App = () => {
	const Lerning = ["neural networks", "deep learning", "kubernetes", "ML Ops"];

	return (
		<div
			className={`min-h-screen w-screen bg-primary text-secondry font-[Inter] font-[200] pt-16
		`}
		>
			<Navbar />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ProfileCard />
				<Projects />
				<MySkills />
				<Element name="Contact">
					<section
						className="max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl  text-secondry  lg:h-[180px] flex p-6 shadow-[0_8px_20px_rgb(200,200,200,0.12)] 
						relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,theme(colors.white/.2)_50%,transparent_75%,transparent_100%)]  before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-[position:-100%_0,0_0] hover:before:duration-[1500ms]"
					>
						<div className="logo pr-3 ">
							<img src={logo} alt="logo" className="h-10 w-10 md:h-18 md:w-18 rounded-full" />
						</div>
						<div className="logo  flex-1">
							<p className="">Currently expanding my knowledge in</p>
							<h3 className="text-lg lg:text-2xl font-bold">
								Advanced Machine Learning, Deeplearning & DevOps
							</h3>

							<div className="flex flex-wrap gap-2 mt-4">
								{Lerning.map((e, i) => (
									<div
										key={i}
										className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-white text-sm font-semibold border border-neutral-700"
									>
										<span className="h-2.5 w-2.5 rounded-full bg-green-300 mr-2" />
										{e}
									</div>
								))}
							</div>
						</div>
					</section>
				</Element>
			</div>
			<Footer />
		</div>
	);
};

export default App;
