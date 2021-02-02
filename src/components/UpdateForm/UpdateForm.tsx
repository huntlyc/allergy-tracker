import React, {FunctionComponent, useRef, useState} from 'react';
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

    const [mood, setMood] = useState<number>(1);
    const [pillTaken, setPillTaken] = useState<boolean>(false);
    const [additionalNotes, setAdditionalNotes] = useState<string>('');

    const moodRef = useRef<HTMLSelectElement>(null);
    const pillTakenRef = useRef<HTMLInputElement>(null);
    const notesRef = useRef<HTMLTextAreaElement>(null);



    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            mood,
            pillTaken,
            additionalNotes,
            date: new Date()
        });

        // clear form
        if(moodRef.current) moodRef.current.value = "1";
        if(pillTakenRef.current) pillTakenRef.current.checked = false;
        if(notesRef.current) notesRef.current.value = '';
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






    return (
        <form id="add-entry-form" name="update-form" onSubmit={handleFormSubmit}>

            <div className="card">
                <div className="card-body">

                    <div className="form-group">
                        <label htmlFor="mood">Mood:</label>
                        <select ref={moodRef} className="form-control" name="mood" id="mood" onChange={moodChangeHandler}>
                            <option value="1">Great</option>
                            <option value="2">OK</option>
                            <option value="3">Slightly Stuffy</option>
                            <option value="4">Congested</option>
                            <option value="5">Miserable</option>
                        </select>
                    </div>

                    <div className="form-group form-check">
                        <input ref={pillTakenRef} className="form-check-input" type="checkbox" name="pillTaken" id="pillTaken" onChange={pillTakenChangeHandler}></input>
                        <label className="form-check-label" htmlFor="pillTaken">Check if tablet taken today</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="additionalNotes">Additional Notes</label>
                        <textarea ref={notesRef} className="form-control" name="additionalNotes" id="additionalNotes" onChange={additionalNotesChangeHandler}></textarea>
                    </div>

                    <button className="btn btn-primary" type="submit">Add Entry</button>

                </div>
            </div>
        </form>
    )
};

export default UpdateForm;