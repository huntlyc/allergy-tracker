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
        <section className="card mb-2">
            <div className="card-body">
                <h5 className="card-title">Pill Taken Today?</h5>
                <p>{pillTakenToday ? 'Yes' : 'No'}</p>
            </div>
        </section>
    )
}

export default PillTakenDialog;