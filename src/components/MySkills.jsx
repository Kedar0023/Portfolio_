// SecretSauce.js
import React, { useEffect, useRef } from "react";
import StackIcon from "tech-stack-icons";
import { techStack } from "../utils/data";
import { Terminal } from "lucide-react";
import Button from "./ui/Button";
import { Element } from "react-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
	const componentRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".skill-item", {
				scale: 0.5,
				opacity: 0,
				duration: 0.5,
				stagger: 0.05,
				ease: "back.out(1.7)",
				scrollTrigger: {
					trigger: componentRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse"
				}
			});
		}, componentRef);

		return () => ctx.revert();
	}, []);

	return (
		<Element name="Skills">
			<section ref={componentRef} className="max-w-5xl mx-auto my-2 rounded-3xl shadow-lg text-secondry min-h-[500px] gradient-background-circle py-8">
				<div className="flex  h-full flex-col  gap-3">
					<h3 className="text-2xl font-bold p-6 flex items-center gap-3">
						<span>
							<Terminal />
						</span>
						MY TECK SKILLS
					</h3>

					<div className="flex flex-col items-center justify-center w-full gap-8 pb-5">
						{Object.entries(techStack).map(([category, skills]) => (
							<div key={category} className="w-full">
								<h4 className="text-xl font-bold mb-4 text-start text-zinc-400 uppercase tracking-wide lg:gap-4 px-4 md:px-20">
									{category}
								</h4>
								<div className="flex flex-wrap justify-start gap-2 lg:gap-4 px-4 md:px-20">
									{skills.map((skill, index) => (
										<div key={index} className="skill-item">
											<Button name={skill.name} icon={skill.icon} />
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</Element>
	);
};

export default MySkills;
