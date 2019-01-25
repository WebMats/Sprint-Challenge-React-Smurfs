import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../axios-village';
import VillageContext from '../context/village-context';

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

  static contextType = VillageContext;

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
    }).catch(err => {
      console.error(err);
    })
    this.props.history.push("/smurfs")
  }

  updateSmurf = (e) => {
    e.preventDefault();
    const { name, age, height } = this.state;
    const newSmurf = {
      name: name,
      age: age,
      height: height
    }
    let newTrimmedSmurf = {};
    Object.keys(newSmurf).forEach(key => {
      if (newSmurf[key] !== '') {
        newTrimmedSmurf[key] = newSmurf[key];
      }
    })
    axios.put(`/${this.context.smurfToUpdate}`, newTrimmedSmurf).then(res => {
      this.props.updated(res.data);
      this.props.history.replace("/smurfs");
    }).catch(err => {
      console.error(err);
    })
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const isUpdateIdSet = this.context.smurfToUpdate !== null;
    return (
        <form className="SmurfForm" onSubmit={isUpdateIdSet ? this.updateSmurf : this.addSmurf} autoComplete="off">
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
          <button type="submit" className="AddSmurfButton">{isUpdateIdSet ? "Update Smurf" : "Add to the village"}</button>
          {!isUpdateIdSet && <Link to="/smurfs" className="CancelLink" >Cancel</Link>}
        </form>
    );
  }
}

export default SmurfForm;
