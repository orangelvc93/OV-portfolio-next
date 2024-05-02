import CoverParticles from "@/components/CoverParticles";
import Intro from "@/components/Intro";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
	return (
		<main className="md:h-[100dvh]">
			<TransitionPage />
			<div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
				<CoverParticles />
				<Intro />
			</div>
		</main>
	);
}
