import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Pokemons from './pages/Pokemons';
import LandingPage from './pages/LandingPage';
import CreatePokemonPage from './pages/CreatePokemonPage';
import Details from './pages/Details';


function App() {
  return (
    <div className='app'>
      <Router>
        {/* <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
        </ul> */}
        <Switch>
          <Route path="/"> <LandingPage /> </Route>
          <Route path="/home"> < Pokemons /> </Route>
          <Route path="/create"> <CreatePokemonPage /> </Route>
          <Route path="/pokemons/:id"> <Details /> </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
