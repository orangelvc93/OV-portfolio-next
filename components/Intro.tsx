"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Intro = () => {
	return (
		<div className="z-20  w-full h-full bg-darkBg/60">
			<div className="z-20 grid items-center h-full p-6 py-32 md:py-0 md:grid-cols-2 max-w-7xl mx-auto ">
				<Image
					src="/home-4.png"
					width="800"
					height="800"
					priority
					alt="Imagen de Perfil"
				/>

				<div className="flex flex-col justify-center max-w-md">
					<h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
						Si puedes pensarlo,
						<TypeAnimation
							sequence={[
								"puedes programarlo",
								1000,
								"puedes optimizarlo",
								1000,
								"puedes implementarlo",
								1000,
								"puedes desarrollarlos",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className=" block font-bold text-secondary"
						/>
					</h1>
					<p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8 text-center md:text-left">
						Como desarrollador Front-end y creador de contenido, me dedico a
						combinar diseño y funcionalidad para crear experiencias digitales
						impactantes y accesibles.
					</p>

					<div className="flex items-center justify-center gap-3 md:justify-start">
						<Link
							href="/projects"
							className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-2xl hover:shadow-white/50 hover:animate-pulse"
						>
							Ver Proyectos
						</Link>
						<Link
							href="/contact"
							className="px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-2xl hover:shadow-secondary/50 text-secondary border-secondary hover:animate-pulse"
						>
							Contacta conmigo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
