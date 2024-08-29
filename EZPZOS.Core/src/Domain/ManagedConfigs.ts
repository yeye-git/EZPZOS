import { IConfig } from "../Interface/IConfig";
import { IManagedConfigs } from "../Interface/IManagedConfigs";

export class ManagedConfigs extends Array<IConfig> implements IManagedConfigs {
	//#region Implementation
	AddConfig(config: IConfig): void {
		this.push(config);
	}
	RemoveConfig(config: IConfig): void {
		this.splice(this.indexOf(config), 1);
	}
	GetConfigValueByName(name: string): IConfig | undefined {
		return this.find(config => config.Name == name);
	}
	HasConfig(name: string): boolean {
		return this.some(config => config.Name == name);
	}
	//#endregion
}
