import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomePage from './pages/HomaPage';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <div className='app'>
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/">
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
