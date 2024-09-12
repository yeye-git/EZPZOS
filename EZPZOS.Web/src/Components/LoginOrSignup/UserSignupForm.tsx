import { DefaultLoginSignupValues, OTPType } from "ezpzos.core";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, setUser } from "../../Store/AuthSlice";
import { RootState } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import { PhoneNumberNormalizer, LogHandler, LogLevel } from "ezpzos.core";
import { AuthService } from "../../Services/PublicService";
import AlertTag from "../AlertTag";

/**
 * This interface defining the properties for the UserSignupFormProp
 * @param otpToken pass the otpToken from LoginOrSignup page received from otpPage after mobile verification to indicate the success
 * @param otpTarget pass the otpTarget from LoginOrSignup page received from otpPage to indicate either the otp is for signup/login
 */

interface UserSignupFormProps {
	otpToken?: string | null;
	otpTarget: OTPType | null;
}

const logger = new LogHandler("UserSignupForm.tsx");

const UserSignupForm: React.FC<UserSignupFormProps> = ({ otpToken, otpTarget }) => {
	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [showSuccess, setShowSuccess] = useState<boolean>(false); // State to manage the success alert
	const [showError, setShowError] = useState<{ visible: boolean; message?: string }>({ visible: false }); // State to manage the error alert
	const navigate = useNavigate();
	const dispatch = useDispatch();

	//Select the mobileNumber saved in Redux authState to display in the input field
	const mobileNumber = useSelector((state: RootState) => state.auth.mobileNumber);

	//Normalize the phone number to make sure userMobile's format is consistent (+614xxxxxxxx)
	const normalizer = new PhoneNumberNormalizer(mobileNumber || "");
	const normalizedMobile = normalizer.normalize();

	//Handle form submission
	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault(); // Prevent the default form submission behavior

		const result = await AuthService.signupRequest(otpToken, username, email, normalizedMobile, otpTarget);

		if (result.success && result.token && result.user) {
			logger.Log("Signup", "Created user successfully", LogLevel.INFO);
			// Dispatch the token to activate login state in Redux
			dispatch(login({token: result.token, user: result.user})); 
			// Dispatch user to save in Redux for frontend to use user info
			dispatch(setUser(result.user))
			setShowSuccess(true); // Show the success message
			setTimeout(() => {
				setShowSuccess(false);
				navigate("/"); // Navigate to home after the success message is hidden
			}, 3000);
		} else if (result) {
			// Show error message in the alert tag
			setShowError({ visible: true, message: result.message || "An error occurred." });
			setTimeout(() => {
				setShowError({ visible: false });
				navigate("/"); // Navigate to home after the error message is hidden
			}, 3000);
		} else {
			// Handle unexpected undefined result
			logger.Log("Signup", "An unexpected error occurred.", LogLevel.ERROR);
			setShowError({ visible: true, message: "An unexpected error occurred." });
			setTimeout(() => {
				setShowError({ visible: false });
				navigate("/"); // Navigate to home after the error message is hidden
			}, 3000);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-wrap max-w-screen-sm justify-center align-center mt-[71px] mx-auto font-sans font-normal"
		>
			{/* Conditionally render the success or error alert */}
			{showSuccess && (
				<AlertTag alertMessage={DefaultLoginSignupValues.UserSignupFormDefaultValue.UserCreatedMessage} />
			)}
			{showError.visible && <AlertTag alertMessage={showError.message} isError={true} />}

			<div>
				<label htmlFor="username" className="block text-xl text-[#FBFBFB] p-1.5">
					{DefaultLoginSignupValues.UserSignupFormDefaultValue.UsernameLabel}
				</label>
				<input
					id="username"
					maxLength={15}
					value={username}
					onChange={e => setUsername(e.target.value)}
					placeholder={DefaultLoginSignupValues.UserSignupFormDefaultValue.UsernamePlaceholder}
					className="block h-[50px] w-[370px] pl-3 rounded-lg bg-[#F8F9FA] text-xl placeholder:text-[#988B8B] focus:outline-none"
					required
				/>
			</div>
			<div className="mt-[33px]">
				<label htmlFor="email" className="block text-xl text-[#FBFBFB] p-1.5">
					{DefaultLoginSignupValues.UserSignupFormDefaultValue.EmailLabel}
				</label>
				<input
					id="email"
					type="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
					placeholder={DefaultLoginSignupValues.UserSignupFormDefaultValue.EmailPlaceholder}
					className="block h-[50px] w-[370px] pl-3 rounded-lg bg-[#F8F9FA] text-xl placeholder:text-[#988B8B] focus:outline-none"
					required
				/>
			</div>
			<div className="relative mt-[33px]">
				<label htmlFor="mobile" className="block text-xl text-[#FBFBFB] p-1.5">
					{DefaultLoginSignupValues.UserSignupFormDefaultValue.PhoneNumberLabel}
				</label>
				<input
					id="mobile"
					type="tel"
					value={normalizedMobile || ""}
					readOnly
					className="block h-[50px] w-[370px] pl-3 rounded-lg bg-[#F8F9FA] text-xl text-[#4D4D4D] focus:outline-none"
				/>
				<p className="absolute text-xl text-[#65C55D] bottom-2 right-4">
					{DefaultLoginSignupValues.UserSignupFormDefaultValue.PhoneNumberInputTag}
				</p>
			</div>
			<button
				type="submit"
				className="h-[50px] w-[370px] rounded-lg mt-[111px] text-[#FFFFFF] text-xl bg-gradient-to-r from-[#FFB682F5] via-[#F8A27AF5] to-[#F28C83F5]"
			>
				{DefaultLoginSignupValues.UserSignupFormDefaultValue.SubmitButtonDefaultValue}
			</button>
		</form>
	);
};

export default UserSignupForm;
