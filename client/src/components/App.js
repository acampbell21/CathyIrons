import React, { Component } from 'react';
import NoMatch from './NoMatch';
import NavBar from './NavBar';
import Login from './Login';
import Register from './Register';
import Flash from './Flash';
import Home from './Home';
import Contact from './Contact';
import Reel from './Reel';
import Images from './Images';
import Edit from './Edit';
import Resume from './Resume';
import ProtectedRoute from './ProtectedRoute';
import AuthRoute from './AuthRoute';
import FetchUser from './FetchUser';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Flash />
        <FetchUser>
          <Switch>
            <Route exact path='/' component={Home} />
            <AuthRoute exact path='/login' component={Login} />
            <AuthRoute exact path='/register' component={Register} />
            <Route exact path='/' component={Contact} />
            <Route exact path='/Reel' component={Reel} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/Images' component={Images} />
            <Route exact path='/Edit' component={Edit} />
            <Route exact path='/Resume' component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </FetchUser>
      </div>
    );
  }
}

export default App;
