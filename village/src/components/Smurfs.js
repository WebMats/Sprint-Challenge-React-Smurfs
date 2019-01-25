import React, { Component } from 'react';

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
                name={name}
                id={id}
                age={age}
                height={height}
                key={id}
              />
            );
          })}
        </ul>
        <button type="button" className={"NavToAddSmurfButton"} onClick={() => this.props.history.push("/add-smurf")}>Add Smurf</button>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
