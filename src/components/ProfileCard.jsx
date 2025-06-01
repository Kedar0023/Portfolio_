import {
	Globe,
	Rocket,
	Laptop,
	Languages,
	GraduationCap,
	Smile,
	PopcornIcon,
	ArrowUpRight,
} from "lucide-react";

import { TwitterLogo, GithubLogo, LinkedInLogo } from "../assets/logos.jsx";
import { motion } from "motion/react";
import { Element } from "react-scroll";
import pfp from "../assets/cute-pfp-cat-with-anime-girl.jpg";

const SocialLinks = [
	{
		name: "Twitter",
		icon: <TwitterLogo />,
		handleName: "@deadpool59",
		link: "https://x.com/itsdeadpool59",
	},
	{
		name: "Github",
		icon: <GithubLogo />,
		handleName: "@Kedar0023_",
		link: "https://github.com/Kedar0023",
	},
	{
		name: "LinkedIn",
		icon: <LinkedInLogo />,
		handleName: "@kedar_kolase",
		link: "https://www.linkedin.com/in/kedar-kolase-80a1a02a3",
	},
];

export default function ProfileCard() {
	let interval = null;

	const textHoverEffect = (e) => {
		const originalText = e.target.dataset.value;
		const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		let iteration = 0;

		clearInterval(interval);

		interval = setInterval(() => {
			e.target.innerText = originalText
				.split("")
				.map((letter, index) => {
					if (index < iteration) {
						return originalText[index];
					}
					return alphabets[Math.floor(Math.random() * 26)];
				})
				.join("");

			if (iteration >= originalText.length) {
				clearInterval(interval);
			}

			iteration += 1 / 3;
		}, 20);
	};

	const resetText = (e) => {
		clearInterval(interval);
		e.target.innerText = e.target.dataset.value;
	};

	return (
		<Element name="About">
			<div className="max-w-5xl mx-auto mt-5 p-6 gradient-background rounded-3xl shadow-lg text-secondry ">
				<div className="flex flex-col md:flex-row items-center gap-6  h-[250px]">
					<div className="w-32 h-32 md:w-32 ">
						<img
							src={pfp}
							alt="Profile"
							className="w-full h-full object-cover rounded-2xl"
						/>
					</div>
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-2">
							<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
							<p className="text-sm">AVAILABLE FOR HIRE</p>
						</div>
						<h1
							className="inline-block text-3xl font-bold"
							data-value="KEDAR KOLASE"
							onMouseOver={textHoverEffect}
							onMouseOut={resetText}
						>
							KEDAR KOLASE
						</h1>
						<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4 text-sm">
							<div className="flex items-center gap-2">
								<Globe size={18} /> India
							</div>
							<div className="flex items-center gap-2">
								<Rocket size={18} /> Hungry Lerner
							</div>
							<div className="flex items-center gap-2">
								<Laptop size={18} /> Software Engineer
							</div>
							<div className="flex items-center gap-2">
								<Languages size={18} /> English & Hindi
							</div>
							<div className="flex items-center gap-2">
								<PopcornIcon size={18} /> Anime fanboy
							</div>
						</div>
					</div>
				</div>

				<div className="flex  flex-col md:flex-row  mt-20 md:mt-0 gap-2">
					<div className="mt-6 w-full md:w-1/2">
						<h2 className="font-bold text-xl mb-2">ABOUT ME</h2>
						<p className="text-zinc-300">
							Developer and relentless learner with a vision for building
							unique, impactful digital experiences.I tackle challenges
							head-on and solve problems with my own creative twist.
						</p>
						<p className="text-zinc-400 mt-3">
							I’m passionate about exploring new technologies, diving into
							anime, and building creative side projects. Right now, I’ve
							entered my Deep Learning and DevOps training arc, navigating this
							sea of knowledge to find the One Piece
						</p>
					</div>

					<div className="mt-6  w-full md:w-1/2">
						<h2 className="font-bold text-xl mb-2">CONNECT</h2>
						<div className="space-y-3">
							{SocialLinks.map((e, i) => (
								<motion.a
									href={e.link}
									target="_blank"
									whileTap={{ scale: 0.9 }}
									key={i}
									className="relative bg-zinc-950 h-auto rounded-xl px-4 py-2 flex items-center gap-5  "
								>
									<div className="bg-secondry p-1 rounded-md">{e.icon}</div>
									<div className="">
										<p className="">{e.name}</p>
										<span className="font-medium">{e.handleName}</span>
									</div>

									<ArrowUpRight className="absolute right-3 top-2" />
								</motion.a>
							))}
						</div>
					</div>
				</div>
			</div>
		</Element>
	);
}
