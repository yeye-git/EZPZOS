import { LogLevel } from "../Common/Constants";
import { User } from "../Domain/User";
import { IUser } from "../Interface/IUser";
import { IDataObject } from "../Interface/IDataObject";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { NVarChar, UniqueIdentifier } from "mssql";
import { UserRoleRepository } from "./UserRoleRepository";
import { PreparedStatementHandler } from "../Handler/PrepareStatementHandler";
import { UserRole } from "../Domain/UserRole";
import { SqlError } from "../Domain/SqlError";

export class UserRepository extends BaseRepository implements IRepository {
	override async Insert(
		dataObject: IDataObject,
		callback: (result: boolean, errorCode?: number, errorMessage?: string) => void
	): Promise<void> {
		this.Logger.Log("Insert", "Inserting", LogLevel.DEBUG);

		// Validate input dataobject
		if (dataObject instanceof User) {
			let user = dataObject as User;
			// Preparing insert query
			let query = `Insert into [dbo].[User] ([Id],[Username],[Password],[Salt],[Email],[Mobile],[Avatar],[IsDeleted],[CreatedTimestamp],[CreatedUserId],[UpdatedTimestamp],[UpdatedUserId])
						Values(@Id,@Username,@Password,@Salt,@Email,@Mobile,cast(cast(@Avatar as varbinary(max)) as Image),@IsDeleted,@CreatedTimestamp,@CreatedUserId,@UpdatedTimestamp,@UpdatedUserId)`;

			// Execute Query with parameters
			this.Execute(
				query,
				user,
				preparedStatement => {
					// get user related parameters
					return PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
				},
				(err: Error | undefined, result) => {
					if (err) {
						this.Logger.Log(
							"Insert",
							`Error Inserting User Object: ${JSON.stringify(dataObject)}
                            Exception: ${JSON.stringify(err)}`,
							LogLevel.ERROR
						);

						if (err.message.includes("duplicate key")) {
							callback(false, 409, "Username, mobile, or email already exists.");
						} else {
							callback(false, 500, "Error inserting user into database.");
						}
					} else {
						// If one row affect, meaning inserted one row
						if (result?.rowsAffected[0] == 1) {
							this.Logger.Log("Insert", `User Inserted.`, LogLevel.DEBUG);
							callback(true);
							return;
						} else {
							this.Logger.Log(
								"Insert",
								`Error Inserting User Object: ${JSON.stringify(dataObject)}
								Result: ${JSON.stringify(result)}`,
								LogLevel.ERROR
							);
							callback(false, 500, "Unknown error occurred while inserting user.");
						}
					}
				}
			);
		} else {
			this.Logger.Log("Insert", `Invalid User Object: ${JSON.stringify(dataObject)}`, LogLevel.ERROR);
		}
	}

