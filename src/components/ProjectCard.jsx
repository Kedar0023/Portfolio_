import React from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";

const ProjectCard = ({ title, description, features, technologies, cover_Image, github }) => {
	return (
		<div className="p-6 border-b-2 border-b-zinc-900 rounded-xl hadow-[0_8px_20px_rgb(200,200,200,0.12)] flex flex-col lg:flex-row items-center justify-center gap-8 bg-zinc-950/50 backdrop-blur-sm">
			{/* Video Placeholder  */}
			<div className="flex-1 max-w-xl rounded-3xl">
				<div className=" rounded-xl flex items-center justify-center  ">
					<img src={cover_Image} alt={title} className="object-cover h-[120%] rounded-2xl transition-transform duration-500 hover:scale-105" />
				</div>
			</div>

			{/* Right Side: Description & Features */}
			<div className="flex-1 max-w-xl">
				<div className="flex items-center justify-between mb-4">
					<h2 className="flex  items-baseline gap-5 text-3xl font-bold">
						{title}
					</h2>
					{github && (
						<motion.a
							href={github}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.1, rotate: 5 }}
							whileTap={{ scale: 0.95 }}
							className="bg-neutral-800 p-2 rounded-full hover:bg-neutral-700 transition-colors border border-neutral-700"
							title="View on GitHub"
						>
							<Github className="w-6 h-6 text-white" />
						</motion.a>
					)}
				</div>

				<p className="text-zinc-400 mb-6">{description}</p>

				<ul className="space-y-3 mb-6">
					{features.map((e, i) => (
						<li className="text-white" key={i}>
							• {e}
						</li>
					))}
				</ul>

				<div className="flex flex-wrap gap-3">
					{technologies.map((e) => (
						<span
							key={e}
							className="px-3 py-1 text-sm bg-zinc-900 border border-zinc-700 rounded-full hover:scale-105 transition-transform"
						>
							{e}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
