import React from 'react';
import { NavLink, Route ,withRouter } from 'react-router-dom';

import SignUp from './components/SignUp';
import Login from './components/Login';
import JokesList from './components/JokesList';


import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink to='/jokes'>Jokes</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <button onClick={this.logout}>Log Out</button>
        </nav>
        <main>
          <Route path="/jokes" component={JokesList} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </main>
      </div>
    );
  }

  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  }
}

export default withRouter(App);
