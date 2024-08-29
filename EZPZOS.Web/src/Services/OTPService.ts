import apiClient from "../Utils/axiosConfig";
import { LogHandler, LogLevel, OTPType } from "ezpzos.core";

const logger = new LogHandler("OTPService.tsx");

//calling backend send-otp API to send OTP message to user's mobile
export const handleSendOTP = async (mobileNumber: string | null) => {
	try {
		const response = await apiClient.post("/otp/send-otp", { mobile: mobileNumber });
		if (response.status === 200) {
			logger.Log("OTPService", "OTP sent successfully", LogLevel.INFO);
			return response.data;
		} else if (response.status === 500) {
			logger.Log("OTPService", "Failed to send OTP", LogLevel.WARN);
			return null;
		}
	} catch (error) {
		logger.Log("OTPService", "Error sending OTP:", LogLevel.ERROR);
		handleError(error);
		throw new Error("Error during send OTP");
	}
};

//calling backend verify-otp API to verify the code
export const handleCompleteOTP = async (
	mobileNumber: string | null,
	otp: string,
	otpType: OTPType | null,
	onComplete: (otpToken: string, exp: number, otpTarget: OTPType) => void
) => {
	try {
		const response = await apiClient.post("/otp/verify-otp", { mobile: mobileNumber, otp, otpType });
		if (response.status === 200) {
			const { otpToken, exp, otpTarget } = response.data;
			onComplete(otpToken, exp, otpTarget); // Pass the token, jwt exp and otpTarget back to the caller
		} else if (response.status === 400) {
			logger.Log("OTPService", "Failed to verify OTP", LogLevel.WARN);
			throw new Error("Invalid or expired OTP. Please try again.");
		}
	} catch (error) {
		logger.Log("OTPService", "Error verifying OTP:", LogLevel.ERROR);
		handleError(error);
		throw new Error("Failed to verify OTP");
	}
};

const handleError = (error: unknown) => {
	if (error instanceof Error) {
		logger.Log("OTP Error", "Error message:", LogLevel.ERROR);
	} else {
		logger.Log("OTP Error", "An unexpected error occurred", LogLevel.ERROR);
	}
};
