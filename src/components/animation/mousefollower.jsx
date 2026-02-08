import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
	const followerRef = useRef(null);
	const xTo = useRef(null);
	const yTo = useRef(null);

	useEffect(() => {
		const el = followerRef.current;

		// Setup GSAP quickTo for high performance mouse following
		xTo.current = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3" });
		yTo.current = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3" });

		// Initial set to avoid jump from top-left
		gsap.set(el, { xPercent: -50, yPercent: -50, x: window.innerWidth / 2, y: window.innerHeight / 2 });

		const handleMouseMove = (e) => {
			xTo.current(e.clientX);
			yTo.current(e.clientY);
		};

		const handleMouseDown = () => {
			gsap.to(el, { scale: 0.8, duration: 0.1 });
		};

		const handleMouseUp = () => {
			gsap.to(el, { scale: 1, duration: 0.1 });
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mousedown", handleMouseDown);
		window.addEventListener("mouseup", handleMouseUp);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mousedown", handleMouseDown);
			window.removeEventListener("mouseup", handleMouseUp);
		};
	}, []);

	return (
		<div
			ref={followerRef}
			className="fixed top-0 left-0 w-[20px] h-[20px] bg-secondry rounded-full pointer-events-none z-[9999]"
		></div>
	);
};

export default MouseFollower;