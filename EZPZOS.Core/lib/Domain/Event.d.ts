import { EventCode } from "../Enum/EventCode";
import { IEvent as IEvent } from "../Interface/IEvent";
import { DataObject } from "./DataObject";
export declare class Event extends DataObject implements IEvent {
    EventCode: EventCode;
    EventTime: Date;
    ParentId: string;
    ParentTable: string;
}
