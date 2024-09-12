import apiClient from "../Utils/axiosConfig";
import { DefaultLoginSignupValues, LogHandler, LogLevel, OTPType, User } from "ezpzos.core";

const logger = new LogHandler("PublicService");

export const AuthService = {
	//signup request
	signupRequest: async (
		otpToken: string | null | undefined,
		username: string,
		email: string,
		mobile: string,
		otpTarget: OTPType | null
	): Promise<{ success: boolean; message?: string; token?: string; user?: User }> => {
		try {
			const response = await apiClient.post(`/public/signup?token=${otpToken}`, {
				username,
				email,
				mobile,
				otpTarget
			});
			if (response.status === 201) {
				const { token: JWTToken, user } = response.data;
				logger.Log("signup", "User created successfully", LogLevel.INFO);
				return { success: true, token: JWTToken, user };
			} else {
				return {
					success: false,
					message: DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages.default
				};
			}
		} catch (error: any) {
			// Handle errors that occur during the request
			type StatusCodes = 401 | 403 | 404 | 409 | 422 | 500;
			const status = error.response?.status as StatusCodes | undefined;

			// Handle error message depending on the status code
			const errorMessage =
				DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages[status as StatusCodes] ||
				DefaultLoginSignupValues.UserSignupFormDefaultValue.ErrorMessages.default;

			logger.Log("signup", errorMessage, LogLevel.ERROR);

			// Return the error information
			return { success: false, message: errorMessage };
		}
	},

	//login by mobile request
	loginByMobileRequest: async (
		mobile: string | null,
		otpToken: string | null | undefined,
		otpTarget: OTPType
	): Promise<{ success: boolean; message?: string; token?: string; user?: User }> => {
		try {
			const response = await apiClient.post("/public/login", { mobile, otpToken, otpTarget });
			// Check if the response contains the token and store it in localStorage
			if (response.status === 200 && response.data.token) {
				const { token: JWTToken, user } = response.data;
				logger.Log("loginByMobile", "User login successfully", LogLevel.INFO);
				return { success: true, token: JWTToken, user };
			} else {
				return {
					success: false,
					message: DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage.default
				};
			}
		} catch (error: any) {
			// Handle errors that occur during the request
			type StatusCodes = 401 | 403 | 404;
			const status = error.response?.status as StatusCodes | undefined;

			// Handle error message depending on the status code
			const errorMessage =
				DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage[status as StatusCodes] ||
				DefaultLoginSignupValues.MobileLoginDefaultValue.LoginErrorMessage.default;

			logger.Log("loginByMobile", errorMessage, LogLevel.ERROR);

			// Return the error information
			return { success: false, message: errorMessage };
		}
	}
};

//calling backend send-otp API to send OTP message to user's mobile
export const handleSendOTP = async (mobileNumber: string | null) => {
	try {
		const response = await apiClient.post("/public/send-otp", { mobile: mobileNumber });
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
		const response = await apiClient.post("/public/verify-otp", { mobile: mobileNumber, otp, otpType });
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
