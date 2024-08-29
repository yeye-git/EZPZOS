// File: src/Components/MenuListRelated/RestaurantContactDetails.tsx
import React, { useState } from "react";
import AddressOnGoogleMap from "./AddressOnGoogleMap";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAccessTime, MdContentCopy, MdExpandMore, MdExpandLess } from "react-icons/md";
import { GiThreeLeaves } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import TagList from "./TagList";

interface RestaurantContactDetailsProps {
	name: string;
	address: string;
	phone: string;
	hours: string[];
	tags: string[];
	allergyInfo: string;
	onClose: () => void;
}
/**
 * @param name - The name of the business {@link RestaurantContactDetailsProps.name}
 * @param address - The address of the business {@link RestaurantContactDetailsProps.address}
 * @param phone - The contact phone number of the business {@link RestaurantContactDetailsProps.phone}
 * @param hours - An array of business hours {@link RestaurantContactDetailsProps.hours}
 * @param tags - An array of tags {@link RestaurantContactDetailsProps.tags}
 * @param allergyInfo - A string of allergyInfo {@link RestaurantContactDetailsProps.tags}
 * @param onClose - Callback function to close the contact details modal {@link RestaurantContactDetailsProps.onClose}
 */

const RestaurantContactDetails: React.FC<RestaurantContactDetailsProps> = ({
	name,
	address,
	phone,
	hours,
	tags,
	allergyInfo,
	onClose
}) => {
	const [showHours, setShowHours] = useState(false);
	const [showAllergyInfo, setShowAllergyInfo] = useState(false);
	const [copySuccess, setCopySuccess] = useState("");

	const toggleHours = () => setShowHours(!showHours);
	const toggleAllergyInfo = () => setShowAllergyInfo(!showAllergyInfo);

	const handleCopyAddress = () => {
		navigator.clipboard.writeText(address).then(
			() => {
				setCopySuccess("Address copied!");
				setTimeout(() => setCopySuccess(""), 2000); // Clear the message after 2 seconds
			},
			() => {
				setCopySuccess("Failed to copy address, try again.");
			}
		);
	};

	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-end z-50">
			<div className="bg-white w-full max-w-md h-[740px] rounded-t-lg">
				<div className="relative">
					<AddressOnGoogleMap address={address} />
					<button onClick={onClose} className="absolute top-2 right-2 black">
						<IoCloseOutline size={50} className="drop-shadow-md m-4" />
					</button>
				</div>
				{/* Resturant name + tag */}
				<div className="p-4">
					<h2 className="text-[24px] font-bold">{name}</h2>
					<TagList tags={tags} /> {/* Use the TagList component */}
				</div>
				<hr className="border-t-4 border-[#EEEBEB]" />
				{/* main info section below */}
				<div className="my-6">
					{/* This is address */}
					<div className=" px-8 py-4 flex items-center justify-between">
						<div className="flex items-center">
							<FaLocationDot size={20} />
							<p className="ml-4">{address}</p>
						</div>
						<MdContentCopy size={20} className="cursor-pointer" onClick={handleCopyAddress} />
					</div>
					{copySuccess && <div className="text-green-500 px-8 text-center">{copySuccess}</div>}
					{/* This is time */}
					<div className="px-8 py-4 ">
						<div className="flex items-center justify-between cursor-pointer" onClick={toggleHours}>
							<div className="flex items-center">
								<MdAccessTime size={20} />
								<span className="ml-4">Hours</span>
							</div>
							{showHours ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
						</div>
						{showHours && (
							<ul className="mt-2">
								{hours.map(
									(
										hour,
										index //map the opening hours here
									) => (
										<li key={index}>{hour}</li>
									)
								)}
							</ul>
						)}
					</div>
					{/* This is number */}
					<div className="flex items-center px-8 py-4">
						<BsFillTelephoneFill size={20} />
						<p className="ml-4">{phone}</p>
					</div>
					{/* This is Allergy Info*/}
					<div className="px-8 py-4 ">
						<div className="flex items-center justify-between cursor-pointer" onClick={toggleAllergyInfo}>
							<div className="flex items-center">
								<GiThreeLeaves size={20} />
								<span className="ml-4">Allergy Info</span>
							</div>
							{showAllergyInfo ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
						</div>
						{showAllergyInfo && <p className="mt-2"> {allergyInfo}</p>}
					</div>
					<div className="mt-8 mb-[50px] flex justify-center">
						<button
							onClick={() => window.confirm(`Call ${phone}?`) && window.open(`tel:${phone}`)}
							className="bg-black text-white text-[20px] px-4 py-2 rounded-lg h-[45px] w-[355px]"
						>
							CONTACT US
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RestaurantContactDetails;
