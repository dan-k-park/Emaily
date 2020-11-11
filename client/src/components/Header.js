import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import Payments from './Payments'

class Header extends Component {
  renderContent() {
    switch(this.props.auth) {
      case null:
        // don't show anything when the promise hasn't resolved
        return;
      case false:
        return (
          <li><a href='/auth/google'>Login with Google</a></li>
        )
      default:
        return [
          <li key='1'><Payments /></li>,
          <li key='3' style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits} </li>,
          <li key='2'><a href='/api/logout'>Logout</a></li>
        ];
    }
  }

  render() {
    console.log(this.props)
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link 
            to={this.props.auth ? '/surveys' : '/'} 
            className='left brand-logo'
          >
            Emaily
          </Link>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    )
  }
}

// argument would be state, but we're just interested in the auth key in state
// see reducers/index.js
function mapStateToProps({ auth }) {
  return { auth } // identical key value pair { auth: auth } = { auth }
}

export default connect(mapStateToProps)(Header);