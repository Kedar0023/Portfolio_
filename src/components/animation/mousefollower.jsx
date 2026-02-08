// import React, { useEffect, useRef } from "react";

// const MouseFollower = () => {
// 	const followerRef = useRef(null);
// 	useEffect(() => {
// 		const handleMouseMove = (e) => {
// 			const el = followerRef.current;
// 			// add delay here 👇
			
// 				if (el) {
// 					el.style.left = `${e.clientX}px`;
// 					el.style.top = `${e.clientY}px`;
// 				}
			
// 		};

// 		window.addEventListener("mousemove", handleMouseMove);

// 		return () => {
// 			window.removeEventListener("mousemove", handleMouseMove);
// 		};
// 	}, []);

// 	return (
// 		<div
// 			ref={followerRef}
// 			className="fixed w-[20px] h-[20px] bg-secondry rounded-full pointer-events-none translate-x-[-50%] translate-y-[-50%] z-[9999]"
// 		></div>
// 	);
// };

// export default MouseFollower;



import React, { useEffect, useRef, useState } from "react";

const MouseFollower = () => {
	const followerRef = useRef(null);
	const posRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0, timestamp: 0 });
	const [dimensions, setDimensions] = useState({ width: 25, height: 25 });

	useEffect(() => {
		const el = followerRef.current;
		if (el) {
			// Apply smooth transition for the delay effect
			el.style.transition =
				"transform 0.3s ease-out, width 0.2s ease-out, height 0.2s ease-out";
		}
	}, []);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const now = Date.now();
			const el = followerRef.current;

			if (el) {
				// Calculate mouse speed
				const speed =
					Math.sqrt(
						Math.pow(e.clientX - posRef.current.prevX, 2) +
							Math.pow(e.clientY - posRef.current.prevY, 2)
					) / (now - posRef.current.timestamp || 1);

				// Update dimensions based on speed (with limits)
				const baseSize = 25;
				const stretchFactor = Math.min(speed * 0.5, 10); // Limit the maximum stretch
				const newWidth = baseSize + stretchFactor;
				const newHeight = Math.max(
					baseSize - stretchFactor * 0.3,
					baseSize * 0.7
				); // Prevent too small height

				setDimensions({
					width: newWidth,
					height: newHeight,
				});

				// Update position with smooth delay (handled by CSS transition)
				el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;

				// Store current position and time for next calculation
				posRef.current = {
					x: e.clientX,
					y: e.clientY,
					prevX: posRef.current.x,
					prevY: posRef.current.y,
					timestamp: now,
				};
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			ref={followerRef}
			className="fixed w-[20px] h-[20px] bg-secondry rounded-full pointer-events-none z-[9999]"
			style={{
				width: `${dimensions.width}px`,
				height: `${dimensions.height}px`,
				left: 0,
				top: 0,
				transform: "translate(0, 0) translate(-50%, -50%)",
			}}
		></div>
	);
};

export default MouseFollower;