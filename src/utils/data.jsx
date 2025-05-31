// skills.js
export const techStack = [
	{ name: "HTML/CSS", icon: "html5" },
	{ name: "JavaScript", icon: "js" },
	{ name: "React", icon: "reactjs" },
	{ name: "Express.js", icon: "express" },
	{ name: "Tailwind CSS", icon: "tailwindcss" },
	{ name: "MongoDB", icon: "mongodb" },
	{ name: "PostgreSQL", icon: "postgresql" },
	{ name: "Redis", icon: "redis" },
	{ name: "Prisma", icon: "prisma" },
	{ name: "Next.js", icon: "nextjs2" },
	{ name: "tRPC", icon: "tRPC" },
	{ name: "TypeScript", icon: "typescript" },
	{ name: "Auth.js", icon: "authjs" },
	{ name: "BetterAuth", icon: "betterauth" }, // Placeholder, not standard
	{ name: "Python", icon: "python" },
	{ name: "C++", icon: "c++" },
	{ name: "Node.js", icon: "nodejs" },
	{ name: "Socket.IO", icon: "socketio" },
	{ name: "Git", icon: "git" },
	{ name: "GitHub", icon: "github" },
	{ name: "Docker", icon: "docker" },
	{ name: "Flask", icon: "flask" },
];

import ss1 from "../assets/CoverImages/ss1.png";
import ss2 from "../assets/CoverImages/ss2.png";

export const projectData = [
	{
		title: "ShadowForm: AI Form Builder",
		description:
			"An Ai powered form builder that allows users to create forms with prompts and Share them with others. Generation Whole form or Specific Question Everything can be done with a few clicks. This application built using T3 stack and gemini 2.5 ",

		features: [
			"Create forms with prompts",
			"Allow users to share and fill out forms",
			"simple Built in Analysis tools for Visualization ",
		],

		technologies: [
			"React",
			"Node.js",
			"Shadcn UI",
			"tRPC",
			"better auth",
			"Tailwindcss",
			"Vercel AI sdk",
			"motion",
			"Postgresql",
			"Prisma",
			"Zod",
		],
		cover_Image:ss2,
	},
	{
		title: "HealthSync: healthcare companion",
		description:
			"An AI powered dashboard to manage all the health care related tasks. It provides a all in One dashboard to manage all the health care related tasks like managing appointments ,prescriptions AI assistant and much more, ",

		features: [
			"AI assistant for health care related tasks",
			"Manage Appointments and Prescriptions",
			"Share All Health data Via QR code Or Link",
		],

		technologies: [
			"React",
			"TypeScript",
			"Node.js",
			"Shadcn UI",
			"tRPC",
			"better auth",
			"Tailwindcss",
			"Vercel AI sdk",
			"motion",
			"Postgresql",
			"Prisma",
			"Zod",
		],
		cover_Image: ss1,
	},
	{
		title: "WeeChat ChatApp",
		description:
			"A simple chat app built with React and NodeJs with help of Socket.io for real-time communication between users. Provides unique ui customization and user friendly interface for better user experience. This application usees Mongodb as database and ExpressJs as backend.",

		features: [
			"Real-time messaging",
			"User-friendly UI",
			"Unique UI customization",
			"User authentication and authorization",
		],

		technologies: [
			"React",
			"Node.js",
			"Socket.io",
			"MongoDB",
			"Express.js",
			"Tailwindcss",
			"Radix UI",
			"CloudinaryJS",
			"Zustand",
			"Zod",
		],
		cover_Image: ss1,
	},
];
