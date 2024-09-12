import ClientAvatar from "../../Assets/Icons/ClientAvatar.png";
import { MdOutlineEdit } from "react-icons/md";
import { DefaultPersonalInfoPageValues } from "ezpzos.core";
import { logout } from "../../Store/AuthSlice";
import { useDispatch } from "react-redux";

/**
 * This component represents the user profile card in the Personal Info page.
 * It displays key user details such as avatar, username, phone, and email, and allows the user to log out.
 *
 * @param avatar - The user's avatar image, retrieved from the Redux store.
 * @param username - The username of the logged-in user, retrieved from the Redux store.
 * @param phone - The user's phone number, retrieved from the Redux store.
 * @param email - The user's email address, retrieved from the Redux store.
 * @param onLogout - A function passed down from the parent (`PersonalInfo`) component that notifies the parent when the user logs out. 
 * This allows the parent to manage logout-related side effects (e.g., displaying a "User logged out successfully" message).
 *
 * TODO:
 * - Replace the placeholder avatar with the actual avatar once the backend is fully integrated.
 * - Create the functionality for edit button to update user information after backend is fully integrated.
 */

interface UserInfoCardProps {
	avatar: string | null;
	username: string | null;
	phone: string | null;
	email: string | null;
    onLogout: () => void;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ avatar, username, phone, email, onLogout }) => {
	const dispatch = useDispatch();

	//show successfully logged out message and direct to home page after logout
	const handleLogout = () => {
		dispatch(logout());
        onLogout(); // Notify parent that the user has logged out
	};

	return (
		<div
			className="mx-auto bg-[#F3F3F3] w-full max-w-[374px] h-[700px] rounded-3xl relative -top-[40px]"
			style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
		>
			{/* TODO: change avatar to user.avatar when backend is fully setup */}
			<img src={ClientAvatar} className="ml-[42px] mt-[63px] w-[107px] h-[107px]"></img>
			<MdOutlineEdit
				className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] relative bottom-[33px] left-[123px]"
				style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
			/>
			<div className="w-full h-[8px] bg-[#E2DEDE]"></div>
			<div className="ml-[40px] mt-[18px]">
				<p className="text-[24px] font-bold ">{DefaultPersonalInfoPageValues.InfoTitle}</p>
				<div className="mt-[15px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.NameLabel}</label>
					<p className="text-[#898686] text-[16px]">{username}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<div className="mt-[30px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.PhoneLabel}</label>
					<p className="text-[#898686] text-[16px]">{phone}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<div className="mt-[30px] ml-[3px] w-full relative">
					<label className="text-[18px] font-bold">{DefaultPersonalInfoPageValues.EmailLabel}</label>
					<p className="text-[#898686] text-[16px]">{email}</p>
					<MdOutlineEdit
						className="bg-[#D9D9D9] text-2xl rounded-full border-[3px] border-[#D9D9D9] absolute bottom-[5px] right-[33px]"
						style={{ boxShadow: "0px 4px 6px rgba(93, 88, 88, 0.5)" }}
					/>
				</div>
				<button
					className="bg-[#B2A49A] mx-auto mt-[90px] w-[294px] h-[41px] text-center text-white text-[20px] font-sans rounded-xl"
					style={{ boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.28)" }}
					onClick={handleLogout}
				>
					{DefaultPersonalInfoPageValues.LogOutButton}
				</button>
			</div>
		</div>
	);
};

export default UserInfoCard;
