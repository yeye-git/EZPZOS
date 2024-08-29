import { BaseRepository } from "./BaseRepository";
import { IRepository } from "./IRepository";
import { IDataObject } from "../Interface/IDataObject";
import { Event } from "../Domain/Event";
export declare class EventRepository extends BaseRepository implements IRepository {
    Update(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Insert(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    Delete(dataObject: IDataObject, callback: (result: boolean) => void): Promise<void>;
    GetEventsByParentId(id: string, callback: (results: boolean, events: Event[] | undefined | null) => void): Promise<void>;
    OnSaved(dataObject: IDataObject, userId: string, isUpdate: boolean, isDelete: boolean, callback: (result: boolean) => void): Promise<void>;
}
