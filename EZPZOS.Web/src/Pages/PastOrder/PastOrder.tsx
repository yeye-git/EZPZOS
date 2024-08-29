import { FaArrowLeftLong } from "react-icons/fa6";
import { DefaultPastOrderContent, PastOrderList } from "ezpzos.core";
import PastOrderComponent from "../../Components/UserProfileRelated/PastOrderComponent";
import { Link } from "react-router-dom";

export interface PastOrderProps {
	OrderId: string;
	Title: string;
	ItemNum: number;
	Price: number;
	Date: string;
	Status: string;
}
/**
 * This interface defining the properties for the PastOrderProps
 * @param OrderId pass a order string type id. 
 * @param Title pass a string type title of the pastorder restaurant.
 * @param ItemNum pass a number to show how many items in the past order.
 * @param Price pass a total number count of the past order price.
 * @param Date pass string type date of the past order.
 * @param Status pass a Status of the past order.

 * 
 */

const PastOrder = () => {
	// State to track the currently selected order for re-ordering
	return (
		<div className="relative w-full h-screen bg-[#CBC2C2] bg-opacity-35">
			<div className="absolute w-full h-[calc(100vh_-_56px)] bg-white top-[56px] left-0">
				<div className="relative h-[70px]">
					<div className="absolute left-5 top-5 h-[38px] text-2xl flex flex-row items-center">
						<FaArrowLeftLong fontWeight={400} />
						<Link to="/">
							<span className="ml-2">{DefaultPastOrderContent.Back}</span>
						</Link>
					</div>
					<div className="absolute left-0 right-0 top-0 bottom-0 m-auto overflow-hidden text-[#574545] text-xl w-[140px] h-[22px] text-center">
						{DefaultPastOrderContent.Title}
					</div>
				</div>
				<p className="text-sm text-[#574545] font-bold ml-5">{DefaultPastOrderContent.More}</p>

				{/* This map is used to map the pastorderlist item into the past order component */}
				{PastOrderList.map(item => (
					<PastOrderComponent
						key={item.OrderId}
						OrderId={item.OrderId}
						Title={item.Title}
						ItemNum={item.ItemNum}
						Price={item.Price}
						Date={item.Date}
						Status={item.Status}
					/>
				))}
			</div>
		</div>
	);
};

export default PastOrder;
