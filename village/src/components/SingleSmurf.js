import React from 'react';
import { withRouter } from 'react-router-dom';
import VillageContext from '../context/village-context';
import Smurf from './Smurf';

import './SingleSmurf.css';


const singleSmurf = (props) => {
    const {id} = props.match.params
    return (
        <VillageContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <Smurf {...context.smurfs.find(smurf => smurf.id === +id)} />
                        <button onClick={() => context.deleteSmurf(+id, () => props.history.push("/smurfs"))}>Delete</button> 
                        <button onClick={() => context.initUpdate(id)}>update</button>
                    </div>
                )
            }}
        </VillageContext.Consumer>
    )
}

export default withRouter(singleSmurf);

