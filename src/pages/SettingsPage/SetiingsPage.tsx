import React, { FunctionComponent } from 'react';
import Page from '../../templates/Page/Page';

interface SettingsPageProps{
    clearDB: () => void
}

const SettingsPage:FunctionComponent<SettingsPageProps> = ({clearDB}) => {
    return (
        <Page title="Allergy Diary">
            <div className="alert alert-danger">
            <h4 className="alert-heading"><del>Highway to the</del> Dagner Zone</h4>
            <p>You can clear your your entries by clicking the button below.  You can't get them back through.</p>
            <hr/>
            <button className="btn btn-sm btn-outline-danger" onClick={clearDB}>Clear DB</button>
            </div>
        </Page>
    );
};


export default SettingsPage;