import apiClient from "../Utils/axiosConfig";
import { DefaultLoginSignupValues, LogHandler, LogLevel, OTPType } from "ezpzos.core";

const logger = new LogHandler("AuthService");

export const AuthService = {
	//signup request
	signupRequest: async (
		otpToken: string | null | undefined,
		username: string,
		email: string,
		mobile: string,
		otpTarget: OTPType | null
	): Promise<{ success: boolean; message?: string; token?: string }> => {
		try {
			const response = await apiClient.post(`/auth/signup?token=${otpToken}`, {
				username,
				email,
				mobile,
				otpTarget
			});
			if (response.status === 201) {
				const { token: JWTToken } = response.data;
				logger.Log("signup", "User created successfully", LogLevel.INFO);
				return { success: true, token:JWTToken };
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
	): Promise<{ success: boolean; message?: string; token?: string }> => {
		try {
			const response = await apiClient.post("/auth/login", { mobile, otpToken, otpTarget });
			// Check if the response contains the token and store it in localStorage
			if (response.status === 200 && response.data.token) {
				const { token: JWTToken } = response.data;
				logger.Log("loginByMobile", "User login successfully", LogLevel.INFO);
				return { success: true, token: JWTToken };
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
