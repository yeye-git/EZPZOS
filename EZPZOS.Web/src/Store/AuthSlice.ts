import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OTPType } from "ezpzos.core";

interface AuthState {
	isOTPVerified: boolean;
	mobileNumber: string | null;
	otpType: OTPType | null;
	otpTarget: OTPType | null;
	isLoggedIn: boolean;
	authToken: string | null;
};

const initialState: AuthState = {
	isOTPVerified: false,
	mobileNumber: null,
	otpType: null,
	otpTarget: null,
	isLoggedIn: !!localStorage.getItem("authToken"), // Set to true if token exists in localStorage, false otherwise
	authToken: localStorage.getItem("authToken") ?? null,
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
		login(state, action: PayloadAction<string>) {
			// Put token inside localStorage and Redux, and set isLoggedIn to true
			state.isLoggedIn = true;
			state.authToken = action.payload;
			localStorage.setItem("authToken", action.payload);
		},
		logout(state) {
			// Reset state on logout
			localStorage.removeItem("authToken");
			state.isOTPVerified = false;
			state.mobileNumber = null;
			state.otpType = null;
			state.otpTarget = null;
			state.isLoggedIn = false;
			state.authToken = null; 
		}
	}
});

export const { setOTPVerified, setMobileNumber, setOTPType, setOTPTarget, login, logout } = authSlice.actions;
export default authSlice.reducer;
