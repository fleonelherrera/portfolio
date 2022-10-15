import React from 'react';

import MainSection from './components/MainSection';
import NavBar from './components/NavBar';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <main role='main'>
        <MainSection />
      </main>



    </div>
  );
}

export default App;
