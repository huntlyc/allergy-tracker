import React, { FunctionComponent } from 'react';
import { IEntry } from '../../lib/db/db';
import Entries from '../../components/Entries/Entries';
import Page from '../../templates/Page/Page';
import PillTakenDialog from '../../components/PillTakenDialog/PillTakenDialog';
import {Link} from 'react-router-dom'

interface HomePageProps{
    entries: IEntry[]
}

const HomePage:FunctionComponent<HomePageProps> = ({entries}) => {
    return (
        <Page title="Allergy Diary">
            {entries && (
                <>
                    <PillTakenDialog entries={entries}></PillTakenDialog>
                    <Entries entries={entries}></Entries>
                </>
            )}
            {!entries && <p>No Entries Yet</p>}
            <Link to="/new" className="btn btn-primary">Add Entry</Link>
        </Page>
    );
};


export default HomePage;