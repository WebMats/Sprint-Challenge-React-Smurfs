import React from 'react';

export default React.createContext({
    smurfs: [],
    smurfToUpdate: null,
    deleteSmurf: (id) => {},
    initUpdate: (id) => {}
})