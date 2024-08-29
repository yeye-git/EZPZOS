import { UniqueIdentifier } from "mssql";
import { LogLevel } from "../Common/Constants";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { IUserRole } from "../Interface/IUserRole";
import { RoleRepository } from "./RoleRepository";
import { Role } from "../Domain/Role";
import { IDataObject } from "../Interface/IDataObject";
import { UserRole } from "../Domain/UserRole";
import { PreparedStatementHandler } from "../Handler/PrepareStatementHandler";

export class UserRoleRepository extends BaseRepository implements IRepository {
	//#region Implementation
	//TODO Update, Delete
	override async Insert(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void> {
		this.Logger.Log("Insert", "Inserting", LogLevel.DEBUG);

		// Validate input dataobject
		if (dataObject instanceof UserRole) {
			let userRole = dataObject as UserRole;
			// Preparing insert query
			let query = `Insert into [dbo].[UserRole] ([Id],[UserId],[RoleId],[IsDeleted],[CreatedTimestamp],[CreatedUserId],[UpdatedTimestamp],[UpdatedUserId])
						Values(@Id,@UserId,@RoleId,@IsDeleted,@CreatedTimestamp,@CreatedUserId,@UpdatedTimestamp,@UpdatedUserId)`;

			// Execute Query with parameters
			this.Execute(
				query,
				userRole,
				preparedStatement => {
					// get role related parameters
					return PreparedStatementHandler.UserRolePrepareStatementInput(preparedStatement);
				},
				(err, result) => {
					if (err) {
						this.Logger.Log(
							"Insert",
							`Error Inserting UserRole Object: ${JSON.stringify(dataObject)}
							Exception: ${JSON.stringify(err)}`,
							LogLevel.ERROR
						);
						callback(false);
						return;
					} else {
						// If one row affect, meaning inserted one row
						if (result?.rowsAffected[0] == 1) {
							this.Logger.Log("Insert", `UserRole Inserted.`, LogLevel.DEBUG);
							callback(true);
							return;
						} else {
							this.Logger.Log(
								"Insert",
								`Error Inserting UserRole Object: ${JSON.stringify(dataObject)}
								Result: ${JSON.stringify(result)}`,
								LogLevel.ERROR
							);
							callback(false);
							return;
						}
					}
				}
			);
		} else {
			this.Logger.Log("Insert", `Invalid UserRole Object: ${JSON.stringify(dataObject)}`, LogLevel.ERROR);
			callback(false)
		}
	}

	public async GetUserRolesByUserId(
		id: string,
		callback: (result: boolean, userRoles: IUserRole[] | null | undefined) => void
	) {
		this.Logger.Log("GetUserRoleByUserId", "Getting UserRole By UserId", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[UserRole] Where [UserId] = @Id`;

		// Execute Query with parameters
		await this.Execute(
			query,
			{ Id: id },
			preparedStatement => {
				return preparedStatement.input("Id", UniqueIdentifier);
			},
			async (err, result) => {
				if (err) {
					this.Logger.Log(
						"GetUserRoleByUserId",
						`Error Getting UserRole By UserId: ${id}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// If one or more rows affect, userroles gotten
					if (result?.rowsAffected[0] && result?.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetUserRoleByUserId", `UserRole Found.`, LogLevel.DEBUG);
						let userRoles: IUserRole[] = [];
						for (let userRole of result.recordsets[0] as IUserRole[]) {
							// Get Role for each UserRole
							userRole.Role =
								(await new RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId)) ?? new Role();
							userRoles.push(userRole);
						}

						this.Logger.Log(
							"GetUserRoleByUserId",
							`UserRoles gotten: ${JSON.stringify(userRoles)}`,
							LogLevel.DEBUG
						);
						callback(true, userRoles);
					} else {
						this.Logger.Log(
							"GetUserRoleByUserId",
							`Error UserRole User By UserId: ${id}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	public async GetUserRolesByUserIdPromise(id: string): Promise<IUserRole[] | undefined> {
		this.Logger.Log("GetUserRolesByUserIdPromise", "Getting UserRole By UserId", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[UserRole] Where [UserId] = @Id`;

		this.Logger.Log("GetUserRolesByUserIdPromise", `Execuring Query`, LogLevel.DEBUG);

		// Execute Query with parameters
		let result = await this.ExecutePromise(query, { Id: id }, preparedStatement => {
			return preparedStatement.input("Id", UniqueIdentifier);
		});

		// If one or more rows affect, userroles gotten
		if (result?.rowsAffected[0] && result?.rowsAffected[0] > 0 && result.recordsets[0].length > 0) {
			this.Logger.Log("GetUserRoleByUserId", `UserRole Found.`, LogLevel.DEBUG);
			let userRoles: IUserRole[] = [];
			for (let userRole of result.recordsets[0] as IUserRole[]) {
				// Get Role for each UserRole
				userRole.Role = (await new RoleRepository().GetRoleByRoleIdPromise(userRole.RoleId)) ?? new Role();
				userRoles.push(userRole);
			}

			this.Logger.Log("GetUserRoleByUserId", `UserRoles gotten: ${JSON.stringify(userRoles)}`, LogLevel.DEBUG);
			return userRoles;
		} else {
			this.Logger.Log(
				"GetUserRolesByUserIdPromise",
				`Error UserRole User By UserId: ${id}.
								Result: ${JSON.stringify(result)}`,
				LogLevel.ERROR
			);
		}
		return undefined;
	}
	//#endregion
}
