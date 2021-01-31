import React, {EventHandler, FunctionComponent, useState} from 'react';
import { MoodEnum } from '../../App';
import './UpdateForm.css';


export type DiaryEntry = {
    mood: MoodEnum,
    pillTaken: boolean,
    additionalNotes: string
    date: Date
};

interface UpdateFormProps{
    onSubmit: (entry: DiaryEntry) => void
};

const UpdateForm:FunctionComponent<UpdateFormProps> = ({onSubmit}) => {

    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [mood, setMood] = useState<number>(1);
    const [pillTaken, setPillTaken] = useState<boolean>(false);
    const [additionalNotes, setAdditionalNotes] = useState<string>('');


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            mood,
            pillTaken,
            additionalNotes,
            date: new Date()
        });
    };

    const moodChangeHandler = (e: React.FormEvent) => {
        const selectedVal = (e.target as HTMLInputElement).value;

        const mood:MoodEnum = parseInt(selectedVal);

        setMood(mood);
    };


    const pillTakenChangeHandler = (e: React.FormEvent) => {
        setPillTaken((e.target as HTMLInputElement).checked);
    };


    const additionalNotesChangeHandler = (e: React.FormEvent) => {
       setAdditionalNotes((e.target as HTMLInputElement).value);
    };


    const toggleForm = () => {
        setCollapsed(!collapsed);
    }


    let collapseClass = `collapse multi-collapse ${collapsed ? '' : 'show'}`;
    let toggleBtnText = collapsed ? 'Add new entry' : 'Hide form';
    let toggleBtnClass = `btn btn-${collapsed ? 'primary' : 'secondary'}`;

    return (
        <>
            <a className={toggleBtnClass} data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" onClick={toggleForm}>{toggleBtnText}</a>
            <form className={collapseClass} id="multiCollapseExample1" name="update-form" onSubmit={handleFormSubmit}>

                <div className="card">
                    <div className="card-body">

                        <div className="form-group">
                            <label htmlFor="mood">Mood:</label>
                            <select className="form-control" name="mood" id="mood" onChange={moodChangeHandler}>
                                <option value="1">Great</option>
                                <option value="2">OK</option>
                                <option value="3">Slightly Stuffy</option>
                                <option value="4">Congested</option>
                                <option value="5">Miserable</option>
                            </select>
                        </div>

                        <div className="form-group form-check">
                            <input className="form-check-input" type="checkbox" name="pillTaken" id="pillTaken" onChange={pillTakenChangeHandler}></input>
                            <label className="form-check-label" htmlFor="pillTaken">Check if tablet taken today</label>
                        </div>

                        <div className="form-group">
                            <label htmlFor="additionalNotes">Additional Notes</label>
                            <textarea className="form-control" name="additionalNotes" id="additionalNotes" onChange={additionalNotesChangeHandler}></textarea>
                        </div>

                        <button className="btn btn-primary" type="submit">Add Entry</button>

                    </div>
                </div>
            </form>
        </>
    )
};

export default UpdateForm;