import React from "react";
import StackIcon from "tech-stack-icons";

const Button = ({ name, icon }) => {
	const showIcon = !["authjs", "betterauth", "express", "socketio"].includes(
		icon
	);

	return (
		<div className="flex items-center justify-center rounded-2xl">
			<button className="relative inline-flex items-center space-x-3 px-6 py-3 font-semibold bg-zinc-900 text-secondry rounded-xl shadow-md transition-all duration-100 ease-in-out   hover:text-sky-300 ">
				{showIcon && <StackIcon name={icon} className="h-6 w-6" />}
				<span>{name}</span>
			</button>
		</div>
	);
};

export default Button;
