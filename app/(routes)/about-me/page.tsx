import TransitionPage from "@/components/TransitionPage";
import ContainerPage from "@/components/ContainerPage";
import Avatar from "@/components/Avatar";
import CounterServices from "@/components/CounterServices";

const PageAboutMe = () => {
	return (
		<>
			<TransitionPage />
			<ContainerPage>
				<Avatar />

				<h1 className="text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">
					Toda mi{" "}
					<span className="font-bold text-secondary">
						trayectoria profesional
					</span>
				</h1>
				<CounterServices />
			</ContainerPage>
		</>
	);
};

export default PageAboutMe;
