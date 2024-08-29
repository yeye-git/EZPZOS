import { IConfig } from "./IConfig";

export interface IManagedConfigs {
	AddConfig(config: IConfig): void;
	RemoveConfig(config: IConfig): void;
	GetConfigValueByName(name: string): IConfig | undefined;
	HasConfig(name: string): boolean;
}
