import { ArrowRight, FolderOpen } from 'lucide-react';
import React, {   } from 'react'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
		<div className="  max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl shadow-lg text-secondry">
			<h3 className="text-2xl font-bold p-6 flex items-center gap-3">
				<span>
					<FolderOpen />
				</span>{" "}
				PROJECTS
			</h3>

			<div >
				<ProjectCard />
			</div>
			<div>
				<ProjectCard />
			</div>
		</div>
	);
}

export default Projects