	override async Delete(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void> {
		this.Logger.Log("Delete", "Deleting", LogLevel.DEBUG);

		// Validate input dataobject
		if (dataObject instanceof User) {
			let user = dataObject as User;
			// Preparing insert query
			let query = `Delete from [dbo].[User]
			Where [Id] = @Id`;

			// Execute Query with parameters
			this.Execute(
				query,
				user,
				preparedStatement => {
					// get user related parameters
					return PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
				},
				(err, result) => {
					if (err) {
						this.Logger.Log(
							"Delete",
							`Error Deleting User Object: ${JSON.stringify(dataObject)}
							Exception: ${JSON.stringify(err)}`,
							LogLevel.ERROR
						);
					} else {
						// If one row affect, meaning inserted one row
						if (result?.rowsAffected[0] === 1) {
							this.Logger.Log("Delete", `User Deleted.`, LogLevel.DEBUG);
							callback(true);
							return;
						} else {
							this.Logger.Log(
								"Delete",
								`Error Deleting User Object: ${JSON.stringify(dataObject)}
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
			this.Logger.Log("Delete", `Invalid User Object: ${JSON.stringify(dataObject)}`, LogLevel.ERROR);
		}
	}

	override async Update(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void> {
		this.Logger.Log("Update", "Updating", LogLevel.DEBUG);

		// Validate input dataobject
		if (dataObject instanceof User) {
			let user = dataObject as User;
			// Preparing insert query
			let query = `Update [dbo].[User]
			Set Username = @Username,
			Password = @Password,
			Salt = @Salt,
			Email = @Email,
			Mobile = @Mobile,
			Avatar = cast(cast(@Avatar as varbinary(max)) as Image),
			IsDeleted = @IsDeleted,
			CreatedTimestamp = @CreatedTimestamp,
			CreatedUserId = @CreatedUserId,
			UpdatedTimestamp = @UpdatedTimestamp,
			UpdatedUserId = @UpdatedUserId
			Where [Id] = @Id`;

			// Execute Query with parameters
			this.Execute(
				query,
				user,
				preparedStatement => {
					// get user related parameters
					return PreparedStatementHandler.UserPrepareStatementInput(preparedStatement);
				},
				(err, result) => {
					if (err) {
						this.Logger.Log(
							"Update",
							`Error Updating User Object: ${JSON.stringify(dataObject)}
							Exception: ${JSON.stringify(err)}`,
							LogLevel.ERROR
						);
					} else {
						// If one row affect, meaning inserted one row
						if (result?.rowsAffected[0] === 1) {
							this.Logger.Log("Update", `User Updated.`, LogLevel.DEBUG);
							callback(true);
							return;
						} else {
							this.Logger.Log(
								"Update",
								`Error Updating User Object: ${JSON.stringify(dataObject)}
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
			this.Logger.Log("Update", `Invalid User Object: ${JSON.stringify(dataObject)}`, LogLevel.ERROR);
		}
	}

	/**
	 * Get a single user record by Primary Key [Id]
	 * @param id Id of the user to be queried
	 * @param callback Result returned from the query. Parameter {result} indicating if the call successed or otherwise. Parameter {user} represents the IUser object or undefined if result is false.
	 * @returns void
	 */
	public async GetUserById(id: string, callback: (result: boolean, user: IUser | null | undefined) => void) {
		this.Logger.Log("GetUserById", "Getting User By Id", LogLevel.DEBUG);

		// Preparing insert query
		let query = `Select * from [dbo].[User] Where [Id] = @Id`;

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
						"GetUserById",
						`Error Getting User By Id: ${id}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// If one row affect, user gotten
					if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetUserById", `User Found.`, LogLevel.DEBUG);
						let user = result.recordsets[0][0] as IUser;
						if (user !== undefined || user !== null) {
							user.UserRoles =
								(await new UserRoleRepository().GetUserRolesByUserIdPromise(user.Id)) ?? [];
						}
						callback(true, user);
					} else {
						this.Logger.Log(
							"GetUserById",
							`Error Getting User By Id: ${id}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	/**
	 * Get a single user record by Mobile number [Mobile]
	 * @param mobile Mobile of the user to be queried
	 * @param callback Result returned from the query. Parameter {result} indicating if the call succeed or otherwise. Parameter {user} represents the User object or undefined if result is false.
	 * @returns void
	 */
	public async GetUserByMobile(
		mobile: string,
		callback: (result: boolean, user: User | null | undefined, errorCode?: number, errorMessage?: string) => void
	) {
		this.Logger.Log("GetUserByMobile", "Getting User By Mobile", LogLevel.DEBUG);

		let query = `SELECT * FROM [dbo].[User] WHERE [Mobile] = @Mobile`;

		await this.Execute(
			query,
			{ Mobile: mobile },
			preparedStatement => {
				return preparedStatement.input("Mobile", NVarChar);
			},
			async (err, result) => {
				if (err instanceof SqlError) {
					this.Logger.Log(
						"GetUserByMobile",
						`Error Getting User By Mobile: ${mobile}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
					const errorCode = err.number;
					const errorMessage = err.message;
					callback(false, null, errorCode, errorMessage);
				} else if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
					this.Logger.Log("GetUserByMobile", "User found.", LogLevel.DEBUG);
					let user = result.recordsets[0][0] as User;
					callback(true, user);
				} else {
					this.Logger.Log("GetUserByMobile", "User not found.", LogLevel.WARN);
					callback(false, null, 404, "User not found");
				}
			}
		);
	}

	public override async OnSaving(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean) => void
	): Promise<void> {
		super.OnSaving(dataObject, userId, isUpdate, isDelete, result => {
			this.Logger.Log("OnSaving", `Parent OnSaving Result: ${result}`, LogLevel.INFO);
			let user = dataObject as User;
			if (!result) {
				callback(false);
				return;
			}
			if (!user.UserRoles || user.UserRoles.length == 0) {
				this.Logger.Log("OnSaving", `User has no userRoles.`, LogLevel.ERROR);
				callback(false);
				return;
			} else {
				for (let userRole of user.UserRoles) {
					if (
						userRole.Role === undefined ||
						userRole.Role === null ||
						userRole.Role.Code === undefined ||
						userRole.Role.Code === null ||
						userRole.Role.Description === undefined ||
						userRole.Role.Description === null
					) {
						this.Logger.Log("OnSaving", `UserRole has no role.`, LogLevel.ERROR);
						callback(false);
						return;
					}
				}
			}
			callback(true);
			return;
		});
	}

	public override async OnSaved(
		dataObject: IDataObject,
		userId: string,
		isUpdate: boolean,
		isDelete: boolean,
		callback: (result: boolean, errorCode?: number, errorMessage?: string) => void
	): Promise<void> {
		super.OnSaved(dataObject, userId, isUpdate, isDelete, async result => {
			this.Logger.Log("OnSaved", `Parent OnSaved Result: ${result}`, LogLevel.INFO);
			if (!result) {
				callback(false);
				return;
			}
			let userRoleRepository = new UserRoleRepository();
			let finalResult = true;

			//save the userRole into database
			const saveUserRolePromises = (dataObject as User).UserRoles.map(userRole => {
				return new Promise<boolean>((resolve, reject) => {
					userRoleRepository.Save(userRole as UserRole, userId, isUpdate, isDelete, result => {
						this.Logger.Log("Save", `Save userRole Result: ${result}.`, LogLevel.INFO);
						if (!result) {
							finalResult = false;
							reject(new Error("Failed to save userRole"));
							this.Logger.Log("Save", "Failed to save userRole", LogLevel.INFO);
						} else {
							resolve(result);
						}
					});
				});
			});
			await Promise.all(saveUserRolePromises);
			this.Logger.Log("Save", "All userRoles are saved", LogLevel.INFO);

			if (!finalResult) {
				callback(false);
				return;
			}
			callback(true);
			return;
		});
	}
}
