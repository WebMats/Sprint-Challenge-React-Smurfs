import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';


const navbar = (props) => (
    <React.Fragment>
    <header className="NavContainer">
        <nav>
            <ul>
                <li><NavLink to="/smurfs">Smurfs</NavLink></li>
                <li><NavLink to="/add-smurf">Add Smurf</NavLink></li>
            </ul>
        </nav>
    </header>
    {props.children}
    </React.Fragment>
)

export default navbar;