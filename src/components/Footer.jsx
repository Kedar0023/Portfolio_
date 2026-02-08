import React, { useEffect, useRef } from "react";
import { Clock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
	const footerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".footer-content", {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "power3.out",
				scrollTrigger: {
					trigger: footerRef.current,
					start: "top 90%",
					toggleActions: "play none none reverse"
				}
			});
		}, footerRef);

		return () => ctx.revert();
	}, []);

	return (
		<footer ref={footerRef} className="bg-zinc-950 text-secondry  mx-auto py-16 px-6 md:px-24 rounded-2xl footer-content cursor-none">
			<div className="text-center md:text-left mb-10">
				<p className="text-gray-400 text-sm mb-1">want to work with me ?</p>
				<h2 className="text-4xl md:text-6xl font-extrabold hover:text-white transition-colors duration-300">Let’s start</h2>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
				<div className="text-left">
					<p className="text-2xl md:text-3xl font-bold">
						<span className="text-white underline underline-offset-4 hover:text-green-400 transition-colors duration-300 cursor-none">
							kedar4official@gmail.com
						</span>
					</p>
					<div className="w-full h-px mt-2 bg-white opacity-20" />
				</div>



				<div className="flex items-start space-x-4">
					<div>
						<p className="text-lg font-bold">Kedar Kolase.</p>
						<p className="text-gray-400 text-sm">
							<span className="">&copy; 2025 All Rights Reserved</span>
						</p>
						<div className="w-full h-px mt-1 bg-white opacity-20" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
