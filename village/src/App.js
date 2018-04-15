import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  constructor() {
    super();
    this.state = {
      smurfs: []
    }
  }

  componentDidMount() {
    this.displaySmurfs();
  }

  displaySmurfs = () => {
    axios.get("http://localhost:3333/smurfs")
         .then(response => this.setState({smurfs: response.data}))
         .catch(error => console.log(error))
  }

  addSmurf = (smurf) => {
    axios.post("http://localhost:3333/smurfs", smurf)
         .then(this.displaySmurfs)
         .catch(error => console.log(error))
  }

  deleteSmurf = (id, index) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
         .then(this.displaySmurfs)
         .catch(error => console.log(error))
  }

  removeSmurfFromState = (index) => {
    const smurfs = this.state.smurfs;
    smurfs.splice(index, 1);
    this.setState({smurfs,});
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={(props) => (
            <Smurfs {...props} smurfs={this.state.smurfs} delete={this.deleteSmurf} />
          )} />

          <Route path="/add" render={(props) => (
            <SmurfForm {...props} cb={this.addSmurf} />
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
