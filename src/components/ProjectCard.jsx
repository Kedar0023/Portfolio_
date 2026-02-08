import React from "react";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, features, technologies ,cover_Image}) => {
	return (
		<div className="my-3 p-6 border-b-2 border-b-zinc-900 rounded-xl hadow-[0_8px_20px_rgb(200,200,200,0.12)] flex flex-col lg:flex-row items-center justify-center gap-8">
			{/* Video Placeholder  */}
			<div className="flex-1 max-w-xl rounded-3xl">
				<div className=" rounded-xl flex items-center justify-center  ">
					<img src={cover_Image} alt={title} className="object-cover h-[120%] rounded-2xl" />
				</div>
			</div>

			{/* Right Side: Description & Features */}
			<div className="flex-1 max-w-xl">
				<h2 className="flex  items-baseline gap-5 text-3xl font-bold mb-4">
					{title}
					<span>
						<ArrowUpRight />{" "}
					</span>
				</h2>
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
							className="px-3 py-1 text-sm bg-zinc-900 border border-zinc-700 rounded-full hover:scale-105"
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
