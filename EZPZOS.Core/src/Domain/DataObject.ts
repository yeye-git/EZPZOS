import { v4 } from "uuid";
import { IDataObject } from "../Interface/IDataObject";
import { Base } from "./Base";
import { Event } from "./Event";

export class DataObject extends Base implements IDataObject {
	//#region Properties
	public Id: string;
	public CreatedTimestamp: Date | null;
	public UpdatedTimestamp: Date | null;
	public CreatedUserId: string | null;
	public UpdatedUserId: string | null;
	public IsDeleted: boolean;

	public get Events(): Event[] {
		if (this._Events === undefined || this._Events === null) {
			this._Events = [];
		}
		return this._Events;
	}
	//#endregion

	//#region constructor
	public constructor(logLevel: number | undefined | null = null, init?: Partial<IDataObject>) {
		super(logLevel);
		Object.assign(this, init);
		this.Id = v4();
	}
	//#endregion

	//#region Attributes
	private _Events: Event[];
	//#endregion

	//#region Implementation
	public AddEvent(event: Event): void {
		this._Events.push(event);
	}

	public AddEvents(events: Event[]): void {
		this._Events.concat(events);
	}

	public RemoveEvent(event: Event): void {
		let index = this._Events.map(event => event.Id).indexOf(event.Id, 0);
		if (index > -1) {
			this.Events.slice(index, 1);
		}
	}

	public RemoveEvents(events: Event[]): void {
		for (let event of events) {
			this.RemoveEvent(event);
		}
	}


	//#endregion
}
