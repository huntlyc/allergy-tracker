import React from 'react';
import './App.css';
import UpdateForm from './components/UpdateForm/UpdateForm';

function App() {
  return (
    <>
      <header>
        <h1>Allergy Diary</h1>
      </header>
      <main>
        <UpdateForm></UpdateForm>
      </main>
    </>
  );
}

export default App;
