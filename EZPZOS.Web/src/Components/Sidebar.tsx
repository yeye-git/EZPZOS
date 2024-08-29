import React from "react";
import { IoClose } from "react-icons/io5";
import { SideBarContent } from "../Common/Constants_Sidebar";
/**
 * this is the component of the sideBar
 * @param props including sideBarVisible to make the sideBar visible and closeSidebar funtion to close the sideBar.
 * @returns
 */

export default function Sidebar(props: { sideBarVisible: boolean; closeSidebar: () => void }) {
	const listItems = SideBarContent.map((content: string) => <li className="pl-7 py-4 border-b-2 ">{content}</li>);
	const clickCloseSidebar = () => {
		props.closeSidebar();
	};
	return (
		<div
			className="  fixed w-full h-full z-50 flex bg-black/[.5] text-[20px] text-[#574545]"
			style={{ display: props.sideBarVisible ? "block" : "none" }}
		>
			<ul className="w-[278px] bg-white h-full ">
				<li className="bg-side-bar-gradient text-white h-[107px] pl-6 pt-16">EZPZ.OS</li>
				{listItems}
				<li className="flex pt-28 pl-2.5">
					<div>Home</div>
					<div className="ml-12">FAQ</div>
					<div className="ml-14">Help</div>
				</li>
			</ul>
			<IoClose className=" text-3xl   text-white absolute top-14 right-6" onClick={clickCloseSidebar} />
		</div>
	);
}
