import React, { FunctionComponent } from 'react';
import { MoodEnum } from '../../App';
import { IEntry } from '../../lib/db/db';
import './Entries.css';


interface EntriesProps{
    entries: IEntry[]
}


const Entries:FunctionComponent<EntriesProps> = ({entries}) => {

    if(entries.length === 0) return <p>No Entries Yet</p>;

    return (
        <ul className="mb-2 mt-2">
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


    const convertDateToString = (date: Date) => {
        let dateString = '';

        let dayString = date.getDate().toString().padStart(2, '0');
        let monthString = (date.getMonth() + 1).toString().padStart(2, '0');
        let yearString = date.getFullYear();

        let hourString = date.getHours().toString().padStart(2,'0');
        let minuteString = date.getMinutes().toString().padStart(2,'0');

        dateString = `${dayString}/${monthString}/${yearString} @ ${hourString}:${minuteString}`;

        return dateString
    }

    return (
        <li className="card">
            <div className="card-body">

                <h5 className="card-title">Mood: {convertMoodToString(entry.mood)}</h5>
                <h6 className="card-subtitle text-muted mb-2">Logged: <time dateTime={entry.date.toISOString()}>{convertDateToString(entry.date)}</time></h6>
                <p className="card-text">Pill Taken: <strong>{entry.pillTaken ? "Yes" : "No"}</strong></p>
            {entry.additionalNotes !== '' && (
                <>
                    <h6 className="card-subtitle">Notes</h6>
                    <p className="card-text">{entry.additionalNotes}</p>
                </>
            )}
            </div>
        </li>
    )
}


export default Entries;