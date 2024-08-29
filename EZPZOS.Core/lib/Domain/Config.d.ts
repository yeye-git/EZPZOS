import { IConfig } from "../Interface/IConfig";
import { DataObject } from "./DataObject";
export declare class Config extends DataObject implements IConfig {
    Name: string;
    Value: string;
    Description: string;
}
