import { SlArrowRight } from "react-icons/sl";
import NotificationHorn from "../../Assets/Images/NotificationHorn.png";

interface HomePageNotificationProps {
	title: string;
	content: string;
}
/**
 * This interface defining the properties for the HomePageNotification
 * @param title is to store the notification's title of notification list.
 * @param content is to store the notification content of notification list.
 */

const HomePageNotification = (props: HomePageNotificationProps) => {
	return (
		<div className="w-full h-16 mb-1 rounded-xl border-[0.1px] border-[#ADA0A0] bg-[#7774746e] flex flex-row items-center">
			<img src={NotificationHorn} alt="horn_icon" className="w-6 h-6 ml-3" />
			<div className="flex-1 ml-3 mr-3">
				<p className="text-white text-sm">{props.title}</p>
				<p className="text-white text-sm">{props.content}</p>
			</div>
			<SlArrowRight className="mr-3 text-white" />
		</div>
	);
};

export default HomePageNotification;
