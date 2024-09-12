import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import WelcomeMessage from "../../Components/LoginOrSignup/WelcomeMessage";
import ContactForm from "../../Components/LoginOrSignup/ContactForm";
import Policy from "../../Components/LoginOrSignup/Policy";
import UserSignupForm from "../../Components/LoginOrSignup/UserSignupForm";
import { setOTPVerified } from "../../Store/AuthSlice";
import { RiCloseLargeLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "../../Store/Store";
import { LogHandler, LogLevel } from "ezpzos.core";

/**
 * This interface defining the properties for the LoginSignupDataProp
 * @param isLogin pass a "isLogin" mock boolean value into LoginOrSignup Page, check if the customer is login or not(!login===signup)
 */
interface LoginSignupDataProp {
	isLogin: boolean;
}

const logger = new LogHandler("LoginOrSignup.tsx");

const LoginSignupPage: React.FC<LoginSignupDataProp> = ({ isLogin }) => {
	// isOTPVerified is the state to control what content to be rendered in the components
	const isOTPVerified = useSelector((state: RootState) => state.auth.isOTPVerified);
	// get otpTarget from Redux to pass it to backend for verification
	const otpTarget = useSelector((state: RootState) => state.auth.otpTarget);

	const dispatch = useDispatch();
	const location = useLocation();
	const [otpToken, setOtpToken] = useState<string | null>(null);

	//useEffect is making sure to run the logic inside only when url changes to avoid unnecessary re-renders
	useEffect(() => {
		// Extract JWT token and expiration time from URL
		const queryParams = new URLSearchParams(location.search);
		const otpToken = queryParams.get("token");
		const expFromUrl = queryParams.get("exp");

		// Check if both token and expiration time exist
		if (otpToken && expFromUrl) {
			try {
				const expValue = parseInt(expFromUrl, 10); // Convert exp to an integer
				const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds

				if (expValue > currentTime) {
					// Token is valid
					logger.Log("LoginOrSignup", "Token is valid", LogLevel.INFO);
					setOtpToken(otpToken);
					dispatch(setOTPVerified(true));
				} else {
					// Token has expired
					logger.Log("LoginOrSignup", "Token is expired", LogLevel.INFO);
					setOtpToken(null);
					dispatch(setOTPVerified(false));
				}
			} catch (error) {
				logger.Log("LoginOrSignup", "Error checking expiry for token", LogLevel.ERROR);
				setOtpToken(null);
				dispatch(setOTPVerified(false));
			}
		} else {
			logger.Log("LoginOrSignup", "Error checking expiry for token", LogLevel.ERROR);
			setOtpToken(null);
			dispatch(setOTPVerified(false));
		}
	}, [location.search, dispatch]);

	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41% to-[#000000ce] to-88% ">
					<Link to={"/"}>
						<div className="flex w-full justify-end	">
							<RiCloseLargeLine className="absolute  text-white text-[35px]  mt-10 mr-[20px] " />
						</div>
					</Link>

					{/* This is WelcomeMessage session, it decides what to show on main title when the customer try to login/sign up respectfully */}
					<WelcomeMessage isLogin={isLogin} isOTPVerified={isOTPVerified} />

					{/* This is ContactForm session, it contains input boxes for user to enter its phone number, or choose the google login. */}
					{/* If isOTPVerified = true, users will be directed to UserSignupForm to fill in more info for signup, otherwise will render ContactForm component */}
					{/* UserSignupForm accepts two props: token and exp from jwt for authentication when submitting signup details */}
					{isOTPVerified ? (
						<UserSignupForm otpToken={otpToken} otpTarget={otpTarget} />
					) : (
						<ContactForm isLogin={isLogin} />
					)}
					{/*This is Policy session*/}
					<Policy />
				</div>
			</div>
		</div>
	);
};

export default LoginSignupPage;
