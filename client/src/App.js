import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import ProjectState from './context/project/ProjectState';

function App() {
  return (
    <ProjectState>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </ProjectState>
  );
}

export default App;
