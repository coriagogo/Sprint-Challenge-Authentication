import React from 'react';
import { NavLink, Route ,withRouter } from 'react-router-dom';

import SignUp from './components/SignUp';


import './App.css';


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/jokes'>Jokes</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
      </nav>
      <main>
        <Route path="/signup" component={SignUp} />
      </main>
    </div>
  );
}

export default withRouter(App);
