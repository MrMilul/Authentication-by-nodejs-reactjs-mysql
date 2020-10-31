import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Header from './components/layout/Header'
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home'; 
import Login from './components/pages/Login'
import Register from './components/pages/Register'

class App extends Component{
  constructor(){
    super();
    this.state = {

    }
  }
  render(){
    return(
      <>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
      </Switch>
      </>
    ) 
  
  }
}

export default App;
