import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { Role } from "../Domain/Role";
export declare class RoleRepository extends BaseRepository implements IRepository {
    GetRoleByRoleId(id: string, callback: (result: boolean, role: Role | null | undefined) => void): Promise<void>;
    GetRoleByRoleIdPromise(id: string): Promise<Role | null | undefined>;
    GetRoleByCode(code: string, callback: (result: boolean, role: Role | null | undefined) => void): Promise<void>;
    GetRoleByCodePromise(code: string): Promise<Role | null | undefined>;
}
