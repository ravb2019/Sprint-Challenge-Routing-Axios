import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      redirect: false
    };

  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    this.props.cb({name: this.state.name, age: this.state.age, height: this.state.height});
    this.setState({
      name: '',
      age: '',
      height: '',
      redirect: true
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.state.redirect) {
      return (
        <div className="SmurfForm">
          <form onSubmit={this.addSmurf}>
            <input
              onChange={this.handleInputChange}
              placeholder="name"
              value={this.state.name}
              name="name"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="age"
              value={this.state.age}
              name="age"
            />
            <input
              onChange={this.handleInputChange}
              placeholder="height"
              value={this.state.height}
              name="height"
            />
            <button type="submit">Add to the village</button>
          </form>
          <Link to={'/'}>Back to Smurf Village</Link>
        </div>
      );
    } else {
      return (
          <Redirect to="/" />
      )
    }
  }
}

export default SmurfForm;
