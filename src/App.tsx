import React, { useState, useEffect } from 'react';
import './App.css';
import { DiaryEntry } from './components/UpdateForm/UpdateForm';
import {DataStore, IEntry} from './lib/db/db';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import SettingsPage from './pages/SettingsPage/SetiingsPage';
import AddEntryPage from './pages/AddEntryPage/AddEntryPage';

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
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage entries={entries} />
        </Route>
        <Route exact path="/new">
          <AddEntryPage addEntryHandler={addEntryHandler} />
        </Route>
        <Route path="/settings">
          <SettingsPage clearDB={clearDB}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
