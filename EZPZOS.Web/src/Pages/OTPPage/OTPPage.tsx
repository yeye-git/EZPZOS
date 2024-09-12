import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Store/Store";
import { setOTPVerified, setOTPTarget, setUser, login } from "../../Store/AuthSlice";
import { useNavigate } from "react-router-dom";
import { LogLevel, LogHandler, DefaultLoginSignupValues, OTPType } from "ezpzos.core";
import OTPForm from "../../Components/OTP/OTPForm";
import AlertTag from "../../Components/AlertTag";
import { AuthService } from "../../Services/PublicService";

const logger = new LogHandler("OTPPage.tsx");

const OTPPage: React.FC = () => {
	const mobileNumber = useSelector((state: RootState) => state.auth.mobileNumber);
	const otpType = useSelector((state: RootState) => state.auth.otpType);
	const [showSuccess, setShowSuccess] = useState<boolean>(false); // State to manage the success alert
	const [showError, setShowError] = useState<{ visible: boolean; message?: string }>({ visible: false }); // State to manage the error alert
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// this handleCompleteOTP function
	const handleCompleteOTP = async (otpToken: string, exp: number, otpTarget: OTPType) => {
		dispatch(setOTPVerified(true)); // Set OTP as verified in Redux
		dispatch(setOTPTarget(otpTarget)); // Set OTP target in Redux
		console.log("otpTarget in OTPPage:", otpTarget);

		if (otpTarget === OTPType.SignupOTP) {
			// Navigate to the signup page with the JWT and expiration time as query parameters
			navigate(`/signup?token=${encodeURIComponent(otpToken)}&exp=${encodeURIComponent(exp.toString())}`);
			logger.Log("OTP", "Navigated to UserSignupForm successfully", LogLevel.INFO);
		} else if (otpTarget === OTPType.LoginOTP)
			// Try to call loginByMobileRequest
			try {
				const result = await AuthService.loginByMobileRequest(mobileNumber, otpToken, otpTarget);
				if (result.success && result.token && result.user) {
					// Dispatch the token to activate login state in Redux
					dispatch(login({token: result.token, user: result.user})); 
					// Dispatch user to save in Redux for frontend to use user info
					dispatch(setUser(result.user));
					console.log('User saved in Redux:', result.user);
					// Show success message
					logger.Log("OTP", "User Login successfully", LogLevel.INFO);
					setShowSuccess(true);
					setTimeout(() => {
						setShowSuccess(false);
						navigate("/profile"); // Navigate to profile after the success message is hidden
					}, 3000);
				} else {
					// Show error message
					setShowError({ visible: true, message: result.message });
					setTimeout(() => {
						setShowError({ visible: false });
						navigate("/"); // Navigate to home after the error message is hidden
					}, 3000);
				}
			} catch (error: any) {
				logger.Log("OTP", `Error during login: ${error.message}`, LogLevel.ERROR);
				// Show error message
				setShowError({ visible: true, message: error.message });
				setTimeout(() => {
					setShowError({ visible: false });
					navigate("/"); // Navigate to home after the error message is hidden
				}, 3000);
			}
	};

	return (
		<div className="flex h-screen w-screen bg-hero-pattern bg-cover relative overflow-hidden">
			<div className="h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
				<div className="absolute h-screen w-screen bg-gradient-to-tl from-transparent from-0% via-[#33291f88] via-41%  to-[#000000ce] to-88%">
					<div className="fixed inset-0 flex items-end z-50">
						<div className="w-full">
							{/* Conditionally render the success or error alert */}
							{showSuccess && (
								<AlertTag
									alertMessage={DefaultLoginSignupValues.MobileLoginDefaultValue.LoginSuccessMessage}
								/>
							)}
							{showError.visible && <AlertTag alertMessage={showError.message} isError={true} />}
							<OTPForm MobileNumber={mobileNumber} otpType={otpType} onComplete={handleCompleteOTP} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OTPPage;
