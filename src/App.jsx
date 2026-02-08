import React, { useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import MySkills from "./components/MySkills";
import logo from "./assets/narutologo.png";
import Footer from "./components/Footer";
import MouseFollower from "./components/animation/mousefollower";
import { Element } from "react-scroll";
import Aurora from './components/animation/Aurora';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis';
import Particles from "./components/animation/StarryBg";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
	const contactRef = useRef(null);
	const Lerning = ["neural networks", "deep learning", "kubernetes", "ML Ops"];

	useEffect(() => {
		// Initialize Lenis for smooth scrolling
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			mouseMultiplier: 1,
			smoothTouch: false,
			touchMultiplier: 2,
		});

		// Integrate Lenis with GSAP ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		const update = (time) => {
			lenis.raf(time * 1000);
		};

		gsap.ticker.add(update);

		gsap.ticker.lagSmoothing(0);

		// Initialize GSAP animations
		const ctx = gsap.context(() => {
			gsap.from(".contact-section", {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: contactRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse"
				}
			});
		}, contactRef);

		return () => {
			ctx.revert();
			lenis.destroy();
			gsap.ticker.remove(update);
		};
	}, []);

	return (

		<div className="relative">
			<div className="absolute top-0 left-0 w-full h-full z-0">
				<Particles
					particleColors={["#ffffff"]}
					particleCount={100}
					particleSpread={5}
					speed={0.1}
					particleBaseSize={100}
					moveParticlesOnHover={false}
					alphaParticles={false}
					disableRotation={false}
					pixelRatio={1}
				/>
			</div>

			<div
				className={`min-h-screen w-screen bg-primary text-secondry font-extralight pt-16 cursor-none z-10`}
			>
				<MouseFollower />
				<Navbar />
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<ProfileCard />
					<Projects />
					<MySkills />
					<Element name="Contact">
						<section ref={contactRef}
							className="max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl  text-secondry  lg:h-[180px] flex p-6 shadow-[0_8px_20px_rgb(200,200,200,0.12)] 
						relative before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,var(--color-white)_50%,transparent_75%,transparent_100%)]/20  before:bg-size-[250%_250%,100%_100%] before:bg-position-[200%_0,0_0] before:bg-no-repeat before:[transition:background-position_0s_ease] hover:before:bg-position-[-100%_0,0_0] hover:before:duration-1500 contact-section cursor-none"
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
											className="inline-flex items-center px-3 py-1 rounded-full bg-neutral-900 text-white text-sm font-semibold border border-neutral-700 hover:scale-105 hover:bg-zinc-800 transition-all duration-200"
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
		</div>
	);
};

export default App;
