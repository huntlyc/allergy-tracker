import React, { FunctionComponent } from 'react';
import { IEntry } from '../../lib/db/db';

interface PillTakenDialogProps{
    entries: IEntry[]
}


const PillTakenDialog:FunctionComponent<PillTakenDialogProps> = ({entries}) => {

    const dateToNumber = (date: Date) => parseInt(`${date.getFullYear()}${date.getMonth()}${date.getDate()}`);
    let today = dateToNumber(new Date());
    const pillTakenToday = (undefined !== entries.find(entry => { return dateToNumber(entry.date) === today && entry.pillTaken } ));

    return (
        <section>
            <h1>Pill Taken Today?</h1>
            <p>{pillTakenToday ? 'Yes' : 'No'}</p>
        </section>
    )
}

export default PillTakenDialog;