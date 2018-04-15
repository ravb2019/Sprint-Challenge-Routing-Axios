import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf, index) => {
            return (
              <div key={index}>
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                  key={smurf.id}
                />
                <form onSubmit={() => this.props.delete(smurf.id, index)}>
                  <button type="submit">Remove smurf from village</button>
                </form>
              </div>
            );
          })}
        </ul>
        <Link to={'/add'}> <button>Add Smurf</button> </Link>
      </div>
    );
  }
}

export default Smurfs;
