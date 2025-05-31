import { ArrowRight, FolderOpen } from 'lucide-react';
import React, {   } from 'react'
import ProjectCard from './ProjectCard';
import { Element } from 'react-scroll';
import { projectData } from '../utils/data';
const Projects = () => {
  return (
		<Element name="Projects">
			<div className="  max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl shadow-lg text-secondry">
				<h3 className="text-2xl font-bold p-6 flex items-center gap-3">
					<span>
						<FolderOpen />
					</span>{" "}
					PROJECTS
				</h3>
{projectData.map((e,i)=> <ProjectCard key={i} title={e.title} description={e.description} features={e.features} technologies={e.technologies} cover_Image={e.cover_Image} />)}
			</div>
		</Element>
	);
}

export default Projects

