import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login.js';
import Browse from './components/Browse/Browse.js';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';
import Add from './components/Add/Add.js';
import Cart from './components/Cart/Cart.js';
import Bookshelf from './components/Bookshelf/Bookshelf.js';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route component={Login} path="/" exact />
            <Route component={Browse} path="/browse" />
            <Route component={Details} path="/details" />
            <Route component={Edit} path="/edit" />
            <Route component={Add} path="/add" />
            <Route component={Cart} path="/cart" />
            <Route component={Bookshelf} path="/shelf" />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
