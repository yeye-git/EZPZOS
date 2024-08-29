import { Bit, DateTime, Int, MAX, NVarChar, PreparedStatement, UniqueIdentifier, VarChar } from "mssql";

export class PreparedStatementHandler {
	public static DefaultPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement {
		preparedStatement.input("Id", UniqueIdentifier);
		preparedStatement.input("CreatedTimestamp", DateTime);
		preparedStatement.input("UpdatedTimestamp", DateTime);
		preparedStatement.input("CreatedUserId", UniqueIdentifier);
		preparedStatement.input("UpdatedUserId", UniqueIdentifier);
		preparedStatement.input("IsDeleted", Bit);

		return preparedStatement;
	}

	public static UserPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement {
		preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
		preparedStatement.input("Username", NVarChar(255));
		preparedStatement.input("Password", NVarChar(200));
		preparedStatement.input("Salt", NVarChar(200));
		preparedStatement.input("Email", NVarChar(255));
		preparedStatement.input("Mobile", NVarChar(50));
		preparedStatement.input("Avatar", VarChar(MAX));

		return preparedStatement;
	}

	public static EventPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement {
		preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
		preparedStatement.input("EventCode", Int);
		preparedStatement.input("EventTime", DateTime);
		preparedStatement.input("ParentId", UniqueIdentifier);
		preparedStatement.input("ParentTable", NVarChar(255));
		return preparedStatement;
	}

	public static UserRolePrepareStatementInput(preparedStatement: PreparedStatement):PreparedStatement{
		preparedStatement = this.DefaultPrepareStatementInput(preparedStatement);
		preparedStatement.input("UserId",UniqueIdentifier);
		preparedStatement.input("RoleId", UniqueIdentifier);

		return preparedStatement;

	}
}
