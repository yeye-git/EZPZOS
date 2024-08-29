import React from "react";
import ClientHomeComponent from "../Components/HomePageRelated/ClientHomePageRelated/ClientHomeComponent";
import { ClientHomePageValues } from "ezpzos.core";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";

export interface ClientHomePageValuesProp {
	ClientHomePageValues: {
		IsLoggedIn: Boolean;
		HomePageButtonList: any[];
		NotificationList: any[];
	};
}
/**
 * This interface defining the properties for the ClientHomePageValues
 * @param ClientHomePageValues is an object to store mock data including Mock HomePageButtonList and Mock NotificationList.
 * @param IsLoggedIn is a boolean to decide if the user is logged in or not.
 * @param HomePageButtonList is an array to store a list of mock data of Img url and button Title of homepage button,
 * @param NotificationList is an array to store a list of mock data of notification Title and Content,
 */

const Home: React.FC = ({}) => {
	const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
	return (
		<div>
			<div className="flex h-screen w-screen bg-[url('./Assets/Images/MainPageBackgroundImage.png')] bg-cover relative overflow-hidden">
				<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
						<ClientHomeComponent
							ClientHomePageValues={{
								IsLoggedIn: isLoggedIn,
								HomePageButtonList: ClientHomePageValues.HomePageButtonList,
								NotificationList: ClientHomePageValues.NotificationList
							}}
						/>
					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default Home;
