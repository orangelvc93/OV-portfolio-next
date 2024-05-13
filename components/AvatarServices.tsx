import Image from "next/image";
import TransitionComponents from "./TransitionComponents";

const AvatarServices = () => {
	return (
		<>
			<TransitionComponents
				position="right"
				className="md:absolute md:inline-block bottom-0 left-0"
			>
				<Image
					src="/services.png"
					width={300}
					height={300}
					alt="Services img"
					className="w-[300px] h-full"
				/>
			</TransitionComponents>
		</>
	);
};

export default AvatarServices;
