import React from 'react';

import './Smurf.css';

const Smurf = ({history, ...props}) => {
  return (
    <div className="Smurf" onClick={() => {history.push(`/smurf/${props.id}`)}}>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

