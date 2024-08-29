import React, { useState, useRef, useEffect } from "react";
import HotSalesCard from "./HotSalesCard";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { DefaultHotSaleValues, HotSalesList } from "ezpzos.core";

export interface HotSaleProps {
	Rank: number;
	DishName: string;
	Like_Pc: number;
	Like_Qty: number;
	Price: number;
}

/**
 * This is the component of the hotsales, with child component HotSalesCard.
 * Card picture is imported from Images, may need modification later.
 * Currently, the maximum number of cards is 6, which means at most 6 cards can be added in the hotsales.
 * The function of the right button is done and the left button is also added.
 * When the card is moved to the rightmost/leftmost side, the right/left button is invisible.
 * @returns
 */
const HotSales: React.FC<HotSaleProps> = ({}) => {
	const [showLeft, setShowLeft] = useState(false);
	const [showRight, setShowRight] = useState(true);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			const container = containerRef.current;
			if (container) {
				const scrollLeft = container.scrollLeft;
				const scrollWidth = container.scrollWidth;
				const clientWidth = container.clientWidth;

				setShowLeft(scrollLeft > 0);
				setShowRight(scrollLeft < scrollWidth - clientWidth);
			}
		};

		handleScroll(); // Initial check

		const container = containerRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
			return () => container.removeEventListener("scroll", handleScroll);
		}
	}, []);

	const scrollContainer = (amount: number) => {
		const container = containerRef.current;
		if (container) {
			container.scrollBy({
				left: amount,
				behavior: "smooth"
			});
		}
	};

	return (
		<div className="hotSales_text h-[270px] bg-gradient-to-b from-[#FBA96E] to-[#FFCECE78] relative">
			<div className="relative flex flex-col m-auto p-auto">
				<div className="mt-2">
					<span className="font-bold text-[20px]/[30px] ml-[17px] ">{DefaultHotSaleValues.Title}</span>
					<span className="text-[14px]/[21px] text-[#4D4D4D] ml-[17px]">
						{DefaultHotSaleValues.Description}
					</span>
				</div>
				{showLeft && (
					<button
						onClick={() => scrollContainer(-containerRef.current?.clientWidth * 3)}
						className="absolute left-0 ml-2 p-2 text-gray-600 hover:text-gray-900 z-10"
					>
						<div className="relative size-[46px] top-[100px] l-[14px] z-50 bg-[#FFF3F3] rounded-full flex justify-center items-center">
							<FaChevronLeft className="gradient-icon text-[#d17461] text-[30px] " size={24} />
						</div>
					</button>
				)}
				{showRight && (
					<button
						onClick={() => scrollContainer(containerRef.current?.clientWidth * 2)}
						className="absolute right-0 mr-2 p-2 text-gray-600 hover:text-gray-900 z-10"
					>
						<div className="relative size-[46px] top-[100px] r-[50px] z-50 bg-[#FFF3F3] rounded-full flex justify-center items-center">
							<FaChevronRight className="gradient-icon text-[#d17461] text-[30px] " size={24} />
						</div>
					</button>
				)}
				<div ref={containerRef} className="flex overflow-x-scroll pb-10 no-scrollbar hide-scroll-bar">
					<div className="flex flex-nowrap mt-0 lg:ml-40 md:ml-10 ml-2 mr-2 transform transition-transform duration-1000">
						
						{/*this is used to map the mock data HotSalesList to show each hot sale card*/}
						{HotSalesList.map((item: any, index: any) => (
							<div key={index} className="inline-block px-1">
								<HotSalesCard
									rank={index + 1}
									dishName={item.DishName}
									like_pc={item.Like_Pc}
									like_qty={item.Like_Qty}
									price={item.Price}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default HotSales;
