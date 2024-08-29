import React from "react";

import BusinessHomeComponent from "../../Components/HomePageRelated/BusinessHomePageRelated/BusinessHomeComponent";
import { BusinessHomePageValues } from "ezpzos.core";

export interface BusinessPageValuesProp {
	BusinessHomePageValues: {
			IsLoggedIn: boolean;
			HomePageButtonList: any[];
			NotificationList: any[];
	};
}

/**
 * This interface defining the properties for the BusinessHomePageValues.
 * @param BusinessHomePageValues is an object to store mock data including Mock IsLogin boolean value, Mock HomePageButtonList and Mock NotificationList.
 * @param IsLoggedIn is a boolean to decide if the user is logged in or not.
 * @param HomePageButtonList is an array to store a list of mock data of Img url and button Title of homepage button,
 * @param NotificationList is an array to store a list of mock data of notification Title and Content,
 */

const BusinessHome: React.FC<BusinessPageValuesProp> = ({}) => {
	return (
		<div>
			<div className="flex h-screen w-screen bg-[url('./Assets/Images/MainPageBackgroundImage.png')] bg-cover relative overflow-hidden">
				<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
						<BusinessHomeComponent BusinessHomePageValues={BusinessHomePageValues} />
					</div>
				</div>
			</div>

			{/* <Footer /> */}
		</div>
	);
};

export default BusinessHome;
