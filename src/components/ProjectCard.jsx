import React from 'react'
import placeholderVideo from "../assets/videoplayback.mp4"; 

const ProjectCard = () => {
  return (
		<div className="my-3 p-6 border border-zinc-900 rounded-xl shadow-[0_8px_20px_rgb(200,200,200,0.12)] flex flex-col lg:flex-row items-start justify-center gap-8">
			{/* Video Placeholder  */}
			<div className="flex-1 max-w-xl rounded-3xl">
				<div className="aspect-auto w-[500px] h-[500px] bg-zinc-800 rounded-xl flex items-center justify-center border border-zinc-700 ">
					<video
						className=""
						src={placeholderVideo}
						autoPlay={false}
						loop
						muted
					></video>
				</div>
			</div>

			{/* Right Side: Description & Features */}
			<div className="flex-1 max-w-xl">
				<h2 className="text-3xl font-bold mb-4">Next Ventures</h2>
				<p className="text-zinc-400 mb-6">
					A platform designed for early-stage entrepreneurs to pitch, browse,
					and engage with startup ideas. It’s built to impress both users and
					investors with blazing speed, compelling visuals, and a modern tech
					stack.
				</p>

				<ul className="space-y-3 mb-6">
					<li className="text-white">
						• Leveraged Partial Prerendering and After for faster loading.
					</li>
					<li className="text-white">
						• Simplified idea submission with a clean, intuitive design.
					</li>
					<li className="text-white">
						• Enhanced browsing with seamless performance optimization.
					</li>
				</ul>

				<div className="flex flex-wrap gap-3">
					{[
						"Next.js",
						"React",
						"Tailwind CSS",
						"TypeScript",
						"Framer Motion",
						"Sanity cms",
						"Auth.js",
						"markdown",
						"GROQ",
						"Sentry",
					].map((tech) => (
						<span
							key={tech}
							className="px-3 py-1 text-sm bg-zinc-800 border border-zinc-700 rounded-full"
						>
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard