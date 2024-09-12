import { DefaultClientProfilePageValues, DefaultRoutesValues } from "ezpzos.core";
import ClientAvatar from "../../Assets/Icons/ClientAvatar.png";
import OrdersIcon from "../../Assets/Icons/OrdersIcon.png";
import VouchersIcon from "../../Assets/Icons/VouchersIcon.png";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

/**
 * This is the component of user profile page, it displays the main section of user basic info and option list.
 * @param avatar and @param username are the user information received from database when user logged in to be retrieved from Redux for display.
 */

interface UserDashboardProps {
	avatar: string | null;
	username: string | null;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ avatar, username }) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(`/${DefaultRoutesValues.UserRoutes.UserInfo}`);
	};
	return (
		<div className="bg-gradient-to-b from-[#D3D4D4] h-[702px] w-screen font-lato relative">
			{/* TODO: Change the img src to user.avatar when user avatar is fully setup in backend*/}
			<img
				src={ClientAvatar}
				className="w-[107px] h-[107px] absolute -top-[53.5px]"
				style={{ left: "50%", transform: "translateX(-50%)" }}
			></img>
			<div className="flex flex-col items-center mt-[50px]">
				<p className="font-bold text-xl py-3 relative">
					{username}
					<button
						onClick={handleClick}
						className="absolute mb-[5px] ml-[5px] text-3xl -right-[35px] top-[11.5px]"
					>
						<IoChevronForwardSharp />
					</button>
				</p>
				<div
					className="bg-[#F3F3F3] w-[374px] h-[560px] rounded-3xl"
					style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
				>
					<div className="flex flex-row mt-[35px] mx-[30px] gap-[10px]">
						<div
							className="bg-[#E8E4E4] w-[102px] h-[109px] flex flex-col justify-center items-center rounded-2xl"
							style={{
								boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)",
								flexBasis: "calc(33.333% - 5px)" //Adjust to account for gap
							}}
						>
							<img src={OrdersIcon} className="mt-[15px]"></img>
							<p className="mb-[18px] font-bold">{DefaultClientProfilePageValues.OrdersIcon}</p>
						</div>
						<div
							className="bg-[#E8E4E4] w-[102px] h-[109px] flex flex-col justify-center items-center rounded-2xl"
							style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)", flexBasis: "calc(33.333% - 5px)" }}
						>
							<img src={VouchersIcon} className="mt-[10px]"></img>
							<p className="mb-[5px] font-bold">{DefaultClientProfilePageValues.VouchersIcon}</p>
						</div>
					</div>
					<div className="bg-[#E2DEDE] w-[374px] h-[3px] mt-[35px]"></div>
					<div className="mt-[35px] ml-[45px] flex flex-col gap-[12px]">
						<a href="#">{DefaultClientProfilePageValues.UserOptions.Help}</a>
						<a href="#">{DefaultClientProfilePageValues.UserOptions.Language}</a>
						<a href="#">{DefaultClientProfilePageValues.UserOptions.Scan}</a>
						<a href="#">{DefaultClientProfilePageValues.UserOptions.Company}</a>
						<a href="#">{DefaultClientProfilePageValues.UserOptions.Receipt}</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDashboard;
