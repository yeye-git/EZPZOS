import React from "react";
import { DefaultPastOrderContent } from "ezpzos.core";
import { PastOrderProps } from "../../Pages/PastOrder/PastOrder";
import { useState } from "react";

/**
 * @param props - The object of the past order {@link PastOrderProps}
 * @param handleReOrder - Callback function to order again {@link handleReOrder}
 */

const PastOrderComponent: React.FC<PastOrderProps> = props => {
	const { OrderId, Title, ItemNum, Price, Date, Status } = props;
	const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);

	const handleReOrder = (orderId: string) => {
		// Set the selected order ID in the state
		setSelectedOrderId(orderId);
		// TODO: would typically make an API call here to reorder the item
	};
	// Handler for "Order Again" button click
	const handleOrderAgain = () => {
		// Log the order ID when the button is clicked
        
		console.log(`Reordering item with ID: ${OrderId}`);
		// Call the handleReOrder function if needed
		handleReOrder(OrderId);
	};

	return (
		<section className="relative after:content-[''] after:bg-[#CBC2C2] after:bg-opacity-35 after:block after:h-3">
			<div className="ml-5 mr-5 py-3">
				<h2 className="pt-4 font-bold text-base">{Title}</h2>
				<div className="text-sm text-gray-400 mt-2">
					{ItemNum} {DefaultPastOrderContent.Items} {DefaultPastOrderContent.CurrencySymbol}
					{Price}
				</div>
				<div className="text-sm font-regular mt-2">
					{Date} {Status}
				</div>
			</div>
			<button
				className="absolute right-5 bottom-[40px] w-[103px] h-[32px] leading-8 bg-black text-white text-center rounded-3xl"
				onClick={handleOrderAgain}
			>
				{DefaultPastOrderContent.BtnTitle}
			</button>
		</section>
	);
};

export default PastOrderComponent;
