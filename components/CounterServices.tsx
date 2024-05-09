"use client";
import CountUp from "react-countup";
import { dataCounter } from "@/data";

const CounterServices = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-4 mx-auto justify-between my-8 gap-3 md:gap-8">
			{dataCounter.map(
				({ id, endCounter, text, lineRight, lineRightMobile }) => (
					<div
						key={id}
						className={`${lineRight && "ltr"} `}
					>
						<div
							className={`${
								lineRight &&
								"border-2 border-transparent md:border-e-gray-100  "
							} ${lineRightMobile && "border-e-gray-100"} `}
						>
							<p className="flex mb-2 text-2xl md:text-4xl text-secondary font-extrabold ">
								+{" "}
								<CountUp
									end={endCounter}
									start={0}
									duration={5}
								/>{" "}
							</p>
							<p className="text-xs uppercase max-w-[100px]">{text}</p>
						</div>
					</div>
				)
			)}
		</div>
	);
};

export default CounterServices;
