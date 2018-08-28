import React, {Component} from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route // for later
} from 'react-router-dom'

import NavigatorBar from './NavigatorBar';
import Greetings from './Greetings';
import SignupPage from './SignupPage';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="container" style={{paddingTop:20}}>
          <NavigatorBar/>
          <Route exact path='/' component={Greetings} />
          <Route path='/signup' component={SignupPage} />
        </div>
      </Router>
    )
  }

}
export default App;
