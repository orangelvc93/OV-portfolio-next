import TransitionComponents from "@/components/TransitionComponents";
import Image from "next/image";

const Avatar = () => {
	return (
		<TransitionComponents
			position="bottom"
			className="bottom-0 right-0 hidden  md:inline-block md:absolute"
		>
			<Image
				src="/avatar-1.png"
				width="400"
				height="400"
				className="w-full h-full "
				alt="Particles "
			/>
		</TransitionComponents>
	);
};

export default Avatar;
