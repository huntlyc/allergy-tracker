import Dexie from 'dexie';
import { DiaryEntry } from '../../components/UpdateForm/UpdateForm';

export interface IEntry extends DiaryEntry{
    id?: number,
}

export class DataStore extends Dexie {
    entries!: Dexie.Table<IEntry, number>; // number = type of the primkey

    constructor () {
        super("AllergyDatabase");
        this.version(1).stores({
            entries: '++id, mood, pillTaken, additionalNotes',
        });
        this.entries = this.table("entries");
    }
}
