import React, { Fragment, useEffect } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auths/Register';
import Login from './components/auths/Login';
import Alerts from './components/layout/Alerts';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import Createprofile from './components/profile-form/Createprofile';
import Editprofile from './components/profile-form/Editprofile';
import upload from './components/Posts/upload';
import View from './components/dashboard/view';
import Edit from './components/profile-form/Editupload';
import Allblogs from './components/dashboard/Allblog';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { loadUser } from './actions/auth';

import './App.css';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
  
          <Navbar />
          <Route exact path='/' component={Landing} />
     

          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <div >
            <Alerts />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/Allblogs' component={Allblogs} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute
                exact
                path='/Createprofile'
                component={Createprofile}
              />
         
              <PrivateRoute
                exact
                path='/edit-profile'
                component={Editprofile}
              />
              <PrivateRoute exact path='/upload' component={upload} />
              <Route exact path='/view/:id' component={View} />
              <Route exact path='/edit/:id' component={Edit} />
            </Switch>
          </div>
        
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
