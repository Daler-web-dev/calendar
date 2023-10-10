"use client";
import React, { useEffect, useState } from "react";

interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
	const [orders, setOrder] = useState<Array<any>>([]);
	const days = 7;
	const week = 1;
	const hours = [
		0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
		20, 21, 22, 23,
	];

	const current_time = new Date().getHours();

	useEffect(() => {
		let node = document.querySelector("#presentation") as HTMLElement;

		console.log(node.offsetHeight);
	}, []);

	return (
		<div className="overflow-hidden relative w-full h-screen">
			<div className="absolute top-0 left-0 right-0 bottom-0">
				<div className="flex items-start gap-5 w-full h-scree pl-10 py-10 h-full overflow-scroll">
					<div className="flex flex-col items-start border-r-2 border-[#c4c4c4] w-[5%]">
						{hours.map((item) => (
							<div
								key={item}
								className="h-[48px] pr-2 text-right"
							>
								<span className="block relative -top-[6px] whitespace-nowrap text-[10px]">
									{item} AM
								</span>
							</div>
						))}
					</div>
					<div
						onClick={(e) => {
							let node = e.target as HTMLElement;

							if (node.classList.contains("presentation")) {
								let coordsY = e.nativeEvent?.layerY - 48;

								if (!orders.find((el) => el.y === coordsY)) {
									setOrder([
										...orders,
										{ 
                                            y: e.nativeEvent?.layerY - 48, 
                                            time: e.nativeEvent?.layerY
                                        },
									]);
								}
							}
						}}
                        
						id="presentation"
						className="presentation flex flex-col w-full relative bg-red-500 h-[1152px]"
					>
						{orders.map((item) => (
							<div
								className="w-full bg-orange-500 h-[48px] absolute translate-y-[100%]"
								style={{ top: item.y + "px" }}
							>
                                {Math.round((item.time / 0.8) / 60 / 60)}
                                
								{/* pixels: {item.y} <br/>
								minutes: {item.y / 0.8} <br/>
								seconds: {(item.y / 0.8) * 60} */}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
