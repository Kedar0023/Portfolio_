// SecretSauce.js
import React from "react";
import StackIcon from "tech-stack-icons";
import { techStack } from "../utils/data";
import { Terminal } from "lucide-react";
import Button from "./ui/Button";
import { Element } from "react-scroll";

const MySkills = () => {
	return (
		<Element name="Skills">
			<section className="max-w-5xl mx-auto my-2  rounded-3xl shadow-lg text-secondry lg:h-[500px] gradient-background-circle ">
				<div className="flex  h-full flex-col  gap-3">
					<h3 className="text-2xl font-bold p-6 flex items-center gap-3">
						<span>
							<Terminal />
						</span>
						MY TECK SKILLS
					</h3>

					<div className="flex  flex-wrap justify-center gap-2 pb-5 lg:gap-4 px-4 md:px-20">
						{techStack.map((skill, index) => (
							<Button name={skill.name} icon={skill.icon} key={index} />
						))}
					</div>
				</div>
			</section>
		</Element>
	);
};

export default MySkills;
