import React from 'react';
import axios from 'axios';

class JokesList extends React.Component {
  constructor(){
    super();
    this.state = {
      jokes: []
    };
  }

  componentDidMount() {
    const endpoint = 'http://localhost:3300/api/jokes';

    axios
      .get(endpoint, {
        headers: {Authorization: localStorage.getItem('jwt')}
      })
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data.jokes });
      })
      .catch(error => 
        console.log(error));
  }

  render() {
    return(
      <div>
        <h2>Jokes</h2>
        {this.state.jokes.map(joke => {
          return(
            <div key={joke.id}>
              <p>{joke.joke}</p>
            </div>
          );
        })}
      </div>
    )
  }
}

export default JokesList;