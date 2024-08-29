import { DefaultLoginSignupValues } from "ezpzos.core";

/**
 * @param isLogin pass a "isLogin" mock boolean value into LoginOrSignup Page, check if the customer is login or not(!login===signup)
 * @param isOTPVerified pass boolean value from its parent component, to check if the customer has done the mobile verifica†ion and ready to signup
 */
interface WelcomeMessageProps {
	isLogin: boolean;
	isOTPVerified: boolean;
}
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ isLogin, isOTPVerified }) => {
	return (
		<div className="mt-[80px] ml-[22px]">
			<p className="text-lg font-bold bg-gradient-to-r from-[#CDE1FF] to-[#E56923] inline-block text-transparent bg-clip-text">
				{isOTPVerified
					? DefaultLoginSignupValues.VerifiedOTPHeading
					: isLogin
					? DefaultLoginSignupValues.LoginHeading
					: DefaultLoginSignupValues.SignupHeading}
			</p>
			<p className="ml-[7px] bg-gradient-to-r from-[#FBFBFB] to-[#959595] text-transparent bg-clip-text">
				{isOTPVerified
					? DefaultLoginSignupValues.VerifiedOTPSubtitle
					: isLogin
					? DefaultLoginSignupValues.LoginSubtitle
					: DefaultLoginSignupValues.SignupSubtitle}
			</p>
		</div>
	);
};

export default WelcomeMessage;
