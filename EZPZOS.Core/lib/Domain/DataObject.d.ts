import { IDataObject } from "../Interface/IDataObject";
import { Base } from "./Base";
import { Event } from "./Event";
export declare class DataObject extends Base implements IDataObject {
    Id: string;
    CreatedTimestamp: Date | null;
    UpdatedTimestamp: Date | null;
    CreatedUserId: string | null;
    UpdatedUserId: string | null;
    IsDeleted: boolean;
    get Events(): Event[];
    constructor(logLevel?: number | undefined | null, init?: Partial<IDataObject>);
    private _Events;
    AddEvent(event: Event): void;
    AddEvents(events: Event[]): void;
    RemoveEvent(event: Event): void;
    RemoveEvents(events: Event[]): void;
}
