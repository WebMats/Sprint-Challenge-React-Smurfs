import React, { Component } from 'react';
import axios from './axios-village';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios.get('').then(res => {
      this.setState({smurfs: res.data})
    }).catch(err => {
      console.error(err);
    })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Redirect from="/" to="/smurfs" exact />
          <Route path="/smurfs" component={Smurfs} />
          <Route path="/add-smurf" render={(props) => <SmurfForm 
                                                        {...props}
                                                         />}/>
        </Switch>
        <SmurfForm addedSmurf={(updatedSmurfs) => {this.setState({smurfs: updatedSmurfs})}} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
