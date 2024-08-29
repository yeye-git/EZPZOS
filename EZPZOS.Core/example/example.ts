import { v4 } from "uuid";
import { User } from "../src/Domain/User";
import { UserRepository } from "../src/Repository/UserRepository";
import { UserRole } from "../src/Domain/UserRole";
import { Role } from "../src/Domain/Role";
import { RoleCode } from "../src/Enum/RoleCode";
import { RoleRepository } from "../src/Repository/RoleRepository";

async function Test() {
	let repo = new UserRepository();
	let user = new User();
	user.Username = "test5";
	user.Password = "test";
	user.Email = "test5";
	user.IsDeleted = false;
	user.Salt = "test";
	user.Avatar = "test";
	user.Mobile = "test5";
	user.CreatedTimestamp = new Date();
	user.CreatedUserId = v4();
	user.UpdatedTimestamp = new Date();
	user.UpdatedUserId = v4();

	let role = await new RoleRepository().GetRoleByCodePromise(RoleCode.User.toString());

	let userRole = new UserRole();
	userRole.Role = role ?? new Role();
	userRole.UserId = user.Id;

	user.UserRoles = [userRole];

	console.log(user.Id);
	repo.Save(user, "00000000-0000-0000-0000-000000000000", false, false, result => {
		console.log(result);
	});
}

Test();
// repo.GetUserById("AFF71323-92EF-44DC-A6B9-DAC0FB63BF0B", (result, user) => {
// 	console.log(result);
// });
