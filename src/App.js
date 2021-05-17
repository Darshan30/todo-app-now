import React, { Component } from 'react';


import Login from './Components/Login/Login';
import './Components/Todo/TodoApp'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';

import TodoApp from './Components/Todo/TodoApp';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';




import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './Components/Logout/Logout';
import AuthenticatedRouter from './Components/Login/AuthenticatedRouter';
import TodoComponent from './Components/Todo/TodoComponent';


class App extends Component {
  render() {
    return (
      <div style={{height:"100vh",minHeight:"100vh", backgroundColor:"#343a40"}}>

        <Router>
          <>
            <Header/>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/login" component={Login} />
              <AuthenticatedRouter path="/welcome/:name" component={WelcomePage} />

              <AuthenticatedRouter path="/todos/:id" component={TodoComponent} />
              <AuthenticatedRouter path="/todos" component={TodoApp} />
              <AuthenticatedRouter path="/logout" component={Logout} />

            </Switch>
            <Footer />
          </>
        </Router>

      

      </div>



    );
  }
}
export default App;


