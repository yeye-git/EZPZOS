import { Event } from "../Domain/Event";

export interface IDataObject {
	//#region Implementation
	Id: string;
	CreatedTimestamp: Date | null;
	UpdatedTimestamp: Date | null;
	CreatedUserId: string | null;
	UpdatedUserId: string | null;
	IsDeleted: boolean;
	get Events(): Event[];
	//#endregion

	//#region Implementation
	/**
	 * Add a single ObjectEvent to {@link Events}
	 * @param event Refer to {@link Event}
	 */
	AddEvent(event: Event): void;
	/**
	 * Add an arry of ObjectEvent to {@link Events}
	 * @param events Refer to {@link Event}
	 */
	AddEvents(events: Event[]): void;
	/**
	 * Remove a single ObjectEvent from {@link Events}
	 * @param event Refer to {@link Event}
	 */
	RemoveEvent(event: Event): void;
	/**
	 * Remove an array of ObjectEvent to {@link Events}
	 * @param events Refer to {@link Event}
	 */
	RemoveEvents(events: Event[]): void;

	//#endregion
}
