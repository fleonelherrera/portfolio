import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <Routes>
        <Route exact path='/' element={<App />}/>
        <Route exact path='/aboutme' element={<AboutMe />}/>
        <Route exact path='/projects' element={<Projects />}/>
      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);
