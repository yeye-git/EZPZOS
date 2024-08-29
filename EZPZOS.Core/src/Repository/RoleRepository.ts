import { NVarChar, UniqueIdentifier } from "mssql";
import { LogLevel } from "../Common/Constants";
import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { Role } from "../Domain/Role";

export class RoleRepository extends BaseRepository implements IRepository {
	//#region Implementation
	//TODO Update, Insert, Delete

	public async GetRoleByRoleId(id: string, callback: (result: boolean, role: Role | null | undefined) => void) {
		this.Logger.Log("GetRoleByRoleId", "Getting Role By RoleId", LogLevel.DEBUG);

		// Validate input dataObject

		// Preparing insert query
		let query = `Select * from [dbo].[Role] Where [RoleId] = @Id`;

		// Execute Query with parameters
		await this.Execute(
			query,
			{ Id: id },
			preparedStatement => {
				return preparedStatement.input("Id", UniqueIdentifier);
			},
			(err, result) => {
				if (err) {
					this.Logger.Log(
						"GetRoleByRoleId",
						`Error Getting Role By RoleId: ${id}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// If one row affect, role gotten
					if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetRoleByRoleId", `Role Found.`, LogLevel.DEBUG);
						callback(true, result.recordsets[0][0] as Role);
					} else {
						this.Logger.Log(
							"GetRoleByRoleId",
							`Error Role User By RoleId: ${id}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	public async GetRoleByRoleIdPromise(id: string): Promise<Role | null | undefined> {
		this.Logger.Log("GetRoleByRoleId", "Getting Role By RoleId", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[Role] Where [Id] = @Id`;

		// Execute Query with parameters
		let result = await this.ExecutePromise(query, { Id: id }, preparedStatement => {
			return preparedStatement.input("Id", UniqueIdentifier);
		});
		// If one row affect, role gotten
		if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
			this.Logger.Log("GetRoleByRoleId", `Role Found.`, LogLevel.DEBUG);
			return result.recordsets[0][0] as Role;
		} else {
			this.Logger.Log(
				"GetRoleByRoleId",
				`Error Role User By RoleId: ${id}.
								Result: ${JSON.stringify(result)}`,
				LogLevel.ERROR
			);
		}

		return undefined;
	}

	public async GetRoleByCode(code: string, callback: (result: boolean, role: Role | null | undefined) => void) {
		this.Logger.Log("GetRoleByRoleCode", "Getting Role By RoleCode", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[Role] Where [Code] = @Code`;

		// Execute Query with parameters
		await this.Execute(
			query,
			{ Code: code },
			preparedStatement => {
				return preparedStatement.input("Code", NVarChar(255));
			},
			(err, result) => {
				if (err) {
					this.Logger.Log(
						"GetRoleByRoleCode",
						`Error Getting Role By RoleCode: ${code}
							Exception: ${JSON.stringify(err)}`,
						LogLevel.ERROR
					);
				} else {
					// If one row affect, role gotten
					if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
						this.Logger.Log("GetRoleByRoleCode", `Role Found.`, LogLevel.DEBUG);
						callback(true, result.recordsets[0][0] as Role);
					} else {
						this.Logger.Log(
							"GetRoleByRoleCode",
							`Error Role User By RoleCode: ${code}.
								Result: ${JSON.stringify(result)}`,
							LogLevel.ERROR
						);
						callback(false, undefined);
					}
				}
			}
		);
	}

	public async GetRoleByCodePromise(code: string): Promise<Role | null | undefined> {
		this.Logger.Log("GetRoleByRoleCode", "Getting Role By RoleCode", LogLevel.DEBUG);

		// Validate input dataobject

		// Preparing insert query
		let query = `Select * from [dbo].[Role] Where [Code] = @Code`;

		// Execute Query with parameters
		let result = await this.ExecutePromise(query, { Code: code }, preparedStatement => {
			return preparedStatement.input("Code", NVarChar(255));
		});
		if (result !== undefined && result !== null) {
			// If one row affect, role gotten
			if (result?.rowsAffected[0] === 1 && result.recordsets[0].length > 0) {
				this.Logger.Log("GetRoleByRoleCode", `Role Found.`, LogLevel.DEBUG);
				return result.recordsets[0][0] as Role;
			} else {
				this.Logger.Log(
					"GetRoleByRoleCode",
					`Error Role User By RoleCode: ${code}.
								Result: ${JSON.stringify(result)}`,
					LogLevel.ERROR
				);
			}
		} else {
			this.Logger.Log("GetRoleByRoleCode", `Error Getting Role By RoleCode: ${code}`, LogLevel.ERROR);
		}

		return undefined;
	}
	//#endregion
}
