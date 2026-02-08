import StackIcon from "tech-stack-icons";

const Button = ({ name, icon }) => {
	const showIcon = !["authjs", "betterauth", "express", "socketio"].includes(
		icon
	);

	return (
		<div className="flex items-center justify-center rounded-2xl text-sm lg:text-lg">
			<button
				className="flex items-center space-x-3 px-2 py-1 lg:px-6 lg:py-3 font-semibold bg-neutral-900 text-secondry rounded-xl transition-all duration-100 ease-in-out hover:border-zinc-700 hover:scale-105
			border border-zinc-800
			 "
			>
				{showIcon && <StackIcon name={icon} className="h-6 w-6" />}
				<span>{name}</span>
			</button>
		</div>
	);
};

export default Button;
