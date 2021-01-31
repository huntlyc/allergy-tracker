import React, { useState, useEffect } from 'react';
import './App.css';
import Entries from './components/Entries/Entries';
import PillTakenDialog from './components/PillTakenDialog/PillTakenDialog';
import UpdateForm, { DiaryEntry } from './components/UpdateForm/UpdateForm';
import {DataStore, IEntry} from './lib/db/db';

const db: DataStore = new DataStore();
export enum MoodEnum{
    Great = 1,
    OK,
    Stuffy,
    Congested,
    Miserable
};


function App() {

  const [entries, setEntries] = useState<IEntry[]>([]);

  const addEntryHandler = (entry: DiaryEntry) => {
    db.entries.add(entry).then((id) => {
      let newEntries = entries.slice(0);
      newEntries.unshift(Object.assign({}, entry, {id}));
      setEntries(newEntries);
    });
  };

  useEffect(() => {
    let isReadingFromStore = true;
    db.table('entries')
      .toArray()
      .then((entries: IEntry[]) => {
        if(isReadingFromStore){
          setEntries(entries.reverse()); // newest first
        }
      });

      return () => { isReadingFromStore = false };
  },[]);

  const clearDB = () => {
    db.entries.clear().then(() => { setEntries([]) });
  }
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col">
              <h1>Allergy Diary</h1>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
        { entries && entries.length > 0 && (
          <>
            <PillTakenDialog entries={entries}></PillTakenDialog>
            <Entries entries={entries}></Entries>
          </>
        )}
        <UpdateForm onSubmit={addEntryHandler}></UpdateForm>
        </div>
        </div>
      </main>
      <footer className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="alert alert-danger">
              <h4 className="alert-heading"><del>Highway to the</del> Dagner Zone</h4>
              <p>You can clear your your entries by clicking the button below.  You can't get them back through.</p>
              <hr/>
              <button className="btn btn-sm btn-outline-danger" onClick={clearDB}>Clear DB</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
