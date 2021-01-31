import React, { FunctionComponent } from 'react';
import { IEntry } from '../../lib/db/db';

interface PillTakenDialogProps{
    entries: IEntry[]
}


const PillTakenDialog:FunctionComponent<PillTakenDialogProps> = ({entries}) => {

    const dateToNumber = (date: Date) => parseInt(`${date.getFullYear()}${date.getMonth()}${date.getDate()}`);
    let today = dateToNumber(new Date());
    const pillTakenToday = (undefined !== entries.find(entry => { return dateToNumber(entry.date) === today && entry.pillTaken } ));
    const badgeClass = `badge badge-${pillTakenToday ? 'warning': 'secondary'}`;

    return (
        <section className="card mb-2">
            <div className="card-body">
                <h5 className="mb-0 card-title">Pill Taken Today? <span className={badgeClass}>{pillTakenToday ? 'Yes' : 'No'}</span></h5>
            </div>
        </section>
    )
}

export default PillTakenDialog;