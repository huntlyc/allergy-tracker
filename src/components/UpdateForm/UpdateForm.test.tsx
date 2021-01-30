
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateForm from './UpdateForm';

test('renders', () => {
    render(<UpdateForm onSubmit={jest.fn()} />);

    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
});


test('it has the right fields', () => {
    render(<UpdateForm  onSubmit={jest.fn()}/>);

    const mood = screen.getByLabelText(/Mood/i);
    expect(mood).toBeInTheDocument();

    const pillTaken = screen.getByLabelText(/Tablet Taken/i);
    expect(pillTaken).toBeInTheDocument();

    const additionalNotes = screen.getByLabelText(/Notes/i);
    expect(additionalNotes).toBeInTheDocument();

    const addEntry = screen.getByRole('button', {name: /Add Entry/i});
    expect(addEntry).toBeInTheDocument();
});


test('it handles form submit', () => {
    const handleSubmit = jest.fn();
    render(<UpdateForm onSubmit={handleSubmit}/>);

    const addEntry = screen.getByRole('button', {name: /Add Entry/i});

    fireEvent.click(addEntry);
    expect(handleSubmit).toHaveBeenCalled();
});


test('it submits a DiaryEntry', () => {
    const handleSubmit = jest.fn();

    render(<UpdateForm onSubmit={handleSubmit}/>);

    const addEntry = screen.getByRole('button', {name: /Add Entry/i});


    fireEvent.click(addEntry);
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit.mock.calls[0]).toMatchObject([{"mood":1,"pillTaken":false,"additionalNotes":""}]);
});


test('it submits a user entry correctly', () => {
    const mood = 4; //"Congested";
    const pillTaken = true;
    const additionalNotes = "Smelled all the roses";

    const handleSubmit = jest.fn();

    render(<UpdateForm onSubmit={handleSubmit}/>);

    const moodField = screen.getByLabelText(/Mood/i);
    const pillTakenField = screen.getByLabelText(/Tablet Taken/i);
    const additionalNotesField = screen.getByLabelText(/Notes/i);
    const addEntry = screen.getByRole('button', {name: /Add Entry/i});


    fireEvent.change(moodField, {target: {value: mood.toString()}});
    fireEvent.click(pillTakenField);
    fireEvent.change(additionalNotesField, {target: {value: additionalNotes}});


    fireEvent.click(addEntry);
    expect(handleSubmit).toHaveBeenCalled();
    expect(handleSubmit.mock.calls[0]).toMatchObject([{"mood":mood,"pillTaken":pillTaken,"additionalNotes":additionalNotes}]);
});