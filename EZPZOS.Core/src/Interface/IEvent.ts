import { EventCode } from "../Enum/EventCode";

export interface IEvent {
	EventCode: EventCode;
	EventTime:Date;
	ParentId:string;
	ParentTable:string;
}
