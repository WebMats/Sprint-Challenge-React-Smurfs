import React, { Component } from 'react';
import axios from './axios-village';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navbar from './components/Navbar';
import SingleSmurf from './components/SingleSmurf';
import VillageContext from './context/village-context';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurfToUpdate: null
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

  deleteSmurfHandler = (id, cb) => {
    axios.delete(`/${id}`).then(res => {
      this.setState({smurfs: res.data})
      cb();
    }).catch(err => {
      console.error(err);
    })
  }
  initUpdateHandler = (id) => {
    this.setState(prevState => {
      if (prevState.smurfToUpdate === +id) {
        return {smurfToUpdate: null}
      }
      return {smurfToUpdate: +id}
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar>
        <VillageContext.Provider value={{smurfs: this.state.smurfs, smurfToUpdate: this.state.smurfToUpdate, 
                                  deleteSmurf: this.deleteSmurfHandler, initUpdate: this.initUpdateHandler}}>
          <Switch>
            <Redirect from="/" to="/smurfs" exact />
            <Route path="/smurfs" component={Smurfs} />
            <Route path="/add-smurf" render={(props) => <SmurfForm 
                                                          {...props}
                                                          addedSmurf={(updatedSmurfs) => {this.setState({smurfs: updatedSmurfs})}}
                                                           />}/>
            <Route path="/smurf/:id" component={SingleSmurf} />
            <Redirect to="/smurfs" />
          </Switch>
          {this.state.smurfToUpdate !== null && <SmurfForm history={this.props.history} updated={(updatedSmurfs) => {this.setState({smurfs: updatedSmurfs, smurfToUpdate: null})}} />}
        </VillageContext.Provider>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(App);
