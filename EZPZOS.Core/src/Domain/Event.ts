import { EventCode } from "../Enum/EventCode";
import { IEvent as IEvent } from "../Interface/IEvent";
import { DataObject } from "./DataObject";

export class Event extends DataObject implements IEvent {
	//#region Properties
	EventCode: EventCode;
	EventTime: Date;
	ParentId: string;
	ParentTable: string;
	//#endregion
}
