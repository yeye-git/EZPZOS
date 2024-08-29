import React, { useState } from "react";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import LogoWithBG from "../../Assets/Images/LogoWithBG.png";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import { DefaultMenuRoutesValues } from "ezpzos.core";
import RestaurantContactDetails from "./RestaurantContactDetails";

interface RestaurantContactCardProps {
	name: string;
	address: string;
	tags: string[];
	phone: string;
	hours: string[];
	allergyInfo: string;
	onCallStaff: () => void;
}

/**
 * @param name is the name of the business {@link RestaurantContactCardProps.name}
 * @param address is the address of the business {@link RestaurantContactCardProps.address}
 * @param tags is an array of tags[] {@link RestaurantContactCardProps.tags}
 * @param phone - The contact phone number of the business {@link RestaurantContactCardProps.phone}
 * @param hours - An array of business hours {@link RestaurantContactCardProps.hours}
 * @param allergyInfo - A string of allergyInfo {@link RestaurantContactCardProps.tags}
 * @param onCallStaff is the callback function for "call staff" button {@link RestaurantContactCardProps.onCallStaff}
 */

const RestaurantContactCard: React.FC<RestaurantContactCardProps> = ({
	name,
	address,
	tags,
	phone,
	hours,
	allergyInfo,
	onCallStaff
}) => {
	const navigate = useNavigate();
	const [showDetails, setShowDetails] = useState(false);

	const handleSelect = (index: number) => {
		const tabName =
			index === 0
				? DefaultMenuRoutesValues.DineInRouteDefaultValue
				: DefaultMenuRoutesValues.TakeAwayRouteDefaultValue;
		navigate(`/${tabName}`);
	};

	const handleOpenDetails = () => {
		setShowDetails(true);
	};

	const handleCloseDetails = () => {
		setShowDetails(false);
	};

	return (
		<div className="relative">
			<div className="px-4 py-2 bg-white rounded-lg max-w-md mx-auto">
				<div className="flex items-center justify-between">
					<div className="cursor-pointer" onClick={handleOpenDetails}>
						<h2 className="text-[30px] font-extrabold text-gray-900 ">{name}</h2>
						<div className="text-gray-500 flex items-center">
							<p className="text-sm pt-2">{address}</p>
							<IoChevronForward className="mx-1 pt-2" size={22} />
						</div>
					</div>
					<img
						src={LogoWithBG}
						alt="Restaurant Logo"
						className="w-[120px] h-[120px] object-cover rounded-sm shadow-md shadow-[#C1C1C1] -translate-y-8"
					/>
				</div>
				<div className="mb-2">
					{
						//render each items in the tags list [], and display
						tags.map((tag, index) => (
							<span
								key={index}
								className="inline-block bg-clip-text text-transparent font-bold bg-brown-gradient text-sm px-1 py-1 rounded-full"
							>
								#{tag}
							</span>
						))
					}
				</div>
				<div className="mt-2 flex justify-between">
					{/* MenuTabs to switch between */}
					<Tabs className="w-[237px] h-[40px]" onSelect={handleSelect}>
						<TabList className="flex justify-center items-center text-center border-2 rounded-3xl border-transparent bg-primary-gray">
							<Tab
								className="w-[120px] list-none py-1 px-1 cursor-pointer text-[#5C3434] bg-primary-gray border-2 rounded-3xl border-primary-gbg-primary-gray transition-colors duration-300"
								selectedClassName="bg-white text-[#5C3434] border-primary-gray bg-primary-gray"
							>
								{DefaultMenuRoutesValues.DineInDefaultValue}
							</Tab>
							<Tab
								className="w-[120px] list-none py-1 px-1 cursor-pointer text-[#5C3434] bg-primary-gray border-2 rounded-3xl border-primary-gbg-primary-gray transition-colors duration-300"
								selectedClassName="bg-white text-[#5C3434] border-primary-gray bg-primary-gray"
							>
								{DefaultMenuRoutesValues.TakeAwayDefaultValue}
							</Tab>
						</TabList>
					</Tabs>
					<button
						onClick={onCallStaff}
						className="bg-[#AD98A0] text-white px-4 py-1 rounded-3xl w-[120px] h-[40px]"
					>
						Call Staff
					</button>
				</div>
			</div>
			{showDetails && (
				<RestaurantContactDetails
					name={name}
					address={address}
					phone={phone}
					hours={hours}
					tags={tags}
					allergyInfo={allergyInfo}
					onClose={handleCloseDetails}
				/>
			)}
		</div>
	);
};

export default RestaurantContactCard;
