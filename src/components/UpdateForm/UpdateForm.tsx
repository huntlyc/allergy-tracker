import React, {FunctionComponent, useState} from 'react';
import './UpdateForm.css';

export enum MoodEnum{
    Great = 1,
    OK,
    Stuffy,
    Congested,
    Miserable
};

export type DiaryEntry = {
    mood: MoodEnum,
    pillTaken: boolean,
    additionalNotes: string
};

interface UpdateFormProps{
    onSubmit: (entry: DiaryEntry) => void
};

const UpdateForm:FunctionComponent<UpdateFormProps> = ({onSubmit}) => {

    const [mood, setMood] = useState<number>(1);
    const [pillTaken, setPillTaken] = useState<boolean>(false);
    const [additionalNotes, setAdditionalNotes] = useState<string>('');


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onSubmit({
            mood,
            pillTaken,
            additionalNotes
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


    return (
        <form name="update-form" onSubmit={handleFormSubmit}>

            <label htmlFor="mood">Mood:</label>
            <select name="mood" id="mood" onChange={moodChangeHandler}>
                <option value="1">Great</option>
                <option value="2">OK</option>
                <option value="3">Slightly Stuffy</option>
                <option value="4">Congested</option>
                <option value="5">Miserable</option>
            </select>

            <label htmlFor="pillTaken">Allergy Tablet Taken?</label>
            <input type="checkbox" name="pillTaken" id="pillTaken" onChange={pillTakenChangeHandler}></input>

            <label htmlFor="additionalNotes">Additional Notes</label>
            <textarea name="additionalNotes" id="additionalNotes" onChange={additionalNotesChangeHandler}></textarea>

            <button type="submit">Add Entry</button>

        </form>
    )
};

export default UpdateForm;