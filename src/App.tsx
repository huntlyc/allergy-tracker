import React from 'react';
import './App.css';
import UpdateForm, { DiaryEntry } from './components/UpdateForm/UpdateForm';

function App() {

  const addEntryHandler = (entry: DiaryEntry) => {
    console.log(entry);
  };

  return (
    <>
      <header>
        <h1>Allergy Diary</h1>
      </header>
      <main>
        <UpdateForm onSubmit={addEntryHandler}></UpdateForm>
      </main>
    </>
  );
}

export default App;
