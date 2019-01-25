import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VillageContext from '../context/village-context';
import Smurf from './Smurf';

import './Smurfs.css';

class Smurfs extends Component {

  static contextType = VillageContext;

  render() {
    return (
      <div className="Smurfs">
        <h1 style={{margin: "2rem 0", fontSize: "3rem"}}>Smurf Village</h1>
        <ul>
          {this.context.smurfs.map(({name, id, height, age}) => {
            return (
              <Smurf
                history={this.props.history}
                name={name}
                id={id}
                age={age}
                height={height}
                key={id}
              />
            );
          })}
        </ul>
        <Link className="NavToAddSmurfButton" to="/add-smurf">Add Smurf</Link>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
