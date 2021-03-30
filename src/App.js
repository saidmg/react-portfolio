import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import About from './pages/About';
import HomePage from './pages/HomePage';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router >
      <div className='backgrnd'style={{minHeight: '100vh'}}>
        <NavBar/>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
