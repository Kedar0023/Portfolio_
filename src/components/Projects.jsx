import { ArrowRight, FolderOpen } from 'lucide-react';
import React from 'react'
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import { projectData } from '../utils/data';

const Projects = () => {


	return (
		<Element name="Projects">
			<div className="max-w-5xl mx-auto  relative">
				<h3 className="text-2xl font-bold p-6 flex items-center gap-3 text-secondry sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md rounded-b-3xl mb-10 transition-all duration-300">
					<span>
						<FolderOpen />
					</span>{" "}
					PROJECTS
				</h3>
				<div className="flex flex-col">
					{projectData.map((e, i) => (
						<div key={i} className="project-card-container bg-zinc-950 rounded-3xl shadow-xl border border-zinc-900 overflow-hidden mb-10"
							style={{ zIndex: i + 1 }}
						>
							<ProjectCard title={e.title} description={e.description} features={e.features} technologies={e.technologies} cover_Image={e.cover_Image} github={e.github} />
						</div>
					))}
				</div>
			</div>
		</Element>
	);
}

export default Projects

