import React from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import logo from "./assets/narutologo.png";
import Footer from "./components/Footer";

const App = () => {
	const Lerning = ["neural networks", "deep learning", "kubernetes", "ML Ops"];
	return (
		<div
			className=" min-h-screen w-screen bg-primary text-secondry font-[Inter] font-[200] pt-16"
		>
			<Navbar />
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<ProfileCard />
				<Projects />
				<MySkills />
				<section className="max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl  text-secondry h-[180px] flex p-6 shadow-[0_8px_20px_rgb(200,200,200,0.12)]">
					<div className="logo  pr-3 ">
						<img src={logo} alt="logo" className="h-18 w-18 rounded-full" />
					</div>
					<div className="logo  flex-1">
						<p className="">Currently expanding my knowledge in</p>
						<h3 className="text-2xl font-bold">
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
			</div>
				<Footer/>
		</div>
	);
};

export default App;
