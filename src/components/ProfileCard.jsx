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

import {TwitterLogo,GithubLogo,LinkedInLogo} from "../assets/logos.jsx"

const SocialLinks = [
	{
		name: "Twitter",
		icon: <TwitterLogo />,
		handleName: "@deadpool59",
		link: "https://github.com/Kedar0023",
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
		link: "https://github.com/Kedar0023",
	},
];


export default function ProfileCard() {
	return (
		<div className="max-w-5xl mx-auto p-6 bg-zinc-950 rounded-3xl shadow-lg text-secondry ">
			<div className="flex flex-col md:flex-row items-center gap-6  h-[250px]">
				<div className="w-32 h-32 md:w-32 ">
					<img
						src="https://wallpapers.com/images/hd/cute-pfp-cat-with-anime-girl-8ujt5n810yysk256.jpg"
						alt="Profile"
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className="flex-1">
					<div className="flex items-center gap-2 mb-2">
						<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
						<p className="text-sm">AVAILABLE FOR HIRE</p>
					</div>
					<h1 className="text-3xl font-bold">KEDAR KOLASE</h1>
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
						I'm a passionate designer and developer with 6+ years of experience
						creating beautiful, functional interfaces. I specialize in React.js,
						Tailwind CSS, and responsive design principles that deliver
						exceptional user experiences.
					</p>
					<p className="text-zinc-400 mt-3">
						When I'm not coding, I enjoy exploring new technologies, watching
						anime, and experimenting with creative side projects. I believe in
						continuous learning and staying ahead of design trends to deliver
						innovative solutions to my clients.
					</p>
				</div>

				<div className="mt-6  w-full md:w-1/2">
					<h2 className="font-bold text-xl mb-2">CONNECT</h2>
					<div className="space-y-3">
						{SocialLinks.map((e, i) => (
							<div
								key={i}
								className="relative bg-zinc-800 h-auto rounded-xl px-4 py-2 flex items-center gap-5 shadow-[0_8px_30px_rgb(200,200,200,0.12)] "
							>
								<div className="bg-secondry p-1 rounded-md">{e.icon}</div>
								<div className="">
									<p className="">{e.name}</p>
									<span className="font-medium">{e.handleName}</span>
								</div>

								<a href={e.link}>
									<ArrowUpRight className="absolute right-3 top-2" />
								</a>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

