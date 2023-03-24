import React from 'react';
import { TimeTracker } from './components/time-tracker';

function App() {
  return (
    <>
      <header></header>
      <nav></nav>
      <main className=" bg-very-dark-blue grid w-full h-full ">
        <TimeTracker />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
