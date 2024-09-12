import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OTPType, User } from "ezpzos.core";

interface AuthState {
	isOTPVerified: boolean;
	mobileNumber: string | null;
	otpType: OTPType | null;
	otpTarget: OTPType | null;
	isLoggedIn: boolean;
	authToken: string | null;
	user: User | null;
}

const savedUser = localStorage.getItem("user");
const authToken = localStorage.getItem("authToken");

const initialState: AuthState = {
	isOTPVerified: false,
	mobileNumber: null,
	otpType: null,
	otpTarget: null,
	isLoggedIn: !!authToken,
	authToken: authToken ?? null,
	user: savedUser ? JSON.parse(savedUser) : null
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setOTPVerified(state, action: PayloadAction<boolean>) {
			state.isOTPVerified = action.payload;
		},
		setMobileNumber(state, action: PayloadAction<string>) {
			state.mobileNumber = action.payload;
		},
		setOTPType(state, action: PayloadAction<OTPType>) {
			state.otpType = action.payload;
		},
		setOTPTarget(state, action: PayloadAction<OTPType>) {
			state.otpTarget = action.payload;
		},
		setUser(state, action: PayloadAction<User>) {
			state.user = action.payload;
		},
		login(state, action: PayloadAction<{ token: string; user: User }>) {
			// Put token inside localStorage and Redux, and set isLoggedIn to true
			const { token, user } = action.payload;
			state.isLoggedIn = true;
			state.authToken = token;
			state.user = user;
			localStorage.setItem("authToken", token);
			localStorage.setItem("user", JSON.stringify(user)); // Save the user object as a string
		},
		logout(state) {
			// Reset state on logout
			localStorage.removeItem("authToken");
			localStorage.removeItem("user");
			state.isOTPVerified = false;
			state.mobileNumber = null;
			state.otpType = null;
			state.otpTarget = null;
			state.isLoggedIn = false;
			state.authToken = null;
			state.user = null;
		}
	}
});

export const { setOTPVerified, setMobileNumber, setOTPType, setOTPTarget, setUser, login, logout } = authSlice.actions;
export default authSlice.reducer;
