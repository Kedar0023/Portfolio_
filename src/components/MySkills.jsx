// SecretSauce.js
import React from "react";
import StackIcon from "tech-stack-icons";
import { techStack } from "../utils/data";
import { Terminal } from "lucide-react";
import Button from "./ui/Button";

const MySkills = () => {
	return (
		<section className="max-w-5xl mx-auto my-2 bg-zinc-950 rounded-3xl shadow-lg text-secondry h-[500px]  ">
			<div className="flex  h-full flex-col  gap-3">
				<h3 className="text-2xl font-bold p-6 flex items-center gap-3">
					<span>
						<Terminal />
					</span>
					MY TECK SKILLS
				</h3>

				<div className="flex  flex-wrap justify-center gap-4 px-20">
					{techStack.map((skill, index) => (
						// <div
						// 	key={index}
						// 	className="bg-gray-900 border border-gray-700 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-800 transition"
						// >
						// 	{!["authjs", "betterauth", "express", "socketio"].includes(
						// 		skill.icon
						// 	) && <StackIcon name={skill.icon} className="h-6 w-6" />}

						// 	<span className="text-sm">{skill.name}</span>
						// </div>
                        
                        <Button name={skill.name} icon={skill.icon} key={index}/>
					))}
				</div>
					
			</div>
		</section>
	);
};

export default MySkills;
