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
      <header>
        <h1>Allergy Diary</h1>
      </header>
      <main>
        <UpdateForm onSubmit={addEntryHandler}></UpdateForm>
        { entries && entries.length > 0 && (
          <>
            <PillTakenDialog entries={entries}></PillTakenDialog>
            <Entries entries={entries}></Entries>
          </>
        )}
      </main>
      <footer>
        <button onClick={clearDB}>Clear DB</button>
      </footer>
    </>
  );
}

export default App;
