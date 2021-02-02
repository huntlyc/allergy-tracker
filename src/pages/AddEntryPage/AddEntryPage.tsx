import React, { FunctionComponent } from 'react';
import UpdateForm, { DiaryEntry } from '../../components/UpdateForm/UpdateForm';
import Page from '../../templates/Page/Page';

interface AddEntryPageProps{
    addEntryHandler: (entry: DiaryEntry) => void
}

const AddEntryPage:FunctionComponent<AddEntryPageProps> = ({addEntryHandler}) => {
    return (
        <Page title="Allergy Diary">
            <UpdateForm onSubmit={addEntryHandler}></UpdateForm>
        </Page>
    );
};


export default AddEntryPage;