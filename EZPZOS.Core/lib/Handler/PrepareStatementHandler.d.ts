import { PreparedStatement } from "mssql";
export declare class PreparedStatementHandler {
    static DefaultPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement;
    static UserPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement;
    static EventPrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement;
    static UserRolePrepareStatementInput(preparedStatement: PreparedStatement): PreparedStatement;
}
