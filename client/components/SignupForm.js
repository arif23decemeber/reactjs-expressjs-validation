import React, {Component} from 'react';

import propTypes from 'prop-types';
import map from 'lodash/map';
import classnames from 'classnames';

import validateInput from '../../server/shared/validation/signup';

import { BrowserRouter } from 'react-router-dom';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
    };
    this.onChange = this.onChange.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  isValid() {
    const {errors, isValid} = validateInput(this.state);

    if(!isValid) {
      this.setState({errors});
    }
    return isValid;
  }

  changeSubmit(e) {
    e.preventDefault();

    if(this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.userSignupRequest(this.state).then(
        () => {
          this.context.router.history.push('/')
        },
        (err) => this.setState({ errors: err.response.data, isLoading: false })
      );
    }


  }

  render() {
    const { errors } = this.state;
    return(
      <div>
        <div className={classnames("form-group", { 'has-error':errors.username})}>
          <label className="control-label">Username</label>
          <input value={this.state.username} onChange={this.onChange} className="form-control" type="text" name="username" />
          {errors.username && <span>{errors.username}</span>}
      </div>

        <div className={classnames("form-group", { 'has-error':errors.password})}>
          <label className="control-label">Password</label>
          <input value={this.state.password} onChange={this.onChange} className="form-control" type="text" name="password" />
          {errors.password && <span>{errors.password}</span>}
      </div>
        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-success" onClick={this.changeSubmit}>Submit</button>
        </div>
      </div>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: propTypes.func.isRequired
}

SignupForm.contextTypes = {
  router: propTypes.object.isRequired
}

export default SignupForm;
