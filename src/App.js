import React, {useState, useEffect, Component} from 'react'; 
import './App.css';
import Nav from './Nav';
import Name from './Name';
import Verse from './Verse';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <div>
          <Nav />
      <Routes>
          <Route path="/" element={<Name />} />
          <Route path="/verse" element={<Verse />} />
      </Routes>
        </div>
    </Router>
  );
}

export default App;