import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoPersonOutline, IoTimeOutline } from "react-icons/io5";
import { FaCalendarAlt } from "react-icons/fa";
import BottomNavBar from "../BottomNavBar";
import { ClientBookDoneValue } from "ezpzos.core";
import { useNavigate } from "react-router-dom";
/**
 * This is the page of client book done
 *
 * @param props The properties passed to the component.
 * props.people: number type,the number of people that dine in
 * props.date: string type,the date that dine in
 * props.time: string type,the time that dine in
 * props.userName: string type,name of the booking user
 *
 * BacktoHome Button: Once clicked, it returns to home page
 */

export default function BookDone(props: { people: number; date: string; time: string; userName: string }) {
	const { BookDone, BookSuccess, RestaurantAddress } = ClientBookDoneValue;
	const { people, date, time, userName } = props;
	const navigate = useNavigate();
	const returnHomePage = () => {
		navigate("/");
	};
	return (
		<div className="h-[845px] bg-gradient-to-b from-[#E78B57] to-[#4EC1E5]">
			<div className="absolute top-[98px] left-[20px] bg-[#F3F3F3] w-[391px] h-[731px] rounded-[15px]">
				<div className="mt-[86px] flex justify-center">
					<div className="w-[58px] h-[58px] rounded-full bg-[#65C55D] flex justify-center items-center">
						<FaCheck className="text-white  text-[40px] font-light" />
					</div>
				</div>
				<div className="mt-[30px] pl-[58px]">
					<div className="text-[#FB6300] font-[800] text-[24px]">{BookDone}</div>
					<div className="text-[#FB6300] font-[400] text-[15px]">{BookSuccess}</div>
					<ul className="mt-[26px] text-[16px] font-[700]">
						<li className="flex items-center mb-[15px]">
							<IoPersonOutline /> <div className="ml-[25px]">{people} People</div>
						</li>
						<li className="flex items-center mb-[15px]">
							<FaCalendarAlt /> <div className="ml-[25px]">{date}</div>
						</li>
						<li className="flex items-center mb-[15px]">
							<IoTimeOutline /> <div className="ml-[25px]">{time}</div>
						</li>
						<li className="mb-[15px]">Username: {userName}</li>
						<li>Address: {RestaurantAddress}</li>
					</ul>
				</div>
				{/**Back to Home Button */}
				<div className="mt-[80px] flex justify-center   h-[47px]  text-white font-[20px] font-[400]">
					<div
						className=" flex justify-center items-center bg-gradient-to-r from-[#EF7221] to-[#FF6514] w-[334px] h-[47px] rounded-[3px]"
						onClick={returnHomePage}
					>
						Back to HOME
					</div>
				</div>
				{/** BottomNavBar */}
			</div>
			<BottomNavBar isClient={true} />
		</div>
	);
}
