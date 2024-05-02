"use client";

interface MotionTransitionProps {
	children: React.ReactNode;
	position: "bottom" | "right";
	className?: string;
}

import { fadeIn } from "@/utils/MotionTransition";
import { motion } from "framer-motion";
const TransitionComponents = (props: MotionTransitionProps) => {
	const { children, position, className } = props;

	return (
		<motion.div
			variants={fadeIn(position)}
			initial={"hidden"}
			animate="visible"
			exit="hidden"
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default TransitionComponents;
