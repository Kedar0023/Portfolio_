import { useState, useEffect, useRef } from "react";
import logo from "../assets/image 1.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-scroll";
import resumelink from '../assets/My_Resume.pdf'
import gsap from "gsap";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const navRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".nav-logo", {
				y: -50,
				opacity: 0,
				duration: 1,
				ease: "power3.out"
			});

			gsap.from(".nav-item", {
				y: -50,
				opacity: 0,
				duration: 0.8,
				stagger: 0.1,
				ease: "power3.out",
				delay: 0.2
			});
			gsap.from(".nav-resume", {
				scale: 0,
				opacity: 0,
				duration: 0.5,
				ease: "back.out(1.7)",
				delay: 0.8
			});
		}, navRef);

		return () => ctx.revert();
	}, []);

	const navLinks = ["About", "Projects", "Skills", "Contact"];

	return (
		<nav ref={navRef} className="bg-zinc-800/30 fixed inset-0 h-16 backdrop-blur-md rounded-lg z-9999">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
				<div className="flex items-center justify-between h-16">
					<div className="w-full flex items-center justify-between">
						<div className="shrink-0 nav-logo">
							<img src={logo} alt="kedar" className="h-7" />
						</div>
						<div className="hidden md:flex">
							<div className="ml-10 flex items-baseline space-x-4">
								{navLinks.map((e, i) => (
									<Link
										to={e}
										smooth={true}
										duration={300}
										key={i}
										offset={-95}
									>
										<button className="relative group py-1 px-2.5 nav-item">
											<span className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full bg-secondry group-hover:w-full group-hover:transition-all duration-200"></span>
											{e}
										</button>
									</Link>
								))}
							</div>
						</div>
						<motion.a
							href={resumelink}
							target="_blank"
							whileTap={{ scale: 0.9 }}
							whileHover={{ color: "white", backgroundColor: "#242424" }}
							className="flex bg-secondry font-semibold text-primary rounded-lg px-3 py-1 mr-5 lg:mr-0 nav-resume"
						>
							Resume
						</motion.a>
					</div>

					{/* Mobile menu button */}
					<div className="-mr-2 flex md:hidden ">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-xl  hover: hover:bg-zinc-700"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							{isOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>
			</div>
			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{
							height: 0,
							opacity: 0,
							y: -20,
						}}
						animate={{
							height: "40vh",
							opacity: 1,
							y: 0,
							transition: {
								type: "spring",
								damping: 15,
								stiffness: 100,
							},
						}}
						exit={{
							height: 0,
							opacity: 0,
							y: -20,
							transition: {
								duration: 0.3,
								ease: "easeIn",
							},
						}}
						className="md:hidden bg-zinc-900 backdrop-blur-lg z-50 overflow-hidden"
					>
						<motion.div
							className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: { delay: 0.2, staggerChildren: 0.1 },
							}}
							exit={{ opacity: 0 }}
						>
							{navLinks.map((e, i) => (
								<motion.a
									key={i}
									href="#"
									className="block px-3 py-2 rounded-md text-base font-medium"
									initial={{ x: -20, opacity: 0 }}
									animate={{
										x: 0,
										opacity: 1,
										transition: {
											type: "spring",
											stiffness: 100,
										},
									}}
									whileHover={{
										scale: 1.05,
										backgroundColor: "rgba(255, 255, 255, 0.1)",
									}}
									whileTap={{ scale: 0.95 }}
								>
									{e}
								</motion.a>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
