import React, { Component } from 'react';
import axios from '../axios-village';

import './SmurfForm.css';


class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const { name, age, height } = this.state;
    if (name === '' || age === '' || height === '') {
      return;
    }
    
    const newSmurf = {
      name: name,
      age: age,
      height: height
    }
    axios.post('', newSmurf).then(res => {
      this.props.addedSmurf(res.data)
      this.setState({ name: '', age: '', height: '' });
    }).catch(err => {
      console.error(err);
      this.setState({ name: '', age: '', height: '' });
    })
    
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <form className="SmurfForm" onSubmit={this.addSmurf} autoComplete="off">
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
          <button type="submit" className="AddSmurfButton">Add to the village</button>
        </form>
    );
  }
}

export default SmurfForm;
