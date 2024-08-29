import { Platform } from "./Common/Constants";

/* Common used by Web and Express */
export * from "./Handler/LogHandler";
export * from "./Handler/UtilitiesHandler";
export * from "./Domain/User";
export * from "./Common/Constants";
export * from "./Common/MockData";
export * from "./Domain/Role"
export * from "./Domain/UserRole"
export * from "./Enum/RoleCode"
export * from "./Enum/OTPType"

/* Express Only Section */
export const UserRepository = async () => {
	return process.env.PLATFORM !== Platform.Web ? await import("./Repository/UserRepository") : null;
};

export const RoleRepository = async() => {
	return process.env.PLATFORM !== Platform.Web ? await import("./Repository/RoleRepository") : null;
}

export const UserRoleRepository = async() => {
	return process.env.PLATFORM !== Platform.Web ? await import("./Repository/UserRoleRepository") : null;
}


//TODO Add more exports on demand