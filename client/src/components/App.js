import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header'
import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'


class App extends Component {

  componentDidMount() {
    // see export statement to see why fetchUser is available as props
    this.props.fetchUser()
  }

  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Header />
          <Route exact path='/' component={Landing} />
          <Route exact path='/surveys' component={Dashboard} />
          <Route path='/surveys/new' component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
};

// First arg is reserved for mapStateToProps which won't be used here
// Second arg is all the action creators we want to wire up
// these will be assigned to app as props
export default connect(null, actions)(App);