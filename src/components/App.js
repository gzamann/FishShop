import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

import './../App.css';

class App extends Component {
  render() {
    return (
      <div className="catchotd">
        <div className="menu">
        <Header />
        <Order />
        <Inventory />
        </div>
      </div>
    );
  }
}

export default App;