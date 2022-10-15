import React from 'react';

import NavBar from './components/NavBar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">

      <NavBar />

      <main role='main'>
        <MainSection />
      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
