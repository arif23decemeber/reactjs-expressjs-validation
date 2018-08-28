import React, {Component} from 'react';

import {connect} from 'react-redux';


import NavigatorBar from './NavigatorBar';
import SignupForm from './SignupForm';

import {userSignupRequest} from '../actions/signupAction';
import propTypes from 'prop-types';



class SignupPage extends Component {

  render() {
    const { userSignupRequest } = this.props;
    return(
      <div className="col-md-5 col-md-offset-3">
        <h1>Sign Up Page</h1>
        <SignupForm userSignupRequest={userSignupRequest} />
      </div>
    )
  }
}

SignupPage.propTypes = {
  userSignupRequest: propTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignupPage);
