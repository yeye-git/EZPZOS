import { IConfig } from "../Interface/IConfig";
import { IManagedConfigs } from "../Interface/IManagedConfigs";
export declare class ManagedConfigs extends Array<IConfig> implements IManagedConfigs {
    AddConfig(config: IConfig): void;
    RemoveConfig(config: IConfig): void;
    GetConfigValueByName(name: string): IConfig | undefined;
    HasConfig(name: string): boolean;
}
