import axios from "axios";
import { DefaultPortNumber } from "ezpzos.core";
import { store, RootState } from "../Store/Store";
import { logout } from "../Store/AuthSlice";

// Create an Axios instance with a base URL
const apiClient = axios.create({
	baseURL: process.env.BASE_URL || `http://localhost:${DefaultPortNumber}`,
	headers: {
		"Content-Type": "application/json"
	}
});

// Request Interceptor
apiClient.interceptors.request.use(
	config => {
		// Get the current state from the Redux store
		const state: RootState = store.getState();
		// Retrieve the token from the Redux state
		const authToken = state.auth.isLoggedIn ? state.auth.authToken : null;
		if (authToken) {
			// Attach token to the Authorization header
			config.headers.Authorization = `Bearer ${authToken}`;
		}
		return config;
	},
	error => {
		// Handle the error before it is sent
		return Promise.reject(error);
	}
);

// Response Interceptor
apiClient.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		// Check if the error is a 401 Invalid Token or 403 Forbidden
		if (error.response?.status === 401 || error.response?.status === 403) {
			// Dispatch the logout action
			store.dispatch(logout());
			localStorage.removeItem("authToken");
		}
		// Return the error so it can be handled by the calling code
		return Promise.reject(error);
	}
);

export default apiClient;
