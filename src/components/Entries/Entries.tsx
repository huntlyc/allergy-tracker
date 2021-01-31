import React, { FunctionComponent } from 'react';
import { MoodEnum } from '../../App';
import { IEntry } from '../../lib/db/db';


interface EntriesProps{
    entries: IEntry[]
}


const Entries:FunctionComponent<EntriesProps> = ({entries}) => {
    return (
        <ul>
            {entries.map((entry: IEntry) => {
                 return <Entry key={entry.id} entry={entry}></Entry>
            })}
        </ul>
    )
}


interface EntryProps {
    entry: IEntry
}


const Entry:FunctionComponent<EntryProps> = ({entry}) => {

    const convertMoodToString = (mood:MoodEnum) => {
        let moodAsString = '';
        switch(mood){
            case 1: moodAsString = "Great"; break;
            case 2: moodAsString = "OK"; break;
            case 3: moodAsString = "Stuffy"; break;
            case 4: moodAsString = "Congested"; break;
            case 5: moodAsString = "Miserable"; break;
        }
        return moodAsString;
    };

    const convertPillTakenToString = (taken:boolean) => (taken ? "Taken" : "Not Taken");

    const convertDateToString = (date: Date) => {
        let dateString = '';

        let dayString = date.getDate().toString().padStart(2, '0');
        let monthString = (date.getMonth() + 1).toString().padStart(2, '0');
        let yearString = date.getFullYear();

        dateString = `${dayString}/${monthString}/${yearString}`;

        return dateString
    }

    console.log(entry);
    return (
        <li>
            <dl>
                <dt>Date Recorded</dt>
                <dd>{convertDateToString(entry.date)}</dd>
            </dl>
            <dl>
                <dt>Mood</dt>
                <dd>{convertMoodToString(entry.mood)}</dd>
            </dl>
            <dl>
                <dt>Pill Taken</dt>
                <dd>{convertPillTakenToString(entry.pillTaken)}</dd>
            </dl>
            {entry.additionalNotes !== '' && (
                <dl>
                    <dt>Notes</dt>
                    <dd>{entry.additionalNotes}</dd>
                </dl>
            )}
        </li>
    )
}


export default Entries;